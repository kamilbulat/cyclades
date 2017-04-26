function Game() {
    var plansza = tablice.getPlansza()
    var mesh;
    var wodaMaterial;
    var wyspaMaterial;
    var cylinderGeometry;
    var wodaYellowMesh;
    var wodaBlackMesh;
    var wodaMesh;
    var wyspaYellowMesh;
    var wyspaBlackMesh;
    var wyspaMesh

    function initMaterials(){
    	wodaMaterial = new THREE.MeshBasicMaterial({
                       side: THREE.DoubleSide,
                       map: THREE.ImageUtils.loadTexture("./../gfx/water.jpg"),
                   })
    	wodaYellowMaterial = new THREE.MeshBasicMaterial({
                       side: THREE.DoubleSide,
                       map: THREE.ImageUtils.loadTexture("./../gfx/yellowWater.jpg"),
                   })
    	wodaBlackMaterial = new THREE.MeshBasicMaterial({
                       side: THREE.DoubleSide,
                       map: THREE.ImageUtils.loadTexture("./../gfx/blackWater.jpg"),
                   })
    	wyspaMaterial = new THREE.MeshBasicMaterial({
                       side: THREE.DoubleSide,
                       map: THREE.ImageUtils.loadTexture("./../gfx/island.jpg"),
                   })
    	wyspaYellowMaterial = new THREE.MeshBasicMaterial({
                       side: THREE.DoubleSide,
                       map: THREE.ImageUtils.loadTexture("./../gfx/yellowIsland.jpg"),
                   })
    	wyspaBlackMaterial = new THREE.MeshBasicMaterial({
                       side: THREE.DoubleSide,
                       map: THREE.ImageUtils.loadTexture("./../gfx/blackIsland.jpg"),
                   })
    }

    function initObjects(){
    	cylinderGeometry = new THREE.CylinderGeometry( 50, 50, 2, 6, 1 );
    	wodaYellowMesh = new THREE.Mesh(cylinderGeometry, wodaYellowMaterial)
    	wodaBlackMesh = new THREE.Mesh(cylinderGeometry, wodaBlackMaterial)
    	wodaMesh = new THREE.Mesh(cylinderGeometry, wodaMaterial)
    	wyspaYellowMesh = new THREE.Mesh(cylinderGeometry, wyspaYellowMaterial)
    	wyspaBlackMesh = new THREE.Mesh(cylinderGeometry, wyspaBlackMaterial)
    	wyspaMesh = new THREE.Mesh(cylinderGeometry, wyspaMaterial)
        
    }

    this.drawPlansza = function(){
    	for(var i=0; i<plansza.length; i++){
    		for(var j=0; j<plansza[i].length; j++){
    			if(plansza[i][j].typ == "woda")
    			{
    				//woda
    				switch(plansza[i][j].flaga){
    					case "yellow":
    						mesh = wodaYellowMesh.clone()
    					break;
    					case "black":
    						mesh = wodaBlackMesh.clone()
    					break;
    					default:
    						mesh = wodaMesh.clone()
    					break;
    				}
    			}
    			else {
                    //plansza[i][j]
    				//wyspa
    				/*switch(plansza[i][j].flaga){
    					case "yellow":
    						mesh = wyspaYellowMesh.clone()
    					break;
    					case "black":
    						mesh = wyspaBlackMesh.clone()
    					break;
    					default:
    						
    					break;
    				}*/
    				mesh = wyspaMesh.clone()
    			}
    			mesh.position.set((j - plansza[i].length / 2) * 100 +50, 0, (i - 5.5) * 50 * Math.sqrt(3)+50*Math.sqrt(3)/2)
    			scene.add(mesh)
    			mesh = ""
    		}
    	}
    }
    initMaterials();
    initObjects();
    this.drawPlansza();


}