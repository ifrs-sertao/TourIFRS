        var mapSW = [0, 4096],
            mapNE = [4096, 0];
        
        var map = L.map('map').setView([0,0],2);
        
        L.tileLayer('imagens/{z}/{x}/{y}.png', {
        minZoom: 1,
        maxZoom: 4,
        continuousWorld: false,
        noWrap: true,
        crs: L.CRS.Simple,
        }).addTo(map);
        
        map.setMaxBounds(new L.LatLngBounds(
           map.unproject(mapSW, map.getMaxZoom()), map.unproject(mapNE, map.getMaxZoom()) 
        ));
        
        var marcador = L.icon ({
            iconURL: 'images/marker-icon-2x.png',
            iconSize: [20, 30],
            iconAnchor: [22, 98],
            popupAnchor: [0, 100]
});
            
                
        
        //Marcador usado para pegar posição em Pixels
        var ref = L.marker([0,0], {
            draggable: true,
        }).addTo(map);
        ref.bindPopup('');
                
        ref.on ('dragend', function (e) {
           // ref.getPopup().setContent('Clicked' + ref.getLatLng().toString()+'br/>'+ 'Pixels' + map.project(ref.getLatLng(), map.getMaxZoom().toString())) .openOn(map); 
			latlng = ref.getLatLng().toString().split(',')
	        lat = latlng[0]
	        lng = latlng[1]
	        rslt = lng.split(')')[0]+","+lat.split('(')[1];
           ref.getPopup().setContent(rslt).openOn(map)
        });



        // features do GEOjson
        var estruturas = [{
		    "type": "Feature",
		    "properties": {"nome": "Administrativo/Biblioteca",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
		        				[29.44,-69.38],
		        				[30.7,-71.7],
		        				[37.4,-71.5],
		        				[37.08,-69.28]
		        				]]
		    }
		},
		
		/* Marcador açude 
		{
		    "type": "Feature",
		    "properties": {"nome": "Açude",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
		        				[-0.878906,-34.741612],
		        				[0.351563,-40.979898],
		        				[17.753906,-39.909736],
		        				[26.894531,-43.068888],
		        				[34.453125,-41.112469],
		        				[36.035156,-37.857507],
		        				[35.507813,-35.88905],
		        				[30.058594,-33.28462],
		        				[15.46875,-35.603719],
		        				[4.570313,-33.870416]
		        				]]
		    },
		},
		*/
		
		{
		    "type": "Feature",
		    "properties": {"nome": "Pórtico",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
		        				[41.396484,-72.633374],
		        				[41.835938,-72.127936],
		        				[35.947266,-72.019729],
		        				[36.298828,-72.501722]
		        				]]
		    },
		},
		
		{
		    "type": "Feature",
		    "properties": {"nome": "Prédio Central/Secretaria",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[42.539063,-60.457218],
								[54.667969,-59.712097],
								[56.337891,-66.791909],
								[45,-67.407487]
								]]
			},
		},
		
		{
		    "type": "Feature",
		    "properties": {"nome": "Salas (Bloco A/ Bloco B)",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
		        				[26.015625,-68.911005],
								[23.730469,-62.390369],
								[8.173828,-63.391522],
								[9.667969,-69.718107]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Ginásio de esportes",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[30.146484,-56.267761],
		        				[31.113281,-59.265881],
		        				[38.847656,-58.7682],
		        				[37.880859,-55.776573]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Restaurante",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[53.789063,-53.225768],
		        				[54.228516,-55.72711],
		        				[43.681641,-56.267761],
		        				[43.330078,-53.696706]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Quadras poliesportivas",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[32.519531,-59.977005],
		        				[34.189453,-66.443107],
		        				[39.375,-66.231457],
		        				[37.617188,-59.623325]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Almoxarifado",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[59.238281,-62.512318],
		        				[59.853516,-65.58572],
		        				[63.720703,-65.476508],
		        				[63.105469,-62.308794]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Ambulatório",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[64.423828,-63.035039],
		        				[66.181641,-62.915233],
		        				[65.917969,-61.100789],
		        				[64.160156,-61.143235]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Prédio Biologia",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[59.677734,-59.623325],
		        				[59.765625,-61.270233],
		        				[65.390625,-61.100789],
								[65.039063,-59.445075]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Prédio Tecnologia da Informação",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[58.974609,-56.897004],
		        				[59.501953,-58.7682],
		        				[65.039063,-58.585436],
								[64.423828,-56.848972]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Coopera",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[63.193359,-50.176898],
		        				[67.236328,-49.95122],
		        				[67.412109,-53.173119],
								[63.632813,-53.173119]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Academia",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[26.455078,-53.540307],
		        				[28.652344,-53.696706],
		        				[29.179688,-54.826008],
								[27.861328,-55.627996],
								[25.664063,-55.229023],
								[25.400391,-54.265224]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Alojamento masculino",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[62.841797,-48.69096],
		        				[63.017578,-45.706179],
		        				[64.072266,-43.771094],
								[64.335938,-40.580585],
								[64.160156,-35.029996],
								[72.246094,-34.957995],
								[72.597656,-38.754083],
								[72.509766,-40.580585],
								[72.509766,-44.087585],
								[71.103516,-45.644768],
								[71.015625,-48.806863]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Centro de estudos em defesa sanitária vegetal",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-82.617188,-68.366801],
		        				[-78.574219,-68.974164],
		        				[-79.541016,-69.748551],
								[-83.759766,-69.037142]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Olericultura",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[15.732422,-25.085599],
		        				[18.632813,-25.244696],
		        				[18.457031,-27.215556],
								[15.46875,-27.059126]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "CTG",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-91.40625,-67.974634],
		        				[-86.923828,-68.688521],
		        				[-85.166016,-67.508568],
								[-89.296875,-66.82652]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Centro de Cultura e Artes/ Memorial",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-94.042969,-67.407487],
		        				[-92.900391,-66.266856],
		        				[-97.382812,-65.403445],
								[-96.416016,-64.206377],
								[-98.261719,-63.937372],
								[-99.404297,-65.03506],
								[-101.25,-64.736641],
								[-100.986328,-63.937372],
								[-103.271484,-63.743631],
								[-105.46875,-65.403445]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Ovinocultura",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-82.441406,-59.265881],
		        				[-74.619141,-59.800634],
		        				[-74.707031,-61.143235],
								[-83.144531,-60.630102]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Equoterapia",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[88.857422,-14.179186],
		        				[90,-17.727759],
		        				[94.833984,-16.720385],
								[93.603516,-12.983148]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Bovinocultura",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[105.380859,3.601142],
		        				[111.357422,5.353521],
		        				[113.378906,-0.615223],
								[107.226563,-2.723583]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Marcenaria/Lavanderia",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[64.423828,-17.560247],
		        				[68.730469,-17.811456],
		        				[67.148438,-25.244696],
								[62.490234,-24.527135]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Mecânica",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[61.259766,-14.689881],
		        				[62.490234,-10.314919],
		        				[70.400391,-12.21118],
								[70.136719,-16.551962]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Mecanização",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[52.910156,-23.563987],
		        				[56.425781,-24.126702],
		        				[58.535156,-16.551962],
								[55.019531,-15.792254]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Culturas Anuais",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[0.791016,-4.477856],
		        				[3.427734,-4.477856],
		        				[3.515625,-7.188101],
								[0.791016,-7.188101]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Fruticultura/Silvicultura",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-30.9375,-24.527135],
		        				[-30.585938,-26.509905],
		        				[-27.597656,-26.431228],
								[-28.037109,-23.885838]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Setor de esporte e lazer/Miniauditório",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[28.212891,-56.511018],
		        				[29.970703,-56.170023],
		        				[31.201172,-59.933],
								[29.267578,-59.977005]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Agroindústria",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-86.572266,-43.961191],
		        				[-82.353516,-45.644768],
		        				[-83.496094,-47.694974],
								[-88.242187,-45.767523]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Avicultura",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-84.375,-50.736455],
		        				[-81.210938,-50.958427],
		        				[-83.759766,-56.170023],
								[-86.835938,-55.627996]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Silo",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-134.648438,-36.244273],
								[-133.066406,-38.341656],
		        				[-137.460938,-40.780541],
								[-139.306641,-38.68551]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Fábrica de Rações",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-126.914063,-32.916485],
		        				[-125.15625,-34.452218],
		        				[-129.287109,-37.020098],
								[-130.78125,-35.317366]
		        				]]
		    },
		},
		
		{
		    "type": "Feature",
		    "properties": {"nome": "Irrigação",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-60.732422,-42.293564],
		        				[-58.798828,-43.261206],
		        				[-57.480469,-41.640078],
								[-59.326172,-40.780541]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Suinocultura",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-75.498047,-54.826008],
		        				[-66.269531,-55.825973],
		        				[-63.193359,-52.375599],
								[-62.753906,-50.233152],
								[-73.037109,-48.980217]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Alojamento feminino",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[47.460938,-20.055931],
		        				[50.361328,-20.468189],
		        				[50.361328,-22.998852],
								[47.021484,-22.43134]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Alojamento feminino",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[39.638672,-18.812718],
		        				[39.726563,-21.371244],
		        				[36.035156,-20.797201],
								[36.5625,-18.812718]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Alojamento feminino",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
		        				[67.5,-49.95122],
		        				[67.5,-53.383328],
								[71.71875,-53.383328],
								[71.894531,-50.007739]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Alojamento masculino",
							"url": "#"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
		        				[19.6875,-14.093957],
		        				[23.115234,-14.51978],
								[22.5,-18.729502],
								[18.632813,-18.145852]
		        				]]
		    },
		},

		];

		var myStyle = {
		    "color": "#000000",
		    "weight": 6,
		    "opacity": 0.7	
		};

		function resetHighlight(e) {
		    geojson.resetStyle(e.target);
		}
		function highlightFeature(e) {
		    var layer = e.target;

		    layer.setStyle({
		        weight: 5,
		        color: '8f6673',
		        dashArray: '',
		        fillOpacity: 0.7
		    });

		    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		        layer.bringToFront();
		    }
		}
		function onEachFeature(feature, layer) {
		    layer.on({
		        mouseover: highlightFeature,
		        mouseout: resetHighlight
		    });
		    if (feature.properties && feature.properties.nome) {
		        layer.bindPopup("<a href=\""+feature.properties.url+"\">"+feature.properties.nome+"</a>");
    }
		}

		geojson = L.geoJson(estruturas, {
		    style: myStyle,
		    onEachFeature: onEachFeature
		}).addTo(map);      