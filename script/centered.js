function centeredCoor(protein){
    var center = centerOfMass(protein);
    for(var i=0;i <protein.length; i++){
        for(var j=0; j<protein.residues[i].atoms.length; j++){
            protein.residues[i].atoms[j].coor = protein.residues[i].atoms[j].coor.sub(center);
        }
    }
    return protein;
}

function centerOfMass(protein){
    var sum  = new Vector(10,10,10);
    var counter = 0;
    for(var i=0;i <protein.length; i++){
        for(var j=0; j<protein.residues[i].atoms.length; j++){
            sum = sum.add(protein.residues[i].atoms[j].coor);
            counter++;
        }
    }
    return (sum.div(counter));
}