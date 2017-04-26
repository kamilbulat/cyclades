function Game() {
    var plansza = tablice.getPlansza()
    var wyspy = tablice.getWyspy();
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
    var black;
    var yellow;
    var ship;
    var warrior;
    var plansz;
    var pionki;

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
    	black = new THREE.MeshBasicMaterial({
    	   side: THREE.DoubleSide,
    	   color: 0x000000,
    	})
    	yellow = new THREE.MeshBasicMaterial({
    	    side: THREE.DoubleSide,
    	    color: 0xffff00,
    	})
    }

    function initObjects() {
        pionki = new THREE.Object3D();
        plansz = new THREE.Object3D();
        scene.add(plansz)
        scene.add(pionki)
    	cylinderGeometry = new THREE.CylinderGeometry( 50, 50, 10, 6, 1 );
    	wodaYellowMesh = new THREE.Mesh(cylinderGeometry, wodaYellowMaterial)
    	wodaBlackMesh = new THREE.Mesh(cylinderGeometry, wodaBlackMaterial)
    	wodaMesh = new THREE.Mesh(cylinderGeometry, wodaMaterial)
    	wyspaYellowMesh = new THREE.Mesh(cylinderGeometry, wyspaYellowMaterial)
    	wyspaBlackMesh = new THREE.Mesh(cylinderGeometry, wyspaBlackMaterial)
    	wyspaMesh = new THREE.Mesh(cylinderGeometry, wyspaMaterial)
    	shipGeometry = new THREE.CylinderGeometry(15, 15, 40, 3, 1);
    	warriorGeometry = new THREE.CylinderGeometry(10, 10, 40, 5, 1);
    	yellowWarrior = new THREE.Mesh(warriorGeometry, yellow)
    	blackWarrior = new THREE.Mesh(warriorGeometry, black)
    	yellowShip = new THREE.Mesh(shipGeometry, yellow)
    	blackShip = new THREE.Mesh(shipGeometry, black)
    }

    this.drawPlansza = function(){
    	for(var i=0; i<plansza.length; i++){
    		for(var j=0; j<plansza[i].length; j++){
    			if(plansza[i][j].typ == "woda")
    			{
    				//woda
    				switch(plansza[i][j].flaga){
    				    case "yellow":
    				        if (plansza[i][j].statki != 0) {
    				            console.log(plansza[i][j].statki)
    				            switch (plansza[i][j].statki) {
                                    case 1:
                                        var ship = yellowShip.clone();
    				                    ship.position.set((j - plansza[i].length / 2) * 100 + 50, 5, (i - 5.5) * 50 * Math.sqrt(3) + 50 * Math.sqrt(3) / 2)
    				                    pionki.add(ship);
    				                    break;
    				                case 2:
                                        console.log(2)
    				                    var ship = yellowShip.clone();
    				                    ship.position.set((j - plansza[i].length / 2) * 100 + 30, 5, (i - 5.5) * 50 * Math.sqrt(3) + 50 * Math.sqrt(3) / 2)
    				                    ship.lookAt(new THREE.Vector3((j - plansza[i].length / 2) * 100 + 50, 0, (i - 5.5) * 50 * Math.sqrt(3) + 50 * Math.sqrt(3) / 2));
    				                    pionki.add(ship);
    				                    var ship2 = yellowShip.clone();
    				                    ship2.position.set((j - plansza[i].length / 2) * 100 + 70, 5, (i - 5.5) * 50 * Math.sqrt(3) + 50 * Math.sqrt(3) / 2)
    				                    ship2.lookAt(new THREE.Vector3((j - plansza[i].length / 2) * 100 + 50, 0, (i - 5.5) * 50 * Math.sqrt(3) + 50 * Math.sqrt(3) / 2));
    				                    pionki.add(ship2);
    				                    break;
    				                case 3:
    				                    var ship = yellowShip.clone();
    				                    ship.position.set((j - plansza[i].length / 2) * 100 + 30, 5, (i - 5.5) * 50 * Math.sqrt(3) + 30 * Math.sqrt(3) / 2)
    				                    ship.lookAt(new THREE.Vector3((j - plansza[i].length / 2) * 100 + 50, 0, (i - 5.5) * 50 * Math.sqrt(3) + 50 * Math.sqrt(3) / 2));
    				                    pionki.add(ship);
    				                    var ship = yellowShip.clone();
    				                    ship.position.set((j - plansza[i].length / 2) * 100 + 70, 5, (i - 5.5) * 50 * Math.sqrt(3) + 30 * Math.sqrt(3) / 2)
    				                    ship.lookAt(new THREE.Vector3((j - plansza[i].length / 2) * 100 + 50, 0, (i - 5.5) * 50 * Math.sqrt(3) + 50 * Math.sqrt(3) / 2));
    				                    pionki.add(ship);
    				                    var ship = yellowShip.clone();
    				                    ship.position.set((j - plansza[i].length / 2) * 100 + 50, 5, (i - 5.5) * 50 * Math.sqrt(3) + 70 * Math.sqrt(3) / 2)
    				                    ship.lookAt(new THREE.Vector3((j - plansza[i].length / 2) * 100 + 50, 0, (i - 5.5) * 50 * Math.sqrt(3) + 50 * Math.sqrt(3) / 2));
    				                    pionki.add(ship);
    				                    break;

    				            }
    				            
    				            
    				        }
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
    				//wyspa
    				switch(wyspy[plansza[i][j].nazwa].flaga){
    					case "yellow":
    						mesh = wyspaYellowMesh.clone()
    					break;
    					case "black":
    						mesh = wyspaBlackMesh.clone()
    					break;
    					default:
    					    mesh = wyspaMesh.clone()
    					break;
    				}
    				
    			}
    			mesh.position.set((j - plansza[i].length / 2) * 100 +50, 0, (i - 5.5) * 50 * Math.sqrt(3)+50*Math.sqrt(3)/2)
    			plansz.add(mesh)
    			mesh = ""
    		}
    	}
    }
    
    initMaterials();
    initObjects();
    this.drawPlansza();


}