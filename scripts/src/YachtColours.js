var YachtColour = {
    __class_one_rgb: [120, 183, 47],
    __class_two_rgb: [183, 47, 47],
    __class_three_rgb: [47, 87, 183]
}

YachtColour._premul = function(value, opacity) {
    return Math.round(value*opacity + 255*(1-opacity))
};

YachtColour.class_one = function(opacity) {
    var r = YachtColour._premul(YachtColour.__class_one_rgb[0], opacity)
    var g = YachtColour._premul(YachtColour.__class_one_rgb[1], opacity)
    var b = YachtColour._premul(YachtColour.__class_one_rgb[2], opacity)
    return 'rgb(' + [r,g,b].join(',') + ')'
};

YachtColour.class_two = function(opacity) {
    var r = YachtColour._premul(YachtColour.__class_two_rgb[0], opacity)
    var g = YachtColour._premul(YachtColour.__class_two_rgb[1], opacity)
    var b = YachtColour._premul(YachtColour.__class_two_rgb[2], opacity)
    return 'rgb(' + [r,g,b].join(',') + ')'
};

YachtColour.class_three = function(opacity) {
    var r = YachtColour._premul(YachtColour.__class_three_rgb[0], opacity)
    var g = YachtColour._premul(YachtColour.__class_three_rgb[1], opacity)
    var b = YachtColour._premul(YachtColour.__class_three_rgb[2], opacity)
    return 'rgb(' + [r,g,b].join(',') + ')'
};

YachtColour.class_colour = function(opacity, cls) {
    if (cls==1) return YachtColour.class_one(opacity)
    if (cls==2) return YachtColour.class_two(opacity)
    if (cls==3) return YachtColour.class_three(opacity)
}