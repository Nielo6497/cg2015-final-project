var Feature = require('./Feature.js');

Feature.inherits(SchermoLCD, Feature);

function SchermoLCD(feature) {
	Feature.call(this, feature);
}

SchermoLCD.prototype.style = {
			    			prefix: "fa",
	    					icon: "medkit",
	    					zIndex: 3
						};

SchermoLCD.prototype.in_graph = true;

SchermoLCD.prototype.in_2D_map = false;

SchermoLCD.prototype.get3DModel = function() {


      var gray_material = new THREE.MeshLambertMaterial({color : 0xa9a9a9});
      var red_material = new THREE.MeshLambertMaterial({color : 0xFF0000});
      var green_material = new THREE.MeshLambertMaterial({color : 0x00FF00});
      var blue_material = new THREE.MeshLambertMaterial({color : 0x0000FF});
      var black_material = new THREE.MeshLambertMaterial({color : 0x000000});


      //create a fake object
      var monitorLCD = new THREE.Object3D( );
      var dettaglio = 1;


      var screen = createScreen();
      var monitorSusteiner = createMonitorSusteiner();
      screen.rotation.x = Math.PI*10/180;
      monitorLCD.add(screen);
      monitorLCD.add(monitorSusteiner);

      monitorLCD.rotation.x = Math.PI/2;
      monitorLCD.rotation.z = Math.PI;
      monitorLCD.position.y = 1;

      monitorLCD.scale.set(1.4,1.4,1.4);

function createMonitorSusteiner(){
      var monitorSusteiner = new THREE.Object3D();
      var monitorSusteiner1_geometry = new THREE.BoxGeometry( 0.2 , 0.01 , 0.2 );
      var monitorSusteiner3_geometry = new THREE.BoxGeometry( 0.2 , 0.01 , 0.08 );
      var monitorSusteiner2_geometry = new THREE.CylinderGeometry( 0.2 , 0.2 , 0.01 , Math.round(dettaglio*32));
      var monitorSusteiner1 = new THREE.Mesh(monitorSusteiner1_geometry, gray_material);
      var monitorSusteiner2 = new THREE.Mesh( monitorSusteiner2_geometry, gray_material )
      var monitorSusteiner3 = new THREE.Mesh( monitorSusteiner3_geometry, gray_material )
      monitorSusteiner3.position.y = -0.04;
      monitorSusteiner3.position.z =  -0.04;
      monitorSusteiner2.position.y = -0.08;
      monitorSusteiner3.rotation.x = -Math.PI/2;
      monitorSusteiner1.rotation.x = Math.PI*29/180;
      monitorSusteiner1.position.y = -0.03;
      monitorSusteiner.add(monitorSusteiner1);
      monitorSusteiner.add(monitorSusteiner2);
      monitorSusteiner.add(monitorSusteiner3);

      return monitorSusteiner;
    }


function createScreen(){

      var screen_geometry = new THREE.BoxGeometry( 0.8 , 0.01 , 0.4);
      var screen = new THREE.Mesh(screen_geometry, black_material);
      screen.position.y = 0.01/2;
      // monitorLCD.add(screen);

      var screenRam1_geometry = new THREE.BoxGeometry( 0.9 , 0.02 , 0.03 );
      var screenRam1 = new THREE.Mesh(screenRam1_geometry,gray_material);
      screenRam1.position.z = -0.2-0.03/2;
      screen.add(screenRam1);

      var screenRam2_geometry = new THREE.BoxGeometry( 0.9 , 0.02 , 0.04 );
      var screenRam2 = new THREE.Mesh(screenRam2_geometry,gray_material);
      screenRam2.position.z = 0.2+0.02;
      screen.add(screenRam2);

      var screenRam3_geometry = new THREE.BoxGeometry( 0.1/2 , 0.02 , 0.4 );
      var screenRam3a = new THREE.Mesh(screenRam3_geometry,gray_material);
      var screenRam3b = new THREE.Mesh(screenRam3_geometry,gray_material);
      screenRam3a.position.x = 0.4 + 0.1/4;
      screenRam3b.position.x = -0.4 - 0.1/4;

      screen.add(screenRam3a);
      screen.add(screenRam3b);

      var screenRam4_geometry = new THREE.BoxGeometry( 0.9 , 0.001 , 0.4 );
      var screenRam4 =new THREE.Mesh(screenRam4_geometry, gray_material);
      screenRam4.position.y = -0.01/2;
      screen.add(screenRam4);

      var screenLed_geometry = new THREE.CylinderGeometry( 0.002 , 0.002 , 0.002 , Math.round(dettaglio*32) );
      var screenLedRed =new THREE.Mesh(screenLed_geometry, red_material);
      screenLedRed.position.set( 0.19 , 0.011 , 0.22 );
      screen.add(screenLedRed);
      var screenLedBlue =new THREE.Mesh(screenLed_geometry, blue_material);
      screenLedBlue.position.set( 0.18 , 0.011 , 0.22 );
      screen.add(screenLedBlue);
      var screenLedGreen =new THREE.Mesh(screenLed_geometry, green_material);
      screenLedGreen.position.set( 0.17 , 0.011 , 0.22 );
      screen.add(screenLedGreen);

      screen.add(screenRam3a);
      screen.add(screenRam3b);

      return screen;

    }
    	monitorLCD.name = this.id;
	monitorLCD.feature = this;
	var model = Feature.packageModel(monitorLCD);
	return model;
};

module.exports = SchermoLCD;