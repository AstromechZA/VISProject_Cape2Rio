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
'EXPLORA'
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
        d[boats[i]] += [i+1]

for k,v in d.iteritems():
    print '{'
    print '    name: \''+k+'\','
    print '    data: expand_daily_positions(' + str(v) + ', marker_flag),'
    print '    color:  class_1_colour(0.5),'
    print '    marker: {enabled: false}'
    print '},'

