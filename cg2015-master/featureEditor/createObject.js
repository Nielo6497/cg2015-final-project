function get3DModel() {
   var o1=new THREE.Object3D();
     
    //texture materiali
    var texture=THREE.ImageUtils.loadTexture("assets/textures/marmo.jpg" );
    var texture2=THREE.ImageUtils.loadTexture("assets/textures/acciaio.jpg" );
    var blackTexture=THREE.ImageUtils.loadTexture("assets/textures/metalblack.jpg" );
    //materiali
    var marmo=new THREE.MeshLambertMaterial({map: texture});
    var black = new THREE.MeshLambertMaterial({map: blackTexture});
    var acciaio=new THREE.MeshLambertMaterial({map: texture2});
    
    //materiali
    
               
    var pianogeometry=new THREE.BoxGeometry(0.8,0.8,0.1);
    var piano=new THREE.Mesh(pianogeometry,marmo);
    
    
    

    var scaricogeometry=new THREE.CylinderGeometry(0.03,0.03,0.112,80);
    var scarico=new THREE.Mesh(scaricogeometry,black);  
    scarico.rotation.x=Math.PI/2;
    piano.add(scarico)

    var formabordo= new THREE.Shape();
    formabordo.moveTo(0,0);
    formabordo.lineTo(0.8,0);
    formabordo.lineTo(0.8,0.8);
    formabordo.lineTo(0,0.8);
    formabordo.lineTo(0,0.05);
    formabordo.lineTo(0.05,0.05);
    formabordo.lineTo(0.05,0.75);
    formabordo.lineTo(0.75,0.75);
    formabordo.lineTo(0.75,0.05);
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
    bordo.position.set(-0.4,-0.4,0.05);
    piano.add(bordo)

    var tubogeometry=new THREE.BoxGeometry(0.3,0.05,0.05);
    var tubo=new THREE.Mesh(tubogeometry,acciaio)
    tubo.position.z=1.9;
    tubo.position.x=-0.35;
    o1.add(tubo);

    var tubogeometry2=new THREE.BoxGeometry(0.05,0.05,0.1);
    var tubo2=new THREE.Mesh(tubogeometry2,acciaio)
    tubo2.position.x=0.15;
    tubo2.position.z=-0.03
    tubo.add(tubo2);

    var docciageometry=new THREE.BoxGeometry(0.3,0.3,0.03);
    var doccia=new THREE.Mesh(docciageometry,acciaio);
    doccia.position.z=-0.05
    tubo2.add(doccia);

    for(var x=-0.14; x<0.14; x+=0.01){
      for(var y=-0.14; y<0.14; y+=0.01){
            var foroGeometry=new THREE.CylinderGeometry(0.003,0.003,0.03,80);
            var foro=new THREE.Mesh(foroGeometry,black);
            foro.rotation.x=Math.PI/2
            foro.position.x=x;
            foro.position.y=y;
            foro.position.z=-0.003
            doccia.add(foro);
      }
    }

    var piastrageometry=new THREE.BoxGeometry(0.02,0.2,0.3);
    var piastra=new THREE.Mesh(piastrageometry,acciaio);
    piastra.position.set(-0.4,0,1);
    o1.add(piastra);

    var manopolageometry=new THREE.CylinderGeometry(0.03,0.03,0.05,80);
    var manopola=new THREE.Mesh(manopolageometry,acciaio);
    manopola.rotation.z=Math.PI/2;
    manopola.position.x=0.03
    piastra.add(manopola);

    var manigliageometry=new THREE.CylinderGeometry(0.008,0.008,0.1,80);
    var maniglia=new THREE.Mesh(manigliageometry,acciaio);
    maniglia.rotation.z=Math.PI/2;
    maniglia.position.y=-0.015;
    maniglia.position.x=0.02;
    manopola.add(maniglia)

    for(var x=-0.375; x<=0.375; x+=0.75){
      for(var y=-0.375; y<=0.375; y+=0.75){
            var pilastrogeometry=new THREE.BoxGeometry(0.05,0.05,1.9);
            var pilastro=new THREE.Mesh(pilastrogeometry,acciaio);
            pilastro.position.set(x,y,1.05)
            o1.add(pilastro);
      }            
    }

    var glassgeometry=new THREE.BoxGeometry(0.8,0.02,1.9);
    var glass=new THREE.Mesh(glassgeometry,new THREE.MeshLambertMaterial({ color: 0xffffff, opacity: 0.6,transparent: true}));
    glass.position.z=1.05;
    glass.position.y=-0.375
    o1.add(glass);

    var glassgeometry=new THREE.BoxGeometry(0.8,0.02,1.9);
    var glass=new THREE.Mesh(glassgeometry,new THREE.MeshLambertMaterial({ color: 0xffffff, opacity: 0.6,transparent: true}));
    glass.position.z=1.05;
    glass.position.y=0.375
    o1.add(glass);

    var portaglassgeometry=new THREE.BoxGeometry(0.02,0.8,1.9);
    var portaglass=new THREE.Mesh(portaglassgeometry,new THREE.MeshLambertMaterial({ color: 0xffffff, opacity: 0.6,transparent: true}));
    portaglass.position.z=1.05;
    portaglass.position.x=0.375
    o1.add(portaglass);

    var manigliageometry=new THREE.BoxGeometry(0.03,0.03,0.2);
    var maniglia=new THREE.Mesh(manigliageometry,acciaio);
    maniglia.position.y=0.3;
    maniglia.position.x=0.06;
    portaglass.add(maniglia);

    var pernogeometry=new THREE.BoxGeometry(0.07,0.03,0.03)
    var perno=new THREE.Mesh(pernogeometry,acciaio);
    perno.position.x=-0.03;
    perno.position.z=-0.08;
    maniglia.add(perno);

    var perno2=perno.clone();
    perno2.position.x=-0.03;
    perno2.position.z=0.08;
    maniglia .add(perno2);
    

    
    o1.position.set(0.4,0.4,0.05);
    
    o1.add(piano);
    o1.feature = this;
    o1.name = this.id;


  return o1;
}
