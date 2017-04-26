function Main() {
    this.scene;
    this.camera;
    var renderer;
    var axis;
    function initEngine() {
        scene = new THREE.Scene();
        camera = new THREE.OrthographicCamera(
            window.innerWidth / -2,
            window.innerWidth / 2,
            window.innerHeight / 2,
            window.innerHeight / -2,
            -500,
            10000
        );
        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0xffffff);
        renderer.setSize(window.innerWidth, window.innerHeight);

        document.getElementById("plansza").appendChild(renderer.domElement);
        camera.position.x = 100;
        camera.position.y = 100;
        camera.position.z = 100;
        camera.lookAt(scene.position);
        scene.rotateY(Math.PI / 2);
    }
    function initObjects() {
        axis = new THREE.AxisHelper(1000);
        scene.add(axis)
    }
    function animateScene() {
        requestAnimationFrame(animateScene);
        renderer.render(scene, camera);
    }

    this.getScene = function () {
        return scene;
    }
    initEngine();
    initObjects();
    animateScene();
    login = new Login();
    tablice = new Tablice();
    game = new Game();
    panel = new Panel();
    net = new Net();
    kolejnosc = new Kolejnosc();
}