var Feature = require('./Feature.js');

Feature.inherits(Lampada, Feature);

function Lampada(feature) {
	Feature.call(this, feature);
}

Lampada.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Lampada.prototype.in_graph = true;
Lampada.prototype.in_2D_map = false;

Lampada.prototype.get3DModel = function() {
	var lampada=new THREE.Object3D();
  
  //texture
  var texture=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio2.jpg" );
  var whitetexture=THREE.ImageUtils.loadTexture("../../assets/textures/bancone.jpg" );
  var glassTexture=THREE.ImageUtils.loadTexture("../../assets/textures/glass.jpg" );

  //materiali    
  var glass = new THREE.MeshLambertMaterial({map: glassTexture});
  var gray = new THREE.MeshLambertMaterial({color: 0x808080});
  var acciaio=new THREE.MeshLambertMaterial({map: texture});
  var white=new THREE.MeshLambertMaterial({map: whitetexture});

  var paretegeometry= new THREE.CylinderGeometry(0.02,0.02,1,80);
  var parete=new THREE.Mesh(paretegeometry,white);
  lampada.add(parete);

  var torusgeometry = new THREE.TorusGeometry( 0.05, 0.02, 100, 100 ,1.65);
  var torus=new THREE.Mesh(torusgeometry,white);
  torus.position.y=0.5;
  torus.position.x=-0.05;
  parete.add(torus);

  var torusgeometry = new THREE.TorusGeometry( 0.05, 0.02, 100, 100 ,1.65);
  var torus=new THREE.Mesh(torusgeometry,white);
  torus.position.y=-0.5;
  torus.position.x=0.05;
  torus.rotation.z=Math.PI;
  //torus.rotation.z=Math.PI/2;
  parete.add(torus);

  var snodogeometry=new THREE.CylinderGeometry(0.02,0.02,0.06,80);
  var snodo=new THREE.Mesh(snodogeometry,white);
  snodo.rotation.z=Math.PI/2;
  snodo.position.y=0.05
  snodo.position.x=-0.025
  torus.add(snodo);

  var levageometry=new THREE.CylinderGeometry(0.01,0.01,0.05);
  var leva=new THREE.Mesh(levageometry,white);
  leva.rotation.x=Math.PI/2;
  leva.position.z=0.03
  snodo.add(leva)

  var supportoGeometry=new THREE.BoxGeometry(0.2,0.2,0.001);
  var supporto=new THREE.Mesh(supportoGeometry,white);
  supporto.position.z=0.05;
  snodo.add(supporto);


  var torusgeometry = new THREE.TorusGeometry( 0.05, 0.02, 100, 100 ,1.65);
  var torus=new THREE.Mesh(torusgeometry,white);
  torus.position.y=0.001;
  torus.position.x=-0.05;

  var snodogeometry=new THREE.CylinderGeometry(0.02,0.02,0.03,80);
  var snodo=new THREE.Mesh(snodogeometry,white);
  snodo.add(torus);
  snodo.rotation.z=Math.PI/2;
  snodo.position.y=0.55;
  snodo.position.x=-0.049
  parete.add(snodo);

  var movimentogeometry=new THREE.CylinderGeometry(0.05,0.05,0.04,80);
  var movimento=new THREE.Mesh(movimentogeometry,white);
  movimento.position.y=0.05
  movimento.rotation.x=Math.PI/2;
  torus.add(movimento);

  var snodogeometry=new THREE.CylinderGeometry(0.03,0.03,0.02,9);
  var snodo=new THREE.Mesh(snodogeometry,white);
  snodo.position.y=-(0.01+0.05);
  var agganciogeometry=new THREE.CylinderGeometry(0.02,0.03,0.1,9);
  var aggancio=new THREE.Mesh(agganciogeometry,white);
  aggancio.add(snodo);
  aggancio.rotation.z=-Math.PI/2;
  aggancio.rotation.x=Math.PI/2;
  aggancio.position.x=-0.05;
  aggancio.position.y=-0.4;
  

  var torusgeometry = new THREE.TorusGeometry( 0.1, 0.005, 100, 100 ,1.65);
  var torus=new THREE.Mesh(torusgeometry,white);
  torus.position.y=-0.1;
  snodo.add(torus);

  var terminalgeometry=new THREE.CylinderGeometry(0.02,0.02,0.03,80);
  var terminal=new THREE.Mesh(terminalgeometry,white);
  terminal.rotation.x=Math.PI/2;
  terminal.position.x=0.1
  torus.add(terminal);

  var snodogeometry=new THREE.CylinderGeometry(0.02,0.02,0.04,80);
  var snodo=new THREE.Mesh(snodogeometry,white);
  var manigliageometry =new THREE.CylinderGeometry(0.005,0.005,0.08,80);
  var maniglia=new THREE.Mesh(manigliageometry,white);
  maniglia.rotation.x=Math.PI/2;
  maniglia.position.z=0.06
  snodo.add(maniglia);
  snodo.position.y=0.036;
  terminal.add(snodo);

  var cassageometry= new THREE.CylinderGeometry(0.14,0.14,0.1,80);
  var cassa=new THREE.Mesh(cassageometry,white);
  cassa.rotation.x=Math.PI/2
  cassa.position.y=0.16;
  snodo.add(cassa);

  var lightgeometry=new THREE.CylinderGeometry(0.10,0.14,0.05,80);
  var light=new THREE.Mesh(lightgeometry,white);
  light.position.y=0.075;
  cassa.add(light);

  var glassgeometry=new THREE.CylinderGeometry(0.10,0.10,0.07,80);
  var glass=new THREE.Mesh(glassgeometry,glass);
  light.add(glass);

  var bracciogeometry=new THREE.CylinderGeometry(0.02,0.02,1,80);
  var braccio=new THREE.Mesh(bracciogeometry,white);
  braccio.add(aggancio);
  braccio.position.x=-0.1;
  lampada.add(braccio)

  lampada.rotation.y=-Math.PI/2;
  lampada.translateX(1);
  lampada.translateY(0.65);

	lampada.feature = this;
	lampada.name = this.id;
	var model = Feature.packageModel(lampada);

	return model;
};

module.exports = Lampada;