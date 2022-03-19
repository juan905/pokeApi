import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  /**
   * Information which comes from the parent's component
   */

  @Input() id: string;
  @Input() name: string;
  @Input() img: string;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }


  /**
   * It closes the modal
   */
  public closeModal(){
   this.modalController.dismiss();
  }

}
