// creates the leaflet map variable and sets the center of the map to my friend's property
var map = L
    .map('map')
    .setView([36.500523, -79.993362], 15);

// Add ESRI world streetmap tiles layer
var ESRI = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map); 

// Add historical layer from 2010
var Historical = L.tileLayer('./orthoimagery/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">Historical</a> contributors'
}).addTo(map);

//add polygon representing property boundaries
 var polygonPoints = [
        [36.5003271, -79.9901973],
        [36.5006751, -79.9913436],
        [36.5006775, -79.9916075],
        [36.5022402, -79.9931612],
        [36.5027061, -79.9950958],
        [36.4990092, -79.9951587],
        [36.4988503, -79.9914422]
 ];
var poly = L.polygon(polygonPoints).addTo(map);

// add line representing the main dirt road
var toUnion = [[36.501261, -79.993594],
               [36.500462, -79.992969],
               [36.500679, -79.991294],
               [36.499906, -79.989058],
               [36.498620,-79.988327]];
var road = L.polyline(toUnion,{color:'red',opacity:1}).addTo(map);

// Creates marker and popup for the cabin
var cabin = L.icon({
iconUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/b8/d8/be/outside-the-cabin-at.jpg',
iconSize: [30, 30], 
popupAnchor: [0,-15]
});
var cabpop = "<center><b>The Cabin</b><br>Built in 2015, the cabin does not show up on historic orthoimagery. It is a one room cabin with no utilities and a single bed, built for camping and storage of tools and materials.<br/><img src='https://i.pinimg.com/originals/cd/92/6a/cd926a092edb49c2a1588c4a3316d1e7.jpg' alt='The Cabin' width='200px'/></center>";
var cabopt =
{
'maxWidth': '500',
'className' : 'custom1'
}
var cabinn = L.marker([36.5012880, -79.9936034], {icon: cabin}).bindPopup(cabpop,cabopt).addTo(map);

//creates marker and popup for northern neighbor
var mayo = L.icon({
iconUrl: 'https://www.townofmayodan.com/wp-content/uploads/2015/10/IMG_04831-e1446239155980.jpg', 
iconSize: [70, 40], 
popupAnchor: [0,-15] 
});
var mayopop = "<center><b>The Northern Neighbor</b><br>The land north of my friend's property has changed quite a bit since the historic orthoimagery. The trees were clear cut in 2017, and the parcel was subsequently sold to the United States government. Although currently unused, the government plans to restore this land and incorporate it into Mayo River State Park. <br/><img src='https://www.thoughtco.com/thmb/R-IsIIgh-_E7fxAnLHovq6uZjh4=/1884x1413/smart/filters:no_upscale()/ariel-view-of-trees-being-cut-down-in-the-pine-forest-1072438388-4ff7dd4154674294a028b806facc69fb.jpg' alt='Clear-cut trees' width='200px'/></center>";
var mayoopt =
{
'maxWidth': '500',
'className' : 'custom2'
}
var mayoo = L.marker([36.505404,-79.994410], {icon: mayo}).bindPopup(mayopop,mayoopt).addTo(map);

//creates marker and popup for dead neighbor
var dead = L.icon({
iconUrl: 'https://ap.rdcpix.com/c914d91f95055686804e5f2a23623c0el-m187742026xd-w1020_h770_q80.jpg', 
iconSize: [30, 30], 
popupAnchor: [0,-15] 
});
var deadpop = "<center><b>The Southern Neighbor</b><br>This property was owned by an old lady during historical imagery. However she has since passed, and her property is for sale. Today, the grass on her property is overgrown and full of small trees--this change is visible on recent satellite imagery.<br><img src='https://ssl.cdn-redfin.com/photo/150/mbphoto/195/genMid.975195_29_2.jpg' alt='Overgrown house' width='200px'/></center>";
var deadopt =
{
'maxWidth': '500',
'className' : 'custom4'
}
var deadd = L.marker([36.499266, -79.988309], {icon: dead}).bindPopup(deadpop,deadopt).addTo(map);

//creates marker and popup for cemetary
var cemetary = L.icon({
iconUrl: 'https://www.citynews1130.com/wp-content/blogs.dir/sites/9/2018/12/05/iStock-1006480588.jpg', 
iconSize: [30, 30], 
popupAnchor: [0,-15] 
});
var cempop = "<center><b>The Cemetary</b><br>This cemetary is located on the road up to my friend's property. It contains graves from all the way back to the 1700's.<br><img src='https://lh3.googleusercontent.com/proxy/nawQ7otDHSoHv-c24ns1qoMMaNZ_hI6Tb-GFSdyIWyikRHZPDSdT-Vf9kWlaO2FiMRbCWKGZmVLQaP0ajATWiS_rZimHBpjpLjVYV5Q_6vI13VpTALVR4Q4mG2_mAxOuFojVEcT72zgXkPHyvqCMdQO7OVua0D1o9jhlnqmnRVI50o9IVQqVZa52QeNMVeUHTloJChG21fIKLva8Qf1UNQ3gAB65dTU-mRwq6RE5TigwNE1V1_1ip376_A' alt='Cemetary' width='200px'/></center>";
var cemopt =
{
'maxWidth': '500',
'className' : 'custom4'
}
var cemetaryy = L.marker([36.500230, -79.989672], {icon: cemetary}).bindPopup(cempop,cemopt).addTo(map);

//creates marker for deer camp
var deer = L.icon({
iconUrl: 'https://tpwd.texas.gov/huntwild/wild/game_management/deer/images/WTD-Headshot.jpg', 
iconSize: [30, 30], 
popupAnchor: [0,-15] 
});
var deerpop = "<center><b>The Deer Camp</b><br>This is where the deer camp is located, where my friend hunts for food.<br><img src='https://feedbandit.com/wp-content/uploads/2018/06/IMAG1504-e1529506431633.jpg' alt='Deer Camp' width='200px'/></center>";
var deeropt =
{
'maxWidth': '500',
'className' : 'custom4'
}
var deerr = L.marker([36.499634, -79.994164], {icon: deer}).bindPopup(deerpop,deeropt).addTo(map);

//creates marker for 
var pond = L.icon({
iconUrl: 'https://www.pondexperts.ca/wp-content/uploads/2012/02/pond-consulting-hydrosphere.jpg', 
iconSize: [50, 30], 
popupAnchor: [0,-15] 
});
var pondpop = "<center><b>The Pond</b><br>Although this pond is not on the property, the owners of the pond allow my friend to use it for fishing.<br><img src='https://www.hakaimagazine.com/wp-content/uploads/header-fish-feel.jpg' alt='Fish' width='200px'/></center>";
var pondopt =
{
'maxWidth': '500',
'className' : 'custom4'
}
var pondd = L.marker([36.498250, -79.994406], {icon: pond}).bindPopup(pondpop,pondopt).addTo(map);


// Define base layer
var baseLayers = {
"Base Map": ESRI
// Define the historical overlay and markers
};
var overlays = {
"My Friend's Property Boundaries" : poly,
"Historical Orthoimagery, 2010": Historical,
"Main Dirt Road": road,
"The Cabin": cabinn,
"The Northern Neighbor": mayoo,
"The Southern Neighbor": deadd,
"Cemetary": cemetaryy,
"The Deer Camp": deerr,
"The Neighbor's Pond": pondd
};
//add it all to the map!
L.control.layers(baseLayers, overlays).addTo(map);
