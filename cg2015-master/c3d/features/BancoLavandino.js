var Feature = require('./Feature.js');

Feature.inherits(BancoLavandino, Feature);

function BancoLavandino(feature) {
	Feature.call(this, feature);
}

BancoLavandino.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

BancoLavandino.prototype.in_graph = true;

BancoLavandino.prototype.in_2D_map = true;

BancoLavandino.prototype.get3DModel = function() {
	var block=new THREE.Object3D();

     
    //texture
    var texture=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio2.jpg" );
    var whitetexture=THREE.ImageUtils.loadTexture("../../assets/textures/bancone.jpg" );
    var blackTexture=THREE.ImageUtils.loadTexture("../../assets/textures/metalblack.jpg" );
    //materiali
    
    var black = new THREE.MeshLambertMaterial({map: blackTexture});
    var gray = new THREE.MeshLambertMaterial({color: 0x808080});
    var acciaio=new THREE.MeshLambertMaterial({map: texture});
    var white=new THREE.MeshLambertMaterial({map: whitetexture});


    var basegeometry= new THREE.Shape();
    basegeometry.moveTo(0,0);
    basegeometry.lineTo(0,0.6);
    basegeometry.lineTo(0.6,0.6);
    basegeometry.lineTo(0.5,0.4);
    basegeometry.lineTo(0.5,0);

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

    var paratiageometry=new THREE.BoxGeometry(0.05,1.5,0.06);
    var paratia=new THREE.Mesh(paratiageometry,acciaio);
    paratia.position.y=-0.75;
    paratia.position.x=0.025;
    paratia.position.z=0.83;
    block.add(paratia);

    var supportolavandino=new THREE.Mesh( new THREE.ExtrudeGeometry(supportolavandinogeometry,{ amount: 0.2, bevelEnabled: false, bevelSegments: 0.05, steps: 1, bevelSize: 0.05, bevelThickness: 0.05}), new THREE.MeshPhongMaterial( {map:texture} ) );   
    supportolavandino.translateZ(0.6);

    var base=new THREE.Mesh( new THREE.ExtrudeGeometry(basegeometry,{ amount: 1.5, bevelEnabled: false, bevelSegments: 0.05, steps: 1, bevelSize: 0.05, bevelThickness: 0.05}), new THREE.MeshPhongMaterial( {map:texture} ) );   
    base .rotation.x=Math.PI/2

    
    var o4=new THREE.Object3D();
    

  //lavandino-acqua


  var o3=new THREE.Object3D();
  o4.add(o3);
  o3.position.x=-0.25
  o3.position.y=0.25

  //o3.position.set(-0.14,0,-0.42);

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


        var torusMaterial = new THREE.MeshPhongMaterial( { map:texture } );
        var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.08, 0.008, 30, 30 , Math.PI/2), torusMaterial );
        torus.rotation.x =  Math.PI/2;
        torus.rotation.z =  Math.PI/2;
        torus.position.set(0.085,0.95,0);
        o3.add( torus );

        var torusMaterial = new THREE.MeshPhongMaterial( { map:texture } );
        var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.08, 0.008, 30, 30 , Math.PI/2), torusMaterial );
        torus.rotation.x =  Math.PI/2;
        torus.rotation.z =  Math.PI;
        torus.position.set(0.085,0.95,0);
        o3.add( torus );



        var cylinderGeometry1 = new THREE.CylinderGeometry(0.008,0.008,0.1,80);
        var cylinderMaterial = new THREE.MeshLambertMaterial({map:texture});
        var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
        rubinetto.position.set(0.13,0.95,0.08);
        rubinetto.rotation.z=Math.PI/2;
        o3.add(rubinetto);

        var cylinderGeometry1 = new THREE.CylinderGeometry(0.008,0.008,0.1,80);
        var cylinderMaterial = new THREE.MeshLambertMaterial({map:texture});
        var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
        rubinetto.position.set(0.13,0.95,-0.08);
        rubinetto.rotation.z=Math.PI/2;
        o3.add(rubinetto);

        //perno sx e dx
        var cylinderGeometry1 = new THREE.CylinderGeometry(0.002,0.002,0.1,80);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
        var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
        rubinetto.position.set(0.15,0.95,-0.08);
        rubinetto.rotation.z=Math.PI/2;
        o3.add(rubinetto);

        var cylinderGeometry1 = new THREE.CylinderGeometry(0.002,0.002,0.1,80);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
        var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
        rubinetto.position.set(0.15,0.95,0.08);
        rubinetto.rotation.z=Math.PI/2;
        o3.add(rubinetto);


        var cylinderGeometry1 = new THREE.CylinderGeometry(0.002,0.002,0.02,80);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
        var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
        rubinetto.position.set(0,1,-0.030);
        rubinetto.rotation.x=Math.PI/2;
        o3.add(rubinetto);


        //rubinetti
        var curve = new THREE.CubicBezierCurve3(
          new THREE.Vector3( 0, 0, 0 ),
          new THREE.Vector3( 1.5, 0, 0 ),
          new THREE.Vector3( 0.3, 0, 0.5 ),
          new THREE.Vector3( 0.3, 0, 1.2 )
          );

        var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
        var material = new THREE.MeshLambertMaterial( { color: 0x0066FF} );
        var lathe = new THREE.Mesh( geometry, material );

        lathe.rotation.y=-Math.PI/2;

        lathe.scale.set(0.025,0.025,0.025);
        lathe.position.set(0.2,0.95,-0.08)
        o3.add( lathe );

        var lathe = new THREE.Mesh( geometry, material );

        lathe.rotation.y=-Math.PI/2;

        lathe.scale.set(0.025,0.025,0.025);
        lathe.position.set(0.2,0.95,0.08)
        o3.add( lathe );

        var lathe = new THREE.Mesh( geometry, material );


        lathe.scale.set(0.025,0.025,0.025);
        lathe.position.set(0,1,-0.038)
        o3.add( lathe );

      //bocchette
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.006,0.004,0.02,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:texture});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(0.17,0.935,0.08);
      o3.add(rubinetto);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.006,0.004,0.02,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:texture});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(0.17,0.935,-0.08);
      o3.add(rubinetto);

      o4.rotation.x=Math.PI/2
      o4.position.set(0.3,-1.2,-0.3);
    
    var scaricogeometry=new THREE.CylinderGeometry(0.03,0.03,0.6,80);
    var scarico=new THREE.Mesh(scaricogeometry,black);
    scarico.rotation.x=Math.PI/2;
    scarico.translateY(0.301);
    scarico.translateZ(1.2);
    scarico.translateX(0.25);

    block.add(scarico);
    block.add(base);
    block.add(supportolavandino);
    block.add(o4);

    var manigliageometry=new THREE.CylinderGeometry(0.01,0.01,0.3,80);
    var maniglia=new THREE.Mesh(manigliageometry,black);
    maniglia .rotation.x=Math.PI/2;
    maniglia.position.y=-0.33;
    maniglia.position.x=0.01;
    var cassettogeometry=new THREE.BoxGeometry(0.03,0.74,0.4);
    var cassetto=new THREE.Mesh(cassettogeometry,acciaio);
    cassetto.add(maniglia);
    cassetto.position.x=0.515;
    cassetto.position.y=-0.37;
    cassetto.position.z=0.2;
    block.add(cassetto)

    var manigliageometry=new THREE.CylinderGeometry(0.01,0.01,0.3,80);
    var maniglia=new THREE.Mesh(manigliageometry,black);
    maniglia .rotation.x=Math.PI/2;
    maniglia.position.y=0.33;
    maniglia.position.x=0.01

    var cassettogeometry=new THREE.BoxGeometry(0.03,0.74,0.4);
    var cassetto=new THREE.Mesh(cassettogeometry,acciaio);
    cassetto.add(maniglia);
    cassetto.position.x=0.515;
    cassetto.position.y=-1.13;
    cassetto.position.z=0.2;
    block.add(cassetto)

    for(var x=0.1; x<=0.5; x+=0.02){
        var antiscivologeomentry=new THREE.BoxGeometry(0.005,0.8,0.5);
        var antiscivolo=new THREE.Mesh(antiscivologeomentry,acciaio);
        antiscivolo.position.set(x,-0.5,0.556);

        block.add(antiscivolo);

    }

    var pannellogeometry=new THREE.BoxGeometry(0.01,1.5,1.2);
    var pannello=new THREE.Mesh(pannellogeometry,acciaio);
    pannello.position.set(-0.005,-0.75,0.6);
    block.add(pannello);
    
    block.translateX(0.005);
    block.translateY(1.5);
    //block.scale.set(0.5,0.5,0.5);
    block.feature = this;
    block.name = this.id;
	var model = Feature.packageModel(block);

	return model;
};

module.exports = BancoLavandino;