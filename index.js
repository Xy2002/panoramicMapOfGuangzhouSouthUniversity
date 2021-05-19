var buttonId = 'panel-button'
var panelId = 'custom-panel';
/*
* [0] 铜像
* [1] 西体
* [2] 图书馆
* [3] 西饭
* [4] 中饭
* [5] 东区宿舍楼楼1
* [6] 东体
* [7] 湖边
* */
var panos = [
    {
        desc: '广州南方学院铜像处',
        minFov: 30,
        base: `./assets/img/lowQualityImg/DJI_0131_low.JPG`,
        position: {longitude: 0.8648759940158011, latitude: -0.05638018625704766, zoom: 50,},
        config: {
            width: 8192,
            cols: 32,
            rows: 16,
            tileUrl: (col, row) => {
                const num = row * 32 + col
                return `https://vr.naiquoy.com/getPic/bronzeStatue/title_${('000' + num).slice(-4)}.jpg`;
            },
        },
    },
    {
        desc: '广州南方学院西区体育馆',
        minFov: 30,
        base: `./assets/img/lowQualityImg/xiti_LOW.jpg`,
        position: {longitude: 1.8939487733283173, latitude: 0.03337838088394118, zoom: 50},
        config: {
            width: 8192,
            cols: 32,
            rows: 16,
            tileUrl: (col, row) => {
                const num = row * 32 + col
                return `https://vr.naiquoy.com/getPic/westSideStadium/tile_${('000' + num).slice(-4)}.jpg`;
            },
        },
    },
    {
        desc: '广州南方学院图书馆',
        minFov: 30,
        base: `./assets/img/lowQualityImg/tushuguan_LOW.png`,
        position: {longitude: 0, latitude: 0, zoom: 50,},
        config: {
            width: 8192,
            cols: 32,
            rows: 16,
            tileUrl: (col, row) => {
                const num = row * 32 + col
                return `https://vr.naiquoy.com/getPic/library/title_${('000' + num).slice(-4)}.JPG`;
            },
        },
    },
    {
        desc: '广州南方学院西区饭堂',
        minFov: 30,
        base: `./assets/img/lowQualityImg/westernDiningHall_LOW.jpg`,
        position: {longitude: 0, latitude: 0, zoom: 50,},
        config: {
            width: 8192,
            cols: 32,
            rows: 16,
            tileUrl: (col, row) => {
                const num = row * 32 + col
                return `https://vr.naiquoy.com/getPic/westernDiningHall/tile_${('000' + num).slice(-4)}.jpg`;
            },
        },
    },
    {
        desc: '广州南方学院中区饭堂',
        minFov: 30,
        base: `./assets/img/lowQualityImg/centralCanteen_LOW.png`,
        position: {longitude: 0, latitude: 0, zoom: 50,},
        config: {
            width: 8192,
            cols: 32,
            rows: 16,
            tileUrl: (col, row) => {
                const num = row * 32 + col
                return `https://vr.naiquoy.com/getPic/centralCanteen/tile_${('000' + num).slice(-4)}.jpg`;
            },
        },
    },
    {
        desc: '广州南方学院东区宿舍楼part1',
        minFov: 30,
        base: `./assets/img/lowQualityImg/eastDormitoryBuilding1_LOW.jpg`,
        position: {longitude: 0, latitude: 0, zoom: 50,},
        config: {
            width: 8192,
            cols: 32,
            rows: 16,
            tileUrl: (col, row) => {
                const num = row * 32 + col
                return `https://vr.naiquoy.com/getPic/eastDormitoryBuilding1/tile_${('000' + num).slice(-4)}.jpg`;
            },
        },
    },
    {
        desc: '广州南方学院东区体育馆',
        minFov: 30,
        base: `./assets/img/lowQualityImg/eastSideStadium_LOW.jpg`,
        position: {longitude: 0, latitude: 0, zoom: 50,},
        config: {
            width: 8192,
            cols: 32,
            rows: 16,
            tileUrl: (col, row) => {
                const num = row * 32 + col
                return `https://vr.naiquoy.com/getPic/eastSideStadium/tile_${('000' + num).slice(-4)}.jpg`;
            },
        },
    },
    {
        desc:'广州南方学院湖边',
        minFov: 30,
        base: `./assets/img/lowQualityImg/lakeside_LOW.jpg`,
        position: {longitude: 0, latitude: 0, zoom: 50,},
        config: {
            width: 8192,
            cols: 32,
            rows: 16,
            tileUrl: (col, row) => {
                const num = row * 32 + col
                return `https://vr.naiquoy.com/getPic/Lakeside/tile_${('000' + num).slice(-4)}.jpg`;
            },
        },

    }
];

