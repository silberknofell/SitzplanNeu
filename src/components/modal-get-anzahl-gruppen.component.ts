import {Component, Output, EventEmitter, Input} from "@angular/core";
import {AnzahlListe} from "./gruppen-erstellen.component";
/**
 * Created by Michael on 06.06.2016.
 */
@Component({
    selector: 'modal-get-anzahl-gruppen',
    template: `
<div  id="myModal" class="dialog">

  <!-- Modal content -->
  <div class="dialog-content">

    <button class="btn btn-primary"
            *ngFor="let anzahl of liste"
            (click) = "onClick(anzahl)"
            >{{text(anzahl)}}
    </button>
    <button class="btn btn-danger" (click) = "onClick(0)">
        <span class="fa fa-times"></span> Abbrechen
    </button>
  </div>

</div>    
    `
})

export class ModalGetAnzahlGruppen {

    @Input() anzahlListe:AnzahlListe;
    @Output() onClose = new EventEmitter<number>();

    get liste():number[] {
        console.log(this.anzahlListe);
        if (this.anzahlListe) {
            return this.anzahlListe.liste;
        }
        return [];
    }

    onClick(n:number) {
        this.onClose.emit(n);
    }


    text(anzahl):string {
        let anzahlSus:number = this.anzahlListe.anzahlSus;
        let minGruppenGroesse:number = Math.floor(anzahlSus / anzahl);
        let alleGleich:boolean = anzahlSus % anzahl ==0;

        let groesseString = "Größe: "
                            + minGruppenGroesse
                            + (alleGleich ? "" : "-" + (minGruppenGroesse+1));

        return anzahl + " Gruppen / " + groesseString;
    }

}