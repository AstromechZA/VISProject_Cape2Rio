y1 = -23.051582
y2 = -33.912276

x1 = -43.081390
x2 = 18.399475

n = 200
s = 3600


ssx = (x2 - x1)/n
ssy = (y2 - y1)/n

cx = x1
cy = y1

print '['
print '    [0, [' + str(cy) + ',' + str(cx) + ']],'
for i in range(n):
    cx += ssx
    cy += ssy
    print '    [' + str(s*i+s) + ', [' + str(cy) + ',' + str(cx) + ']],'
print ']'