#
import random

boats = [
'SCARLET RUNNER',
'MASERATI',
'EXPLORA'
]

days = 10

d = {}

for b in boats:
    d[b] = []

for j in range(days):
    random.shuffle(boats)
    for i in range(len(boats)):
        d[boats[i]] += [i+1, i+1, i+1]

print d

for k,v in d.iteritems():
    print '{'
    print '    name: \''+k+'\','
    print '    data: ' + str(v[1:-1]) + ''
    print '},'