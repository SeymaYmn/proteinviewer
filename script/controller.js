function Controller(viewArea, data) {

    var protein = centeredCoor(dataParse(data));
    var view = new View(viewArea);
    this.view = view;
    var geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3( -10, 0, 0 ),
        new THREE.Vector3( 0, 10, 0 ),
        new THREE.Vector3( 10, 0, 0 )
    );
    var shape = new Shape();
    view.addElementToScene(shape.sphere(protein.residues[0].atoms[0]));
    view.addElementToScene(shape.line(geometry));

    view.render();
    view.animate();
}

