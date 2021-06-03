var buttonId = 'panel-button'
var panelId = 'custom-panel';
/*
* [0] 铜像
* [1] 西体
* [2] 图书馆
* [3] 西饭(废弃)
* [4] 中饭
* [5] 东区宿舍楼(医务室旁边视角)
* [6] 东体
* [7] 湖边
* [8] 东区宿舍楼(东32旁边视角)
* [9] 西区教学楼(图书馆旁边的楼梯)
* [10] 西区教学楼(2教旁边)
* [11] 西区宿舍楼
* [12] 西区操场
* [13] 东区操场
* [14] 小花园
* */
var panos = [
    {
        desc: "广州南方学院铜像处",
        minFov: 30,
        base: "./assets/img/lowQualityImg/铜像_LOW.JPG",
        position: {longitude: .8648759940158011, latitude: -.05638018625704766, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/bronzeStatue_LOW/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }, {
        desc: "广州南方学院西区体育馆",
        minFov: 30,
        base: "./assets/img/lowQualityImg/西体_LOW.JPG",
        position: {longitude: 1.8939487733283173, latitude: .03337838088394118, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/westSideStadium_LOW/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }, {
        desc: "广州南方学院图书馆",
        minFov: 30,
        base: "./assets/img/lowQualityImg/图书馆_LOW.JPG",
        position: {longitude: 0, latitude: 0, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/library_LOW/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }, {
        desc: "广州南方学院西区饭堂",
        minFov: 30,
        base: "./assets/img/lowQualityImg/西饭_LOW.JPG",
        position: {longitude: 0, latitude: 0, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/westernDiningHall_LOW/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }, {
        desc: "广州南方学院中区饭堂",
        minFov: 30,
        base: "./assets/img/lowQualityImg/中饭_LOW.JPG",
        position: {longitude: 1.7197076366246475, latitude: .04838709051927359, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/centralCanteen_LOW/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }, {
        desc: "广州南方学院东区宿舍楼(医务室附近视角)",
        minFov: 30,
        base: "./assets/img/lowQualityImg/东区宿舍楼1_LOW.JPG",
        position: {longitude: 0, latitude: 0, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/eastDormitoryBuilding1_LOW/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }, {
        desc: "广州南方学院东区体育馆",
        minFov: 30,
        base: "./assets/img/lowQualityImg/东体_LOW.JPG",
        position: {longitude: 0, latitude: 0, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/eastSideStadium_LOW/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }, {
        desc: "广州南方学院湖边",
        minFov: 30,
        base: "./assets/img/lowQualityImg/湖边_LOW.JPG",
        position: {longitude: 0, latitude: 0, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/Lakeside_LOW/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }, {
        desc: "广州南方学院东区宿舍楼(东32附近视角)",
        minFov: 30,
        base: "./assets/img/lowQualityImg/东区宿舍楼2_LOW.JPG",
        position: {longitude: 0, latitude: 0, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/eastDormitoryBuilding2_LOW/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }, {
        desc: "广州南方学院西区教学楼(图书馆旁楼梯)",
        minFov: 30,
        base: "./assets/img/lowQualityImg/西区教学楼_LOW.JPG",
        position: {longitude: 0, latitude: 0, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/westCampusBuilding_LOW/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }, {
        desc: "广州南方学院西区教学楼(2教旁边)",
        minFov: 30,
        base: "./assets/img/lowQualityImg/西区教学楼2_LOW.JPG",
        position: {longitude: 0, latitude: 0, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/westCampusBuilding2_LOW/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }, {
        desc: "广州南方学院西区宿舍楼",
        minFov: 30,
        base: "./assets/img/lowQualityImg/西区宿舍楼_LOW.JPG",
        position: {longitude: 0, latitude: 0, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/westDormitoryBuilding_LOW/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }, {
        desc: "广州南方学院西区操场",
        minFov: 30,
        base: "./assets/img/lowQualityImg/西操_LOW.JPG",
        position: {longitude: 3.6384973666430844, latitude: 0.01577493788707196, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/westPlayground_LOW/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }, {
        desc: "广州南方学院东区操场",
        minFov: 30,
        base: "./assets/img/lowQualityImg/东操正上方_LOW.JPG",
        position: {longitude: 3.592985535053417, latitude: .006586340407279234, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/eastPlayground_LOW/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }, {
        desc: "广州南方学院小花园",
        minFov: 30,
        base: "./assets/img/lowQualityImg/小花园_LOW.jpg",
        position: {longitude: 0, latitude: 0, zoom: 50},
        config: {
            width: 8192, cols: 32, rows: 16, tileUrl: (t, e) => {
                return `https://www.naiquoy.com/getPic/garden_compress/tile_${("000" + (32 * e + t)).slice(-4)}.jpg`
            }
        }
    }
]


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
                    longitude: 0.8274117307967339,
                    latitude: -1.186811816852619,
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
    if (marker.id === "video"){
        var video = document.querySelector("#video")
        let clientWidth = document.documentElement.clientWidth;
        if(clientWidth>1024){
            video.innerHTML= '<a class="layui-layer-close2" href="#"><img src="data:image/png;base64,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" alt=""></a>' +
                '<iframe height="576" width="1024" src="https://www.naiquoy.com/getPic/video/video80M.mp4"></iframe>'
        }else {
            let videoHeight = ((clientWidth-4)*9/16).toFixed()-4
            video.innerHTML= `<a href="#" class="layui-layer-close2"><img src="data:image/png;base64,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" alt=""></a>
<iframe height="${videoHeight}" width="${clientWidth-4}" src="https://www.naiquoy.com/getPic/video/video80M.mp4"></iframe>`
        }
        let closeBtn = document.querySelector("#video > a")
        closeBtn.addEventListener("click",function (){
            let paras = document.querySelector("#video")
            while(paras.hasChildNodes()) //当div下还存在子节点时 循环继续
            {
                paras.removeChild(paras.firstChild);
            }
        })
    }
    /*
    * 西体
    * 已完成
    * */
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
            //标点
            id: "xiqujiaoxuelou2",
            longitude: 3.1210786541896143,
            "latitude": -0.3377411098339669,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiqujiaoxuelou1",
            longitude: 2.0677700709878493,
            "latitude": -0.40077755094939493,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区教学楼&实验楼<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xicao",
            longitude: 4.3744983080912885,
            "latitude": -0.34614501757833427,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区操场<b>Click me!</b>"
        })

        markersPlugin.addMarker({
            // 文字提示
            id: '0.013445086922671878',
            longitude: 3.33725890790875,
            latitude: -0.16231608583385482,
            html: '广州南方学院<br/> <b>西区宿舍楼</b> &hearts;',
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
            id: '0.4823498693342816',
            longitude: 4.6010423045506466,
            latitude: -0.35590329837225076,
            html: '广州南方学院<br/> <b>西区操场</b> &hearts;',
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
            id: '0.4837745116128285',
            longitude: 5.409542630194491,
            latitude: -0.7552786709360313,
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
            // 文字提示
            id: '0.7010810805641747',
            longitude: 0.21848125547287273,
            latitude: -0.3214100172237164,
            html: '广州南方学院<br/> <b>孙中山铜像</b> &hearts;',
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
            id: '0.010818173562644473',
            longitude: 1.8433328469086971,
            latitude: -0.29440726675516915,
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
            // 文字提示
            id: '0.12129652680634884',
            longitude: 3.7284649201142015,
            latitude: -0.37528738640931625,
            html: '广州南方学院<br/> <b>西区饭堂</b> &hearts;',
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
            id: '0.9885461789207863',
            longitude: 2.392146244405965,
            latitude: -0.33164218617179064,
            html: '广州南方学院<br/> <b>西区教学楼及实验楼</b> &hearts;',
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
    /*
    * 铜像
    * 已完成
    * */
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
            longitude: 0.8274117307967339,
            latitude: -1.186811816852619,
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
        markersPlugin.addMarker({
            // html marker with custom style
            id: 'tips',
            longitude: 0.8441654860492099,
            latitude: 0.12089650931704266,
            html: 'Tips:点击<b>蓝色指针图标</b>即可前往相应地点噢~ &hearts;',
            anchor: 'top right',
            scale: [0.5, 1.5],
            style: {
                maxWidth: '300px',
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            }
        })
    }
    /*
    * 图书馆
    * 已完成
    * */
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
            //标点
            id: "dongti",
            longitude: 5.197868166467513,
            "latitude": -0.21914150189978532,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东体<b>Click me!</b>"
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
            //标点
            id: "dongcao",
            longitude: 5.75904533285544,
            "latitude": -0.24610880796806356,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东操<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiqujiaoxuelou2",
            longitude: 1.3802871683842202,
            "latitude": -0.23990018333081786,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区教学楼<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "zhongfan",
            longitude: 4.4736324942465595,
            "latitude": -0.4068157599579394,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往中区饭堂<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiqujiaoxuelou1",
            longitude: 1.0025465101343893,
            "latitude": -0.4957168757288968,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区教学楼&实验楼<b>Click me!</b>"
        })

        markersPlugin.addMarker({
            // 文字提示
            id: 'tushuguantext123',
            longitude: 6.26248690247201,
            latitude: -0.6527029418825707,
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
            longitude: 0.005877256095977216,
            latitude: -0.21884949046072943,
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
            // 文字提示
            id: 'hubniantext',
            longitude: 0.4723374142198251,
            latitude: -0.1859974704508689,
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
        markersPlugin.addMarker({
            // 文字提示
            id: '0.38539950330183936',
            longitude: 5.900800131951956,
            latitude: -0.226084645007123,
            html: '广州南方学院<br/> <b>东区操场</b> &hearts;',
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
            id: '0.8013611023393556',
            longitude: 5.36171775001335,
            latitude: -0.1944992381191799,
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
        markersPlugin.addMarker({
            // 文字提示
            id: '0.5593487095594354',
            longitude: 5.17159929233687,
            latitude: -0.12309509843993505,
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
            id: '0.17401490451648827',
            longitude: 2.423979393923545,
            latitude: -0.22235325104419812,
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
            // 文字提示
            id: '0.3414081128109272',
            longitude: 1.88363297013912,
            latitude: -0.17900777252997346,
            html: '广州南方学院<br/> <b>西区饭堂</b> &hearts;',
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
            id: '0.5807979447813452',
            longitude: 3.1327863200716712,
            latitude: -0.169470088467923,
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
            // 文字提示
            id: '0.9085565918009184',
            longitude: 4.139939772403578,
            latitude: -0.14623491935999078,
            html: '广州南方学院<br/> <b>音乐楼</b> &hearts;',
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
            id: '0.5019073253186379',
            longitude: 4.382298674125094,
            latitude: -0.28583140189311784,
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
            // 文字提示
            id: '0.8118623945711874',
            longitude: 0.9550410366729588,
            latitude: -0.25915383180657914,
            html: '广州南方学院<br/> <b>西区教学楼以及实验楼</b> &hearts;',
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
            id: '0.6420515830699842',
            longitude: 1.236296489206091,
            latitude: -0.14637333153551024,
            html: '广州南方学院<br/> <b>西区宿舍楼</b> &hearts;',
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
    /*
    * 中饭
    * 已完成
    * */
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
            //标点
            id: "dongqusushelou1",
            longitude: 0.2268987665210507,
            "latitude": -0.19896393695261194,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区宿舍楼<b>Click me!</b>"
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
            //标点
            id: "dongcao",
            longitude: 1.9857627633604211,
            "latitude": -0.22637262190581198,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区操场<b>Click me!</b>"
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
            id: '0.22182924621842504',
            longitude: 0.43584829294020627,
            latitude: -0.1505681055493917,
            html: '广州南方学院<br/> <b>东区宿舍楼</b> &hearts;',
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
            // 文字提示
            id: '0.653122687437466',
            longitude: 4.552878073006282,
            latitude: -0.13851749767183463,
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
            longitude: 5.881352741108866,
            latitude: -0.43627498448179525,
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
            id: '0.667588140559837',
            longitude: 1.2184333346974017,
            latitude: -0.13197456847052624,
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
            id: '0.5561538043319929',
            longitude: 1.577467168754951,
            latitude: -0.18589862057072626,
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
        markersPlugin.addMarker({
            // 文字提示
            id: '0.4074119260795299',
            longitude: 1.844452245003183,
            latitude: -0.16356927725481518,
            html: '广州南方学院<br/> <b>东区操场</b> &hearts;',
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
    /*
    * 东区宿舍楼(校医室)
    * 已完成
    * */
    if (marker.id === "dongqusushelou1") {
        markersPlugin.clearMarkers()
        loadPanorama(panos[5])
        markersPlugin.addMarker({
            //标点
            id: "dongti",
            longitude: 0.23998672545865865,
            "latitude": -0.3284200968808775,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "zhongfan",
            longitude: 1.4562559035939175,
            "latitude": -0.22673096572104434,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往中区饭堂<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "tushuguan",
            longitude: 0.9977684377106312,
            "latitude": -0.19579966378918812,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往图书馆<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "dongqusushelou2",
            longitude: 6.048793829726695,
            "latitude": -0.22686782957260165,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区宿舍楼<b>Click me!</b>"
        })


        markersPlugin.addMarker({
            // 文字提示
            id: '0.3685731561205885',
            longitude: 0.9461335294731112,
            latitude: -0.09611058000397898,
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
            // 文字提示
            id: '0.29785139605340927',
            longitude: 1.3318188509294813,
            latitude: -0.18472106759705698,
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
            // 文字提示
            id: '0.702050885643692',
            longitude: 1.6445163739005513,
            latitude: -0.14572362844158882,
            html: '广州南方学院<br/> <b>音乐楼</b> &hearts;',
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
            id: '0.24294654645901104',
            longitude: 0.3530984912935666,
            latitude: -0.2041455393350593,
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
        markersPlugin.addMarker({
            // 文字提示
            id: '0.14048176596773487',
            longitude: 6.196058208891956,
            latitude: -0.24844689048326574,
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
            id: '0.4179393890255034',
            longitude: 1.4110061644833243,
            latitude: -0.24295835613892502,
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
    /*
    * 西区教学楼1
    *
    * */
    if (marker.id === "xiqujiaoxuelou1") {
        markersPlugin.clearMarkers()
        loadPanorama(panos[9])
        markersPlugin.addMarker({
            //标点
            id: "xiqujiaoxuelou2",
            longitude: 0.5107147069046237,
            "latitude": -0.4141927878472105,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiaohuayuan",
            longitude: 5.887594093364013,
            "latitude": -0.33021164597012165,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往小花园<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xicao",
            longitude: 1.1671301112934063,
            "latitude": -0.1926450353785365,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西操<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiti",
            longitude: 1.6958501228347462,
            "latitude": -0.31278410588863315,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西体<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "tongxiang",
            longitude: 2.234156329052973,
            "latitude": -0.17768027474421588,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往铜像<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "tushuguan",
            longitude: 3.1864784976370735,
            "latitude": -0.5489454890057077,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往图书馆<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "dongcao",
            longitude: 4.080913374686231,
            "latitude": -0.1916009266029539,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区操场<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "hubian",
            longitude: 4.945750640572974,
            "latitude": -0.34455925431317613,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往湖边<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiqusushelou",
            longitude: 0.36861205846995027,
            "latitude": -0.2606074313836013,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区宿舍楼<b>Click me!</b>"
        })

        markersPlugin.addMarker({
            // 文字提示
            id: '0.9417605351193885',
            longitude: 0.16046450388755604,
            latitude: -0.18497652168882595,
            html: '广州南方学院<br/> <b>西区宿舍楼</b> &hearts;',
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
            id: '0.7973761242540522',
            longitude: 5.753506807795203,
            latitude: -0.27203392792200276,
            html: '广州南方学院<br/> <b>小花园</b> &hearts;',
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
            id: '0.4986848147659073',
            longitude: 5.332353714688335,
            latitude: -0.21350228659408987,
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
        markersPlugin.addMarker({
            // 文字提示
            id: '0.7357776758961883',
            longitude: 4.486785790467411,
            latitude: -0.16026633220572983,
            html: '广州南方学院<br/> <b>综合楼</b> &hearts;',
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
            id: '0.6560697031954219',
            longitude: 4.948130875854857,
            latitude: -0.07048468735637003,
            html: '广州南方学院<br/> <b>新综合楼</b> &hearts;',
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
            id: '0.7998509878544486',
            longitude: 3.9468336022644945,
            latitude: -0.14934312550889772,
            html: '广州南方学院<br/> <b>东区操场</b> &hearts;',
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
            id: '0.10392569519713968',
            longitude: 3.505507227619573,
            latitude: -0.430191726135162,
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
            // 文字提示
            id: '0.897794892466556',
            longitude: 1.6477855585003824,
            latitude: -0.1625589601148456,
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
            // 文字提示
            id: '0.9601129712073058',
            longitude: 1.358327712932235,
            latitude: -0.15645260187250654,
            html: '广州南方学院<br/> <b>西区操场</b> &hearts;',
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
            id: '0.45847929568819',
            longitude: 0.44004056242241235,
            latitude: -0.48468800232125275,
            html: '广州南方学院<br/> <b>②教学楼</b> &hearts;',
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
            id: '0.4433087300180558',
            longitude: 1.0226873477868221,
            latitude: -0.2404419973626979,
            html: '广州南方学院<br/> <b>西区饭堂</b> &hearts;',
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
    /*
    * 东区宿舍楼(东32)
    * 已完成
    * */
    if (marker.id === "dongqusushelou2") {
        markersPlugin.clearMarkers()
        loadPanorama(panos[8])
        markersPlugin.addMarker({
            //标点
            id: "dongcao",
            longitude: 0.5927911615890752,
            "latitude": -0.3189369981142258,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区操场<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "dongti",
            longitude: 1.5005784500292498,
            "latitude": -0.3543039837672177,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "dongqusushelou1",
            longitude: 2.06925367727762,
            "latitude": -0.14150353897186307,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区宿舍楼<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "hubian",
            longitude: 0.4047782041180285,
            "latitude": -0.18611986818922466,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往湖边<b>Click me!</b>"
        })


        markersPlugin.addMarker({
            // 文字提示
            id: '0.12119563877619566',
            longitude: 1.9097928160180715,
            latitude: -0.34321830858396907,
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
            id: '0.03767466155955668',
            longitude: 0.5827317564282642,
            latitude: -0.12230602729296791,
            html: '广州南方学院<br/> <b>综合楼</b> &hearts;',
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
            id: '0.47306668537950225',
            longitude: 0.4556133091112494,
            latitude: -0.28930896228108405,
            html: '广州南方学院<br/> <b>东区操场</b> &hearts;',
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
            id: '0.8396299134067962',
            longitude: 1.2014606481269838,
            latitude: -0.27404917266015816,
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
    /*
    * 东操
    * 已完成
    * */
    if (marker.id === "dongcao") {
        markersPlugin.clearMarkers()
        loadPanorama(panos[13])
        markersPlugin.addMarker({
            //标点
            id: "hubian",
            longitude: 2.040838650527128,
            "latitude": -0.3090791486657014,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往湖边<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "tongxiang",
            longitude: 3.254463129660213,
            "latitude": -0.10690427832237681,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往铜像<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "dongti",
            longitude: 4.358009002645485,
            "latitude": -0.23674953240203322,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "dongqusushelou2",
            longitude: 5.156474505326338,
            "latitude": -0.2635892310805359,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区宿舍楼<b>Click me!</b>"
        })


        markersPlugin.addMarker({
            // 文字提示
            id: '0.40854401723588896',
            longitude: 2.3552018743624825,
            latitude: -0.2494243338775448,
            html: '广州南方学院<br/> <b>综合楼</b> &hearts;',
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
            id: '0.12031722045704618',
            longitude: 4.3293105739914175,
            latitude: -0.31606353660049047,
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
        markersPlugin.addMarker({
            // 文字提示
            id: '0.9716491806498315',
            longitude: 4.666509722223248,
            latitude: -0.10927297527303637,
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
            id: '0.24360442444979769',
            longitude: 1.7662228292380995,
            latitude: -0.22342211398119605,
            html: '广州南方学院<br/> <b>新综合楼</b> &hearts;',
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
            id: '0.33793520289606316',
            longitude: 2.9771234338422254,
            latitude: -0.23149877376233108,
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
    }
    /*
    * 东体
    * 已完成
    * */
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
        markersPlugin.addMarker({
            //标点
            id: "dongqusushelou2",
            longitude: 4.954326961359208,
            "latitude": -0.40213764189646906,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区宿舍楼<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "dongcao",
            longitude: 0.11537062387945078,
            "latitude": -0.38086176732540844,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区操场<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "tushuguan",
            longitude: 1.1940783963568422,
            "latitude": -0.2496527608261787,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往图书馆<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "hubian",
            longitude: 0.39868454945590376,
            "latitude": -0.2219297557960378,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往湖边<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "zhongfan",
            longitude: 2.082806677962233,
            "latitude": -0.2843004457958611,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往中饭<b>Click me!</b>"
        })

        markersPlugin.addMarker({
            // 文字提示
            id: '0.23219223613995732',
            longitude: 2.189662601100713,
            latitude: -0.14068789622449596,
            html: '广州南方学院<br/> <b>音乐楼</b> &hearts;',
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
            id: '0.2911917638764032',
            longitude: 1.9685519083799328,
            latitude: -0.21321084442396376,
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
            // 文字提示
            id: '0.8109676235580952',
            longitude: 1.0753864742900339,
            latitude: -0.14586709522295127,
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
            // 文字提示
            id: '0.6785822329254176',
            longitude: 0.4292500557792467,
            latitude: -0.046842546476366875,
            html: '广州南方学院<br/> <b>综合楼&新综合楼</b> &hearts;',
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
            id: '0.2869195374698781',
            longitude: 6.183388633583108,
            latitude: -0.3699926606549393,
            html: '广州南方学院<br/> <b>东区操场</b> &hearts;',
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
            id: '0.6891890678772621',
            longitude: 0.2926168079663232,
            latitude: -0.797190861629137,
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
        markersPlugin.addMarker({
            // 文字提示
            id: '0.7116027238339799',
            longitude: 4.423893778701013,
            latitude: -0.5559343140105115,
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
    }
    /*
    * 湖边
    * 完成
    * */
    if (marker.id === "hubian") {
        markersPlugin.clearMarkers();
        loadPanorama(panos[7])
        markersPlugin.addMarker({
            //标点
            id: "dongcao",
            longitude: 1.1388432604149765,
            "latitude": -0.2776547923518442,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往东区操场<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiqujiaoxuelou2",
            longitude: 5.045683036588991,
            "latitude": -0.2451366191818407,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "tushuguan",
            longitude: 6.2398819048611545,
            "latitude": -0.2853470904893094,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往图书馆 <b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiaohuayuan",
            longitude: 4.315403824950234,
            "latitude": -0.35874983279239636,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往小花园<b>Click me!</b>"
        })

        markersPlugin.addMarker({
            // 文字提示
            id: '0.871442187972959',
            longitude: 0.09648120428609447,
            latitude: -0.2681113277590723,
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
            // 文字提示
            id: '0.997456861671911',
            longitude: 5.237703043742778,
            latitude: -0.14525075004413512,
            html: '广州南方学院<br/> <b>西区饭堂</b> &hearts;',
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
            id: '0.846445014492563',
            longitude: 1.3936325695036789,
            latitude: -0.2758113762161438,
            html: '广州南方学院<br/> <b>东区操场</b> &hearts;',
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
            id: 'nanfanghutext2',
            longitude: 3.2587237343271642,
            latitude: -0.61765302027906,
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
        })
        markersPlugin.addMarker({
            // 文字提示
            id: 'xinzong',
            longitude: 2.600409261123123,
            latitude: -0.4816118096606061,
            html: '广州南方学院<br/> <b>新综合楼</b> &hearts;',
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
            id: '0.7081581767040157',
            longitude: 1.192925109861377,
            latitude: -0.38164222008821325,
            html: '广州南方学院<br/> <b>综合楼</b> &hearts;',
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
            id: '0.863247180690587',
            longitude: 5.000478620292659,
            latitude: -0.5916440174427384,
            html: '广州南方学院<br/> <b>西区实验楼</b> &hearts;',
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
    /*
    * 小花园
    * 完成
    * */
    if (marker.id === "xiaohuayuan") {
        markersPlugin.clearMarkers()
        loadPanorama(panos[14])
        markersPlugin.addMarker({
            //标点
            id: "hubian",
            longitude: 4.310336989259085,
            "latitude": -0.28534982842719714,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往湖边<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiqujiaoxuelou2",
            longitude: 2.492025876635258,
            "latitude": -0.40900909620585013,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区<b>Click me!</b>"
        })

        markersPlugin.addMarker({
            // 文字提示
            id: '0.11068217256689317',
            longitude: 2.5098276146559972,
            latitude: -0.26900756073132515,
            html: '广州南方学院<br/> <b>西区</b> &hearts;',
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
            id: '0.18230743579287556',
            longitude: 4.521376299519249,
            latitude: -0.21670127358254998,
            html: '广州南方学院<br/> <b>新综合楼</b> &hearts;',
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
            id: '0.4230186458604086',
            longitude: 4.067110228713142,
            latitude: -0.19733159392330046,
            html: '广州南方学院<br/> <b>综合楼</b> &hearts;',
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
            id: '0.3526189021956041',
            longitude: 5.9937098240534405,
            latitude: -0.6951022169043775,
            html: '广州南方学院<br/> <b>教师公寓</b> &hearts;',
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
            id: '0.20159156426249036',
            longitude: 3.5315230320307713,
            latitude: -0.17204657273683654,
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
    }
    /*
    * 西区宿舍楼
    * 已完成
    * */
    if (marker.id === "xiqusushelou") {
        markersPlugin.clearMarkers()
        loadPanorama(panos[11])
        markersPlugin.addMarker({
            //标点
            id: "xiaohuayuan",
            longitude: 5.745886692115489,
            "latitude": -0.47685615064686715,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往小花园<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xicao",
            longitude: 3.696177019270196,
            "latitude": -0.17699176853738963,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区操场<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiqujiaoxuelou2",
            longitude: 4.356027222216381,
            "latitude": -0.37330834760980003,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiti",
            longitude: 4.199220225959394,
            "latitude": -0.16639011753515565,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区体育馆<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "tushuguan",
            longitude: 4.8168259112582925,
            "latitude": -0.1750926584154442,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往图书馆<b>Click me!</b>"
        })

        markersPlugin.addMarker({
            // 文字提示
            id: '0.41477965536475225',
            longitude: 4.940552339143132,
            latitude: -0.14086312989335292,
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
            // 文字提示
            id: '0.5004523656143325',
            longitude: 4.578639472203154,
            latitude: -0.33552248844666654,
            html: '广州南方学院<br/> <b>②教学楼</b> &hearts;',
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
            id: '0.6898106641639914',
            longitude: 3.6858123126198636,
            latitude: -0.0535739867801146,
            html: '广州南方学院<br/> <b>西区操场</b> &hearts;',
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
            id: '0.7094887542340511',
            longitude: 3.921492645280742,
            latitude: -0.2192241052377113,
            html: '广州南方学院<br/> <b>西区饭堂</b> &hearts;',
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
            id: '0.828308929476191',
            longitude: 5.665670509134239,
            latitude: -0.39430173740266805,
            html: '广州南方学院<br/> <b>小花园</b> &hearts;',
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
    /*
    * 西区教学楼2
    * 已完成
    * */
    if (marker.id === "xiqujiaoxuelou2") {
        markersPlugin.clearMarkers();
        loadPanorama(panos[10])

        markersPlugin.addMarker({
            //标点
            id: "xiti",
            longitude: 5.101968816825885,
            "latitude": -0.1948912667901297,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区体育馆<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiqusushelou",
            longitude: 2.308603174927615,
            "latitude": -0.30547271771880924,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区宿舍楼<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "tushuguan",
            longitude: 6.0299340859887804,
            "latitude": -0.20311938774111749,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往图书馆<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xicao",
            longitude: 4.3140995869618015,
            "latitude": -0.15100803235646376,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区操场<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiaohuayuan",
            longitude: 1.317282054401495,
            "latitude": -0.29948015921576965,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往小花园<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            // 文字提示
            id: 'video',
            longitude:  0.10109928937330641,
            latitude:  -0.4201388185675936,
            html: '点击这里<br/> <b>观看宣传视频</b> &hearts;',
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
            id: '0.7488245290692683',
            longitude: 1.5145177536334973,
            latitude: -0.3093918325989331,
            html: '广州南方学院<br/> <b>小花园</b> &hearts;',
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
            id: '0.035142676247962745',
            longitude: 4.505617914987124,
            latitude: -0.23475898483085245,
            html: '广州南方学院<br/> <b>西区饭堂</b> &hearts;',
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
            id: '0.5857917017719307',
            longitude: 4.4352370681473605,
            latitude: -0.12646698848893134,
            html: '广州南方学院<br/> <b>西区操场</b> &hearts;',
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
            id: '0.6879711493749221',
            longitude: 2.36314788813473,
            latitude: -0.17485358843664867,
            html: '广州南方学院<br/> <b>西区宿舍楼</b> &hearts;',
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
            id: '0.0732527314367899',
            longitude: 4.946859791808812,
            latitude: -0.12168618603713455,
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
            // 文字提示
            id: '0.29163287661816883',
            longitude: 6.160668225246748,
            latitude: -0.11446257536889037,
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
            // 文字提示
            id: '0.19439700205909616',
            longitude: 5.9330238746569215,
            latitude: -0.7651119850462464,
            html: '广州南方学院<br/> <b>②教学楼</b> &hearts;',
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
    /*
    * 西操
    * xicao
    * */
    if(marker.id==="xicao"){
        markersPlugin.clearMarkers();
        loadPanorama(panos[12])
        markersPlugin.addMarker({
            //标点
            id: "xiqujiaoxuelou2",
            longitude: 3.8051747100286923,
            "latitude": -0.27542413211195593,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "tongxiang",
            longitude: 2.3573079434329722,
            "latitude": -0.19803357683648648,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往xxx<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiti",
            longitude: 2.7598046995062724,
            "latitude": -0.31973232796306883,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区体育馆<b>Click me!</b>"
        })
        markersPlugin.addMarker({
            //标点
            id: "xiqusushelou",
            longitude: 4.222729793345154,
            "latitude": -0.21158642450286602,
            "image": "./assets/img/marker/pin-blue-small.png",
            "width": 32,
            "height": 32,
            "anchor": "center center",
            "tooltip": "前往西区宿舍楼<b>Click me!</b>"
        })

        markersPlugin.addMarker({
            // 文字提示
            id: '0.8545248190487709',
            longitude:  3.6159068735460247,
            latitude:  -0.12663289555381274,
            html: '广州南方学院<br/> <b>西区教学楼</b> &hearts;',
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
            id: '0.8961103962078958',
            longitude:  4.267422809489899,
            latitude:  0.00478476863177657,
            html: '广州南方学院<br/> <b>西区宿舍楼</b> &hearts;',
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
            id: '0.14465253468029893',
            longitude:  2.476679832229548,
            latitude:  -0.3655913000218418,
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
            // 文字提示
            id: '0.2763158140101023',
            longitude:  3.677226951816791,
            latitude:  -0.3775820070616014,
            html: '广州南方学院<br/> <b>西区饭堂</b> &hearts;',
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
            id: '0.7796139057741727',
            longitude:  3.3886289322048917,
            latitude:  -0.9558048334150708,
            html: '广州南方学院<br/> <b>西区操场</b> &hearts;',
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
