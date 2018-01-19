var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,				
				lat: -37.7999279,
				lng: 144.90049,
			  });
			  
			  var marker = map.addMarker({
			      lat: -37.7999279,
			      lng: 144.90049,
	            title: 'Awash African, Restaurant.'
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat: -37.7999279,
		        lng: 144.90049,
		      });
		    });
		}        

    };
}();