var yachtseries = [{
        name: 'Investec Ciao Bella',
        data: Util.expand_daily_positions([16, 16, 14, 9, 5, 5, 3, 5, 4, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5], ChartMarker.marker_flag, 23),
        color: YachtColour.class_one(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'HQ2',
        data: Util.expand_daily_positions([33, 33, 33, 34, 35, 35, 33, 34, 29, 28, 26, 25, 25, 23, 23, 22, 22, 22, 22, 21, 18, 13, 13, 12, 12, 13, 13, 17, 21], ChartMarker.marker_flag, 26),
        color: YachtColour.class_three(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'YOLO',
        data: Util.expand_daily_positions([8, 8, 7, 5, 2, 1, 1, 2, 5, 6, 8, 8, 8, 9, 9, 9, 10, 11, 12, 12, 12, 12, 12, 13, 13, 7, 7, 7, 7], ChartMarker.marker_flag, 25),
        color: YachtColour.class_two(1),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Black Cat',
        data: Util.expand_daily_positions([19, 18, 20], ChartMarker.marker_cross, 2),
        color: YachtColour.class_one(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_cross'
    },
    {
        name: 'FTI Flyer',
        data: Util.expand_daily_positions([5, 6, 6], ChartMarker.marker_cross, 2),
        color: YachtColour.class_two(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_cross'
    },
    {
        name: 'Avanti',
        data: Util.expand_daily_positions([10, 10, 15], ChartMarker.marker_cross, 2),
        color: YachtColour.class_two(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_cross'
    },
    {
        name: 'Rocket/Stop Rhino Poaching',
        data: Util.expand_daily_positions([30, 30, 30, 30, 28, 26, 34, 22, 19, 17, 14, 16, 15, 14, 10, 8, 7, 7, 7, 6, 6, 6, 6, 8, 9, 10, 10, 10, 11], ChartMarker.marker_flag, 22),
        color: YachtColour.class_one(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Privateer',
        data: Util.expand_daily_positions([31, 31, 31, 31, 26, 22, 20, 11, 9, 8, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], ChartMarker.marker_flag, 19),
        color: YachtColour.class_one(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Nomad Yacht Charters',
        data: Util.expand_daily_positions([28, 29, 28, 27, 27, 28, 26, 23, 21, 19, 19, 19, 19, 19, 19, 16, 14, 13, 11, 11, 11, 10, 11, 9, 11, 12, 12, 15, 16], ChartMarker.marker_flag, 24),
        color: YachtColour.class_three(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Tulliana',
        data: Util.expand_daily_positions([26, 26, 25, 21, 20, 20, 17, 16, 14, 15, 20, 12, 12, 11, 12, 12, 11, 10, 10, 10, 10, 11, 10, 11, 10, 11, 11, 13, 14], ChartMarker.marker_flag, 24),
        color: YachtColour.class_three(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Myrtle Of Bonnievale',
        data: Util.expand_daily_positions([7, 7, 8, 7, 7, 6, 6, 6, 7, 10, 10, 10, 10, 10, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 15, 17, 18, 11, 12], ChartMarker.marker_flag, 27),
        color: YachtColour.class_three(1),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Alleycat Too',
        data: Util.expand_daily_positions([14, 14, 13, 14, 14, 12, 15, 17, 18, 21, 21, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24], ChartMarker.marker_cross, 28),
        color: YachtColour.class_three(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_cross'
    },
    {
        name: 'DoDo',
        data: Util.expand_daily_positions([2, 2, 5, 6], ChartMarker.marker_cross, 3),
        color: YachtColour.class_two(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_cross'
    },
    {
        name: 'Perie Baniu Rolly Tasker',
        data: Util.expand_daily_positions([3, 3, 4, 3, 1, 2, 2, 3, 3, 4, 7, 7, 7, 8, 8, 11, 12, 12, 13, 13, 13, 16, 15, 15, 16, 16, 16, 18, 8], ChartMarker.marker_flag, 28),
        color: YachtColour.class_two(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Windgat',
        data: Util.expand_daily_positions([20, 20, 19, 17, 17, 13, 18, 19, 20, 20, 18, 18, 17, 17, 16, 17, 17, 19, 17, 18, 17, 18, 17, 16, 14, 14, 14, 16, 18], ChartMarker.marker_flag, 27),
        color: YachtColour.class_three(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Scarlet Runner',
        data: Util.expand_daily_positions([32, 32, 32, 28, 22, 18, 9, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], ChartMarker.marker_flag, 15),
        color: YachtColour.class_one(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Vulcan 44',
        data: Util.expand_daily_positions([15, 15, 10, 11, 9, 8, 7, 10, 15, 16, 13, 15, 18, 16, 18, 19, 20, 16, 18, 17, 19, 20, 18, 18, 18, 18, 17, 14, 15], ChartMarker.marker_flag, 27),
        color: YachtColour.class_two(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Amtec Wits Aladdin',
        data: Util.expand_daily_positions([17, 17, 16, 15, 13, 15, 10, 13, 12, 11, 9, 9, 9, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 6, 6, 6, 6, 6], ChartMarker.marker_flag, 24),
        color: YachtColour.class_one(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Cool Runnings',
        data: Util.expand_daily_positions([13, 13, 11, 13, 12, 9, 12, 12, 13, 14, 16, 17, 16, 18, 17, 18, 18, 17, 16, 16, 15, 17, 16, 17, 17, 15, 15, 12, 13], ChartMarker.marker_flag, 27),
        color: YachtColour.class_two(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Bille',
        data: Util.expand_daily_positions([21, 21, 22], ChartMarker.marker_cross, 2),
        color: YachtColour.class_one(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_cross'
    },
    {
        name: 'INSV Mhadei',
        data: Util.expand_daily_positions([29, 28, 29, 29, 29, 29, 27, 27, 25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 22, 23, 23, 23, 22, 21, 19, 20], ChartMarker.marker_flag, 28),
        color: YachtColour.class_one(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Isla',
        data: Util.expand_daily_positions([22, 22, 23], ChartMarker.marker_cross, 2),
        color: YachtColour.class_three(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_cross'
    },
    {
        name: 'Genevieve Too',
        data: Util.expand_daily_positions([23, 23, 21, 23, 23, 23, 25, 25, 23, 22, 22, 21, 20, 21, 21, 20, 19, 20, 20, 20, 20, 23, 20, 20, 21, 23, 23, 22, 19], ChartMarker.marker_flag, 28),
        color: YachtColour.class_three(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Maserati',
        data: Util.expand_daily_positions([35, 35, 35, 35, 32, 24, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], ChartMarker.marker_flag, 11),
        color: YachtColour.class_one(1),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Avocet',
        data: Util.expand_daily_positions([24, 25, 27], ChartMarker.marker_cross, 2),
        color: YachtColour.class_one(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_cross'
    },
    {
        name: 'Iskareen',
        data: Util.expand_daily_positions([27, 27, 26, 20, 18, 14, 11, 9, 6, 7, 4, 4, 5, 5, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], ChartMarker.marker_flag, 19),
        color: YachtColour.class_one(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'JML Rotary Scout',
        data: Util.expand_daily_positions([6, 5, 3, 1, 3, 3, 4, 7, 11, 12, 12, 13, 14, 15, 15, 15, 16, 18, 19, 19, 21, 15, 21, 22, 22, 21, 22, 23, 23], ChartMarker.marker_cross, 28),
        color: YachtColour.class_two(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_cross'
    },
    {
        name: 'Tranquilo',
        data: Util.expand_daily_positions([9, 9, 9, 8, 6, 4, 5, 8, 8, 9, 11, 11, 11, 13, 14, 14, 15, 15, 15, 15, 16, 19, 19, 19, 19, 20, 20, 21, 22], ChartMarker.marker_cross, 28),
        color: YachtColour.class_three(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_cross'
    },
    {
        name: 'Indaba',
        data: Util.expand_daily_positions([4, 4, 2, 4], ChartMarker.marker_cross, 3),
        color: YachtColour.class_two(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_cross'
    },
    {
        name: 'Mussulo III',
        data: Util.expand_daily_positions([25, 24, 24, 22, 19, 17, 13, 18, 16, 13, 15, 14, 13, 12, 11, 10, 9, 9, 9, 8, 8, 8, 8, 6, 7, 8, 8, 8, 9], ChartMarker.marker_flag, 23),
        color: YachtColour.class_one(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Peekay',
        data: Util.expand_daily_positions([11, 11, 17, 19], ChartMarker.marker_cross, 3),
        color: YachtColour.class_two(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_cross'
    },
    {
        name: 'Explora',
        data: Util.expand_daily_positions([34, 34, 34, 33, 34, 30, 24, 14, 10, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 7, 8, 9, 9, 9, 10], ChartMarker.marker_flag, 17),
        color: YachtColour.class_one(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Jacaranda Of Carrick',
        data: Util.expand_daily_positions([12, 12, 12, 12, 11, 10, 14, 15, 17, 18, 17, 20, 21, 20, 20, 21, 21, 21, 21, 22, 22, 21, 22, 21, 20, 19, 19, 20, 17], ChartMarker.marker_flag, 28),
        color: YachtColour.class_two(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_flag'
    },
    {
        name: 'Hot Ice',
        data: Util.expand_daily_positions([18, 19, 18, 16, 16, 19, 19, 20, 22, 23, 23, 23, 23, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], ChartMarker.marker_cross, 28),
        color: YachtColour.class_two(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_cross'
    },
    {
        name: 'Ava',
        data: Util.expand_daily_positions([1, 1, 1, 2], ChartMarker.marker_cross, 3),
        color: YachtColour.class_two(0.4),
        marker: {enabled: false},
        lineWidth: 5,
        dashstyle: 'solid',
        lastState: 'marker_cross'
    }
];