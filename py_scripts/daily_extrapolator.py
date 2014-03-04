import os
import re
import json
import math

def bearing(lat1,lng1,lat2,lng2):
    return 90-math.atan2(lng2-lng1, lat2-lat1) * 180.0 / math.pi

def bearing2(c1, c2):
    return bearing(c1[0], c1[1], c2[0], c2[1])

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


thisdir = os.path.abspath(os.path.dirname(__file__))
datadir = os.path.join(thisdir, '..', 'data')
inputdir = os.path.join(datadir, 'dailies', 'perboat')
outputdir = os.path.join(thisdir,'..','scripts','data')

## - load data infos
boatdata = json.loads(open(os.path.join(datadir, 'boats.json')).read())

## - boat daily positions
perboatfiles = filter(lambda f: os.path.isfile(os.path.join(inputdir, f)), os.listdir(inputdir))

## final output
output = []

colour_index = 0
colours = ['#FFC56C','#6EC5E9','#003A6F','#FF5959','#F2F1F1','#FFFFFF']

## - for each boat
for boat_file in perboatfiles:
    # load data
    data = json.loads(open(os.path.join(inputdir, boat_file)).read())

    # get all the points including the 'last' one
    usefulpoints = []
    n = len(data['days'])
    for i in xrange(0,n):
        usefulpoints += [data['days'][i]]
        if 'last' in data['days'][i].keys():
            break

    hourly_points = []

    # building hourly positions
    for i in xrange(0, len(usefulpoints)-1):
        pfrom = data['days'][i]['pos']
        pto = data['days'][i+1]['pos']

        dy = (pto[0]-pfrom[0])/24.0
        dx = (pto[1]-pfrom[1])/24.0

        for j in xrange(0,24):
            p = [dy*j+pfrom[0], dx*j+pfrom[1]]
            hourly_points += [p]

        hourly_points += [pto]

    # create time/bearing/distance
    num = len(hourly_points)
    points = []
    points += [[0, hourly_points[0], 0, 0]]
    for i in xrange(1,num):
        last = points[-1][1]
        current = hourly_points[i]
        distance = round(haversine(last[0], last[1], current[0], current[1]),2)
        angle = round(bearing(last[1], last[0], current[1], current[0]))
        points += [[i*3600, hourly_points[i], angle, distance]]

    output_boat_data = {}
    output_boat_data['yacht_name'] = boatdata[data['name']]['prettyname']
    output_boat_data['race_class'] = boatdata[data['name']]['class']
    output_boat_data['colour_string'] = colours[colour_index]
    output_boat_data['points'] = points

    output += [output_boat_data]

    colour_index = (colour_index+1) % len(colours)

final_text = "var dataset = " + json.dumps(output)

with open(os.path.join(outputdir, 'dataset.js'), 'w') as f:
    f.write(final_text)









