#
import random

boats = [
'MASERATI',
'SCARLET RUNNER',
'ISKAREEN',
'PRIVATEER',
'INVESTEC CIAO BELLA',
'AMTEC WITS ALADDIN',
'MUSSULO III',
'EXPLORA',
'ROCKET/STOP RHINO POACHING',
'INSV MHADEI',
'YOLO',
'PERIE BANOU ROLLY TASKER',
'JML ROTARY SCOUT',
'COOL RUNNINGS',
'VULCAN 44',
'JACARANDA OF CARRICK',
'HOT ICE',
'MYRTLE OF BONNIEVALE',
'TULLIANA',
'NOMAD YACHT CHARTERS',
'TRANQUILO',
'WINDGAT',
'ALLEYCAT TOO',
'GENEVIEVE TOO',
'HQ 2'
]

days = 28

d = {}

for b in boats:
    d[b] = []

for j in range(days):

    iterations = random.randrange(5)
    for i in range(iterations):
        t = random.randrange(len(boats)-1)
        temp = boats[t]
        boats[t] = boats[t+1]
        boats[t+1] = temp

    for i in range(len(boats)):
        d[boats[i]] += [i+1, i+1, i+1]

for k,v in d.iteritems():
    print '{'
    print '    name: \''+k+'\','
    print '    data: ' + str(v[1:-1]) + ''
    print '},'

print ''

cats = []

for j in range(days):
    cats += ['',j,'']

cats = cats[1:-1]

print str(cats)