import {Tisch} from "./Pojo/tisch";
/**
 * Created by Michael on 31.03.2016.
 */
export interface IPunkt {
    i:number;
    j:number;
}

export class PlanAnordnung {
    private tische:Tisch[];
    private anzahlTische;
    private blockBreite;
    private blockHoehe;
    private anzahlImBlock;
    private anzahlInBlockReihe;

    constructor(optionen) {
        this.tische = optionen.tische;
        this.anzahlTische = this.tische.length;
        this.blockBreite = optionen.blockBreite || 3;
        this.blockHoehe = optionen.blockHoehe || 2;
        this.anzahlImBlock = this.blockBreite + this.blockHoehe - 1;
        this.anzahlInBlockReihe = this.anzahlImBlock * 2;
    }

    private getIJ_U(nr0:number):IPunkt {
        this.anzahlImBlock = this.blockBreite + this.blockHoehe - 1;
        this.anzahlInBlockReihe = this.anzahlImBlock * 2;
        let blockReihe = Math.floor(nr0 / this.anzahlInBlockReihe);
        let jBlock = blockReihe * 2;
        let nrInBlockReihe = nr0 % this.anzahlInBlockReihe;
        let nrImBlock = nrInBlockReihe % this.anzahlImBlock;

        let i = (nrImBlock < this.blockBreite - 1) ? 1 + nrImBlock : 0;
        if (nrInBlockReihe < this.anzahlImBlock) {
            i = 2 * this.blockBreite - i;
        }
        ;
        let j = jBlock;
        if (nrImBlock >= this.blockBreite) {
            j += nrImBlock - this.blockBreite + 1;
        }
        return {"i": i + 1, "j": j + 1};
    }

    private getIJ_Reihen(nr0:number):IPunkt {
        this.anzahlImBlock = this.blockBreite;
        this.anzahlInBlockReihe = this.anzahlImBlock * 2;
        let i = nr0 % (this.anzahlInBlockReihe);
        if (i >= this.blockBreite) {
            i++;
        }
        let j = Math.floor(nr0 / this.anzahlInBlockReihe) * 2;
        return {"i": i + 1, "j": j + 1};
    }


    setzeReihen() {
        for (let nr = 0; nr < this.anzahlTische; nr++) {
            let punkt:IPunkt = this.getIJ_Reihen(nr);
            this.tische[nr].setIJ(punkt.i, punkt.j);
        }
    }

    setzeU() {
        for (let nr = 0; nr < this.anzahlTische; nr++) {
            let punkt:IPunkt = this.getIJ_U(nr);
            this.tische[nr].setIJ(punkt.i, punkt.j);
        }
    }

    setzeGruppen(optionen) {
        let anzahlGruppen = optionen.anzahlGruppen;
        if (optionen.gruppenGroesse) {
            anzahlGruppen = Math.round(optionen.gruppenGroesse / this.anzahlTische);
        }
        let nr = 0;
        let anzahlTischeRest = this.anzahlTische;
        let anzahlGruppenRest = anzahlGruppen;
        let j:number = 1;
        while (anzahlTischeRest > 0) {
            let reihenLaenge = Math.floor((anzahlTischeRest - 1) / anzahlGruppenRest + 1);
            for (let i = 1; i <= reihenLaenge; i++) {
                this.tische[nr].setIJ(i, j);
                nr++;
            }
            j += 2;
            anzahlGruppenRest--;
            anzahlTischeRest -= reihenLaenge;
        }
    }
}