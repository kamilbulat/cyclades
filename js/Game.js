function Game() {
    var scene = main.getScene();
    var plansza = Tablice.getPlansza();
    var wodaMaterial;
    var wyspaMaterial;
    var cylinderGeometry;

    function initMaterials(){
    	wodaMaterial = new THREE.MeshBasicMaterial({
                       side: THREE.DoubleSide,
                       map: THREE.ImageUtils.loadTexture("./../gfx/water.jpg"),
                   })
    	wodaYellowMaterial = new THREE.MeshBasicMaterial({
                       side: THREE.DoubleSide,
                       map: THREE.ImageUtils.loadTexture("./../gfx/water.jpg"),
                       color: 0xffff00,
                   })
    	wodaBlackMaterial = new THREE.MeshBasicMaterial({
                       side: THREE.DoubleSide,
                       map: THREE.ImageUtils.loadTexture("./../gfx/water.jpg"),
                       color: 0x000000,
                   })
    	wyspaMaterial = new THREE.MeshBasicMaterial({
                       side: THREE.DoubleSide,
                       map: THREE.ImageUtils.loadTexture("./../gfx/island.jpg"),
                   })
    	wyspaYellowMaterial = new THREE.MeshBasicMaterial({
                       side: THREE.DoubleSide,
                       map: THREE.ImageUtils.loadTexture("./../gfx/island.jpg"),
                       color: 0xffff00,
                   })
    	wyspaBlackMaterial = new THREE.MeshBasicMaterial({
                       side: THREE.DoubleSide,
                       map: THREE.ImageUtils.loadTexture("./../gfx/island.jpg"),
                       color: 0x000000,
                   })
    }

    function initObjects(){
    	cylinderGeometry = new THREE.CylinderGeometry( 10, 10, 2, 6, 1 );
    }

    this.drawPlansza = function(){

    }
}