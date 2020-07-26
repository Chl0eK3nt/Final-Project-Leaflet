// creates the leaflet map variable and sets the center of the map to my friend's property
var map = L
    .map('map')
    .setView([36.500928, -79.991763], 15);

// Add ESRI world streetmap tiles layer
var ESRI = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map); 

// Add historical layer
var Historical = L.tileLayer('./historicaltiles/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">Historical</a> contributors'
}).addTo(map);
// create custom icons!
var ATA = L.icon({
iconUrl: 'https://www.themilitaryplace.com/wp-content/uploads/2016/10/atasm-1000x1000.png?x68946',
iconSize: [80, 80], // size of the icon
popupAnchor: [0,-15]
});
var spitfire = L.icon({
iconUrl: 'https://i.ibb.co/yRzhzxB/plane.png', // icon url
iconSize: [70, 70], // size of the icon
popupAnchor: [0,-15] // where the popup should go
});
var royalcrown = L.icon({
iconUrl: 'https://images.vexels.com/media/users/3/151208/isolated/preview/a61b4830c6f330b4eb2a8db3a99ebc38-royal-crown-icon-by-vexels.png', // icon url
iconSize: [50, 50], // size of the icon
popupAnchor: [-15,0] // where the popup should go
});
var star = L.icon({
iconUrl: 'https://img.icons8.com/plasticine/2x/star.png', // icon url
iconSize: [50, 50], // size of the icon
popupAnchor: [0,-15] // where the popup should go
});
//MARKER 1 & POPUP 1
// create popup contents for popup 1
var customPopup1 = "<center><b>The Air Transport Auxiliary (ATA)</b> was a British civilian organisation set up during the Second World War and headquartered at White Waltham Airfield that ferried new, repaired and damaged military aircraft between factories, assembly plants, transatlantic delivery points, maintenance units (MUs), scrap yards, and active service squadrons and airfields, but not to naval aircraft carriers. It also flew service personnel on urgent duty from one place to another and performed some air ambulance work. Notably, some of its pilots were women, and from 1943 they received equal pay to their male co-workers, a first for the British government.<br/><img src='https://i.ibb.co/7JSS0H2/Q-Women-Pilots5.jpg' alt='ATA Pilot' width='200px'/></center>";
// specify popup options for popup 1
var customOptions1 =
{
'maxWidth': '500',
'className' : 'custom1'
}
// add marker, define custom icon as option, assign content and options to the popup, and add to map
var marker1 = L.marker([51.498163, -0.773273], {icon: ATA}).bindPopup(customPopup1,customOptions1).addTo(map);
//MARKER 2 & POPUP 2
// create popup contents for popup 2
var customPopup2 = "<center><b>Runway 21</b><br>White Waltham (EGLM) has three runways. Did you know that the name of the runway changes, depending on which way you are landing or taking off? An approach at this end would make this Runway 21 (pronounced two-one, not twenty-one). The runways on White Waltham were paved during WWII, but have returned to grass (soft) runways today. <br/><img src='https://i.ibb.co/yk34rV1/runway21.png' alt='ATA Pilot' width='200px'/></center>";
// specify popup options 2
var customOptions2 =
{
'maxWidth': '500',
'className' : 'custom2'
}
var marker2 = L.marker([51.503929, -0.768647], {icon: spitfire}).bindPopup(customPopup2,customOptions2).addTo(map);
//MARKER 3 & POPUP 3
// create popup contents for popup 3
var customPopup3 = "<center><b>Royal History</b><br>Prince Philip, Duke of Edinburgh was taught to fly at White Waltham in 1952, flying a De Havilland Chipmunk belonging to HQ Home Command Communications Squadron of the Royal Air Force.<br><img src='https://i.insider.com/5dee6a06fd9db248962f8afc?width=1100&format=jpeg&auto=webp' alt='popup3' width='200px'/></center>";
// specify popup options
var customOptions3 =
{
'maxWidth': '500',
'className' : 'custom3'
}
var marker3 = L.marker([51.495904, -0.775047], {icon: royalcrown}).bindPopup(customPopup3,customOptions3).addTo(map);
//MARKER 4 & POPUP 4
// create popup contents for popup 4
var customPopup4 = "<center><b>Aircraft Tiedowns</b><br>These spherical shapes can be seen all over aerial photos of airfields during WWII. They were blast shields built up around the aircraft tie-down to protect the aircraft.<br><img src='https://lh5.googleusercontent.com/proxy/dUO4SbFGzsHUcllmNJx5QD4uoeDjNM5k9cYECv9_JiArbfYVYgDqARMd3udz5xDj2JbTcGMvL7N_yA84d8ee_2c6bSDH3syR60b4G8uiVdy0nuGODnjvEA' alt='popup4' width='200px'/></center>";
// specify popup options
var customOptions4 =
{
'maxWidth': '500',
'className' : 'custom4'
}
var marker4 = L.marker([51.49635, -0.78082], {icon: star}).bindPopup(customPopup4,customOptions4).addTo(map);
//MARKER 5 & POPUP 5
// create popup contents for popup 5
var customPopup5 = "<center><b>Maidenhead Office Park</b><br>Then: fields. Now? An office park! What was once just fields is now bustling with activity.<br><img src='https://i.ibb.co/hy00CPp/Maidenhead-Office-Park.jpg' alt='popup4' width='200px'/></center>";
// specify popup options
var customOptions5 =
{
'maxWidth': '500',
'className' : 'custom5'
}
var marker5 = L.marker([51.50127, -0.77429], {icon: star}).bindPopup(customPopup5,customOptions5).addTo(map);
//MARKER 6 & POPUP 6
// create popup contents for popup 6
var customPopup6 = "<center><b>Waltham Road</b><br>Maidenhead, the city where White Waltham Airfield is located, is far more developed than it was during WWII. It's interesting to see that this main road has pretty much remained the same. It's now an expensive road to live on, with average house prices being around £740,000 in 2019. If taking public transportation, Maidenhead is about one hour away from central London, but only thirty minutes from Windsor Castle, where the Queen of England spends a considerable amount of time. Maidenhead is a lovely town, full of history and in a great location. Pictured: Maidenhead Railway Bridge.<br><img src='https://i.ibb.co/XbNG7QD/maidenheadrailwaybridge.jpg' alt='popup4' width='200px'/></center>";
// specify popup options
var customOptions6 =
{
'maxWidth': '500',
'className' : 'custom6'
}
var marker6 = L.marker([51.49656, -0.76623], {icon: star}).bindPopup(customPopup6,customOptions6).addTo(map);
// add two points to use for the runway
var toUnion = [[51.495360, -0.775454],[51.503929, -0.768647]];
// add the line between the points, make it light blue
var polylineLayer = L.polyline(toUnion,{color:'lightblue',opacity:1}).addTo(map);
// adding a circle around the center of the airfield, stroke color yellow, fill blue with low opacity
var circle = L.circle([51.498163, -0.773273], 800,{color:'yellow',opacity:1,fillColor: 'yellow',fillOpacity:.2}).addTo(map);
// Define base layer
var baseLayers = {
"Base Map": ESRI
// Define the historical overlay and markers
};
var overlays = {
"White Waltham Airfield and Surrounding Area" : circle,
"Aerial Image, WWII": Historical,
"Runway 21": polylineLayer,
"ATA Headquarters": marker1,
"Runway Information": marker2,
"Royal History": marker3,
"Aircraft Tiedowns": marker4,
"Maidenhead Office Park": marker5,
"Waltham Road": marker6
};
//add it all to the map!
L.control.layers(baseLayers, overlays).addTo(map);
