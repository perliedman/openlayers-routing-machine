var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: 'map',
  view: new ol.View({
    center: ol.proj.fromLonLat([11.94, 57.7]),
    zoom: 12
  })
});

var waypoints = [
  [11.94, 57.74],
  [11.949, 57.6792]
]
var control = new olrm.Control({
  map,
  waypoints
});

map.addControl(control)