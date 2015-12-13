var Feature = require('./Feature.js');

Feature.inherits(Banco, Feature);

function Banco(feature) {
	Feature.call(this, feature);
}

Banco.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

Banco.prototype.in_graph = true;
Banco.prototype.in_2D_map = true;

Banco.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  
  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
  var gamba = THREE.ImageUtils.loadTexture("../../assets/textures/bancone.jpg" )
  var cassetti = THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )


  var cubeGeometryBase = new THREE.BoxGeometry(0.71,1.65,0.04);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(0,0.82,0.025);
  banco.rotation.x=Math.PI/2;
  o1.add(banco);



  var cubeGeometryBase = new THREE.BoxGeometry(0.07,1.65,0.02);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(-0.35,0.86,0.025);
  banco.rotation.x=Math.PI/2;
  banco.rotation.y=Math.PI/2;
  o1.add(banco);



//gambe tavolo sx


var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
var cubeMaterial = new THREE.MeshLambertMaterial({map:gamba});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.1,0.72);
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,0.72);
piede.rotation.z=Math.PI/2;
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.7,0.02);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,0.72);
piede.rotation.z=Math.PI/2;
o1.add(piede);

//gambe tavolo dx

var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
var cubeMaterial = new THREE.MeshLambertMaterial({map:gamba});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.1,-0.72);
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,-0.72);
piede.rotation.z=Math.PI/2;
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.7,0.02);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,-0.72);
piede.rotation.z=Math.PI/2;
o1.add(piede);

  //sportelli


  var cubeGeometryBase = new THREE.BoxGeometry(0.78,0.7,0.02);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  piede.position.set(0.33,0.44,-0.34);
  piede.rotation.y=Math.PI/2;
  o1.add(piede);

  var cubeGeometryBase = new THREE.BoxGeometry(0.78,0.7,0.02);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  piede.position.set(0.31,0.44, 0.34);
  piede.rotation.y=Math.PI/2;
  o1.add(piede);

  var cubeGeometryBase = new THREE.BoxGeometry(0.07,0.07,1.5);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  piede.position.set(0.33,0.1,0);
  o1.add(piede);



  var cubeGeometryBase = new THREE.BoxGeometry(1.5,0.7,0.02);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  piede.position.set(-0.33,0.44,0);
  piede.rotation.y=Math.PI/2;
  o1.add(piede);


       //maniglie

       var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.25,80);
       var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
       var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
       maniglia.position.set(0.33,0.54,-0.6);
       
       o1.add(maniglia);


       var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.25,80);
       var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
       var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
       maniglia.position.set(0.31,0.54,0.6);
       
       o1.add(maniglia);
       
       o1.feature = this;
       o1.name = this.id;
       var model = Feature.packageModel(o1);

       return model;
     };

     module.exports = Banco;