var viewer = new PhotoSphereViewer.Viewer({
    container: 'photosphere',
    adapter: [PhotoSphereViewer.EquirectangularTilesAdapter, {
        showErrorTile: true,
    }],
    plugins: [
        PhotoSphereViewer.GyroscopePlugin,
        [PhotoSphereViewer.MarkersPlugin, {
            // list of markers
            markers: [
                {
                    // image marker that opens the panel when clicked
                    id: 'xiti',
                    longitude: 1.8659846301431282,
                    latitude: -0.2775064583786597,
                    image: './assets/img/marker/pin-blue-small.png',
                    width: 32,
                    height: 32,
                    anchor: 'center center',
                    tooltip: '前往西区体育馆<b>Click me!</b>',
                },
                {
                    // html marker with custom style
                    id: 'xititext',
                    longitude: 2.019400971777133,
                    latitude: -0.27274771448740975,
                    html: '广州南方学院<br/> <b>西区体育馆</b> &hearts;',
                    anchor: 'top right',
                    scale: [0.5, 1.5],
                    style: {
                        maxWidth: '150px',
                        color: 'white',
                        fontSize: '25px',
                        fontFamily: 'Helvetica, sans-serif',
                        textAlign: 'center'
                    },
                    tooltip: {
                        content: '点击蓝色指针即可前往目标地点喔',
                        position: 'right'
                    }
                },
                {
                    // image marker that opens the panel when clicked
                    id: 'tushuguan',
                    longitude: 0.8635927013958947,
                    latitude: -0.2663033502758694,
                    image: './assets/img/marker/pin-blue-small.png',
                    width: 32,
                    height: 32,
                    anchor: 'center center',
                    tooltip: '前往图书馆<b>Click me!</b>',
                },
                {
                    // html marker with custom style
                    id: 'tushuguantext',
                    longitude:  0.9906850819157272,
                    latitude: -0.204374871302216,
                    html: '广州南方学院<br/> <b>图书馆</b> &hearts;',
                    anchor: 'top right',
                    scale: [0.5, 1.5],
                    style: {
                        maxWidth: '150px',
                        color: 'white',
                        fontSize: '25px',
                        fontFamily: 'Helvetica, sans-serif',
                        textAlign: 'center'
                    },
                    tooltip: {
                        content: '点击蓝色指针即可前往目标地点喔',
                        position: 'right'
                    }
                },
                {
                    "id": 'zhongfan',
                    "longitude": 0.02724286979213421,
                    "latitude": -0.22426911181874232,
                    "image": "./assets/img/marker/pin-blue-small.png",
                    "width": 32,
                    "height": 32,
                    "anchor": "center center",
                    "tooltip": "前往中区饭堂<b>Click me!</b>"
                },
                {
                    // html marker with custom style
                    id: 'zhongfantext',
                    longitude: 0.013898513536756536,
                    latitude: -0.2681217868268466,
                    html: '广州南方学院<br/> <b>中区饭堂</b> &hearts;',
                    anchor: 'top right',
                    scale: [0.5, 1.5],
                    style: {
                        maxWidth: '150px',
                        color: 'white',
                        fontSize: '25px',
                        fontFamily: 'Helvetica, sans-serif',
                        textAlign: 'center'
                    },
                    tooltip: {
                        content: '点击蓝色指针即可前往目标地点喔',
                        position: 'right'
                    }
                },
                {
                    // html marker with custom style
                    id: 'yinyueloutext',
                    longitude: 6.046750519791013,
                    latitude: -0.21773894555094953,
                    html: '广州南方学院<br/> <b>音乐楼</b> &hearts;',
                    anchor: 'top right',
                    scale: [0.5, 1.5],
                    style: {
                        maxWidth: '150px',
                        color: 'white',
                        fontSize: '25px',
                        fontFamily: 'Helvetica, sans-serif',
                        textAlign: 'center'
                    }
                },
                {
                    // 文字提示
                    id: '0.12383957000365942',
                    longitude:  0.8274117307967339,
                    latitude:  -1.186811816852619,
                    html: '广州南方学院<br/> <b>孙中山铜像</b> &hearts;',
                    anchor: 'top right',
                    scale: [0.5, 1.5],
                    style: {
                        maxWidth: '150px',
                        color: 'white',
                        fontSize: '25px',
                        fontFamily: 'Helvetica, sans-serif',
                        textAlign: 'center'
                    }
                }
            ]
        }
        ]],
    loadingTxt: '广州南方学院 Loading...',
    navbar: [
        'autorotate', 'zoom', 'markersList',
        {
            id: buttonId,
            title: 'creatorInfo',
            content: 'ℹ️',
            onClick: function () {
                if (viewer.panel.isVisible(panelId)) {
                    viewer.panel.hide();
                } else {
                    viewer.panel.show({
                        id: panelId,
                        width: '60%',
                        content: document.querySelector('#panel-content').innerHTML,
                    });
                }
            }
        },
        'caption', 'gyroscope', 'fullscreen',
    ],
});

