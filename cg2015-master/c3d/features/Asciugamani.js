var Feature = require('./Feature.js');

Feature.inherits(Asciugamani, Feature);

function Asciugamani(feature) {
	Feature.call(this, feature);
}

Asciugamani.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

Asciugamani.prototype.in_graph = true;
Asciugamani.prototype.in_2D_map = false;

Asciugamani.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
    o1.rotation.x=Math.PI/2;

    
    var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
    var acciaioscuro=THREE.ImageUtils.loadTexture("../..//textures/acciaioscuro.jpg" )
    var Marca=THREE.ImageUtils.loadTexture("../../assets/textures/Marca.jpg" )

    var cubeGeometryBase = new THREE.BoxGeometry(0.25,0.25,0.32);
    var cubeMaterial = new THREE.MeshLambertMaterial({});
    var Asciugamani = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
    Asciugamani.position.y=0.8; 
    o1.add(Asciugamani);

    var cubeGeometryBase = new THREE.BoxGeometry(0.25,0.09,0.15);
    var cubeMaterial = new THREE.MeshLambertMaterial({map:Marca});
    var Asciugamani = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
    Asciugamani.position.set(0.001,0.85,0.07); 
    o1.add(Asciugamani);

    var torusMaterial = new THREE.MeshPhongMaterial( { map:acciaio } );
    var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.06, 0.05, 30, 30 , Math.PI/2), torusMaterial );
    torus.position.set(0.12,0.66,0.06);   
    o1.add( torus );

//pulsante
var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,0.04,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.rotation.z=Math.PI/2;
maniglia.position.set(0.12,0.75,-0.07);
o1.add(maniglia); 

var cylinderGeometry1 = new THREE.CylinderGeometry(0.03,0.03,0.008,80);
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.rotation.z=Math.PI/2;
maniglia.position.set(0.14,0.75,-0.07);
o1.add(maniglia); 


o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = Asciugamani;