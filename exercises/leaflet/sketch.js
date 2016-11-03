var quakeMap;
var canvas;
var quakes = [];
var mags = [];
var slider;


function setup(){
    canvas = createCanvas(windowWidth, windowHeight); // creates a canvas and stores it in a variable to use it to place in a div
    canvas.parent('quakeMap'); // canvas is now contained in the div - quakeMap
    initLeaflet(); // displays the base map on the canvas
    
    loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv', parseSource);
    
    slider = createSlider(0, 10, 1);
    slider.position(width/2 - 50, 25);
    slider.changed(updateQuakes);
}

function initLeaflet() {
    
    L.mapbox.accessToken = 'pk.eyJ1IjoiamFpbnNhbWJoYXYiLCJhIjoiY2l1aW5uOTZ5MDAwOTJvcGxrMWg4OHUxciJ9.X8mAbHJEKa78PHXfVRK5-Q'
    quakeMap = L.mapbox.map('quakeMap', 'mapbox.light').setView([10, 18], 2);
    
}

function parseSource(data) {
    for(var i = 1; i<= data.length; i++){
        var row = split(data[i], ',');
        
        mags[i] = row[4];
        var place = row[13];
        
        quakes[i] = L.circleMarker([row[1], row[2]], {
            stroke: true,
            weight: 1,
            fillColor: '#c60000',
            color: '#7c0000',
            opacity: 0.3,
            fillOpacity: 0.8,
            radius: row[4]
        });
        
        quakes[i]
        .addTo(quakeMap)
        .bindPopup('<b>' + row[4] + '<b> magnitude ' + place);
    }
}

function updateQuakes(){
    for(var i = 1; i < quakes.length; i++){
        if(mags[i] > slider.value()){
            quakes[i].setRadius(mags[i]);
        }else{
            quakes[i].setRadius(0);
        }
    }
}