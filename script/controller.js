function Controller(viewArea, data) {

    var protein = dataParse(data);
    for(var i=0;i<protein.length;i++){
        console.log(protein.residues[i].atoms);
        for(var j=0;j<protein.residues[i].length;j++){
            console.log(protein.residues[i].atoms[j].name);

        }
    }
    var view = new View(viewArea);
    this.view = view;

    console.log( protein.residues[0].atoms[0].getColor() );

    var shape = new Shape();
    view.addElementToScene(shape.addSphere(protein.residues[0].atoms[0].coor));
    view.render();
    view.animate();
}

