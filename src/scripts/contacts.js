$(document).ready(function() {
	if($('#ContactsMap').length > 0){
		contactsMapInit();
	}
});

function contactsMapInit() {
	var zoom = 12;
	var mapCenter = new google.maps.LatLng(55.349843, 86.105248);

	if ($(document).width() >= 980) {
		zoom = 13;
	} else if ($(document).width() >= 1188) {
		zoom = 14;
	}

	let mapOptions = {
		center: mapCenter,
		zoom: zoom,
		scrollwheel: false,
		disableDefaultUI: true,
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_TOP
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [{
				"stylers": [{
					"hue": "#95A3B9"
				}]
			},
			{
				"featureType": "poi",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"featureType": "road",
				"stylers": [{
					"saturation": -70
				}]
			},
			{
				"featureType": "transit",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"featureType": "water",
				"stylers": [{
						"saturation": -60
					},
					{
						"visibility": "simplified"
					}
				]
			}
		]
	};

	let map = new google.maps.Map(
		document.getElementById("ContactsMap"),
		mapOptions
	);

	var mainOffice = new google.maps.Marker({
		position: new google.maps.LatLng(55.349843, 86.105248),
		map: map,
		icon: {
			url: '/img/map-mayak.png',
			scaledSize: new google.maps.Size(82, 82)
		}
	});
}