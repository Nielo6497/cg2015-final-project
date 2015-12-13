var Feature = require('./Feature.js');

Feature.inherits(CoffinStorage, Feature);

function CoffinStorage(feature) {
	Feature.call(this, feature);
}

CoffinStorage.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

CoffinStorage.prototype.in_graph = true;

CoffinStorage.prototype.in_2D_map = true;

CoffinStorage.prototype.get3DModel = function() {
	var o1=new THREE.Object3D();
	//texture materiali
    var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
    var acciaio2=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio4.jpg" )
    var plastic=THREE.ImageUtils.loadTexture("../../assets/textures/plastic.jpg" )
        
    //pilastro
    var pilastrogeometry = new THREE.BoxGeometry( 0.15, 0.05, 3);
    var pilastromaterial = new THREE.MeshLambertMaterial( {map: acciaio} );
    //pilastromaterial.side=THREE.BackSide;

    //trave
    var travegeometry = new THREE.BoxGeometry( 0.7 , 0.05, 0.05);
    var travematerial = new THREE.MeshLambertMaterial( {map: acciaio} );

    //guida
    var guidageometry=new THREE.CylinderGeometry(0.1,0.07,0.02,64);
    var guidamaterial=new THREE.MeshLambertMaterial( {map: plastic});
    var guidageometry2=new THREE.CylinderGeometry(0.05,0.05,0.06,64);
    var guidamaterial2=new THREE.MeshLambertMaterial({map: plastic});
    
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


    
    var trave=new THREE.Mesh(travegeometry,travematerial);
    var trave2=trave.clone();
    trave2.position.set(-0.275,0.8,1.5)
    trave.position.set(-0.275,0,1.5);
    
    //guida barella
    var guida=new THREE.Mesh(guidageometry,guidamaterial);
    var guida2=new THREE.Mesh(guidageometry2,guidamaterial2);

    guida2.position.y=0.03;
    guida.add(guida2);
    guida.position.set(0,0.025,-1);
    var pilastro=new THREE.Mesh(pilastrogeometry,pilastromaterial);
    pilastro.add(guida);

    var pos=-1;
    

    for(var i=0; i<3; i++){
        var temp= guida.clone();
        pos=pos+0.6
        temp.position.z=pos;
        
        pilastro.add(temp);
    }

    var pilastro2=pilastro.clone();
    pilastro2.translateY(0.8);
    pilastro2.rotation.z=Math.PI;
    pilastro.add(trave);
    pilastro.add(trave2);
   
    
    o1.add(pilastro);
    o1.add(pilastro2);

    
    var temp=o1.clone();
    var posi=0;
    for(var i=0; i<3; i++){
        var c=temp.clone();
        posi+=0.6
        c.position.x=posi;
        
        o1.add(c);
    }
    //aggiungere qui le barelle

    var p=0.85;
    for(var i=0; i<4; i++){
        var temp=barella.clone();
        temp.position.set(1,0.4,p);
        p-=0.6
        o1.add(temp);
    }

    

    var temp2=o1.clone();
    var po=0;
    for(var i=0; i<3; i++){
        var c=temp2.clone();
        po+=0.85
        c.position.y=po;
        
        o1.add(c);
    }
    o1.translateZ(1.5);
    o1.translateX(0.6);
    //o1.add(lateralsx);
    //o1.add(lateraldx);
    o1.feature = this;
    o1.name = this.id;
	
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = CoffinStorage;