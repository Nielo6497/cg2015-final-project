var Feature = require('./Feature.js');

Feature.inherits(FormalinDispensingStation, Feature);

function FormalinDispensingStation(feature) {
	Feature.call(this, feature);
}

FormalinDispensingStation.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

FormalinDispensingStation.prototype.in_graph = true;

FormalinDispensingStation.prototype.in_2D_map = true;

FormalinDispensingStation.prototype.get3DModel = function() {
	var block=new THREE.Object3D();

     
    //texture
    var texture=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio2.jpg" );
    var whitetexture=THREE.ImageUtils.loadTexture("../../assets/textures/bancone.jpg" );
    var blackTexture=THREE.ImageUtils.loadTexture("../../assets/textures/metalblack.jpg" );
    var formalinTexture=THREE.ImageUtils.loadTexture("../../assets/textures/formalin.jpg")
    //materiali
    
    var black = new THREE.MeshLambertMaterial({map: blackTexture});
    var gray = new THREE.MeshLambertMaterial({color: 0x808080});
    var acciaio=new THREE.MeshLambertMaterial({map: texture});
    var white=new THREE.MeshLambertMaterial({map: whitetexture});
    var formalin=new THREE.MeshLambertMaterial({map: formalinTexture});

    var lateralgeometry=new THREE.BoxGeometry(0.5,0.05,0.6);
    var lateral=new THREE.Mesh(lateralgeometry,acciaio);
    lateral.position.set(0.25,-0.025,0.3);

    var lateral2=lateral.clone();
    lateral2.position.set(0.25,-1.475,0.3);

    var backgeometry=new THREE.BoxGeometry(0.05,1.45,0.6);
    var back=new THREE.Mesh(backgeometry,acciaio);
    back.position.set(0.025,-0.75,0.3);

    var bottomGeometry=new THREE.BoxGeometry(0.5,1.45,0.05);
    var bottom=new THREE.Mesh(bottomGeometry,acciaio);
    bottom.position.set(0.25,-0.75,0.025);

    var serbatoiogeometry=new THREE.CylinderGeometry(0.2,0.2,0.5,80);
    var serbatoio=new THREE.Mesh(serbatoiogeometry,white);
    serbatoio.position.y=-0.1

    var warninggeometry=new THREE.BoxGeometry(0.1,0.1,0.15);
    var warning=new THREE.Mesh(warninggeometry,formalin);
   // warning.rotation.x=Math.PI/2;
    warning.position.x=0.15;
    serbatoio.add(warning);

    var scaricogeometry=new THREE.CylinderGeometry(0.03,0.03,0.6,80);
    var scarico=new THREE.Mesh(scaricogeometry,black);
    scarico.add(serbatoio);
    scarico.rotation.x=Math.PI/2;
    scarico.translateY(0.405);
    scarico.translateZ(1.2);
    scarico.translateX(0.25);

    block.add(scarico);

    //mensola
    var o1=new THREE.Object3D();
    o1.rotation.x=Math.PI/2;
    o1.scale.set(0.33,0.33,0.33);
    o1.position.set(0.07,-0.4,1);

  
    
    var cubeGeometryBase = new THREE.BoxGeometry(0.4,0.02,1.2);
    var cubeMaterial = new THREE.MeshLambertMaterial({map:texture});
    var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
    piede.position.set(0,0.4,0);
    o1.add(piede);


    //maniglie

    var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,1.2,80);
    var cylinderMaterial = new THREE.MeshLambertMaterial({map:texture});
    var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
    maniglia.position.set(0.2,0.4,0);
    maniglia.rotation.x=Math.PI/2;   
    o1.add(maniglia);

    

    var curve = new THREE.CubicBezierCurve3(
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 0.7, 0, 0.01 ),
    new THREE.Vector3( 0.1, 0, 0.05 ),
    new THREE.Vector3( 0.01, 0, 0.35 )
    );

    var geometry = new THREE.LatheGeometry( curve.getPoints(20),200,0,Math.PI);
    var material = new THREE.MeshLambertMaterial( { map:texture} );
    var lathe = new THREE.Mesh( geometry, material );
    lathe.position.set(-0.2,0.4,0.58);
    lathe.rotation.y=Math.PI/2;
    lathe.scale.set(0.05,1,1);
    o1.add( lathe );

    var lathe = new THREE.Mesh( geometry, material );
    lathe.position.set(-0.2,0.4,-0.58);
    lathe.rotation.y=Math.PI/2;
    lathe.scale.set(0.05,1,1);
    o1.add( lathe );

    var mensola2=o1.clone();
    mensola2.position.y=-1.05;

    //pannello superiore
    var panelgeometry=new THREE.BoxGeometry(0.35,1.5,0.1);
    var toppanel=new THREE.Mesh(panelgeometry,acciaio);
    toppanel.position.set(0.175,-0.75,1.65);


    var glassgeometry=new THREE.BoxGeometry(0.5,0.6,0.05);
    var glass=new THREE.Mesh(glassgeometry,new THREE.MeshLambertMaterial({ color: 0xffffff, opacity: 0.3,transparent: true}));
    glass.position.set(0.3,-0.35,0.05) 
    var vetrogeometry= new THREE.Shape();
    vetrogeometry.moveTo(0.05,-0.05);
    vetrogeometry.lineTo(0.05,-0.65);
    vetrogeometry.lineTo(0.5,-0.65);
    vetrogeometry.lineTo(0.5,-0.05);

    var cassettogeometry= new THREE.Shape();
    cassettogeometry.moveTo(0,0);
    cassettogeometry.lineTo(0,-0.7);
    cassettogeometry.lineTo(0.55,-0.7);
    cassettogeometry.lineTo(0.55,0);
    cassettogeometry.holes.push(vetrogeometry);

    var cassetto=new THREE.Mesh( new THREE.ExtrudeGeometry(cassettogeometry,{ 
      amount: 0.05, 
      bevelEnabled: false, 
      bevelSegments: 0.05, steps: 1, 
      bevelSize: 0.05, 
      bevelThickness: 0.05}), 
    new THREE.MeshPhongMaterial( {map:texture} ) );
    cassetto.add(glass);

    cassetto.rotation.y=-Math.PI/2;
    cassetto.position.set(0.5,-0.05,0.05)

    var cassetto2=cassetto.clone();
    cassetto2.position.y=-0.75;

    var vetrogeometry= new THREE.Shape();
    vetrogeometry.moveTo(0.05,-0.05);
    vetrogeometry.lineTo(0.05,-0.75);
    vetrogeometry.lineTo(0.25,-0.75);
    vetrogeometry.lineTo(0.25,-0.05);

    var glassgeometry=new THREE.BoxGeometry(0.2,0.7,0.05);
    var glass=new THREE.Mesh(glassgeometry,new THREE.MeshLambertMaterial({ color: 0xffffff, opacity: 0.3,transparent: true}));
    glass.position.set(0.15,-0.4,0.035);
    var uplateralgeometry= new THREE.Shape();
    uplateralgeometry.moveTo(0,0);
    uplateralgeometry.lineTo(0,-0.8);
    uplateralgeometry.lineTo(0.3,-0.8);
    uplateralgeometry.lineTo(0.3,0);
    uplateralgeometry.holes.push(vetrogeometry);

    var uplateral=new THREE.Mesh( new THREE.ExtrudeGeometry(uplateralgeometry,{ 
      amount: 0.05, 
      bevelEnabled: false, 
      bevelSegments: 0.05, steps: 1, 
      bevelSize: 0.05, 
      bevelThickness: 0.05}), 
    new THREE.MeshPhongMaterial( {map:texture} ) );
    uplateral.add(glass);
    uplateral.rotation.x=-Math.PI/2
    uplateral.position.set(0.05,-0.05,0.1)

    var uplateral2=uplateral.clone();
    uplateral2.position.y=-1.5;

    var pianogeometry= new THREE.Shape();
    pianogeometry.moveTo(0,0);
    pianogeometry.lineTo(0,0.1);
    pianogeometry.lineTo(0.6,0.1);
    //pianogeometry.lineTo(0.5,0.4);
    pianogeometry.lineTo(0.5,0);

    var supportolavandinogeometry= new THREE.Shape();
    supportolavandinogeometry.moveTo(0,0);
    supportolavandinogeometry.lineTo(0,-1.5);
    supportolavandinogeometry.lineTo(0.1,-1.5);
    supportolavandinogeometry.lineTo(0.1,-1);
    supportolavandinogeometry.lineTo(0.5,-1);
    supportolavandinogeometry.lineTo(0.5,-1.4);
    supportolavandinogeometry.lineTo(0.1,-1.4);
    supportolavandinogeometry.lineTo(0.1,-1.5);
    supportolavandinogeometry.lineTo(0.6,-1.5);
    supportolavandinogeometry.lineTo(0.6,0);

    var tettogeometry= new THREE.Shape();
    tettogeometry.moveTo(0,0);
    tettogeometry.lineTo(0,0.1);
    tettogeometry.lineTo(0.2,0.1);
    tettogeometry.lineTo(0.35,0);
    
    var tetto=new THREE.Mesh( new THREE.ExtrudeGeometry(tettogeometry,{ 
      amount: 1.5, 
      bevelEnabled: false, 
      bevelSegments: 0.05, 
      steps: 1, 
      bevelSize: 0.05, 
      bevelThickness: 0.05}), 
    new THREE.MeshPhongMaterial( {map:texture} ) );
    tetto.rotation.x=Math.PI/2;
    tetto.position.set(-0.175,0.75,0.05);
    toppanel.add(tetto);

    var paratiageometry=new THREE.BoxGeometry(0.05,1.5,0.8);
    var paratia=new THREE.Mesh(paratiageometry,acciaio);
    paratia.position.y=-0.75;
    paratia.position.x=0.025;
    paratia.position.z=0.5;
    //block.add(paratia);
    var o4=new THREE.Object3D();
    o4.rotation.x=Math.PI/2;
    

  //lavandino-acqua


    var o3=new THREE.Object3D();
    o4.add(o3);
    

    var cylinderGeometry1 = new THREE.CylinderGeometry(0.0125,0.0125,0.40,80);
    var cylinderMaterial = new THREE.MeshLambertMaterial({map:texture});
    var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
    maniglia.position.set(0,0.925,0);
    o3.add(maniglia);   


    var torusMaterial = new THREE.MeshPhongMaterial( { map:texture } );
    var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.11, 0.013, 30, 30 , Math.PI), torusMaterial );
    //torus.rotation.x =  Math.PI/2;
    torus.position.y=1.125;
    torus.position.x=0.11;
    o3.add( torus );

    var torusMaterial = new THREE.MeshPhongMaterial( { map:texture } );
    var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.01, 0.008, 6, 6 ), torusMaterial );
    torus.rotation.x =  Math.PI/2;
    torus.position.y=1.12;
    torus.position.x=0.22;
    o3.add( torus );




    var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.006,0.035,80);
    var cylinderMaterial = new THREE.MeshLambertMaterial({map:texture});
    var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
    maniglia.position.set(0.22,1.108,0);
    o3.add(maniglia);                    

       

    var supportolavandino=new THREE.Mesh( new THREE.ExtrudeGeometry(supportolavandinogeometry,{ 
      amount: 0.1, 
      bevelEnabled: false, 
      bevelSegments: 0.05, 
      steps: 1, 
      bevelSize: 0.05, 
      bevelThickness: 0.05}), 
    new THREE.MeshPhongMaterial( {map:texture} ) );

    supportolavandino.add(uplateral);
    supportolavandino.add(uplateral2);
    supportolavandino.add(o4);
    o4.position.set(0.085,-1.2,-0.8);
    supportolavandino.translateZ(0.7);
    supportolavandino.add(paratia);

    var piano=new THREE.Mesh( new THREE.ExtrudeGeometry(pianogeometry,{ amount: 1.5, 
      bevelEnabled: false, 
      bevelSegments: 0.05, steps: 1, 
      bevelSize: 0.05, 
      bevelThickness: 0.05}), 
    new THREE.MeshPhongMaterial( {map:texture} ) );

    piano .rotation.x=Math.PI/2
    piano.translateY(0.6);

    block.add(piano);
    block.add(lateral);
    block.add(lateral2);
    block.add(back);
    block.add(bottom);
    block.add(cassetto);
    block.add(cassetto2);
    block.add(supportolavandino);
    block.add(toppanel);
    block.add(o1);    
    block.add(mensola2);
    block.position.y=1.5;

    block.feature = this;
    block.name = this.id;
	var model = Feature.packageModel(block);

	return model;
};

module.exports = FormalinDispensingStation;