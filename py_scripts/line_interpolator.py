import math

def bearing(lat1,lng1,lat2,lng2):
    return 90-math.atan2(lng2-lng1, lat2-lat1) * 180.0 / math.pi

def bearing2(c1, c2):
    return bearing(c1[0], c1[1], c2[0], c2[1])

y2 = -23.051582
x2 = -43.081390

x1 = 18.399475
y1 = -33.912276

n = 648
s = 3600

ssx = (x2 - x1)/n
ssy = (y2 - y1)/n

cx = x1
cy = y1

rr =  (4*math.pi) / (n*1.0)

print '['
print '    [0, [' + str(cy) + ',' + str(cx) + '], 0],'

lx = cx
ly = cy
for i in range(n):
    cx += ssx + ssx*math.cos(rr*i)
    cy += ssy + ssy*math.sin(rr*i)

    b = bearing(lx, ly, cx, cy)

    print '    [' + str(s*i+s) + ', [' + str(cy) + ',' + str(cx) + '], ' + str(b) + '],'
    lx = cx
    ly = cy
print ']'