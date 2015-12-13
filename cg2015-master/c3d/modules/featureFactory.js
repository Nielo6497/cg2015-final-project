// (1) dependencies
var utilities = require('./utilities.js');

// (2) private things
var featureClasses = {};
featureClasses['Feature'] = require('../features/Feature.js');
featureClasses['Antenna'] = require('../features/Antenna.js');
featureClasses['BadgeReader'] = require('../features/BadgeReader.js');
featureClasses['Chair'] = require('../features/Chair.js');
featureClasses['Door'] = require('../features/Door.js');
featureClasses['External_wall'] = require('../features/External_wall.js');
featureClasses['FireExtinguisher'] = require('../features/FireExtinguisher.js');
featureClasses['GraphNode'] = require('../features/GraphNode.js');
featureClasses['Hotspot'] = require('../features/Hotspot.js');
featureClasses['Internal_wall'] = require('../features/Internal_wall.js');
featureClasses['Level'] = require('../features/Level.js');
featureClasses['Light'] = require('../features/Light.js');
featureClasses['Room'] = require('../features/Room.js');
featureClasses['Server'] = require('../features/Server.js');
featureClasses['SurveillanceCamera'] = require('../features/SurveillanceCamera.js');
featureClasses['Table'] = require('../features/Table.js');
featureClasses['Window'] = require('../features/Window.js');
featureClasses['Stair'] = require('../features/Stair.js');
featureClasses['Bed'] = require('../features/Bed.js');
featureClasses['CellaFrigo'] = require('../features/CellaFrigo.js');
featureClasses['TavoloAutoptico'] = require('../features/TavoloAutoptico.js');
featureClasses['CoffinStorage'] = require('../features/CoffinStorage.js');
featureClasses['BarellaElettrica'] = require('../features/BarellaElettrica.js');
featureClasses['Evaporatore'] = require('../features/Evaporatore.js');
featureClasses['BancoLavandino'] = require('../features/BancoLavandino.js');
featureClasses['WallSluice'] = require('../features/WallSluice.js');
featureClasses['Frigorifero'] = require('../features/Frigorifero.js');
featureClasses['ArmadiettiAlti'] = require('../features/ArmadiettiAlti.js');
featureClasses['Banco'] = require('../features/Banco.js');
featureClasses['FormalinDispensingStation'] = require('../features/FormalinDispensingStation.js');
featureClasses['Bilancia'] = require('../features/Bilancia.js');
featureClasses['ScrivaniaUfficio'] = require('../features/ScrivaniaUfficio.js');
featureClasses['Libreria'] = require('../features/Libreria.js');
featureClasses['Cucina'] = require('../features/Cucina.js');
featureClasses['Frigo'] = require('../features/Frigo.js');
featureClasses['Water'] = require('../features/Water.js');
featureClasses['Lavandino'] = require('../features/Lavandino.js');
featureClasses['Asciugamani'] = require('../features/Asciugamani.js');
featureClasses['TavoloMensa'] = require('../features/TavoloMensa.js');
featureClasses['Scaffale'] = require('../features/Scaffale.js');
featureClasses['SerieSedie'] = require('../features/SerieSedie.js');
featureClasses['SediaScrivania'] = require('../features/SediaScrivania.js');
featureClasses['SchermoLCD'] = require('../features/SchermoLCD.js');
featureClasses['Poltrona'] = require('../features/Poltrona.js');
featureClasses['Separe'] = require('../features/Separe.js');
featureClasses['MortuaryTrolley'] = require('../features/MortuaryTrolley.js');
featureClasses['TavoloMarmo'] = require('../features/TavoloMarmo.js');
featureClasses['Bara'] = require('../features/Bara.js');
featureClasses['Lampada'] = require('../features/Lampada.js');
featureClasses['BoxDoccia'] = require('../features/BoxDoccia.js');

	


function capitaliseFirstLetter(featureClass) {
	return featureClass.charAt(0).toUpperCase() + featureClass.slice(1);
}

// (3) public/exported things
var self = module.exports = {
	generateFeature: function(feature) {
		var newFeature;
		var featureClass = capitaliseFirstLetter(feature.properties.class);
		if (featureClass in featureClasses) {
			newFeature = new featureClasses[featureClass](feature);
		} else {
			newFeature = new featureClasses['Feature'](feature);
		}
		return newFeature;
	}
}; //close module.exports