var Feature = require('./Feature.js');

Feature.inherits(Frigo, Feature);

function Frigo(feature) {
      Feature.call(this, feature);
}

Frigo.prototype.style = {
                        prefix: "fa",
                        icon: "minus",
                        zIndex: 3           
                                    };

Frigo.prototype.in_graph = true;

Frigo.prototype.in_2D_map = true;

Frigo.prototype.get3DModel = function() {


	var logo = THREE.ImageUtils.loadTexture("../../assets/textures/logo.jpg" )
      var acciaioscuro = THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )    

      var a2 =  new THREE.MeshLambertMaterial({map:logo});
      var a1 =  new THREE.MeshLambertMaterial({map:acciaioscuro});

      
      var frigo=new THREE.Object3D();
      frigo.rotation.x=Math.PI/2;
      frigo.position.x=0.5;
      frigo.position.y=0.5;
      frigo.position.z=-0.05
      frigo.rotation.y=Math.PI;

      //base
      var f0 = new THREE.Mesh(new THREE.BoxGeometry(1,0.05,1), a1);
      f0.position.set(0,0.15,0)
      frigo.add(f0);

      //gambe
      for(gx=-0.45;gx<=0.45;gx+=0.9){
          for(gz=-0.45;gz<=0.45;gz+=0.9){
              var g0 = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.05, 4), a1)
              g0.position.set(gx,-0.05,gz)
              g0.rotation.y=0.25*Math.PI
              f0.add(g0)
          }
      }

      //back
      var f1 = new THREE.Mesh(new THREE.BoxGeometry(0.05,1.8,1), a1);
      f1.position.set(0.475,0.925,0)
      f0.add(f1);

      //lato
      var f1 = new THREE.Mesh(new THREE.BoxGeometry(1,1.8,0.05), a1);
      f1.position.set(0,0.925,0.475)
      f0.add(f1);

      //lato
      var f1 = new THREE.Mesh(new THREE.BoxGeometry(1,1.8,0.05), a1);
      f1.position.set(0,0.925,-0.475)
      f0.add(f1);

      //top
      var f1 = new THREE.Mesh(new THREE.BoxGeometry(1,0.20,1), a1);
      f1.position.set(0,1.85,0)
      f0.add(f1);

      //logo
      var l1 = new THREE.Mesh(new THREE.PlaneGeometry(0.2,0.1),a2);
      l1.position.set(-0.51,1.85,0)
      l1.rotation.y=-0.5*Math.PI
      f0.add(l1);

      //anta superiore
      var f1 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.9,0.95), a1);
      f1.position.set(-0.5,1.30,0)
      f0.add(f1);

      //anta inferiore
      var f1 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.8,0.95), a1);
      f1.position.set(-0.5,0.425,0)
      f0.add(f1);

      //piano intermedio
      var f1 = new THREE.Mesh(new THREE.BoxGeometry(1,0.05,1), a1);
      f1.position.set(0,0.845,0)
      f0.add(f1);

      //maniglia
      var m1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.8),a1);
      m1.position.set(-0.56,1.30,-0.4)
      f0.add(m1);

      var m1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.06),a1);
      m1.position.set(-0.53,1.60,-0.4)
      m1.rotation.z=0.5*Math.PI
      f0.add(m1);

      var m1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.06),a1);
      m1.position.set(-0.53,1,-0.4)
      m1.rotation.z=0.5*Math.PI
      f0.add(m1);

      //maniglia
      var m1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.7),a1);
      m1.position.set(-0.56,0.425,-0.4)
      f0.add(m1);

      var m1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.06),a1);
      m1.position.set(-0.53,0.7,-0.4)
      m1.rotation.z=0.5*Math.PI
      f0.add(m1);

      var m1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.06),a1);
      m1.position.set(-0.53,0.15,-0.4)
      m1.rotation.z=0.5*Math.PI
      f0.add(m1);

//      f0.scale.set(0.8,1,0.8)
      frigo.feature = this;
      frigo.name = this.id;
      var model = Feature.packageModel(frigo);

      return model;
};

module.exports = Frigo;