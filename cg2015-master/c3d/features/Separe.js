
      var Feature = require('./Feature.js');

    Feature.inherits(Separe, Feature);

  function Separe(feature) {
       Feature.call(this, feature);
         };

Separe.prototype.style = {
                prefix: "fa",
                icon: "medkit",
                zIndex: 3
            };

Separe.prototype.in_graph = true;

Separe.prototype.in_2D_map = false;

Separe.prototype.get3DModel = function() {
  //TO DO

      //colors
      var gray_material = new THREE.MeshLambertMaterial({color : 0x808080});
      var green_material = new THREE.MeshLambertMaterial({color : 0x42C7AD});
      var black_material = new THREE.MeshLambertMaterial({color : 0x000000});

      //create a fake object
      var separe = new THREE.Object3D();
      var dettaglio = 1;

      separe.scale.set(1.5,1.5,1.5);

      var screen1 = createScreen();
      var screen2 = createScreen();
      var screen3 = createScreen();
      var screen4 = createScreen();

      screen1.position.x = 0.5 + 0.5/2 + 0.005;
      // screen2.position.x = -1 - 0.04;
      screen2.position.x = -0.5 -0.5/2  - 0.005;
      screen3.position.x = -0.5/2 - 0.0025;
      screen4.position.x = +0.5/2 + 0.0025;
      screen1.rotation.y = -Math.PI*15/180;
      screen2.rotation.y = Math.PI*15/180;
      screen3.rotation.y = -Math.PI*15/180;
      screen4.rotation.y = Math.PI*15/180;
      separe.position.y = 0.15;
      var screenWheels1 = createScreenWheels();
      var screenWheels2 = createScreenWheels();
      var screenWheels3 = createScreenWheels();
      var screenWheels4 = createScreenWheels();

      var oneWheelScreen1 = createOneWheel();
      var oneWheelScreen2 = createOneWheel();

      oneWheelScreen1.position.set( 0.5/2 , -0.13/2 , 0 );
      oneWheelScreen2.position.set( -0.5/2 , -0.13/2 , 0 );

      screen1.add(oneWheelScreen1);
      screen2.add(oneWheelScreen2);


      screen1.add(screenWheels1);
      screen2.add(screenWheels2);
      screen3.add(screenWheels3);
      screen4.add(screenWheels4);

      separe.add(screen1);
      separe.add(screen2);
      separe.add(screen3);
      separe.add(screen4);

      function createOneWheel(){
        var tube_geometry = new THREE.CylinderGeometry( 0.01 , 0.005 , 0.13 , Math.round(dettaglio*32) );
        var wheel_geometry = new THREE.CylinderGeometry( 0.02 , 0.02 , 0.035 , Math.round(dettaglio*32) );
        var wheelInside_geometry = new THREE.CylinderGeometry( 0.015 , 0.015 , 0.036 , Math.round(dettaglio*32) );

        var tube = new THREE.Mesh( tube_geometry , gray_material );
        var wheel = new THREE.Mesh( wheel_geometry , black_material ); 
        var wheelInside = new THREE.Mesh( wheelInside_geometry , gray_material );

        wheel.rotation.x = Math.PI/2;
        wheel.position.y = -0.13/2;

        wheel.add( wheelInside );
        tube.add(wheel);

        return tube;
         };

     function createScreenWheels(){

      var screenWheel_geometry = new THREE.CylinderGeometry( 0.01 , 0.01 , 0.2 , Math.round(dettaglio*32) );
      var screenWheel2_geometry = new THREE.CylinderGeometry( 0.01 , 0.01 , 0.05 , Math.round(dettaglio*32) );
      var screenWheel3_geometry = new THREE.CylinderGeometry( 0.005 , 0.01 , 0.04 , Math.round(dettaglio*32) );
      var wheel_geometry = new THREE.CylinderGeometry( 0.02 , 0.02 , 0.035 , Math.round(dettaglio*32) );
      var node_geometry = new THREE.SphereGeometry( 0.0109 , Math.round(dettaglio*32) , Math.round(dettaglio*32) );
      var wheelInside_geometry = new THREE.CylinderGeometry( 0.015 , 0.015 , 0.036 , Math.round(dettaglio*32) );

      var node1a = new THREE.Mesh( node_geometry , gray_material );
      var node2a = new THREE.Mesh( node_geometry , gray_material );
      var node3a = new THREE.Mesh( node_geometry , gray_material ); 
      var node1b = new THREE.Mesh( node_geometry , gray_material );
      var node2b = new THREE.Mesh( node_geometry , gray_material );
      var node3b = new THREE.Mesh( node_geometry , gray_material );
      var screenWheel1 = new  THREE.Mesh( screenWheel_geometry , gray_material );
      var screenWheel2a = new  THREE.Mesh( screenWheel2_geometry , gray_material );
      var screenWheel2b = new  THREE.Mesh( screenWheel2_geometry , gray_material );
      var screenWheel2d = new  THREE.Mesh( screenWheel2_geometry , gray_material );
      var screenWheel2c = new  THREE.Mesh( screenWheel2_geometry , gray_material );
      var screenWheel3a = new THREE.Mesh( screenWheel3_geometry , gray_material );
      var screenWheel3b = new THREE.Mesh( screenWheel3_geometry , gray_material );
      var wheel1a = new THREE.Mesh( wheel_geometry , black_material );
      var wheel1b = new THREE.Mesh( wheel_geometry , black_material );
      var wheelInside1a = new THREE.Mesh( wheelInside_geometry , gray_material );
      var wheelInside1b = new THREE.Mesh( wheelInside_geometry , gray_material );

      node1a.position.y = 0.1;
      node2a.position.y = 0.05/2;
      node3a.position.y = 0.05/2;
      node1b.position.y = -0.1;
      node2b.position.y = -0.05/2;
      node3b.position.y = -0.05/2;
      screenWheel1.position.y = -0.01 -0.005;
      screenWheel1.rotation.x = Math.PI/2;
      screenWheel2a.rotation.x = Math.PI*25/180;
      screenWheel2a.position.set( 0 , 0.1 + 0.05/2 , 0.05/2*Math.sin(screenWheel2a.rotation.x));
      screenWheel2b.rotation.x = -Math.PI*25/180;
      screenWheel2b.position.set( 0 , -0.1 - 0.05/2 ,  0.05/2*Math.sin(screenWheel2a.rotation.x));
      screenWheel2c.rotation.x = Math.PI*25/180;
      screenWheel2c.position.set( 0 , 0.1/2 ,  0.05/2*Math.sin(screenWheel2a.rotation.x));
      screenWheel2d.rotation.x = -Math.PI*25/180;
      screenWheel2d.position.set( 0 , -0.1/2 , 0.05/2*Math.sin(screenWheel2a.rotation.x));

      screenWheel3a.rotation.x = +Math.PI*40/180;
      screenWheel3a.position.set( 0 , 0.08/2 , 0.035/2*Math.sin(screenWheel3a.rotation.x));
      screenWheel3b.rotation.x = -Math.PI*40/180;
      screenWheel3b.rotation.z = Math.PI;
      screenWheel3b.position.set( 0 , -0.08/2, 0.035/2*Math.sin(screenWheel3a.rotation.x));
      wheel1a.rotation.x = Math.PI/2;
      wheel1a.position.y = 0.035;
      wheel1b.rotation.x = Math.PI/2;
      wheel1b.position.y = 0.035;

      wheel1b.add( wheelInside1b );
      wheel1a.add( wheelInside1a );
      screenWheel3a.add(wheel1a);
      screenWheel3b.add(wheel1b);
      screenWheel2d.add(screenWheel3b);
      screenWheel2c.add(screenWheel3a);
      screenWheel2b.add(screenWheel2d);
      screenWheel2a.add(screenWheel2c);
      screenWheel1.add(screenWheel2a);
      screenWheel1.add(screenWheel2b);
      screenWheel1.add(node1a);
      screenWheel2a.add(node2a);
      screenWheel2c.add(node3a);
      screenWheel1.add(node1b);
      screenWheel2b.add(node2b);
      screenWheel2d.add(node3b);

      return screenWheel1;
     };

     function createScreen(){

        var screen = new THREE.Object3D();
        var widthTube_geometry = new THREE.CylinderGeometry( 0.01 , 0.01 , 0.5 , Math.round(dettaglio*32) );
        var heigthTube_geometry = new THREE.CylinderGeometry( 0.01 , 0.01 , 0.5 , Math.round(dettaglio*32) );
        var sideTube_geometry = new THREE.CylinderGeometry( 0.01 , 0.01 , 1.55 , Math.round(dettaglio*32) );
        var tissueScreen_geometry = new THREE.PlaneGeometry( 1.3 , 0.5 );
        var node_geometry = new THREE.SphereGeometry( 0.0105 , Math.round(dettaglio*32) , Math.round(dettaglio*32) );
        var lowerTube = new THREE.Mesh( widthTube_geometry , gray_material );
        var upperTube = new THREE.Mesh( widthTube_geometry , gray_material );
        var sideTube1 = new THREE.Mesh( sideTube_geometry , gray_material );
        var sideTube2 = new THREE.Mesh( sideTube_geometry , gray_material );
        var node1 = new THREE.Mesh( node_geometry , gray_material );
        var node2 = new THREE.Mesh( node_geometry , gray_material );
        var node3 = new THREE.Mesh( node_geometry , gray_material );
        var node4 = new THREE.Mesh( node_geometry , gray_material );
        var tissueScreen = new THREE.Mesh( tissueScreen_geometry , green_material );
        tissueScreen.material.side = THREE.DoubleSide;

        lowerTube.rotation.z = Math.PI/2;
        upperTube.rotation.z = Math.PI/2;
        upperTube.position.y = 1.55;
        sideTube1.position.set( 0.5/2 , 1.55/2 , 0 );
        sideTube2.position.set( -0.5/2 , 1.55/2 , 0 );
        node1.position.y = 0.5/2;
        node2.position.y = -0.5/2;
        node3.position.y = 0.5/2;
        node4.position.y = -0.5/2;
        tissueScreen.position.x = 0.15 + 1.3/2;

        lowerTube.add(tissueScreen);
        lowerTube.add(node1);
        lowerTube.add(node2);
        upperTube.add(node3)
        upperTube.add(node4)
        screen.add(sideTube2);
        screen.add(sideTube1);
        screen.add(upperTube);
        screen.add(lowerTube);
        return screen;
      };


  separe.name = this.id;
  separe.feature = this;
  var model = Feature.packageModel(separe);
  return model;
};

module.exports = Separe;
