var Feature = require('./Feature.js');

Feature.inherits(Bara, Feature);

function Bara(feature) {
	Feature.call(this, feature);
}

Bara.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Bara.prototype.in_graph = true;

Bara.prototype.in_2D_map = false;

Bara.prototype.get3DModel = function() {
	var o1=new THREE.Object3D();
	//texture materiali
    var texture=THREE.ImageUtils.loadTexture("../../assets/textures/wood.jpg" )
    var acciaioTexture=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" );
    //materiali
    var legno=new THREE.MeshLambertMaterial({map: texture});
    var acciaio = new THREE.MeshLambertMaterial({map: acciaioTexture});
    
    var barageometry= new THREE.Shape();
    barageometry.moveTo(0,0);
    barageometry.lineTo(0,0.2);
    barageometry.lineTo(0.3,0.3);
    barageometry.lineTo(2,0.1);
    barageometry.lineTo(2,-0.2);
    barageometry.lineTo(0.3,-0.3);
    barageometry.lineTo(0,-0.2);
    barageometry.lineTo(0,0);
    


    var bara=new THREE.Mesh( 
        new THREE.ExtrudeGeometry(barageometry,
            { amount: 0.1, 
        bevelEnabled: false, 
        bevelSegments: 0.05, 
        steps: 2, 
        bevelSize: 0.05, 
        bevelThickness: 0.05}), 
        legno );

    var geometry=new THREE.BoxGeometry(0.05,0.4,0.05);
    var orizzontale=new THREE.Mesh(geometry,acciaio);
    orizzontale.position.z=0.1
    orizzontale.position.x=0.3


    var geometry=new THREE.BoxGeometry(0.7,0.05,0.05);
    var verticale=new THREE.Mesh(geometry,acciaio);
    verticale.position.x=0.24;
    orizzontale.add(verticale);
    o1.add(bara);
    o1.add(orizzontale);
    o1.rotation.y=Math.PI/2;
    o1.translateZ(2);
    
    
    
    o1.feature = this;
    o1.name = this.id;
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = Bara;