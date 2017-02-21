function dataParse(data){
    var protein = new ChainStructure();
    var lines = data.split('\n');
    var prevRes = null;
    for(var lineId = 0; lineId < lines.length; lineId++){
        var line = lines[lineId];
        if(line.substring(0, 4) == "ATOM"){
            if(line.substring(12,14).trim() == "H" || line.substring(11,13).trim() == "H"){
                continue;
            }
            var _Rline = parser(line);
            if(protein.length == 0){
                protein.push( _Rline );
                prevRes = _Rline;
            }
            else if(prevRes.resSeqNum == _Rline.resSeqNum ){
                prevRes.push( _Rline.atoms[0] );

            }
            else{
                protein.push(_Rline);
                prevRes = _Rline;
            }
            prevRes.atoms[0].res = prevRes;
        }
        if(line.substring(0, 3) == "TER"){
            break;
        }
    }
    return protein;
}

function parser(line){
    var residue = [];
    var resName = line.substring(17, 20).trim();
    var resSeqNum = parseInt(line.substring(22, 26));
    var atoms = [atomParser(line)];
    return  new ResidueStructure(resName, resSeqNum, atoms )
}

function atomParser(line){
    var atomName = line.substring(12, 16).trim();
    var atomSerialNumber = parseInt(line.substring(6,11));
    var x = parseFloat(line.substring(30, 38));
    var y = parseFloat(line.substring(38, 46));
    var z = parseFloat(line.substring(46, 54));
    var coor = new Vector (x,y,z);
    return new AtomStructure(atomName, atomSerialNumber, coor)
}