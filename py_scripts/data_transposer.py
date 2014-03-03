import os
import re
import json
import math

boats = {
    'ALLEYCAT TOO',
    'AMTEC WITS ALADDIN',
    'AVA',
    'AVANTI',
    'AVOCET',
    'BILLE',
    'BLACK CAT',
    'COOL RUNNINGS',
    'DODO',
    'EXPLORA',
    'FTI FLYER',
    'GENEVIEVE TOO',
    'HOT ICE',
    'HQ 2',
    'INDABA',
    'INSV MHADEI',
    'INVESTEC CIAO BELLA',
    'ISKAREEN',
    'ISLA',
    'JACARANDA OF CARRICK',
    'JML ROTARY SCOUT',
    'MASERATI',
    'MUSSULO III',
    'MYRTLE OF BONNIEVALE',
    'NOMAD YACHT CHARTERS',
    'PEEKAY',
    'PERIE BANOU ROLLY TASKER',
    'PRIVATEER',
    'ROCKET/STOP RHINO POACHING',
    'SCARLET RUNNER',
    'TRANQUILO',
    'TULLIANA',
    'VULCAN 44',
    'WINDGAT',
    'YOLO',
}

thisdir = os.path.abspath(os.path.dirname(__file__))
datadir = os.path.join(thisdir, '..', 'data', 'dailies')
inputdir = os.path.join(datadir, 'perday')
outputdir = os.path.join(datadir, 'perboat')

###############

perdayfiles = filter(lambda f: os.path.isfile(os.path.join(inputdir, f)), os.listdir(inputdir))

###############

status_re = re.compile('(.*) ((RETIRED)|(DISQUALIFIED)|(FINISHED)|(NO REPORT))')
position_re = re.compile('(.*) ((\d+) (\d+(\.\d+)?) ([SN]) (\d+) (\d+(\.\d+)?) ([WE])).*')

###############

daily_reports = {}
for b in boats:
    daily_reports[b] = [None] * 29


for day_file in perdayfiles:
    day = int(day_file[3:])

    for line in open(os.path.join(inputdir, day_file)).readlines():

        m = status_re.match(line)
        if m:
            boat = m.groups()[0]
            status = m.groups()[1]
            daily_reports[boat][day] = {'status': status}
        else:
            m = position_re.match(line)
            if m:
                boat = m.groups()[0]
                lat = (int(m.groups()[2]) + float(m.groups()[3])/60.0) * (-1 if (m.groups()[5] == 'S') else 1)
                lon = (int(m.groups()[6]) + float(m.groups()[7])/60.0) * (-1 if (m.groups()[9] == 'W') else 1)
                daily_reports[boat][day] = {'pos': [lat, lon], 'status': 'RACING'}

def haversine_midpoint(lat1, lat2, lon1, lon2):
    dl = lon2-lon1
    Bx = math.cos(lat2) * math.cos(dl)
    By = math.cos(lat2) * math.sin(dl)
    latm = math.atan2(math.sin(lat1) + math.sin(lat2), math.sqrt((math.cos(lat1)+Bx) * (math.cos(lat1) + Bx) + By*By))
    lonm = lon1 + math.atan2(By, math.cos(lat1) + Bx)

    return [latm, lonm]

def haversine_midpoint_p(p1, p2):
    return haversine_midpoint(p1[0], p1[1], p2[0], p2[1])

for boat in boats:
    boat_file_name = boat.replace(' ', '_')
    boat_file_name = boat_file_name.replace('/', '_')
    boat_file_name += '.json'

    with open(os.path.join(outputdir, boat_file_name), 'w') as f:

        data = {}
        data['name'] = boat
        data['days'] = daily_reports[boat]
        data['days'][0] = {'pos': [-33.912276, 18.399475], 'status': 'RACING'}

        # fill in last status to cover nulls
        dc = len(data['days'])
        statdict = data['days'][-1]
        for x in xrange(1,dc):
            i = dc-x
            if data['days'][i].__class__.__name__ == 'dict' and data['days'][i]['status'] == 'RACING':
                break
            elif data['days'][i] == None:
                data['days'][i] = {'status': statdict['status']}

        data['days'] = map(lambda s: s if s else {'status': 'NO REPORT'}, data['days'])

        for x in xrange(1,dc):
            if data['days'][x]['status'] == 'NO REPORT':
                if data['days'][x-1]['status'] == 'RACING' and data['days'][x+1]['status'] == 'RACING':
                    data['days'][x]['pos'] = haversine_midpoint_p(data['days'][x-1]['pos'], data['days'][x+1]['pos'])
                    data['days'][x]['status'] = 'RACING'

            if not 'pos' in data['days'][x]:
                data['days'][x]['pos'] = data['days'][x-1]['pos']

            if data['days'][x]['status'] == 'FINISHED':
                data['days'][x]['pos'] = [-22.933333333333334, -43.14333333333333]

        for x in xrange(1,dc):
            if data['days'][x]['status'] in ['FINISHED', 'RETIRED', 'DISQUALIFIED']:
                data['days'][x]['last'] = True
                break

        f.write(json.dumps(data))


