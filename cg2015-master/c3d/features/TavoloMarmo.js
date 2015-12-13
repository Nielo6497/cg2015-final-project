var Feature = require('./Feature.js');

Feature.inherits(TavoloMarmo, Feature);

function TavoloMarmo(feature) {
	Feature.call(this, feature);
}

TavoloMarmo.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

TavoloMarmo.prototype.in_graph = true;

TavoloMarmo.prototype.in_2D_map = true;

TavoloMarmo.prototype.get3DModel = function() {
	var o1=new THREE.Object3D();
     
    //texture materiali
    var texture=THREE.ImageUtils.loadTexture("../../assets/textures/marmo.jpg" )
    var blackTexture=THREE.ImageUtils.loadTexture("../../assets/textures/metalblack.jpg" );
    //materiali
    var marmo=new THREE.MeshLambertMaterial({map: texture});
    var black = new THREE.MeshLambertMaterial({map: blackTexture});
    
    //materiali
    
               
    var pianogeometry=new THREE.BoxGeometry(2,0.8,0.25);
    var piano=new THREE.Mesh(pianogeometry,marmo);
    
    
    var piedegeometry=new THREE.BoxGeometry(0.2,0.6,0.4);
    var piede=new THREE.Mesh(piedegeometry,marmo);
    piede.position.set(-0.7,0,-0.225);
    piano.add(piede);

    var piede2=piede.clone();
    piede.position.x=0.7;
    piano.add(piede2);

    var scaricogeometry=new THREE.CylinderGeometry(0.03,0.03,0.2,80);
    var scarico=new THREE.Mesh(scaricogeometry,black);  
    scarico.rotation.x=Math.PI/2;
    scarico.translateY(0.027);
    scarico.translateX(0.8);
    piano.add(scarico)

    var formabordo= new THREE.Shape();
    formabordo.moveTo(0,0);
    formabordo.lineTo(2,0);
    formabordo.lineTo(2,0.8);
    formabordo.lineTo(0,0.8);
    formabordo.lineTo(0,0.05);
    formabordo.lineTo(0.05,0.05);
    formabordo.lineTo(0.05,0.75);
    formabordo.lineTo(1.95,0.75);
    formabordo.lineTo(1.95,0.05);
    formabordo.lineTo(0,0.05);
    //prova.lineTo(0.8,0);
    formabordo.lineTo(0,0);

    


    var bordo=new THREE.Mesh( 
        new THREE.ExtrudeGeometry(formabordo,
            { amount: 0.05, 
        bevelEnabled: false, 
        bevelSegments: 0.05, 
        steps: 2, 
        bevelSize: 0.05, 
        bevelThickness: 0.05}), 
        marmo );
    bordo.position.set(-1,-0.4,0.126);
    piano.add(bordo)
    
    o1.translateX(1);
    o1.translateY(0.4);
    o1.translateZ(0.4125);

    
    
    o1.add(piano);
    o1.feature = this;
    o1.name = this.id;
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = TavoloMarmo;