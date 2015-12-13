var Feature = require('./Feature.js');

Feature.inherits(ScrivaniaUfficio, Feature);

function ScrivaniaUfficio(feature) {
	Feature.call(this, feature);
}

ScrivaniaUfficio.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

ScrivaniaUfficio.prototype.in_graph = true;
ScrivaniaUfficio.prototype.in_2D_map = true;

ScrivaniaUfficio.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  
  var legno=THREE.ImageUtils.loadTexture("../../assets/textures/Legno.jpg" )
  var legnoscrivania=THREE.ImageUtils.loadTexture("../../assets/textures/LegnoScrivania.jpg" )
  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" ) 
  var acciaioscuro=THREE.ImageUtils.loadTexture("../../assets/textures/acciaioscuro.jpg" )


  var cubeGeometryBase = new THREE.BoxGeometry(0.7,2,0.04);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:legnoscrivania});
  var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  BanconeAngolare.position.set(0,0.82,-0.15);
  BanconeAngolare.rotation.x=Math.PI/2;
  o1.add(BanconeAngolare);


  var cubeGeometryBase = new THREE.BoxGeometry(0.7,1.65,0.03995);
  var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  BanconeAngolare.position.set(0.81,0.82,-0.8);
  BanconeAngolare.rotation.x=Math.PI/2;
  BanconeAngolare.rotation.z=Math.PI/2;
  o1.add(BanconeAngolare);

  var cubeGeometryBase = new THREE.BoxGeometry(0.02,0.68,1.778);
  var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  BanconeAngolare.position.set(-0.25,0.46,-0.17);
  o1.add(BanconeAngolare);

//gambe tavolo sx



var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,0.72);
piede.rotation.z=Math.PI/2;
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.6,0.02);
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,0.72);
piede.rotation.z=Math.PI/2;
o1.add(piede);

    //gambe tavolo centro
    

    
    var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
    var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
    piede.position.set(0.05,0.44,-1.05);
    piede.rotation.z=Math.PI/2;
    o1.add(piede);

    var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.6,0.02);
    var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
    piede.position.set(0.05,0.44,-1.05);
    piede.rotation.z=Math.PI/2;
    o1.add(piede);

       //gambe tavolo dx
       

       
       var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
       var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
       piede.position.set(1.2,0.44,-0.76);
       piede.rotation.z=Math.PI/2;
       piede.rotation.y=Math.PI/2;
       o1.add(piede);

       var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.6,0.02);
       var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
       piede.position.set(1.2,0.44,-0.76);
       piede.rotation.z=Math.PI/2;
       piede.rotation.y=Math.PI/2;
       o1.add(piede);

       var o2= new THREE.Object3D();
       o1.add(o2);
       o2.scale.set(0.029,0.029,0.029);
       o2.position.set(-0.5,0.16,-0.7);
       o2.rotation.y=-Math.PI/2;
       //cassettiere

       var cubeGeometryBase = new THREE.BoxGeometry(20,19,20);
       var cubeMaterial = new THREE.MeshLambertMaterial({map:legnoscrivania});
       var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
       CassettiBancoLab.position.set(0,8,-47);
       o2.add(CassettiBancoLab);


       var cubeGeometryBase = new THREE.BoxGeometry(10,4,17);
       var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
       CassettiBancoLab.position.set(6,14,-47);
       o2.add(CassettiBancoLab);


       var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
       CassettiBancoLab.position.set(6,2,-47);
       o2.add(CassettiBancoLab);

       var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
       CassettiBancoLab.position.set(6,8,-47);
       o2.add(CassettiBancoLab);

      //maniglie

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.5,0.5,10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,14,-47);
      maniglia.rotation.x=Math.PI/2;
      o2.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,8,-47);
      maniglia.rotation.x=Math.PI/2;
      o2.add(maniglia);


      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,2,-47);
      maniglia.rotation.x=Math.PI/2;
      o2.add(maniglia);


//lampada

var o1a=new THREE.Object3D();
o1.add(o1a);
o1a.position.set(-0.10,0.835,0.57);
o1a.rotation.y=Math.PI/4;


var o0=new THREE.Object3D();
o1a.add(o0);
o0.position.set(0.07,-0.02,0);
o0.rotation.z=Math.PI/4;

var o1b=new THREE.Object3D();
o0.add(o1b);
o1b.position.y=0.1;


//base

var curve = new THREE.SplineCurve3([
  new THREE.Vector3( 0, 0, 0 ),
  new THREE.Vector3( 0.07, 0, 0.002 ),
  new THREE.Vector3( 0.1, 0, 0.02 )
  ]
  );


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( {map:acciaio} );
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=Math.PI/2;
lathe.position.set(0,0.02,0);
o1a.add( lathe );


var cubeGeometryBase = new THREE.BoxGeometry(0.02,0.05,0.008);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
BanconeAngolare.position.set(0,0.03,0.015);
o1a.add(BanconeAngolare);

//perno
var sphereGeometry = new THREE.SphereGeometry(0.01,260,20);
var sphereMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
sphere.position.set(0,0,0.01);
sphere.scale.set(2,2,1.6);
o1b.add(sphere);

var sphereGeometry = new THREE.SphereGeometry(0.012,260,20);
var sphereMaterial = new THREE.MeshLambertMaterial({map:acciaioscuro});
var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
sphere.position.set(0,0,0);
sphere.scale.set(2,2,1.6);
o1b.add(sphere);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.005,0.005,0.046,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0xffff00});
var cylinder1 = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
cylinder1.position.set(0,0,0.0035);
cylinder1.rotation.x=Math.PI/2;
o1b.add(cylinder1);

//braccio1
var cubeGeometryBase = new THREE.BoxGeometry(0.025,0.23,0.01);
var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
BanconeAngolare.position.set(0.08,0.18,0);
BanconeAngolare.rotation.z=-Math.PI/4;
o0.add(BanconeAngolare);

//perno2
var o2=o1b.clone();
o0.add(o2);
o2.position.set(0.16,0.26,-0.015);
o2.rotation.z=-Math.PI/4;

//braccio2
var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
BanconeAngolare.position.set(0.08,0.09,0);
BanconeAngolare.rotation.z=-Math.PI/4;
o2.add(BanconeAngolare);
//perno3
var o3=o1b.clone();
o0.add(o3);
o3.position.set(0.39,0.265,0);
o3.rotation.x=Math.PI;

//collegamento braccio-perno

var cylinderGeometry1 = new THREE.CylinderGeometry(0.007,0.007,0.06,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var cylinder1 = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
cylinder1.position.set(0.39,0.22,0);
o0.add(cylinder1);

//luce

var curve = new THREE.SplineCurve3([
  new THREE.Vector3( 0, 0, 0 ),
  new THREE.Vector3( 0.03, 0, 0.04 ),
  new THREE.Vector3( 0.05, 0, 0.12 )
  ]
  );


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( {map:acciaio} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=Math.PI/2;
lathe.position.set(0.39,0.23,0);
o0.add( lathe );



var curve = new THREE.SplineCurve3([
  new THREE.Vector3( 0, 0, 0 ),
  new THREE.Vector3( 0.01, 0, 0 ),
  new THREE.Vector3( 0.015, 0, 0.02 ),
  new THREE.Vector3( 0.025, 0, 0.04 ),
  new THREE.Vector3( 0, 0, 0.06 ),
  ]
  );


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( {map:acciaioscuro} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=Math.PI/2;
lathe.position.set(0.39,0.23,0);
o0.add( lathe );


o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = ScrivaniaUfficio;