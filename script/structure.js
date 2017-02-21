function Vector (x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Vector.prototype.add = function ( vA ) {
    return new Vector (this.x + vA.x, this.y + vA.y, this.z + vA.z )
};

Vector.prototype.sub = function ( vA ) {
    return new Vector (this.x - vA.x, this.y - vA.y, this.z - vA.z )
};

Vector.prototype.distance = function ( vA ) {
    return  this.sub(vA).scalar()
};

Vector.prototype.scalar = function ( ) {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z )
};


function AtomStructure(atomName, atomSerialNumber, coor) {
    this.name = atomName ;
    this.atomSerialNumber= atomSerialNumber ;
    this.coor = coor;
    this.res = null;
}

AtomStructure.prototype.getCoordinate = function () {
    return ([this.coor.x,this.coor.y,this.coor.z]);
};

AtomStructure.prototype.getColor = function () {
    var name = this.name;
    return AtomColor[name];
};

AtomStructure.prototype.getName = function () {
    return this.name;
};

AtomStructure.prototype.getAtomResidueName = function () {
    return this.res.resName;
};

AtomStructure.prototype.getId = function () {
    return this.atomSerialNumber;
};

AtomStructure.prototype.distance = function ( atomA ) {
    return this.coor.distance ( atomA.coor )
};
/*
AtomStructure.prototype.toString = function () {
    return (this.atomSerialNumber + " " + this.getAtomName() + " " + this.coor)
}
*/

function ResidueStructure(resName, resSeqNum, atoms) {
    this.resName = resName;
    this.resSeqNum = resSeqNum;
    this.atoms= atoms;

}

ResidueStructure.prototype.getName = function () {
    return this.resName;
};

ResidueStructure.prototype.getId = function () {
    return this.resSeqNum;
};

ResidueStructure.prototype.getColor = function () {
    var name = this.resName;
    return ResidueColor[name];
};

ResidueStructure.prototype.push = function (atom) {
    this.atoms.push(atom);
};


function ChainStructure() {
    this.chainid = 0;
    this.residues = [];
    this.length = 0;
}

ChainStructure.prototype.push = function (residue) {
    this.residues.push(residue);
    this.length += 1;
};

/*
 ChainStructure.defineProperty(ChainStructure.prototype, 'length', {get: function() {
 return this.residues.length;
 }});

 /*

 ResidueStructure.prototype.getResidueName = function () {
 return this.resName;
 };

 ResidueStructure.prototype.getResidueId = function () {
 return this.resSeqNum;
 };

 ResidueStructure.prototype.getResidueColor = function () {
 var name = this.resName;
 return ResidueColor[name];
 };
 */
