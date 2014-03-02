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
datadir = os.path.join(thisdir, '..', 'data', 'dailies')
inputdir = os.path.join(datadir, 'perboat')

perboatfiles = filter(lambda f: os.path.isfile(os.path.join(inputdir, f)), os.listdir(inputdir))

days = 28
boatcount = 35

day_seriess = {}
for x in xrange(0,days+1):
    day_seriess[x] = []

print day_seriess

for boat_file in perboatfiles:
    f = open(os.path.join(inputdir, boat_file))
    data = json.loads(f.read())

    i = 0
    for p in data['days']:
        day_seriess[i] += [{'boat': data['name'], 'dist': distance_from_rio(p['pos']), 'status': p['status']}]
        if 'last' in p.keys():
            break
        i+=1


for x in xrange(0,days+1):
    day_seriess[x].sort(key=lambda x:x['dist'])
    print day_seriess[x]

#print day_seriess

