function View(viewArea) {
    window.addEventListener( 'resize', this.onWindowResize.bind(this), false);

    var viewport = document.getElementById(viewArea);
    var viewportHeight = document.getElementById(viewArea).clientHeight;
    var viewportWidth = document.getElementById(viewArea).clientWidth;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( viewportWidth, viewportHeight );
    viewport.appendChild(renderer.domElement);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, viewportWidth / viewportHeight, 0.1, 1000 );
    camera.position.set(100,100,100);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    var light = new THREE.PointLight(0xffffff);
    light.position.set(200,200,200);
    scene.add(light);

    this.scene = scene;
    this.camera = camera;
    this.light = light;
    this.renderer = renderer;
    this.viewArea = viewArea;
    this.controls(viewArea);

    document.getElementById(viewArea).addEventListener("mouseup", this.onMouseUp.bind(this), false);
}

View.prototype.onWindowResize = function() {
    this.renderer.setSize(  document.getElementById(this.viewArea).clientWidth ,  document.getElementById(this.viewArea).clientHeight );
    this.camera.aspect = document.getElementById(this.viewArea).clientWidth/document.getElementById(this.viewArea).clientHeight;
    this.camera.updateProjectionMatrix();

};
View.prototype.addElementToScene = function (geometry) {
    this.scene.add(geometry);
};

View.prototype.render = function () {
    this.renderer.render(this.scene, this.camera);
};

View.prototype.animate = function () {
    var inFunctionThis = this;
    requestAnimationFrame(function() { inFunctionThis.animate(); });
    this.render();
};

View.prototype.controls = function (viewArea) {
    var control = new THREE.OrbitControls(this.camera, document.getElementById(viewArea));
    var inFunctionThis = this;
    control.addEventListener('change',function () {
        inFunctionThis.light.position.copy(inFunctionThis.camera.position);
    });
};

View.prototype.onMouseUp = function (event) {
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    mouse.x = ( event.offsetX / this.renderer.domElement.width ) * 2 - 1;
    mouse.y = - ( event.offsetY / this.renderer.domElement.height ) * 2 + 1;

};