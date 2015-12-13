var Feature = require('./Feature.js');

Feature.inherits(TavoloAutoptico, Feature);

function TavoloAutoptico(feature) {
	Feature.call(this, feature);
}

TavoloAutoptico.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

TavoloAutoptico.prototype.in_graph = true;

TavoloAutoptico.prototype.in_2D_map = true;

TavoloAutoptico.prototype.get3DModel = function() {
	var o1=new THREE.Object3D();
     
    //texture materiali
    var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
    var acciaio2=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio4.jpg" )
        
    //base
    var basegeometry = new THREE.BoxGeometry( 0.8, 0.8, 0.7 );
    var basematerial = new THREE.MeshLambertMaterial( {map: acciaio} );
    //bancone

    var tabgeometry=new THREE.BoxGeometry(2.7,1,0.12);
    var tabmaterial = new THREE.MeshLambertMaterial( {map: acciaio} );
    
    //vassoio salma
    var traygeometry=new THREE.BoxGeometry(2.5,0.9,0.10);
    var traymaterial = new THREE.MeshLambertMaterial( {map: acciaio2} );

    //maniglia vassoio salma
    var cylinderGeometry = new THREE.CylinderGeometry(0.01,0.01,0.8);
    var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
    var cylinderGeometry2 = new THREE.CylinderGeometry(0.01,0.01,0.1);
    var cylinderMaterial2 = new THREE.MeshLambertMaterial({map:acciaio});
    

    


    //struttura supporto lavandino
    var strLavandinogeometry= new THREE.BoxGeometry(0.7,0.05,0.40);
    var strLavandinomaterial=new THREE.MeshLambertMaterial( {map: acciaio} );
    var strLavandinogeometry2= new THREE.BoxGeometry(0.05,1,0.40);
    var strLavandinomaterial2=new THREE.MeshLambertMaterial( {map: acciaio} );
    var strLavandinogeometry3= new THREE.BoxGeometry(0.7,0.05,0.40);
    var strLavandinomaterial3=new THREE.MeshLambertMaterial( {map: acciaio} );
    var strLavandinogeometry4= new THREE.BoxGeometry(0.7,0.9,0.05);
    var strLavandinomaterial4=new THREE.MeshLambertMaterial( {map: acciaio} );

    var prova1= new THREE.Shape();
    prova1.moveTo(0,0);
    prova1.lineTo(2,0);
    prova1.lineTo(2,0.22);
    prova1.lineTo(0,0.05);

    var prova= new THREE.Shape();
    prova.moveTo(0,0);
    prova.lineTo(0,1);
    prova.lineTo(0.8,1);
    prova.lineTo(0.8,0.25);
    prova.lineTo(0.7,0.25);
    prova.lineTo(0.7,0.8);
    prova.lineTo(0.2,0.8);
    prova.lineTo(0.2,0.25);
    prova.lineTo(0.8,0.25);
    prova.lineTo(0.8,0);
    prova.lineTo(0,0);

    

    //assemblamento
    var supportomaniglia1=new THREE.Mesh(cylinderGeometry2,cylinderMaterial2);
    supportomaniglia1.rotation.z=Math.PI/2;
    supportomaniglia1.position.set(-0.05,0.3,0);
    var supportomaniglia2=supportomaniglia1.clone();
    supportomaniglia2.position.set(-0.05,-0.3,0)

    var maniglia=new THREE.Mesh(cylinderGeometry,cylinderMaterial);
    maniglia.add(supportomaniglia1);
    maniglia.add(supportomaniglia2);
    var tray=new THREE.Mesh(traygeometry,traymaterial);
    tray.add(maniglia);
    maniglia.position.set(1.3,0,0.03)
    tray.position.set(0,0,0.06);

    

    
    var lateral=new THREE.Mesh( new THREE.ExtrudeGeometry(prova1,{ amount: 0.02, bevelEnabled: false, bevelSegments: 0.05, steps: 1, bevelSize: 0.05, bevelThickness: 0.05}), new THREE.MeshPhongMaterial( {map: acciaio} ) );
    lateral.rotation.y=Math.PI;
    lateral.rotation.x=-Math.PI/2
    lateral.position.set(2.3,0,0.08);

    var lateral2=lateral.clone();
    lateral2.position.y=-0.93

    var strLavandino4=new THREE.Mesh( new THREE.ExtrudeGeometry(prova,{ amount: 0.05, bevelEnabled: false, bevelSegments: 0.05, steps: 1, bevelSize: 0.05, bevelThickness: 0.05}), new THREE.MeshPhongMaterial( {map: acciaio} ) );
    //strLavandino4.translateX(-0.35);   
    //strLavandino4.translateY(-0.45);
    //var strLavandino4=new THREE.Mesh(strLavandinogeometry4,strLavandinomaterial4);

    strLavandino4.position.set(-0.40,-0.97,0.175);

    var strLavandino3=new THREE.Mesh(strLavandinogeometry3,strLavandinomaterial3);
    strLavandino3.position.set(0.375,-0.475,0);

    
    
    var strLavandino2=new THREE.Mesh(strLavandinogeometry2,strLavandinomaterial2);
    strLavandino2.add(strLavandino3);
    strLavandino2.position.set(-0.375,-0.475,0);

    var strLavandino=new THREE.Mesh(strLavandinogeometry3,strLavandinomaterial);
    strLavandino.add(strLavandino2);
    strLavandino.add(strLavandino4);
    strLavandino.add(lateral);
    strLavandino.add(lateral2);
    strLavandino.position.set(-1.7,0.475,-0.14);
    

    var table=new THREE.Mesh(tabgeometry,tabmaterial);
    table.add(tray);
    table.add(strLavandino);
    table.position.set(0.95,0,0.35);

   
    
    var base=new THREE.Mesh(basegeometry,basematerial);
    base .add(table);


    o1.add(base);
    
    var o4=new THREE.Object3D();
    var o2=new THREE.Object3D();
    o4.add(o2);

    o2.scale.set(0.9,0.8,1.1);
    //o2.position.set(0,0,0);


  //lavandino

  var cubeGeometryBase = new THREE.BoxGeometry(0.5,0.3,0.02);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(-0.25,0.82,0);
  banco.rotation.y=Math.PI/2;
  o2.add(banco);
  var cubeGeometryBase = new THREE.BoxGeometry(0.5,0.3,0.02);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(0,0.82,-0.25);
  o2.add(banco);
  var cubeGeometryBase = new THREE.BoxGeometry(0.5,0.3,0.02);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(0.25,0.82,0);
  banco.rotation.y=Math.PI/2;
  o2.add(banco);
  var cubeGeometryBase = new THREE.BoxGeometry(0.5,0.3,0.02);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(0,0.82,0.25);
  o2.add(banco);
  var cubeGeometryBase = new THREE.BoxGeometry(0.5,0.5,0.02);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(0,0.67,0);
  banco.rotation.x=Math.PI/2;
  o2.add(banco);


  var torusMaterial = new THREE.MeshPhongMaterial( { map:acciaio } );
  var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.05, 0.025, 30, 30,Math.PI/2 ), torusMaterial );
  torus.rotation.x =  Math.PI/2;
  torus.position.set(0.21,0.97,0.21);
  o2.add( torus );

  var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.05, 0.025, 30, 30,Math.PI/2 ), torusMaterial );
  torus.rotation.x =  Math.PI/2;
  torus.rotation.z =  Math.PI/2;
  torus.position.set(-0.21,0.97,0.21);
  o2.add( torus );

  var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.05, 0.025, 30, 30,Math.PI/2 ), torusMaterial );
  torus.rotation.x =  Math.PI/2;
  torus.rotation.z =  Math.PI;
  torus.position.set(-0.21,0.97,-0.21);
  o2.add( torus );

  var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.05, 0.025, 30, 30,Math.PI/2 ), torusMaterial );
  torus.rotation.x =  Math.PI/2;
  torus.rotation.z =  -Math.PI/2;
  torus.position.set(0.21,0.97,-0.21);
  o2.add( torus );

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.0239,0.0239,0.428,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(0.26,0.97,0);
  maniglia.rotation.x =  Math.PI/2;
  o2.add(maniglia);  

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.0239,0.0239,0.428,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(-0.26,0.97,0);
  maniglia.rotation.x =  Math.PI/2;
  o2.add(maniglia); 

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.0239,0.0239,0.428,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(0,0.97,0.26);
  maniglia.rotation.z =  Math.PI/2;
  o2.add(maniglia); 

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.0239,0.0239,0.428,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(0,0.97,-0.26);
  maniglia.rotation.z =  Math.PI/2;
  o2.add(maniglia); 

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.025,0.025,0.1,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(-0.08,0.631,0);

  o2.add(maniglia); 

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.005,0.005,0.05,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(-0.08,0.677,0);
  maniglia.rotation.x=Math.PI/2;

  o2.add(maniglia);

  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(-0.08,0.677,0);
  maniglia.rotation.x=Math.PI/2;
  maniglia.rotation.z=Math.PI/2;
  o2.add(maniglia);

  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(-0.08,0.677,0);
  maniglia.rotation.x=Math.PI/2;
  maniglia.rotation.z=3*Math.PI/4;
  o2.add(maniglia);

  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(-0.08,0.677,0);
  maniglia.rotation.x=Math.PI/2;
  maniglia.rotation.z=Math.PI/4;
  o2.add(maniglia);



  //lavandino-acqua


  var o3=new THREE.Object3D();
  o4.add(o3);
  o3.position.x=-0.25
  //o3.position.set(-0.14,0,-0.42);

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.0125,0.0125,0.40,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(0,0.925,0);
  o3.add(maniglia);   


  var torusMaterial = new THREE.MeshPhongMaterial( { map:acciaio } );
  var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.11, 0.013, 30, 30 , Math.PI), torusMaterial );
        //torus.rotation.x =  Math.PI/2;
        torus.position.y=1.125;
        torus.position.x=0.11;
        o3.add( torus );

        var torusMaterial = new THREE.MeshPhongMaterial( { map:acciaio } );
        var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.01, 0.008, 6, 6 ), torusMaterial );
        torus.rotation.x =  Math.PI/2;
        torus.position.y=1.12;
        torus.position.x=0.22;
        o3.add( torus );




        var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.006,0.035,80);
        var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
        var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
        maniglia.position.set(0.22,1.108,0);
        o3.add(maniglia);


        var torusMaterial = new THREE.MeshPhongMaterial( { map:acciaio } );
        var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.08, 0.008, 30, 30 , Math.PI/2), torusMaterial );
        torus.rotation.x =  Math.PI/2;
        torus.rotation.z =  Math.PI/2;
        torus.position.set(0.085,0.95,0);
        o3.add( torus );

        var torusMaterial = new THREE.MeshPhongMaterial( { map:acciaio } );
        var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.08, 0.008, 30, 30 , Math.PI/2), torusMaterial );
        torus.rotation.x =  Math.PI/2;
        torus.rotation.z =  Math.PI;
        torus.position.set(0.085,0.95,0);
        o3.add( torus );



        var cylinderGeometry1 = new THREE.CylinderGeometry(0.008,0.008,0.1,80);
        var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
        var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
        rubinetto.position.set(0.13,0.95,0.08);
        rubinetto.rotation.z=Math.PI/2;
        o3.add(rubinetto);

        var cylinderGeometry1 = new THREE.CylinderGeometry(0.008,0.008,0.1,80);
        var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
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
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  rubinetto.position.set(0.17,0.935,0.08);
  o3.add(rubinetto);

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.006,0.004,0.02,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  rubinetto.position.set(0.17,0.935,-0.08);
  o3.add(rubinetto);

  o4.rotation.x=Math.PI/2
  o4.rotation.y=Math.PI
  o4.position.set(-0.7,0.02,-0.35);

    

   //o1.add(o4);
   o1.add(o4)

    o1.translateX(1.15);
    o1.translateY(0.5);
    o1.translateZ(0.35);
    o1.feature = this;
    o1.name = this.id;
	
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = TavoloAutoptico;