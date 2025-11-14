import {Component, computed, signal} from '@angular/core';

interface Sale {
  quantity: number;
  text: string;
}

@Component({
  selector: 'app-front-page',
  imports: [],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.scss'
})
export class FrontPageComponent {
  protected money = signal<number>(-3240000);
  protected moneyDisplay = computed(() => {
    return this.money().toLocaleString('dk', {useGrouping:true})
  })
  protected sales = signal<Sale[]>([]);

  public addSale(){
    const quantity = Number((<HTMLInputElement>document.getElementById("quantity")).value);
    const text = (<HTMLInputElement>document.getElementById("text")).value;
    const sale: Sale = {
      quantity: quantity,
      text: text
    }
    this.sales.set([sale].concat(this.sales()))
    this.money.set(quantity + this.money());
  }
}
