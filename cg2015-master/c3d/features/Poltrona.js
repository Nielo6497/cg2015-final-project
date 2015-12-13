var Feature = require('./Feature.js');

Feature.inherits(Poltrona, Feature);

function Poltrona(feature) {
	Feature.call(this, feature);
}

Poltrona.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Poltrona.prototype.in_graph = true;

Poltrona.prototype.in_2D_map = false;

Poltrona.prototype.get3DModel = function() {
	var block=new THREE.Object3D();

     
    //texture
    var texture=THREE.ImageUtils.loadTexture("../../assets/textures/leather.jpg" );
    var texture2=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" );
    var whitetexture=THREE.ImageUtils.loadTexture("../../assets/textures/bancone.jpg" );
    var blackTexture=THREE.ImageUtils.loadTexture("../../assets/textures/metalblack.jpg" );
    //materiali
    
    var black = new THREE.MeshLambertMaterial({map: texture});
    var gray = new THREE.MeshLambertMaterial({color: 0x808080});
    var acciaio=new THREE.MeshLambertMaterial({map: texture2});
    var white=new THREE.MeshLambertMaterial({map: whitetexture});



    var strutturaPoltrona= new THREE.Shape();
    strutturaPoltrona.moveTo(0,0);
    strutturaPoltrona.lineTo(0.7,0);
    strutturaPoltrona.lineTo(0.7,0.76);
    strutturaPoltrona.lineTo(0,0.76);
    strutturaPoltrona.lineTo(0,0.66)
    strutturaPoltrona.lineTo(0.6,0.66);
    strutturaPoltrona.lineTo(0.6,0.1);
    strutturaPoltrona.lineTo(0,0.1);
    strutturaPoltrona.lineTo(0,0)

    var basegeometry=new THREE.BoxGeometry(0.6,0.56,0.3);
    var base=new THREE.Mesh(basegeometry,black);
    base.position.set(0.3,0.38,0.15);

    var schienalegeometry=new THREE.BoxGeometry(0.1,0.56,0.3);
    var schienale=new THREE.Mesh(schienalegeometry,black);
    schienale.position.set(0.3,0,0.5);
    base.add(schienale);

    var cuscinogeometry=new THREE.BoxGeometry(0.65,0.56,0.1);
    var cuscino=new THREE.Mesh(cuscinogeometry,black);
    cuscino.position.z=0.2;
    base.add(cuscino);

    var poltrona=new THREE.Mesh( new THREE.ExtrudeGeometry(strutturaPoltrona,{ amount: 0.65, bevelEnabled: false, bevelSegments: 0.05, steps: 1, bevelSize: 0.05, bevelThickness: 0.05}), new THREE.MeshPhongMaterial( {map:texture} ) );   
    poltrona.add(base);

    for(var x=0.05; x<=0.65; x+=0.6){
        for(var y=0.05; y<=0.71; y+=0.65){

            var piedegeometry=new THREE.CylinderGeometry(0.03,0.03,0.09,80);
            var piede=new THREE.Mesh(piedegeometry,acciaio)
            piede.rotation.x=Math.PI/2;
            piede.position.set(x,y,0);
            poltrona.add(piede);

        }
    }
    
    block.add(poltrona);
    block.translateZ(0.06);
    block.feature=this;
    block.name = this.id;
	var model = Feature.packageModel(block);

	return model;
};

module.exports = Poltrona;