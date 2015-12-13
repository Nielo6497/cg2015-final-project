var Feature = require('./Feature.js');

Feature.inherits(BarellaElettrica, Feature);

function BarellaElettrica(feature) {
	Feature.call(this, feature);
}

BarellaElettrica.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

BarellaElettrica.prototype.in_graph = true;

BarellaElettrica.prototype.in_2D_map = true;

BarellaElettrica.prototype.get3DModel = function() {
	var o1=new THREE.Object3D();
     
    //texture materiali
    var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
    
        
    //pilastro
    var pilastrogeometry = new THREE.BoxGeometry( 0.05, 0.02, 2);
    var pilastromaterial = new THREE.MeshLambertMaterial( {map: acciaio} );
    var pilastrogeometry2 = new THREE.BoxGeometry( 0.05, 0.02, 2);
    var pilastromaterial2 = new THREE.MeshLambertMaterial( {map: acciaio} );

    //perno
    var pernogeometry=new THREE.CylinderGeometry(0.02,0.02,0.7,60);
    var pernomaterial = new THREE.MeshLambertMaterial( {map: acciaio} );
    
    //var panca
    var pancageometry=new THREE.BoxGeometry(2,0.8,0.05);
    var pancamaterial=new THREE.MeshLambertMaterial({map:acciaio});

    var manubriogeometry=new THREE.CylinderGeometry(0.02,0.02,0.5,60);
    var manubriomaterial=new THREE.MeshLambertMaterial({map:acciaio});
    var manubriogeometry2=new THREE.CylinderGeometry(0.02,0.02,0.2,60);
    var manubriomaterial2=new THREE.MeshLambertMaterial({map:acciaio});

    var manicogeometry=new THREE.CylinderGeometry(0.02,0.02,0.5);
    var manicomaterial=new THREE.MeshLambertMaterial({map:acciaio});

    var barellageometry =new THREE.BoxGeometry(2.4,0.7,0.05);
    var barellamaterial= new THREE.MeshLambertMaterial({map : acciaio});

    var geometry = new THREE.TorusGeometry( 0.05, 0.02, 100, 100 ,1.7);
    var material = new THREE.MeshBasicMaterial( { map: acciaio } );

    var torusdx = new THREE.Mesh( geometry, material );
    var torussx=torusdx.clone();
    torussx.rotation.x=-Math.PI
    torussx.position.x=-0.05
    torussx.position.y=-0.25
    torusdx.position.x=-0.05
    torusdx.position.y=0.25

    var manico=new THREE.Mesh(manicogeometry,manicomaterial);
    manico.add(torusdx);
    manico.add(torussx);
    //manico.position.x=1.25;

    var manicoBarella=manico.clone();
    manicoBarella.position.x=1.25;
    var manico2=manico.clone();
    manico2.rotation.y=-Math.PI
    manico2.position.x=-1.25;

    var barella=new THREE.Mesh(barellageometry,barellamaterial); 
    barella.add(manicoBarella);
    barella.add(manico2);
    barella.position.z=0.089;

    var manicoCarrello=manico.clone();
    manicoCarrello.rotation.y=-0.75*Math.PI;
    manicoCarrello.position.x=-0.15;
    manicoCarrello.position.y=0.4;
    manicoCarrello.position.z=0.65;
    manicoCarrello.scale.y=1.266;
    o1.add(manicoCarrello);

    var distale=new THREE.Mesh(manubriogeometry2,manubriomaterial2)    
    //distale.rotation.x=Math.PI/2;
    distale.position.y=0.31;
    distale.position.x=-0.07;
    distale.rotation.z=Math.PI/4
    //distale.x=0.05

    var manubrio=new THREE.Mesh(manubriogeometry,manubriomaterial);
    //manubrio.add(distale);
    manubrio.rotation.x=Math.PI/2;
    manubrio.position.x=0.01;
    manubrio.position.z=0.25;
    manubrio.position.y=0.02
    manubrio.add(distale);
    o1.add(manubrio);

    var manubrio2=manubrio.clone();
    manubrio2.position.y=0.78;  
    o1.add(manubrio2); 

    var supportoBarella=manico.clone();
    supportoBarella.rotation.y=-Math.PI/2
    supportoBarella.position.x=-0.8;
    supportoBarella.position.z=0.06;

    var supportoBarella2=supportoBarella.clone();
    supportoBarella2.position.x=0.8;

    var panca=new THREE.Mesh(pancageometry,pancamaterial);
    panca.add(supportoBarella);
    panca.add(supportoBarella2);
    panca.add(barella);
    panca.position.set(1.2,0.4,1.4);
    o1.add(panca);

    var perno=new THREE.Mesh(pernogeometry,pernomaterial);
    perno.position.y=0.35

    var perno2=perno.clone();
    perno2.position.x=-0.95;

    var perno3=perno.clone();
    perno3.position.x=0.95;

    var pilastro=new THREE.Mesh(pilastrogeometry,pilastromaterial);
    pilastro.add(perno);
    pilastro.add(perno2);
    pilastro.add(perno3);
    var pilastro2=pilastro.clone();
    pilastro.rotation.y=Math.PI/4
    pilastro.position.set(1,0.06,0.7)
    
    
    pilastro2.rotation.y=-Math.PI/2
    pilastro2.position.y=0.02
    

    pilastro.add(pilastro2);


    var pilastro3= new THREE.Mesh(pilastrogeometry2,pilastromaterial2);
    var pilastro4=pilastro3.clone();
    pilastro3.rotation.y=Math.PI/4
    pilastro3.position.set(1,0.75,0.7)
    pilastro4.rotation.y=-Math.PI/2

    pilastro3.add(pilastro4);

    o1.add(pilastro3); 
    o1.add(pilastro);

    var o2=new THREE.Object3D();

    var motorergeometry =new THREE.BoxGeometry(0.6,0.7,0.2);
    var motorematerial= new THREE.MeshLambertMaterial({map : acciaio});

    var motorergeometry2 =new THREE.BoxGeometry(0.3,0.7,0.15);
    var motorematerial2= new THREE.MeshLambertMaterial({map : acciaio});
    var motorergeometry3 =new THREE.BoxGeometry(0.15,0.35,0.15);
    var motorematerial3= new THREE.MeshLambertMaterial({map : acciaio});

    var bloccomotore1=new THREE.Mesh(motorergeometry,motorematerial);

    var bloccomotore2=new THREE.Mesh(motorergeometry2,motorematerial2);
    bloccomotore2.position.z=0.175;
    bloccomotore2.position.x=-0.15;

    var stickgeometry=new THREE.CylinderGeometry(0.01,0.01,0.02);
    var stickmaterial=new THREE.MeshLambertMaterial({map:acciaio});

    var pomellogeometry = new THREE.SphereGeometry( 0.015, 32, 32 );
    var pomellomaterial = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var pomello = new THREE.Mesh( pomellogeometry, pomellomaterial );
    pomello.position.y=0.015;

    var stick=new THREE.Mesh(stickgeometry,stickmaterial);
    stick.add(pomello);
    stick.rotation.x=Math.PI/2;
    stick.position.z=0.085;


    bloccomotore3=new THREE.Mesh(motorergeometry3,motorematerial3);
    bloccomotore3.add(stick);
    bloccomotore3.position.z=0.15;
    bloccomotore3.position.x=-0.075;
    bloccomotore3.position.y=0.175;

    bloccomotore2.add(bloccomotore3)

    var curve = new THREE.SplineCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0.05, 0.1, 0),
        new THREE.Vector3(0.15, 0.05, 0),
        new THREE.Vector3(0.15, 0.03, 0.1)
        ]);

    var geometry = new THREE.TubeGeometry(
    curve,  //path
    64,    //segments
    0.008,     //radius
    64,     //radiusSegments
    false  //closed
);
    
    var material=new THREE.MeshLambertMaterial({color :0x000000});
    var cavo=new THREE.Mesh(geometry,material);
    cavo.scale.x=0.5;
    cavo.scale.y=0.5;
    cavo.scale.z=0.5;
    cavo.position.y=0.175;
    cavo.position.x=-0.01;
    cavo.position.z=-0.01;
    cavo.rotation.y=-Math.PI/2
    bloccomotore3.add(cavo);   
    
    bloccomotore1.add(bloccomotore2);

    o2.add(bloccomotore1);

    var formaBase= new THREE.Shape();
    formaBase.moveTo(0,0);
    formaBase.lineTo(2,0);
    formaBase.lineTo(2,0.8);
    formaBase.lineTo(0,0.8);
    formaBase.lineTo(0,0.05);
    formaBase.lineTo(0.05,0.05);
    formaBase.lineTo(0.05,0.75);
    formaBase.lineTo(1.95,0.75);
    formaBase.lineTo(1.95,0.05);
    formaBase.lineTo(0,0.05);
    formaBase.lineTo(0,0);

    //ruote
    var black = new THREE.MeshLambertMaterial({color: 0x000000});
    var gray = new THREE.MeshLambertMaterial({map: acciaio});

    for(var fx=0.034; fx<=1.94; fx+=1.6){
        for(var fy=0.03; fy<=0.78; fy+=0.75){
            var ruota=new THREE.Object3D(); 
            ruota.rotation.z=Math.PI/2;
            ruota.position.set(fx,fy,-0.012)
            

            var topgeometry=new THREE.BoxGeometry(0.05,0.1,0.01);
            var lato1= new THREE.Shape();
            lato1.moveTo(0,0);
            lato1.lineTo(0,0.1);
            lato1.lineTo(0.1,0.1);
            lato1.lineTo(0.1,0.05);

            var copertonegeometry=new THREE.CylinderGeometry(0.07,0.07,0.035,80);
            var cerchionegeometry=new THREE.CylinderGeometry(0.05,0.05,0.045,80);
            var bullonegeometry=new THREE.CylinderGeometry(0.007,0.007,0.067,6);
            var snodogeometry= new THREE.CylinderGeometry(0.009,0.009,0.02,80);

            var snodo=new THREE.Mesh(snodogeometry,gray);
            snodo.rotation.x=Math.PI/2;
            snodo.position.y=-0.04;
            snodo.position.z=0.01;

            var lateral1=new THREE.Mesh( new THREE.ExtrudeGeometry(lato1,{ amount: 0.009, bevelEnabled: false, bevelSegments: 0.05, steps: 1, bevelSize: 0.05, bevelThickness: 0.05}), new THREE.MeshPhongMaterial( {map:acciaio} ) );   
            lateral1.rotation.y=-Math.PI/2;
            lateral1.rotation.z=-Math.PI;
            lateral1.position.y=0.05;
            lateral1.position.z=0.005;
            lateral1.position.x=-0.025;

            var lateral2=lateral1.clone();
            lateral2.position.x=0.03;

            var top=new THREE.Mesh(topgeometry,gray);
            top.add(lateral1);
            top.add(lateral2);

            var cerchione=new THREE.Mesh(cerchionegeometry,gray);
            var copertone=new THREE.Mesh(copertonegeometry,black);
            var bullone=new THREE.Mesh(bullonegeometry,gray);
            copertone.add(bullone);
            copertone.add(cerchione);
            copertone.rotation.z=-Math.PI/2;
            copertone.position.z=-0.075
            copertone.position.y=-0.015
            copertone.position.x=-0.0023
            
            top.add(copertone);
            top.add(snodo);
            ruota.add(top);
            o1.add(ruota);

        }
    }
                 

    var base=new THREE.Mesh( new THREE.ExtrudeGeometry(formaBase,{ amount: 0.05, 
        bevelEnabled: false, bevelSegments: 0.05, steps: 2, bevelSize: 0.05, bevelThickness: 0.05}), 
        new THREE.MeshPhongMaterial( {map: acciaio} ) );

    o2.scale.x=0.4;
    o2.position.x=0.14;
    o2.position.y=0.4;
    o2.position.z=0.1

    base.add(o2);
    o1.add(base);
    o1.translateZ(0.18);
    o1.feature = this;
    o1.name = this.id;
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = BarellaElettrica;