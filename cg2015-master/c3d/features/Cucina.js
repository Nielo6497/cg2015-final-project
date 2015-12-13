var Feature = require('./Feature.js');

Feature.inherits(Cucina, Feature);

function Cucina(feature) {
      Feature.call(this, feature);
}

Cucina.prototype.style = {
                prefix: "fa",
                icon: "minus",
                zIndex: 3
                          };

Cucina.prototype.in_graph = true;

Cucina.prototype.in_2D_map = true;

Cucina.prototype.get3DModel = function() {


      var acciaio = THREE.ImageUtils.loadTexture("/../../assets/textures/acciaio.jpg" )
      var acciaioscuro = THREE.ImageUtils.loadTexture("/../../assets/textures/acciaioscuro.jpg" )
      var logo = THREE.ImageUtils.loadTexture("/../../assets/textures/logo.jpg" )


   
      //var black = new THREE.MeshLambertMaterial({color: 0x000000});

      var a1 =  new THREE.MeshLambertMaterial({map:acciaio});
      var a2 =  new THREE.MeshLambertMaterial({map:acciaioscuro});
      var a3 =  new THREE.MeshLambertMaterial({map:logo});

      var cucina=new THREE.Object3D();
      cucina.rotation.x=Math.PI/2;
      cucina.rotation.y=Math.PI;
      cucina .position.x=0.5;
      cucina .position.y=0.75;
      cucina.scale.set(1,0.8,1);


      //base
      var c0 = new THREE.Mesh(new THREE.BoxGeometry(1,0.05,1.5), a1);
      c0.position.set(0,0.15,0)
      cucina.add(c0);

      //gambe
      for(gx=-0.45;gx<=0.45;gx+=0.9){
          for(gz=-0.7125;gz<=0.7125;gz+=1.425){
              var g0 = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.05, 4), a1)
              g0.position.set(gx,-0.05,gz)
              g0.rotation.y=0.25*Math.PI
              c0.add(g0)
          }
      }

      //back
      var c1 = new THREE.Mesh(new THREE.BoxGeometry(0.05,1,1.5), a1);
      c1.position.set(0.475,0.525,0)
      c0.add(c1);

      //lato
      var c1 = new THREE.Mesh(new THREE.BoxGeometry(1,1,0.05), a1);
      c1.position.set(0,0.525,0.725)
      c0.add(c1);

      //lato
      var c1 = new THREE.Mesh(new THREE.BoxGeometry(1,1,0.05), a1);
      c1.position.set(0,0.525,-0.725)
      c0.add(c1);

      //top
      var c1 = new THREE.Mesh(new THREE.BoxGeometry(1,0.20,1.5), a1);
      c1.position.set(0,1.1,0)
      c0.add(c1);

      //logo
      var l1 = new THREE.Mesh(new THREE.PlaneGeometry(0.1,0.05),a3);
      l1.position.set(-0.51,1.13,0)
      l1.rotation.y=-0.5*Math.PI
      c0.add(l1);

      //front
      var c1 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.99,1.4), a1);
      c1.position.set(-0.47,0.525,0)
      c0.add(c1);

      //forno
      var c1 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.9,1.3), a1);
      c1.position.set(-0.53,0.525,0)
      c0.add(c1);

      //maniglia
      var m1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,1),a2);
      m1.position.set(-0.6,0.85,0)
      m1.rotation.x=0.5*Math.PI
      c0.add(m1);

      var m1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.06),a2);
      m1.position.set(-0.56,0.85,-0.4)
      m1.rotation.z=0.5*Math.PI
      c0.add(m1);

      var m1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.06),a2);
      m1.position.set(-0.56,0.85,0.4)
      m1.rotation.z=0.5*Math.PI
      c0.add(m1);

      //pomelli
      for(gz=-0.6;gz<=0.65;gz+=0.3){
              var g0 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.02, 32), a2)
              g0.position.set(-0.51,1.05,gz)
              g0.rotation.z=0.5*Math.PI
              c0.add(g0)

              var g1 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.03, 0.01), a2)
              g1.position.set(0,0.02,0)
              g0.add(g1)
      }

      //fuochi
      for(gx=-0.22;gx<=0.22;gx+=0.44){ 
          for(gz=-0.45;gz<=0.45;gz+=0.9){
              var g0 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.02, 32), a2)
              g0.position.set(gx,1.21,gz)
              c0.add(g0)
          }
      }

      //fuoco centrale
      var g0 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.02, 32), a2)
      g0.position.set(0,1.21,0)
      c0.add(g0)


      //griglia lato lungo esterno
      for(gx=-0.45;gx<=0.45;gx+=0.45){ 
          if(gx!=0)
          {
              var g1 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.05, 1.38), a2)
              g1.position.set(gx,1.21,0)
              c0.add(g1)
          }
          else
          {
              for(gz=-0.46;gz<=0.68;gz+=0.90){ 
                  var g1 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.05, 0.46), a2)
                  g1.position.set(gx,1.21,gz)
                  c0.add(g1)
              }
          }
      }

      //griglia lato corto esterno
      for(gz=-0.675;gz<=0.675;gz+=0.45){
          
              var g1 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.05, 0.03), a2)
              g1.position.set(0,1.21,gz)
              c0.add(g1)
          
      }

      //griglia interno fornello lato lungo
      for(gx=-0.22;gx<=0.22;gx+=0.44){ 
          for(gz=-0.59;gz<=0.68;gz+=0.90){ 
              var g1 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.01, 0.2), a2)
              g1.position.set(gx,1.24,gz)
              c0.add(g1)
          }
          for(gz=0.59;gz>=-0.68;gz-=0.90){ 
              var g1 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.01, 0.2), a2)
              g1.position.set(gx,1.24,gz)
              c0.add(g1)
          }
      }

      //griglia interno fornello lato corto
      for(gx=-0.365;gx<=0.345;gx+=0.7){ 
          for(gz=-0.45;gz<=0.45;gz+=0.45){
              if(gz!=0)
              {
                  var g0 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.02, 0.03),a2)
                  if(gx<0)
                  g0.position.set(gx,1.24,gz)
                  else
                  g0.position.set(gx+0.03,1.24,gz)
                  c0.add(g0)
              }
              else //pezzo centrale lungo
              {
                  var g0 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.02, 0.03),a2)
                  if(gx<0)
                  g0.position.set(gx+0.1,1.24,gz)
                  else
                  g0.position.set(gx-0.07,1.24,gz)
                  c0.add(g0)
              }
          }
      }
 
      //griglia interno fornello lato corto
      for(gz=-0.45;gz<=0.45;gz+=0.9){
                  var g0 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.02, 0.03),a2)
                  g0.position.set(0,1.24,gz)
                  c0.add(g0)
      }

      //pezzo centrale corto
      for(gz=-0.14;gz<=0.14;gz+=0.28)
      {
            var g0 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.02, 0.2),a2)
            g0.position.set(0,1.25,gz)
            c0.add(g0)
      }


      cucina.feature = this;
      cucina.name = this.id;
      var model = Feature.packageModel(cucina);

      return model;
};

module.exports = Cucina;