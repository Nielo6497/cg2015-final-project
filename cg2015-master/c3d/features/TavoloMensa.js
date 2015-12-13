var Feature = require('./Feature.js');

Feature.inherits(TavoloMensa, Feature);

function TavoloMensa(feature) {
	Feature.call(this, feature);
}

TavoloMensa.prototype.style = {
			    			prefix: "fa",
                                    icon: "minus",
	    					zIndex: 3
						};

TavoloMensa.prototype.in_graph = true;

TavoloMensa.prototype.in_2D_map = true;

TavoloMensa.prototype.get3DModel = function() {

	
      function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("/../../assets/textures/" + imageFile)
        var mat = new THREE.MeshBasicMaterial();
        var mat = new THREE.MeshLambertMaterial();
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }

      var black = new THREE.MeshLambertMaterial({color: 0xac6c25});
      var gray = new THREE.MeshLambertMaterial({color: 0xC0C0C0});

      var tableX = this.geometry.coordinates[0][1][0];
      var tableY = this.geometry.coordinates[0][2][1];
      var tableZ = this.properties.height;
      

      //pilastro centrale
      var tavolo = new THREE.Mesh(new THREE.BoxGeometry(tableX,tableY,tableZ),gray);
      tavolo.position.set(tableY/4,0.5,-tableZ);
      scene.add(tavolo);
      tavolo.scale.set(0.12,0.1,0.1);



      // piano top
      var b0 = new createMesh(new THREE.BoxGeometry(10,0.5,10),"wood-2.jpg");
      b0.position.set(0,1.5,0);
      tavolo.add(b0);

      //dadi piano 
      var dx;
      var dz;
      
      for(dx=-0.25;dx<=0.25;dx+=0.5)
      {
            for(dz=-0.25;dz<=0.25;dz+=0.5)
            {
                  var d1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.8,6),black); 
                  d1.position.set(dx,1.4,dz);
                  tavolo.add(d1);
            }
      }

      // asse centrale
      var a1 = new THREE.Mesh(new THREE.BoxGeometry(1,15,1),gray);
      a1.rotation.x=0.5*Math.PI;
      a1.position.set(0,-1,0);
      tavolo.add(a1);

      // asse 
      var a2 = new THREE.Mesh(new THREE.BoxGeometry(1,10,1),gray);
      a2.rotation.z=0.5*Math.PI;
      a2.position.set(0,-1,-7);
      tavolo.add(a2);

      // asse 
      var a3 = new THREE.Mesh(new THREE.BoxGeometry(1,10,1),gray);
      a3.rotation.z=0.5*Math.PI;
      a3.position.set(0,-1,7);
      tavolo.add(a3);


      //gambe
      
      var gx;
      var gz;
      
      for(gx=-3;gx<=3;gx+=6)
      {
            for(gz=7;gz>=-7;gz-=14)
            {
                  var g1 = new THREE.Mesh(new THREE.BoxGeometry(1,3,1),gray);
                  g1.rotation.y=0.5*Math.PI;
                  g1.position.set(gx,-2,gz);
                  tavolo.add(g1);
            }
      }

      // piastra 

      var fx;
      var fz;
      
      for(fx=-3;fx<=3;fx+=6)
      {
            for(fz=8;fz>=-8;fz-=16)
            {
                  var g1 = new THREE.Mesh(new THREE.BoxGeometry(3,0.25,1),gray);
                  g1.rotation.y=0.5*Math.PI;
                  g1.position.set(fx,-3.5,fz+1);
                  tavolo.add(g1);

                  // dadi piastra
                  var ds1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.3,6),black); 
                  ds1.position.set(fx,-3.5,fz-2);
                  ds1.position.set(fx,-3.5,fz+2);                        
                  tavolo.add(ds1);

                  if(fz>0)
                  {
                        g1.position.set(fx,-3.5,fz-1);
                        ds1.position.set(fx,-3.5,fz-2);
                  }
                  
                  var ds1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.3,6),black); 
                  ds1.position.set(fx,-3.5,fz);
                  tavolo.add(ds1);
            }
      }
 


      // sedia schienale
      
      var fx;
      var fz;
      
      for(fx=-3;fx<=3;fx+=6)
      {
            for(fz=-9.24;fz<=9.24;fz+=18.48)
            {
                  var s1a = new createMesh(new THREE.BoxGeometry(4,0.5,4),"wood-2.jpg");
                  s1a.rotation.x=0.5*Math.PI;
                  s1a.position.set(fx,2.5,fz);
                  tavolo.add(s1a);
            }
      }


      var fx;
      var fz;
      
      for(fx=-4.5;fx<=4.5;fx+=9)
      {
            for(fz=-9.45;fz<=9.45;fz+=18.9)
            {
                  // barre schienale
                  var s2c = new THREE.Mesh(new THREE.BoxGeometry(0.25,0.125,4),gray);
                  s2c.rotation.x=0.5*Math.PI
                  s2c.position.set(fx,1.6,fz);
                  tavolo.add(s2c);

                  var s2d = new THREE.Mesh(new THREE.BoxGeometry(0.25,0.125,4),gray);
                  s2d.rotation.x=0.5*Math.PI
                  s2d.position.set(fx-3,1.6,fz);
                  tavolo.add(s2d);

                  // dadi schienale
                  var ds1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.6,6),black); 
                  ds1.rotation.x=0.5*Math.PI;
                  ds1.position.set(fx,2.5,fz-0.2);
                  tavolo.add(ds1);

                  var ds2 = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.6,6),black); 
                  ds2.rotation.x=0.5*Math.PI;
                  ds2.position.set(fx-3,2.5,fz-0.2);
                  tavolo.add(ds2);

                  if(fx<0)
                  {
                        s2d.position.set(fx+3,1.6,fz);
                        ds2.position.set(fx+3,2.5,fz-0.2);
                        if(fz<0)
                        ds2.position.set(fx+3,2.5,fz+0.2);
                  }

                  if(fz<0)
                  {
                        ds1.position.set(fx,2.5,fz+0.2);
                        
                        if(fx>0)
                        ds2.position.set(fx-3,2.5,fz+0.2);
                        
                  }
            }
      }


      var fx;
      var fz;
      
      for(fx=-3;fx<=3;fx+=6)
      {
            for(fz=-7;fz<=7;fz+=14)
            {
                  // sedia seduta 
                  var s1b = createMesh(new THREE.BoxGeometry(4,0.5,4),"wood-2.jpg");
                  s1b.rotation.y=0.5*Math.PI;
                  s1b.position.set(fx,-0.25,fz);
                  tavolo.add(s1b);
            }
      }


      var fx;
      var fz;
      
      for(fx=-4.5;fx<=4.5;fx+=9)
      {
            for(fz=-9;fz<=9;fz+=18)
            {

                  // barre seduta
                  var s1c = new THREE.Mesh(new THREE.BoxGeometry(0.25,0.125,1),gray);
                  s1c.position.set(fx,-0.35,fz);
                  tavolo.add(s1c);

                  var s1d = new THREE.Mesh(new THREE.BoxGeometry(0.25,0.125,1),gray);
                  s1d.position.set(fx-3,-0.35,fz);
                  tavolo.add(s1d);
                 
                  // dadi seduta
                  var ds1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.8,6),black); 
                  ds1.position.set(fx,-0.35,fz-2);
                  tavolo.add(ds1);

                  var ds2 = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.8,6),black); 
                  ds2.position.set(fx-3,-0.35,fz-2);
                  tavolo.add(ds2);

                  if(fx<0)
                  {
                          s1d.position.set(fx+3,-0.35,fz);
                          ds2.position.set(fx+3,-0.35,fz-2);
                          if(fz<0)
                          ds2.position.set(fx+3,-0.35,fz+2);
                  }
                  
                  if(fz<0)
                  {
                          ds1.position.set(fx,-0.35,fz+2);
                          
                          if(fx>0)
                          ds2.position.set(fx-3,-0.35,fz+2);

                  }
            }
      }
    
      tavolo.feature = this;
	tavolo.name = this.id;
  	var model = Feature.packageModel(tavolo);
      
      return model;
};

module.exports = TavoloMensa;
