var Feature = require('./Feature.js');

Feature.inherits(CellaFrigo, Feature);

function CellaFrigo(feature) {
	Feature.call(this, feature);
}

CellaFrigo.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

CellaFrigo.prototype.in_graph = true;

CellaFrigo.prototype.in_2D_map =true;

CellaFrigo.prototype.get3DModel = function() {

	//TO DO
	var o1=new THREE.Object3D();

    var prova= new THREE.Shape(); 

    //texture materiali
    var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
    var acciaio2=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio2.jpg" )
    var panel=THREE.ImageUtils.loadTexture("../../assets/textures/cabinet-panel.jpg" )
    var number=THREE.ImageUtils.loadTexture("../../assets/textures/numero.jpg" )
    
    //blocco principale
    var bodygeometry = new THREE.BoxGeometry( 1.91, 2.26, 2.65 );
    var bodymaterial = new THREE.MeshLambertMaterial( {map: acciaio} );
    
    //pannello di controllo
    var controlGeometry = new THREE.BoxGeometry( 0.01, 0.20, 0.20 );
    var controlMaterial = new THREE.MeshLambertMaterial( {map: panel} );
    
    //cerniera
    var cernieraGeometry = new THREE.BoxGeometry( 0.08, 0.1, 0.20 );
    var cernieraMaterial = new THREE.MeshLambertMaterial( {map: acciaio} );
    //mascatura
    var lockGeometry = new THREE.BoxGeometry( 0.08, 0.1, 0.13 );
    var lockMaterial = new THREE.MeshLambertMaterial( {map: acciaio2} );

    //maniglia
    var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.25,60);
    var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio2});
    
   
    //porticina
    var geometry = new THREE.BoxGeometry( 0.1, 0.70, 0.60 );
    var material = new THREE.MeshLambertMaterial( {map: acciaio2} );
   
    //etichetta
    var labelGeometry = new THREE.BoxGeometry( 0.13,0.07 , 0.09 );
    var labelMaterial = new THREE.MeshLambertMaterial( {map: number} );
    
    
    //Assemblamento
    var corpo = new THREE.Mesh( bodygeometry, bodymaterial );
    o1.add(corpo);

    var controlPanel=new THREE.Mesh( controlGeometry, controlMaterial );
    controlPanel.position.set(0.955,0,0.35);
    controlPanel.rotation.x=Math.PI/2;
    o1.add(controlPanel);
    
    
    var porticina1= new THREE.Mesh(geometry,material);
    var cernieraUp= new THREE.Mesh(cernieraGeometry,cernieraMaterial);
    var cernieraDown=new THREE.Mesh(cernieraGeometry,cernieraMaterial);
    var mascatura1=new THREE.Mesh(lockGeometry,lockMaterial);
    var maniglia1 = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
    var etichetta1=new THREE.Mesh(labelGeometry,labelMaterial);
    etichetta1.rotation.x=Math.PI/2;
    maniglia1.rotation.x=Math.PI/2;
    maniglia1.position.set(0.053,0.03,0.07);
    mascatura1.add(maniglia1);
    mascatura1.position.set(0,0.35,0);
    cernieraUp.position.set(0,-0.35,0.15);
    cernieraDown.position.set(0,-0.35,-0.15);
    porticina1.add(cernieraUp);
    porticina1.add(cernieraDown);
    porticina1.add(mascatura1);
    porticina1.add(etichetta1);
    porticina1.position.set(0.955,0.65,0.85);
    o1.add(porticina1);

    var porticina2= new THREE.Mesh(geometry,material);
    var cernieraUp= new THREE.Mesh(cernieraGeometry,cernieraMaterial);
    var cernieraDown=new THREE.Mesh(cernieraGeometry,cernieraMaterial);
    var mascatura2=new THREE.Mesh(lockGeometry,lockMaterial);
    var maniglia2= new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
    var etichetta2=new THREE.Mesh(labelGeometry,labelMaterial);
    etichetta2.rotation.x=Math.PI/2;
    maniglia2.rotation.x=Math.PI/2;
    maniglia2.position.set(0.053,0.03,0.07);
    mascatura2.add(maniglia2);
    mascatura2.position.set(0,0.35,0);
    cernieraUp.position.set(0,-0.35,0.15);
    cernieraDown.position.set(0,-0.35,-0.15);
    porticina2.add(cernieraUp);
    porticina2.add(cernieraDown);
    porticina2.add(mascatura2);
    porticina2.add(etichetta2);
    porticina2.position.set(0.955,0.65,0.05);
    o1.add(porticina2);
    
    var porticina3= new THREE.Mesh(geometry,material);
    var cernieraUp= new THREE.Mesh(cernieraGeometry,cernieraMaterial);
    var cernieraDown=new THREE.Mesh(cernieraGeometry,cernieraMaterial);
    var mascatura3=new THREE.Mesh(lockGeometry,lockMaterial);
    var maniglia3 = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
    var etichetta3=new THREE.Mesh(labelGeometry,labelMaterial);
    etichetta3.rotation.x=Math.PI/2;
    maniglia3.rotation.x=Math.PI/2;
    maniglia3.position.set(0.053,0.03,0.07);
    mascatura3.add(maniglia3);
    mascatura3.position.set(0,0.35,0);
    cernieraUp.position.set(0,-0.35,0.15);
    cernieraDown.position.set(0,-0.35,-0.15);
    porticina3.add(cernieraUp);
    porticina3.add(cernieraDown);
    porticina3.add(mascatura3);
    porticina3.add(etichetta3);
    porticina3.position.set(0.955,0.65,-0.75);
    o1.add(porticina3);
    
    
    var porticina4= new THREE.Mesh(geometry,material);
    var cernieraUp= new THREE.Mesh(cernieraGeometry,cernieraMaterial);
    var cernieraDown=new THREE.Mesh(cernieraGeometry,cernieraMaterial);
    var mascatura4=new THREE.Mesh(lockGeometry,lockMaterial);
    var maniglia4 = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
    var etichetta4=new THREE.Mesh(labelGeometry,labelMaterial);
    etichetta4.rotation.x=Math.PI/2;
    maniglia4.rotation.x=Math.PI/2;
    maniglia4.position.set(0.053,0.03,0.07);
    mascatura4.add(maniglia4);
    mascatura4.position.set(0,0.35,0);
    cernieraUp.position.set(0,-0.35,0.15);
    cernieraDown.position.set(0,-0.35,-0.15);
    porticina4.add(cernieraUp);
    porticina4.add(cernieraDown);
    porticina4.add(mascatura4);
    porticina4.add(etichetta4);
    porticina4.position.set(0.955,-0.65,0.85);
    o1.add(porticina4);

    
    var porticina5= new THREE.Mesh(geometry,material);
    var cernieraUp= new THREE.Mesh(cernieraGeometry,cernieraMaterial);
    var cernieraDown=new THREE.Mesh(cernieraGeometry,cernieraMaterial);
    var mascatura5=new THREE.Mesh(lockGeometry,lockMaterial);
    var maniglia5 = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
    var etichetta5=new THREE.Mesh(labelGeometry,labelMaterial);
    etichetta5.rotation.x=Math.PI/2;
    maniglia5.rotation.x=Math.PI/2;
    maniglia5.position.set(0.053,0.03,0.07);
    mascatura5.add(maniglia5);
    mascatura5.position.set(0,0.35,0);
    cernieraUp.position.set(0,-0.35,0.15);
    cernieraDown.position.set(0,-0.35,-0.15);
    porticina5.add(cernieraUp);
    porticina5.add(cernieraDown);
    porticina5.add(mascatura5);
    porticina5.add(etichetta5);
    porticina5.position.set(0.955,-0.65,0.05);
    o1.add(porticina5);

    
    var porticina6= new THREE.Mesh(geometry,material);
    var cernieraUp= new THREE.Mesh(cernieraGeometry,cernieraMaterial);
    var cernieraDown=new THREE.Mesh(cernieraGeometry,cernieraMaterial);
    var mascatura6=new THREE.Mesh(lockGeometry,lockMaterial);
    var maniglia6= new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
    var etichetta6=new THREE.Mesh(labelGeometry,labelMaterial);
    etichetta6.rotation.x=Math.PI/2;
    maniglia6.rotation.x=Math.PI/2;
    maniglia6.position.set(0.053,0.03,0.07);
    mascatura6.add(maniglia6);
    mascatura6.position.set(0,0.35,0);
    cernieraUp.position.set(0,-0.35,0.15);
    cernieraDown.position.set(0,-0.35,-0.15);
    porticina6.add(cernieraUp);
    porticina6.add(cernieraDown);
    porticina6.add(mascatura6);
    porticina6.add(etichetta6);
    porticina6.position.set(0.955,-0.65,-0.75);
    o1.add(porticina6);
    o1.translateX(0.955);
    o1.translateY(1.13);
    o1.translateZ(1.325);
    

    
    o1.feature = this;
    o1.name = this.id;
	
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = CellaFrigo;