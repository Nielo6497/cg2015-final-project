var Feature = require('./Feature.js');

Feature.inherits(Libreria, Feature);

function Libreria(feature) {
	Feature.call(this, feature);
}

Libreria.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

Libreria.prototype.in_graph = true;
Libreria.prototype.in_2D_map = false;

Libreria.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  
  var legnoscrivania=THREE.ImageUtils.loadTexture("../../assets/textures/LegnoScrivania.jpg" )
  var libri1=THREE.ImageUtils.loadTexture("../../assets/textures/libri1.jpg" )
  var libri2=THREE.ImageUtils.loadTexture("../../assets/textures/libri2.jpg" )
  var libri3=THREE.ImageUtils.loadTexture("../../assets/textures/libri3.jpg" )



//Libreria
var cubeGeometryBase = new THREE.BoxGeometry(0.03,2,0.8);
var cubeMaterial = new THREE.MeshLambertMaterial({map:legnoscrivania});
var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
BanconeAngolare.position.set(0,1,0);
o1.add(BanconeAngolare);

var cubeGeometryBase = new THREE.BoxGeometry(0.3,2,0.03);
var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
BanconeAngolare.position.set(0.15,1,0.4);
o1.add(BanconeAngolare);

var cubeGeometryBase = new THREE.BoxGeometry(0.3,2,0.03);
var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
BanconeAngolare.position.set(0.15,1,-0.4);
o1.add(BanconeAngolare);

var cubeGeometryBase = new THREE.BoxGeometry(0.3,0.03,0.8);
var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
BanconeAngolare.position.set(0.15,2,0);
o1.add(BanconeAngolare);

var cubeGeometryBase = new THREE.BoxGeometry(0.3,0.03,0.8);
var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
BanconeAngolare.position.set(0.15,0.015,0);
o1.add(BanconeAngolare);

//scaffali

for(var i=1;i<5;i++){
  var cubeGeometryBase = new THREE.BoxGeometry(0.3,0.03,0.8);
  var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  BanconeAngolare.position.set(0.15,0.015+i*0.4,0);
  o1.add(BanconeAngolare);
}

//libri


var cubeGeometryBase = new THREE.BoxGeometry(0.24,0.32,0.76);
var cubeMaterial = new THREE.MeshLambertMaterial({map:libri3});
var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
BanconeAngolare.position.set(0.15,0.19,0);
o1.add(BanconeAngolare);


var cubeMaterial = new THREE.MeshLambertMaterial({map:libri1});
var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
BanconeAngolare.position.set(0.15,0.59,0);
o1.add(BanconeAngolare);


var cubeMaterial = new THREE.MeshLambertMaterial({map:libri2});
var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
BanconeAngolare.position.set(0.15,0.99,0);
o1.add(BanconeAngolare);

var cubeMaterial = new THREE.MeshLambertMaterial({map:libri3});
var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
BanconeAngolare.position.set(0.15,1.39,0);
o1.add(BanconeAngolare);

var cubeMaterial = new THREE.MeshLambertMaterial({map:libri2});
var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
BanconeAngolare.position.set(0.15,1.79,0);
o1.add(BanconeAngolare);

o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = Libreria;