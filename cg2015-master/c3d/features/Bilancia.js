var Feature = require('./Feature.js');

Feature.inherits(Bilancia, Feature);

function Bilancia(feature) {
	Feature.call(this, feature);
}

Bilancia.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

Bilancia.prototype.in_graph = true;
Bilancia.prototype.in_2D_map = false;

Bilancia.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;


  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaioscuro.jpg" )
  var biancoopaco=THREE.ImageUtils.loadTexture("../../assets/textures/biancoopaco.jpg" )
  var display=THREE.ImageUtils.loadTexture("../../assets/textures/displaybilancia.jpg" )

  var cubeGeometryBase = new THREE.CubeGeometry(0.3,0.03,0.2501);
  var cubeMaterial = new THREE.MeshLambertMaterial({color:0x0c0c0c});
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.y=0.03;
  o1.add(banco);

  var cubeGeometryBase = new THREE.CubeGeometry(0.24,0.04,0.25);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:biancoopaco});
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(-0.03,0.065,0);
  o1.add(banco);

  var cubeGeometryBase = new THREE.CubeGeometry(0.07,0.03,0.25);
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.rotation.z=-Math.PI/4;
  banco.position.set(0.105,0.05,0);
  o1.add(banco);

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.2499,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x0c0c0c});
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(0.15,0.03,0);
  maniglia.rotation.x=Math.PI/2
  o1.add(maniglia);

  var cubeGeometryBase = new THREE.CubeGeometry(0.20,0.005,0.22);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(-0.05,0.1,0);
  o1.add(banco);

  
  var cylinderGeometry1 = new THREE.CylinderGeometry(0.095,0.095,0.05,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(-0.05,0.075,0);
  o1.add(maniglia);

//pulsanti

var cubeGeometryBase = new THREE.CubeGeometry(0.03,0.06,0.14);
var cubeMaterial = new THREE.MeshLambertMaterial({map:display});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.rotation.z=Math.PI/4;
banco.position.set(0.101,0.055,0);
o1.add(banco);

var cubeGeometryBase = new THREE.CubeGeometry(0.026,0.015,0.01);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.08,0.03,0.121);
o1.add(banco);

var cubeGeometryBase = new THREE.CubeGeometry(0.02,0.01,0.009);
var cubeMaterial = new THREE.MeshLambertMaterial({});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.rotation.y=Math.PI/8;
banco.position.set(0.08,0.03,0.127);
o1.add(banco);

o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = Bilancia;