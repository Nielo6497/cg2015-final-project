var Feature = require('./Feature.js');

Feature.inherits(WallSluice, Feature);

function WallSluice(feature) {
	Feature.call(this, feature);
}

WallSluice.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

WallSluice.prototype.in_graph = true;

WallSluice.prototype.in_2D_map = true;

WallSluice.prototype.get3DModel = function() {
	var block=new THREE.Object3D();

     
    //texture
    var texture=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio2.jpg" );
    var texture2=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" );
    var whitetexture=THREE.ImageUtils.loadTexture("../../assets/textures/bancone.jpg" );
    var blackTexture=THREE.ImageUtils.loadTexture("../../assets/textures/metalblack.jpg" );
    var leec=THREE.ImageUtils.loadTexture("../../assets/textures/leec.jpg");
    //materiali
    
    var black = new THREE.MeshLambertMaterial({map: blackTexture});
    var gray = new THREE.MeshLambertMaterial({color: 0x808080});
    var acciaio=new THREE.MeshLambertMaterial({map: texture});
    var acciaio2=new THREE.MeshLambertMaterial({map: texture2});
    var white=new THREE.MeshLambertMaterial({map: whitetexture});
    var brand=new THREE.MeshLambertMaterial({map: leec});

    var pulsantegeometry=new THREE.CylinderGeometry(0.02,0.02,0.1,80);
    var serbatoiogeometry=new THREE.BoxGeometry(0.1,0.6,0.6);
    var tubogeometry=new THREE.CylinderGeometry(0.02,0.02,0.6,80);
    var marcageometry=new THREE.BoxGeometry(0.1,0.05,0.06);

    var marca=new THREE.Mesh(marcageometry,brand);
    marca.rotation.x=Math.PI/2;
    marca.position.x=0.0005;
    marca.position.y=-0.25;
    marca.position.z=0.25;

    var pulsante=new THREE.Mesh(pulsantegeometry,acciaio2);
    pulsante.rotation.z=Math.PI/2;
    pulsante.position.x=0.01;
    pulsante.position.y=0.25;
    pulsante.position.z=0.25;

    var tubo=new THREE.Mesh(tubogeometry,acciaio2);
    tubo.rotation.x=Math.PI/2;
    tubo.position.z=-0.3


    var serbatoio= new THREE.Mesh(serbatoiogeometry,acciaio);
    serbatoio.add(tubo);
    serbatoio.add(pulsante);
    serbatoio.add(marca);
    serbatoio.position.set(-0.275,0,1)

    var curve = new THREE.SplineCurve3([
    new THREE.Vector3( 0, 0, 0.14 ),
    new THREE.Vector3( 0.18, 0, 0.2 ),
    new THREE.Vector3( 0.3, 0, 0.32 ),
    new THREE.Vector3( 0.2, 0, 0.36 ),
    new THREE.Vector3( 0.2, 0, 0.3)
    ]
    );

    var geometry = new THREE.TorusGeometry( 0.1, 0.05, 30, 100,2 );
    var torus = new THREE.Mesh( geometry, white);
    torus.translateY(-0.05);
    torus.translateX(-0.1)
    torus.rotation.x=Math.PI;

    var scaricogeometry=new THREE.CylinderGeometry(0.05,0.05,0.15,80);

    var scarico=new THREE.Mesh(scaricogeometry,white);
    scarico.add(torus)
    scarico.rotation.x=Math.PI/2;
    scarico.position.z=0.08;
    
    //vasca
    var lathegeometry = new THREE.LatheGeometry( curve.getPoints(20),200);
    var lathematerial = new THREE.MeshLambertMaterial( {map: texture} );
    lathematerial.side = THREE.DoubleSide;
    var lathe = new THREE.Mesh( lathegeometry, lathematerial );
    lathe.add(scarico);
   
    

  
    //foro alloggiamento vasca
    var path = new THREE.Shape();
    path.moveTo(0.5,0);
    path.absarc(0.3, -0.3, 0.2, 0,2* Math.PI , false);

    //piano superiore
    var supportolavandinogeometry= new THREE.Shape();
    supportolavandinogeometry.moveTo(0,0);
    supportolavandinogeometry.holes.push(path);
    supportolavandinogeometry.lineTo(0,-0.6);
    supportolavandinogeometry.lineTo(0.6,-0.6);
    supportolavandinogeometry.lineTo(0.6,0);
    
    
    var supportolavandino=new THREE.Mesh( new THREE.ExtrudeGeometry(supportolavandinogeometry,{ 
        amount: 0.05, 
        bevelEnabled: false, 
        bevelSegments: 0.05, 
        steps: 1, 
        bevelSize: 0.05, 
        bevelThickness: 0.05}), 
        new THREE.MeshPhongMaterial({map:texture}) );

   


    supportolavandino.position.set(-0.3,0.3,0.35); 


    //pannelli laterali
    var lateralgeometry= new THREE.Shape();
    lateralgeometry.moveTo(0,0);
    lateralgeometry.lineTo(0,0.6);
    lateralgeometry.lineTo(0.2,0.6);
    lateralgeometry.lineTo(0.05,0);    

    var lateral=new THREE.Mesh( new THREE.ExtrudeGeometry(lateralgeometry,{ amount: 0.02, bevelEnabled: false, bevelSegments: 0.05, steps: 1, bevelSize: 0.05, bevelThickness: 0.05}), new THREE.MeshPhongMaterial( {map:texture} ) );   
    lateral .rotation.z=Math.PI/2
    lateral .rotation.x=-Math.PI/2
    lateral.position.set(0.6,0,0.05);
    supportolavandino.add(lateral);

    var lateral2=lateral.clone();
    lateral2.position.y=-0.62
    supportolavandino.add(lateral2);

    block.add(supportolavandino);
    block.add(lathe);
    block.add(serbatoio);
    block.translateX(0.3);
    block.translateY(0.3);

    block.feature = this;
    block.name = this.id;
	var model = Feature.packageModel(block);

	return model;
};

module.exports = WallSluice;