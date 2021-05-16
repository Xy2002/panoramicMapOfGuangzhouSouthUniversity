var buttonId = 'panel-button'
var panelId = 'custom-panel';
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
                return `./assets/img/bronzeStatue/title_${('000' + num).slice(-4)}.jpg`;
            },
        },
    },
    {
        desc: '广州南方学院西区体育馆',
        minFov: 30,
        base: `./assets/img/lowQualityImg/xiti_LOW.JPG`,
        position: {longitude: 0, latitude: 0, zoom: 50},
        config: {
            width: 8192,
            cols: 32,
            rows: 16,
            tileUrl: (col, row) => {
                const num = row * 32 + col
                return `./assets/img/xiti/tile_${('000' + num).slice(-4)}.jpg`;
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
                return `./assets/img/library/title_${('000' + num).slice(-4)}.jpg`;
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
            markers: [{
                // image marker that opens the panel when clicked
                id: 'xiti',
                longitude: 1.8659846301431282,
                latitude: -0.2775064583786597,
                image: './assets/img/marker/pin-blue-small.png',
                width: 32,
                height: 32,
                anchor: 'center center',
                tooltip: '前往西区体育馆<b>Click me!</b>',
            }, {
                // image marker that opens the panel when clicked
                id: 'tushuguan',
                longitude: 0.8635927013958947,
                latitude: -0.2663033502758694,
                image: './assets/img/marker/pin-blue-small.png',
                width: 32,
                height: 32,
                anchor: 'center center',
                tooltip: '前往图书馆<b>Click me!</b>',
            }]
        }
        ]],
    loadingImg: 'assets/photosphere-logo.gif',
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
    console.log(data)
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
