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