loadPanorama(panos[0]);
viewer.on('click', (e, data) => {
    console.log(`${data.rightclick ? 'right clicked' : 'clicked'} at longitude: ${data.longitude} latitude: ${data.latitude}`);
    let obj = {};
    obj.id = Math.random()
    obj.longitude = data.longitude
    obj.latitude = data.latitude
    obj.image = './assets/img/marker/pin-blue-small.png'
    obj.width = 32
    obj.height = 32
    obj.anchor = 'center center'
    obj.tooltip = '前往<b>Click me!</b>'
    console.log(JSON.stringify(obj))
    console.log(`markersPlugin.addMarker({
            // 文字提示
            id: '${Math.random()}',
            longitude:  ${data.longitude},
            latitude:  ${data.latitude},
            html: '广州南方学院<br/> <b>xxx</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            },
            tooltip: {
                content: '点击蓝色指针即可前往目标地点喔',
                position: 'right'
            }
        })`)
    console.log(`        markersPlugin.addMarker({
            //标点
            id: "${Math.random()}",
            longitude: ${data.longitude},
            "latitude": ${data.latitude},
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往xxx<b>Click me!</b>"
        }) `)
});
var markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);

markersPlugin.on('select-marker', function (e, marker, data) {
    console.log("marker", marker.id)
    if (marker.id === "xiti") {
        markersPlugin.clearMarkers();
        loadPanorama(panos[1])
        markersPlugin.addMarker({
            id: 'tongxiang',
            longitude: 0.3747125116228323,
            latitude: -0.33944257694863467,
            image: './assets/img/marker/pin-blue-small.png',
            width: 32,
            height: 32,
            anchor: 'center center',
            tooltip: '前往铜像<b>Click me!</b>',
        })
        markersPlugin.addMarker({
            // image marker that opens the panel when clicked
            id: 'tushuguan',
            longitude: 1.697045923849067,
            latitude: -0.319516570833676,
            image: './assets/img/marker/pin-blue-small.png',
            width: 32,
            height: 32,
            anchor: 'center center',
            tooltip: '前往图书馆<b>Click me!</b>',
        })
        markersPlugin.addMarker({
            // image marker that opens the panel when clicked
            id: 'xifan',
            longitude: 3.3221250781669105,
            latitude: -0.5444287694452132,
            image: './assets/img/marker/pin-blue-small.png',
            width: 32,
            height: 32,
            anchor: 'center center',
            tooltip: '前往西区饭堂<b>Click me!</b>',
        })
    }
    if (marker.id === "tongxiang") {
        markersPlugin.clearMarkers();
        loadPanorama(panos[0])
        markersPlugin.addMarker({
            // image marker that opens the panel when clicked
            id: 'xiti',
            longitude: 1.8659846301431282,
            latitude: -0.2775064583786597,
            image: './assets/img/marker/pin-blue-small.png',
            width: 32,
            height: 32,
            anchor: 'center center',
            tooltip: '前往西区体育馆<b>Click me!</b>',
        })
        markersPlugin.addMarker({
            // image marker that opens the panel when clicked
            id: 'tushuguan',
            longitude: 0.8635927013958947,
            latitude: -0.2663033502758694,
            image: './assets/img/marker/pin-blue-small.png',
            width: 32,
            height: 32,
            anchor: 'center center',
            tooltip: '前往图书馆<b>Click me!</b>',
        })
        markersPlugin.addMarker({
            // html marker with custom style
            id: 'xititext',
            longitude: 2.019400971777133,
            latitude: -0.27274771448740975,
            html: '广州南方学院<br/> <b>西区体育馆</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            },
            tooltip: {
                content: '点击蓝色指针即可前往目标地点喔',
                position: 'right'
            }
        })
        markersPlugin.addMarker({
            // html marker with custom style
            id: 'tushuguantext',
            longitude: 0.9906850819157272,
            latitude: -0.204374871302216,
            html: '广州南方学院<br/> <b>图书馆</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            },
            tooltip: {
                content: '点击蓝色指针即可前往目标地点喔',
                position: 'right'
            }
        })
        markersPlugin.addMarker({
            "id": 'zhongfan',
            "longitude": 0.02724286979213421,
            "latitude": -0.22426911181874232,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往中区饭堂<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            // html marker with custom style
            id: 'zhongfantext',
            longitude: 0.013898513536756536,
            latitude: -0.2681217868268466,
            html: '广州南方学院<br/> <b>中区饭堂</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            },
            tooltip: {
                content: '点击蓝色指针即可前往目标地点喔',
                position: 'right'
            }
        })
        markersPlugin.addMarker({
            // html marker with custom style
            id: 'yinyueloutext',
            longitude: 6.046750519791013,
            latitude: -0.21773894555094953,
            html: '广州南方学院<br/> <b>音乐楼</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            }
        })
        markersPlugin.addMarker({
            // 文字提示
            id: '0.12383957000365942',
            longitude:  0.8274117307967339,
            latitude:  -1.186811816852619,
            html: '广州南方学院<br/> <b>孙中山铜像</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            }
        })
    }
    if (marker.id === "tushuguan") {
        markersPlugin.clearMarkers();
        loadPanorama(panos[2])
        markersPlugin.addMarker({
            id: 'tongxiang',
            longitude: 3.1396543195616706,
            latitude: -0.27331680917177126,
            image: './assets/img/marker/pin-blue-small.png',
            width: 32,
            height: 32,
            anchor: 'center center',
            tooltip: '前往铜像<b>Click me!</b>',
        })
        markersPlugin.addMarker({
            // image marker that opens the panel when clicked
            id: 'xiti',
            longitude: 2.3167984116143896,
            latitude: -0.22144021050798157,
            image: './assets/img/marker/pin-blue-small.png',
            width: 32,
            height: 32,
            anchor: 'center center',
            tooltip: '前往西区体育馆<b>Click me!</b>',
        })
        markersPlugin.addMarker({
            // 文字提示
            id: 'tushuguantext123',
            longitude:  6.26248690247201,
            latitude:  -0.6527029418825707,
            html: '广州南方学院<br/> <b>图书馆</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            }
        })
        markersPlugin.addMarker({
            // 文字提示
            id: 'zongheloutext',
            longitude:  0.005877256095977216,
            latitude:  -0.21884949046072943,
            html: '广州南方学院<br/> <b>综合楼</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            }
        })
        markersPlugin.addMarker({
            //标点
            id: "hubian",
            longitude: 0.32420165013225205,
            "latitude": -0.25297294503677215,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往湖边<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            // 文字提示
            id: 'hubniantext',
            longitude:  0.4723374142198251,
            latitude:  -0.1859974704508689,
            html: '广州南方学院<br/> <b>南方湖</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            },
            tooltip: {
                content: '点击蓝色指针即可前往目标地点喔',
                position: 'right'
            }
        })
    }
    if (marker.id === "xifan") {
        markersPlugin.clearMarkers();
        loadPanorama(panos[3])
    }
    if (marker.id === "zhongfan") {
        markersPlugin.clearMarkers();
        loadPanorama(panos[4])
        markersPlugin.addMarker({
            "id": "tongxiang",
            "longitude": 4.531348641556308,
            "latitude": -0.2576898584214531,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往铜像<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            "id": "dongqusushelou1",
            "longitude": 0.3200632154893822,
            "latitude": -0.1801564746018134,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区宿舍楼1<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            // html marker with custom style
            id: 'zhongqufantangtext',
            longitude: 6.11399091898845,
            latitude: -0.730535516904804,
            html: '广州南方学院<br/> <b>中区饭堂</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            }
        })
        markersPlugin.addMarker({
            "id": "tushuguan",
            "longitude": 3.1767803887322135,
            "latitude": -0.4553499897440467,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往图书馆<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            // html marker with custom style
            id: 'tushuguantext1',
            longitude: 2.990911555659451,
            latitude: -0.33517660338801636,
            html: '广州南方学院<br/> <b>图书馆</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            },
            tooltip: {
                content: '点击蓝色指针即可前往目标地点喔',
                position: 'right'
            }
        })
        markersPlugin.addMarker({
            // html marker with custom style
            id: 'tongxiangtext1',
            longitude:  4.529441044358981,
            latitude:  -0.16490220210510254,
            html: '广州南方学院<br/> <b>铜像</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            },
            tooltip: {
                content: '点击蓝色指针即可前往目标地点喔',
                position: 'right'
            }
        })
        markersPlugin.addMarker({
            // html marker with custom style
            id: '0.4929396715283245',
            longitude:  5.881352741108866,
            latitude:  -0.43627498448179525,
            html: '广州南方学院<br/> <b>音乐楼</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            }
        })
        markersPlugin.addMarker({
            //标点
            id: "dongti",
            longitude: 1.3393896686640367,
            "latitude": -0.2791498557175194,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区饭堂<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            // 文字提示
            id: '0.9262418267623478',
            longitude:  1.216800441600206,
            latitude:  -0.19028207907404782,
            html: '广州南方学院<br/> <b>东区饭堂</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            },
            tooltip: {
                content: '点击蓝色指针即可前往目标地点喔',
                position: 'right'
            }
        })
        markersPlugin.addMarker({
            // 文字提示
            id: '0.0988916327169469',
            longitude:  1.5770629320724052,
            latitude:  -0.2453571850407068,
            html: '广州南方学院<br/> <b>东区体育馆</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            },
            tooltip: {
                content: '点击蓝色指针即可前往目标地点喔',
                position: 'right'
            }
        })
    }
    if (marker.id === "dongqusushelou1") {
        markersPlugin.clearMarkers()
        loadPanorama(panos[5])
        markersPlugin.addMarker({
            "id": "zhongfan",
            "longitude": 1.2751259997749518,
            "latitude": -0.24261969951561113,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往中饭<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            "id": "dongti",
            "longitude": 0.34014006320009793,
            "latitude": -0.22875169176789023,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东体<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            // 文字提示
            id: '0.4179393890255034',
            longitude:  1.4110061644833243,
            latitude:  -0.24295835613892502,
            html: '广州南方学院<br/> <b>中区饭堂</b> &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '150px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            },
            tooltip: {
                content: '点击蓝色指针即可前往目标地点喔',
                position: 'right'
            }
        })
    }
    if (marker.id === "dongti") {
        markersPlugin.clearMarkers()
        loadPanorama(panos[6])
        markersPlugin.addMarker({
            "id": "dongqusushelou1",
            "longitude": 2.9186540654624005,
            "latitude": -0.20568139338841873,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区宿舍楼<b>Click me!</b>"
        })
    }
    if(marker.id === "hubian"){
        markersPlugin.clearMarkers();
        loadPanorama(panos[7])
    }
});

viewer.on('open-panel', function (e, id) {
    if (id === panelId) {
        viewer.navbar.getButton(buttonId).toggleActive(true);
    }
});

viewer.on('close-panel', function (e, id) {
    if (id === panelId) {
        viewer.navbar.getButton(buttonId).toggleActive(false);
    }
});
// wash out the base image
// for demonstration purpose only
function loadPanorama(pano) {
    const loader = new THREE.ImageLoader();

    viewer.loader.show();

    return new Promise((resolve, reject) => loader.load(pano.base, resolve, undefined, reject))
        .then(image => {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            return canvas.toDataURL('image/png');
        })
        .then(baseUrl => {
            return viewer.setPanorama({
                ...pano.config,
                baseUrl: baseUrl,
            }, pano.position);
        })
        .then(() => {
            viewer.navbar.setCaption(pano.desc);
            viewer.setOption('minFov', pano.minFov);
        });
}
