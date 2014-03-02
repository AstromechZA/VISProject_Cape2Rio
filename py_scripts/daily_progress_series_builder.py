import os
import re
import json
import math

def haversine(lon1, lat1, lon2, lat2):
    """
    Calculate the great circle distance between two points
    on the earth (specified in decimal degrees)
    """
    # convert decimal degrees to radians
    lon1, lat1, lon2, lat2 = map(math.radians, [lon1, lat1, lon2, lat2])

    # haversine formula
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = math.sin(dlat/2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2)**2
    c = 2 * math.asin(math.sqrt(a))

    # 6367 km is the radius of the Earth
    km = 6367 * c
    return km

def distance_from_rio(p):
    return haversine(p[1], p[0], -43.14333333333333, -22.933333333333334)

thisdir = os.path.abspath(os.path.dirname(__file__))
datadir = os.path.join(thisdir, '..', 'data')
inputdir = os.path.join(datadir, 'dailies', 'perboat')

perboatfiles = filter(lambda f: os.path.isfile(os.path.join(inputdir, f)), os.listdir(inputdir))

tccs = json.loads(open(os.path.join(datadir, 'tcc.json')).read())

days = 28
boatcount = 35

day_seriess = {}
for x in xrange(0,days+1):
    day_seriess[x] = []

for boat_file in perboatfiles:
    f = open(os.path.join(inputdir, boat_file))
    data = json.loads(f.read())

    i = 0
    for p in data['days']:
        lst = ('last' in p.keys())
        day_seriess[i] += [{'boat': data['name'], 'dist': tccs[data['name']] * distance_from_rio(p['pos']), 'status': p['status'], 'last': lst}]
        i+=1

time_stuff = json.loads(open(os.path.join(datadir, 'times.json')).read())

for x in xrange(0,days+1):
    day_seriess[x].sort(key=lambda x: time_stuff[x['boat']]['final'] if x['boat'] in time_stuff else 999999999)
    day_seriess[x].sort(key=lambda x:x['dist'])


position_series = {}

done = set()

for day in xrange(0,days+1):
    pos = 0
    for e in day_seriess[day]:
        pos += 1
        boat = e['boat']

        if not boat in position_series.keys():
            position_series[boat] = {'points': [], 'result': e['status']}

        if not boat in done:
            position_series[boat]['points'] += [pos]

        if e['last']:
            position_series[boat]['result'] = e['status']
            done.add(boat)

print json.dumps(position_series)

