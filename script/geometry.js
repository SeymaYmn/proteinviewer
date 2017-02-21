function Shape(name, parameters) {
    this.name = name;
}

Shape.prototype.addSphere = function (coor) {
    var geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
    var material = new THREE.MeshNormalMaterial();
    var sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(coor.x, coor.y, coor.z);
    return sphere;
};

/*function Draw( obj, method ) {

}

Draw( chainA, ballandstick ) {
    draw (chainA, lineAtom)
    draw (chainA, ball)
}

Draw ( CAList, line ) {

}*/