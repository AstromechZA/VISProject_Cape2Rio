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

rr =  (8*math.pi) / (n*1.0)

print '['
print '    [0, [' + str(cy) + ',' + str(cx) + '], 0, 0],'

lx = cx
ly = cy
for i in range(n):
    dx = ssx + ssx*math.sin(rr*i)
    dy = ssy + ssy*math.cos(rr*i)
    cx += dx
    cy += dy

    distance = round(haversine(ly, lx, cy, cx),2)

    b = round(bearing(lx, ly, cx, cy))

    print '    [' + str(s*i+s) + ', [' + str(round(cy,5)) + ',' + str(round(cx,5)) + '], ' + str(b) + ', ' + str(distance) + '],'

    lx = cx
    ly = cy
print ']'