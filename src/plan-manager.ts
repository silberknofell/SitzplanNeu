import {Sus} from "./Pojo/sus";
import {Tisch} from "./Pojo/tisch";
import {Plan} from "./Pojo/plan";
/**
 * Created by test on 12.01.2016.
 */
export class PlanManager {
    sus:Sus[];
    tische:Tisch[];
    plan:Plan;

    constructor(plan:Plan) {
        this.sus = plan.getSusList();
        this.tische = plan.getBelegbareTischeList();
    }

    public losen() {
        var anzSus = this.sus.length;
        var anzTische = this.tische.length;
        var shuf = this.shuffle(anzTische);
        var min = Math.min(anzSus, anzTische);

        this.tische.map((tisch) => tisch.removeSus());

        for (let i = 0; i < min; i++) {
            this.tische[shuf[i]].setSus(this.sus[i]);
        }
    }

    private shuffle(anzahl) {
        var shuf = [];
        for (var i = 0; i < anzahl; i++) {
            shuf[i] = i;
        }
        for (var i = anzahl - 1; i > 0; i--) {
            var z = PlanManager.zufallszahl(i);
            var hilf = shuf[z];
            shuf[z] = shuf[i];
            shuf[i] = hilf;
        }
        return shuf;
    }

    private static zufallszahl(i):number { //Zufallszahl von 0 bis i
        return Math.floor(Math.random() * (i + 1));
    }
}
