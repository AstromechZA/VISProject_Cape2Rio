#
import random

boats = [
'SCARLET RUNNER',
'MASERATI',
'EXPLORA'
]

days = 28

d = {}

for b in boats:
    d[b] = []

for j in range(days):
    random.shuffle(boats)
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