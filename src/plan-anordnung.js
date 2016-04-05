"use strict";
var PlanAnordnung = (function () {
    function PlanAnordnung(optionen) {
        this.tische = optionen.tische;
        this.anzahlTische = this.tische.length;
        this.blockBreite = optionen.blockBreite || 3;
        this.blockHoehe = optionen.blockHoehe || 2;
        this.anzahlImBlock = this.blockBreite + this.blockHoehe - 1;
        this.anzahlInBlockReihe = this.anzahlImBlock * 2;
    }
    PlanAnordnung.prototype.getIJ_U = function (nr0) {
        this.anzahlImBlock = this.blockBreite + this.blockHoehe - 1;
        this.anzahlInBlockReihe = this.anzahlImBlock * 2;
        var blockReihe = Math.floor(nr0 / this.anzahlInBlockReihe);
        var jBlock = blockReihe * 2;
        var nrInBlockReihe = nr0 % this.anzahlInBlockReihe;
        var nrImBlock = nrInBlockReihe % this.anzahlImBlock;
        var i = (nrImBlock < this.blockBreite - 1) ? 1 + nrImBlock : 0;
        if (nrInBlockReihe < this.anzahlImBlock) {
            i = 2 * this.blockBreite - i;
        }
        ;
        var j = jBlock;
        if (nrImBlock >= this.blockBreite) {
            j += nrImBlock - this.blockBreite + 1;
        }
        return { "i": i + 1, "j": j + 1 };
    };
    PlanAnordnung.prototype.getIJ_Reihen = function (nr0) {
        this.anzahlImBlock = this.blockBreite;
        this.anzahlInBlockReihe = this.anzahlImBlock * 2;
        var i = nr0 % (this.anzahlInBlockReihe);
        if (i >= this.blockBreite) {
            i++;
        }
        var j = Math.floor(nr0 / this.anzahlInBlockReihe) * 2;
        return { "i": i + 1, "j": j + 1 };
    };
    PlanAnordnung.prototype.setzeReihen = function () {
        for (var nr = 0; nr < this.anzahlTische; nr++) {
            var punkt = this.getIJ_Reihen(nr);
            this.tische[nr].setIJ(punkt.i, punkt.j);
        }
    };
    PlanAnordnung.prototype.setzeU = function () {
        for (var nr = 0; nr < this.anzahlTische; nr++) {
            var punkt = this.getIJ_U(nr);
            this.tische[nr].setIJ(punkt.i, punkt.j);
        }
    };
    return PlanAnordnung;
}());
exports.PlanAnordnung = PlanAnordnung;
//# sourceMappingURL=plan-anordnung.js.map