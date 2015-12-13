var Feature = require('./Feature.js');

Feature.inherits(ArmadiettiAlti, Feature);

function ArmadiettiAlti(feature) {
	Feature.call(this, feature);
}

ArmadiettiAlti.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

ArmadiettiAlti.prototype.in_graph = true;
ArmadiettiAlti.prototype.in_2D_map = false;

ArmadiettiAlti.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
    o1.rotation.x=Math.PI/2;
    o1.scale.set(0.033,0.033,0.033);


//cassettiere
var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
var cassetto = THREE.ImageUtils.loadTexture("../../assets/textures/acciaio2.jpg" )



      //cassettone

      var cubeGeometryBase = new THREE.BoxGeometry(20,19,17);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
      banco.position.set(0,8,8.5);
      o1.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(18,17,15);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetto});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
      banco.position.set(2,8.3,8.5);
      o1.add(banco);

      //maniglia

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.4,8,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,10,2.5);
      o1.add(maniglia);

      //cerniere

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.2,0.2,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(10,12,16);
      o1.add(maniglia);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.2,0.2,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(10,3,16);
      o1.add(maniglia);


//cassettone dx
var cubeGeometryBase = new THREE.BoxGeometry(20,19,17);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0,8,-8.5);
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(18,17,15);
var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetto});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(2,8.3,-8.5);
o1.add(banco);

      //maniglia

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.4,8,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,10,-2.5);
      o1.add(maniglia);

      //cerniere

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.2,0.2,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(10,12,-16);
      o1.add(maniglia);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.2,0.2,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(10,3,-16);
      o1.add(maniglia);

      o1.position.set(0.33,0.56,0.01)

      
      o1.feature = this;
      o1.name = this.id;
      var model = Feature.packageModel(o1);

      return model;
};

module.exports = ArmadiettiAlti;