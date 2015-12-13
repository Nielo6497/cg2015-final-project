var Feature = require('./Feature.js');

Feature.inherits(Evaporatore, Feature);

function Evaporatore(feature) {
	Feature.call(this, feature);
}

Evaporatore.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Evaporatore.prototype.in_graph = true;

Evaporatore.prototype.in_2D_map = true;

Evaporatore.prototype.get3DModel = function() {
	var block=new THREE.Object3D();

    var fan=new THREE.Object3D();
    var gabbia=new THREE.Object3D();
    var fanStruct=new THREE.Object3D();

     
    //texture
    var texture=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" );
    var whitetexture=THREE.ImageUtils.loadTexture("../../assets/textures/bancone.jpg" );
    var blackTexture=THREE.ImageUtils.loadTexture("../../assets/textures/metalblack.jpg" );
    //materiali
    
    var black = new THREE.MeshLambertMaterial({map: blackTexture});
    var acciaio=new THREE.MeshLambertMaterial({map: texture});
    var white=new THREE.MeshLambertMaterial({map: whitetexture});
    
    var cassageometry=new THREE.BoxGeometry(0.5,1.5,0.5);
    var cassa=new THREE.Mesh(cassageometry,white);
    block.add(cassa);
    
    for(var x=-0.2; x<=0.2;x+=0.4){
        for(var z=-0.70; z<=0.70; z+=1.4){
            var bullonegeometry=new THREE.CylinderGeometry(0.01,0.01,0.51,6);
            var bullone=new THREE.Mesh(bullonegeometry,acciaio);
            bullone.position.set(0,z,x);
            bullone.rotation.z=Math.PI/2;
            cassa.add(bullone);
        }
    }
    

    var geometry = new THREE.TorusGeometry( 0.1, 0.05, 30, 100,2 );
    var torus = new THREE.Mesh( geometry, acciaio);
    torus.translateY(0.05);
    torus.translateX(-0.1)
    var tubogeometry=new THREE.CylinderGeometry(0.05,0.05,0.1,80);
    var tubo=new THREE.Mesh(tubogeometry,acciaio);
    tubo.add(torus);
    tubo.rotation.x=Math.PI/2;
    tubo.translateY(0.3);
    tubo.translateX(-0.20)
    cassa.add(tubo);


    var assegeometry=new THREE.CylinderGeometry(0.05,0.05,0.03,80);
    var supportogabbiageometry=new THREE.CylinderGeometry(0.004,0.004,0.48,80);
    var retrogabbiageometry=new THREE.CylinderGeometry(0.24,0.24,0.02,80);

    var retrogabbia=new THREE.Mesh(retrogabbiageometry,new THREE.MeshLambertMaterial({color: 0x000000}));
    retrogabbia.rotation.z=Math.PI/2;
    retrogabbia.translateY(0.009);
    gabbia.add(retrogabbia);

    var supportogabbia=new THREE.Mesh(supportogabbiageometry,black);
    supportogabbia.translateX(0.05);
    var supportogabbia2=supportogabbia.clone();
    supportogabbia2.rotation.x=Math.PI/2;
    gabbia.add(supportogabbia2);
    gabbia.add(supportogabbia);

    for(var i=0; i<0.05; i+=0.01){
        var bordogeometry = new THREE.TorusGeometry( 0.24, 0.007, 16, 100 );
        var bordotorus = new THREE.Mesh( bordogeometry, black);
        bordotorus.rotation.y=Math.PI/2;
        bordotorus.translateZ(i);
        gabbia.add(bordotorus);
    }
    
    for(var i=0.24; i>0.01; i-=0.02){
        var geometry = new THREE.TorusGeometry( i, 0.004, 16, 100 );
        var torus = new THREE.Mesh( geometry, black);
        torus.rotation.y=Math.PI/2;
        torus.translateZ(0.05);

        gabbia.add(torus);
    }
    

    var palettageometry= new THREE.Shape();
    palettageometry.moveTo(0,0);
    palettageometry.lineTo(0,0.2);
    palettageometry.lineTo(0.1,0.2);

    var paletta=new THREE.Mesh( new THREE.ExtrudeGeometry(palettageometry,{ amount: 0.001, bevelEnabled: false, bevelSegments: 0.05, steps: 1, bevelSize: 0.05, bevelThickness: 0.05}), acciaio);   
    paletta.rotation.y=Math.PI/2.5;

    var paletta2=paletta.clone();
    paletta2.rotation.x=Math.PI/2;

    var paletta3=paletta.clone();
    paletta3.rotation.x=Math.PI;

    var paletta4=paletta.clone();
    paletta4.rotation.x=1.5*Math.PI;

    var asse=new THREE.Mesh(assegeometry,acciaio); 
    asse.rotation.z=Math.PI/2;
    fan.name="fan";
    fan.add(paletta);
    fan.add(paletta2);
    fan.add(paletta3);
    fan.add(paletta4);
    fan.add(asse);
    fanStruct.add(fan);
    fanStruct.add(gabbia);
    fanStruct.translateX(0.25);
    var fanStruct2= fanStruct.clone();
    fanStruct2.remove(fan);
    fanStruct.translateY(-0.45)
    fanStruct2.translateY(0.45)

    var leftFan=fanStruct.getObjectByName("fan");
    var rightFan=fanStruct2.getObjectByName("fan");
    cassa.add(fanStruct);
    cassa.add(fanStruct2);
    console.log(fanStruct.children)
    setInterval(function () {leftFan.rotation.x+=Math.PI/6; rightFan.rotation.x+=Math.PI/6; }, 1);
    block.translateX(0.25);
    block.translateZ(0.25);
    block.translateY(0.75);

    block.feature = this;
    block.name = this.id;
	var model = Feature.packageModel(block);

	return model;
};

module.exports = Evaporatore;