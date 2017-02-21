function ResidueStructure(resName, resSeqNum, atoms) {
    this.resName = resName;
    this.resSeqNum = resSeqNum;
    this.atoms= atoms;

}

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

ResidueStructure.prototype.push = function (atom) {
    this.atoms.push(atom);
};
