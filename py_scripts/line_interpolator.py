import math

def bearing(lat1,lng1,lat2,lng2):
    dlng = lng2-lng1
    y = math.sin(dlng) * math.cos(lat2)
    x = math.cos(lat1) * math.sin(lat2) - math.sin(lat1) * math.cos(lat2) * math.cos(dlng)
    return math.atan2(y, x) * 180.0 / math.pi

def bearing2(c1, c2):
    return bearing(c1[0], c1[1], c2[0], c2[1])

y1 = -23.051582
x1 = -43.081390

x2 = 18.399475
y2 = -33.912276

n = 648
s = 3600

ssx = (x2 - x1)/n
ssy = (y2 - y1)/n

cx = x1
cy = y1

rr =  (8*math.pi) / (n*1.0)

print '['
print '    [0, [' + str(cy) + ',' + str(cx) + '], 0],'

lx = cx
ly = cy
for i in range(n):
    cx += ssx + ssx*math.sin(rr*i)
    cy += ssy + ssy*math.cos(rr*i)

    b = bearing(lx, ly, cx, cy)

    print '    [' + str(s*i+s) + ', [' + str(cy) + ',' + str(cx) + '], ' + str(b) + '],'
    lx = cx
    ly = cy
print ']'