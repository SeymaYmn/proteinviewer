function Shape(name, parameters) {
    this.name = name;
}

Shape.prototype.sphere = function (atom) {
    var color = AtomColor[atom.name];
    var geometry = new THREE.SphereGeometry(0.3, 32, 32);
    var material = new THREE.MeshLambertMaterial({color: color});
    var sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(atom.coor.x, atom.coor.y, atom.coor.z);
    return sphere;
};

Shape.prototype.line = function (vertices) {
    var material = new THREE.LineBasicMaterial({color: 0xe0e0e0});
    return new THREE.Line(vertices, material);
};
