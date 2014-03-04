Util = {}

Util.expand_daily_positions = function _expand_daily_positions(position_array, end_mark_f, end_day) {
    o = []
    for(var i=0;i<position_array.length;i++) {
        v = position_array[i]
        o.push(v, v, v)
    }
    o[end_day*3+1] = end_mark_f(o[end_day*3+1])
    return o.slice(1, -1)
}


Util.position_string = function _position_string(i) {
    return '' + i + (((i % 10) < 4 && (i%10)>0) ? (Math.floor(i / 10) % 10 == 1 ? 'th' : ['st','nd','rd'][i%10-1]) : 'th');
}