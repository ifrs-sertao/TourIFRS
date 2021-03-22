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
            
        var estruturas = [{
		    "type": "Feature",
		    "properties": {"nome": "Administrativo/Biblioteca",
							"url": "administracaobiblioteca"},
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
		
		{
		    "type": "Feature",
		    "properties": {"nome": "Prédio Central/Secretaria",
							"url": "prediocentralsecretaria"},
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
		    "properties": {"nome": "Bloco A13/A14",
							"url": "blocosalas"},
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
							"url": "academia"},
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
							"url": "refeitorio"},
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
							"url": "academia"},
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
		    "properties": {"nome": "Ambulatório",
							"url": "ambulatorio"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[63.984375,-63.548552],
		        				[68.027344,-63.391522],
		        				[67.763672,-61.058285],
		        				[63.457031,-61.312452]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Prédio Biologia",
							"url": "blocoa2"},
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
							"url": "blocoa1"},
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
							"url": "coopera"},
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
							"url": "academia"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[22.5,-53.225768],
								[30.322266,-51.99841],
								[31.992188,-55.478853],
								[24.082031,-56.607885]
								]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Alojamento masculino",
							"url": "alojamentos"},
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
							"url": "labdefesavegetal"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-83.056641,-67.875541],
								[-76.552734,-68.592487],
								[-78.574219,-70.436799],
								[-85.166016,-69.349339]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Olericultura",
							"url": "olericultura"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[15.732422,-25.085599],
		        				[23.554688,-21.943046],
		        				[42.890625,-24.846565],
								[50.361328,-30.372875],
								[51.855469,-38.68551],
								[51.152344,-43.644026],
								[46.494141,-46.619261],
								[42.714844,-48.341646],
								[39.550781,-49.382373],
								[35.859375,-49.95122],
								[30.9375,-50.064192],
								[17.490234,-48.57479],
								[4.130859,-43.771094],
								[-1.669922,-37.579413],
								[-0.878906,-34.161818],
								[4.130859,-33.431441]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "CTG",
							"url": "ctg"},
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
							"url": "centroculturaartes"},
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
							"url": "ovinocultura"},
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
							"url": "equoterapia"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[83.320313,-5.965754],
		        				[84.375,-10.314919],
		        				[105.996094,-33.870416],
								[114.785156,-28.921631],
								[100.898438,-10.833306],
								[90.878906,-4.039618]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Bovinocultura",
							"url": "bovinocultura"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[105.380859,3.601142],
		        				[107.050781,4.565474],
		        				[106.611328,7.536764],
								[112.939453,12.125264],
								[115.048828,7.536764],
								[113.642578,-0.79099],
								[107.314453,-2.899153]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Marcenaria/Lavanderia",
							"url": "marcenarialavanderia"},
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
							"url": "mecanica"},
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
							"url": "mecanica"},
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
							"url": "culturasanuais"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-1.40625,-2.108899],
		        				[8.4375,-3.864255],
		        				[7.822266,-17.476432],
								[-2.724609,-16.214675]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Fruticultura/Silvicultura",
							"url": "fruticulturasilvicultura"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-33.046875,-25.165173],
								[-30.058594,-20.632784],
		        				[-17.578125,-21.125498],
		        				[-18.28125,-29.993002],
								[-26.367188,-30.448674],
								[-33.574219,-29.53523]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Setor de esporte e lazer/Miniauditório",
							"url": "academia"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[24.785156,-56.992883],
		        				[29.970703,-56.170023],
		        				[31.201172,-59.933],
								[25.927734,-60.196156]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Agroindústria",
							"url": "agroindustria"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-86.572266,-43.961191],
		        				[-82.353516,-45.644768],
		        				[-83.496094,-47.694974],
								[-88.242187,-45.767523],
								[-89.472656,-46.980252],
								[-92.109375,-45.95115],
								[-91.230469,-44.777936],
								[-92.988281,-44.024422],
								[-91.318359,-42.098222]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Avicultura",
							"url": "avicultura"},
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
							"url": "fabricaracoessilos"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-134.296875,-33.72434],
								[-146.25,-38.134557],
								[-138.164063,-46.316584],
								[-128.320313,-42.293564]
								]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Fábrica de Rações",
							"url": "fabricaracoessilos"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-133.857422,-33.504759],
								[-124.189453,-29.764377],
								[-123.310547,-35.317366],
								[-129.023438,-38.959409]
								]]
		    },
		},
		
		{
		    "type": "Feature",
		    "properties": {"nome": "Irrigação",
							"url": "irrigacao"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[-63.457031,-42.032974],
		        				[-50.097656,-27.994401],
		        				[-43.59375,-38.548165],
								[-40.78125,-49.15297],
								[-53.085938,-49.837982],
								[-61.699219,-45.706179]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Suinocultura",
							"url": "suinocultura"},
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
							"url": "alojamentos"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[45.351563,-19.642588],
		        				[52.03125,-19.642588],
		        				[51.416016,-24.20689],
								[45.087891,-23.079732]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Alojamento feminino",
							"url": "alojamentos"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
								[35.332031,-16.720385],
		        				[40.869141,-17.14079],
		        				[40.957031,-22.512557],
								[35.068359,-21.698265]
		        				]]
		    },
		},

		{
		    "type": "Feature",
		    "properties": {"nome": "Alojamento feminino",
							"url": "alojamentos"},
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
							"url": "alojamentos"},
		    "geometry": {
		        "type": "Polygon",
		        "coordinates": [[
		        				[17.226563,-12.21118],
		        				[25.048828,-12.640338],
								[24.873047,-20.220966],
								[17.402344,-18.729502]
		        				]]
		    },
		},

		];

		var myStyle = {
		    "color": "#000000",
		    "weight": 3,
			"opacity": 0.7
		};

		function resetHighlight(e) {
		    geojson.resetStyle(e.target);
		}
		function highlightFeature(e) {
		    var layer = e.target;

		    layer.setStyle({
		        "weight": 1,
		        "color": "#000000",
		        "dashArray": '',
				"fillOpacity": 0.7,
				"fillColor": "#000000"
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
		        layer.bindPopup("<a href=\"http://tour.sertao.ifrs.edu.br/?goto="+feature.properties.url+"\">"+feature.properties.nome+"</a>");
    }
		}

		geojson = L.geoJson(estruturas, {
		    style: myStyle,
		    onEachFeature: onEachFeature
		}).addTo(map);      