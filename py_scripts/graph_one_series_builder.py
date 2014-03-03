import os
import re
import json

thisdir = os.path.abspath(os.path.dirname(__file__))
datadir = os.path.join(thisdir, '..', 'data')

data = json.loads(open(os.path.join(datadir, 'position_dailies.json')).read())

boatdata = json.loads(open(os.path.join(datadir, 'boats.json')).read())

markertypes = {
    'FINISHED': 'marker_flag',
    'RETIRED': 'marker_cross',
    'DISQUALIFIED': 'marker_cross',
}

#
# NEED TO OUTPUT STRUCTURES LIKE THIS
# name: 'Investec Ciao Bella',
# data: expand_daily_positions([5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6], marker_flag),
# color: class_2_colour(0.5),
# marker: {
#     enabled: false
# },
# lineWidth: 7,
# dashStyle: 'shortdash',

for boat, info in data.iteritems():
    print '{'
    print "    name: '%s'," % boatdata[boat]['prettyname']
    print "    data: expand_daily_positions(%s, %s, %s)," % (info['points'], markertypes[info['result']], info['end'])
    print "    color: class_%s_colour(0.5)," % boatdata[boat]['class']
    print "    marker: {enabled: false},"
    print "    lineWidth: 5,"
    print "    dashstyle: 'solid',"
    print "    yachtType: ''"
    print '},'
