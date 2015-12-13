var Feature = require('./Feature.js');

Feature.inherits(MortuaryTrolley, Feature);

function MortuaryTrolley(feature) {
	Feature.call(this, feature);
}

MortuaryTrolley.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

MortuaryTrolley.prototype.in_graph = true;

MortuaryTrolley.prototype.in_2D_map = true;

MortuaryTrolley.prototype.get3DModel = function() {
	var o1=new THREE.Object3D();
     
    //texture materiali
    var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )

    //pilastro
    var pilastrogeometry = new THREE.BoxGeometry( 0.05, 0.05, 0.6);
    var pilastromaterial = new THREE.MeshLambertMaterial( {map: acciaio} );

    
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
    //prova.lineTo(0.8,0);
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
    var pilastro=new THREE.Mesh(pilastrogeometry,pilastromaterial);
    pilastro.position.set(0.07,0.025,0.35);               

    var base=new THREE.Mesh( 
        new THREE.ExtrudeGeometry(formaBase,
            { amount: 0.05, 
        bevelEnabled: false, 
        bevelSegments: 0.05, 
        steps: 2, 
        bevelSize: 0.05, 
        bevelThickness: 0.05}), 
        new THREE.MeshPhongMaterial( {map: acciaio} ) );

    for(var x=0.07; x<=1.8;x+=1.73){
        for(var y=0.025;y<=0.77;y+=0.745){
            var pilastro=new THREE.Mesh(pilastrogeometry,pilastromaterial);
            pilastro.position.set(x,y,0.35);
            base.add(pilastro);
        }
    }
    var geometry=new THREE.BoxGeometry(2,0.02,0.1);
    var material =new THREE.MeshLambertMaterial({map:acciaio});

    var supporto1=new THREE.Mesh(geometry,material);
    supporto1.position.set(1,0,0.65)
    o1.add(supporto1);

    var supporto2=supporto1.clone();
    supporto2.position.y=0.8;
    o1.add(supporto2);

    for(var x=0.4;x<=1.8; x+=0.3){
        var rullogeometry=new THREE.CylinderGeometry(0.02,0.02,0.8,80);
        var rullo=new THREE.Mesh(rullogeometry,material);
        var bullonegeometry=new THREE.CylinderGeometry(0.008,0.008,0.83,6);
        var bullone=new THREE.Mesh(bullonegeometry,material);
        rullo.add(bullone);
        rullo.position.z=0.66;
        rullo.position.x=x;
        rullo.position.y=0.4;
        o1.add(rullo);
    }

    //barella
    var barellageometry =new THREE.BoxGeometry(2,0.7,0.05);
    var barellamaterial= new THREE.MeshLambertMaterial({map : acciaio});

    var manicogeometry=new THREE.CylinderGeometry(0.02,0.02,0.5);
    var manicomaterial=new THREE.MeshLambertMaterial({map:acciaio});

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
    manico.position.x=1.05;

    var manico2=manico.clone();
    manico2.rotation.y=-Math.PI
    manico2.position.x=-1.05;

    var barella=new THREE.Mesh(barellageometry,barellamaterial); 
    barella.add(manico);
    barella.add(manico2);
    
    barella.position.set(1,0.4,0.7);
    o1.add(barella);
    
    o1.add(base);
    o1.translateZ(0.18);
    o1.feature = this;
    o1.name = this.id;
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = MortuaryTrolley;