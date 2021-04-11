import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-inventory',
  templateUrl: './item-inventory.component.html',
  styleUrls: ['./item-inventory.component.scss']
})
export class ItemInventoryComponent implements OnInit {
  itemInventoryFlag: boolean = true
  adminFlag: boolean = false

  items = [
    {
      item_id: 1,
      item_name: "Tomato, 1kg",
      item_image: "tomato.jpg",
      disconted_price: "₹22.00",
      actual_price: "₹61.00",
      description: "fresh",
    },
    {
      item_id: 2,
      item_name: "Potato, 1kg",
      item_image: "potato.jpg",
      disconted_price: "₹25.00",
      actual_price: "₹79.00",
      description: "fresh",
    },
    {
      item_id: 3,
      item_name: "Onion, 1kg",
      item_image: "onion.jpg",
      disconted_price: "₹19.00",
      actual_price: "₹110.00",
      description: "fresh",
    },
    {
      item_id: 4,
      item_name: "Lemon, 250 g",
      item_image: "lemon.jpg",
      disconted_price: "₹36.00",
      actual_price: "₹50.00",
      description: "fresh",
    },
    {
      item_id: 5,
      item_name: "Beet Root, 250g",
      item_image: "beet.jpg",
      disconted_price: "₹10.00",
      actual_price: "₹29.00",
      description: "fresh",
    },
  ]
  copyofitems: any;

  item_name: any;
  item_image: any;
  disconted_price: any;
  actual_price: any;
  description: any;

  add_item_name: any;
  add_item_image: any;
  add_disconted_price: any;
  add_actual_price: any;
  add_description: any;
  addNewFlag: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.copyofitems = [...this.items]
  }

  itemInventoryClicked() {
    this.itemInventoryFlag = true
    this.adminFlag = false
    this.addNewFlag = false

  }

  adminActionClicked() {
    this.itemInventoryFlag = false
    this.adminFlag = true
    this.addNewFlag = false

  }
  editItem(item: any) {
    this.item_name = item.item_name
    this.item_image = item.item_image
    this.disconted_price = item.disconted_price
    this.actual_price = item.actual_price
    this.description = item.description
  }

  deleteItem(item: any) {
    for (let i = 0; i < this.copyofitems.length; i++) {
      if (this.copyofitems[i].item_id == item.item_id) {
        if (i > -1) {
          this.copyofitems.splice(i, 1);
        }
      }
    }
  }
  saveItem(item: any) {
    for (let i = 0; i < this.copyofitems.length; i++) {
      if (this.copyofitems[i].item_id == item.item_id) {
        this.copyofitems[i].item_name = this.item_name
        this.copyofitems[i].item_image = this.item_image
        this.copyofitems[i].disconted_price = this.disconted_price
        this.copyofitems[i].actual_price = this.actual_price
        this.copyofitems[i].description = this.description
   }
       
  }
}

addNewItem(){
 this.addNewFlag = true
  
 let new_item ={ item_id : undefined,
  item_name : undefined,
  item_image : undefined,
  disconted_price: undefined,
  item_actual_price : undefined,
  description  : undefined
}
 let data_len = this.copyofitems.length + 1
 new_item.item_id = data_len;
 new_item.item_name = this.add_item_name;
 new_item.item_image = this.add_item_image;
 new_item.disconted_price = this.add_disconted_price;
 new_item.item_actual_price = this.add_actual_price;
 new_item.description = this.add_description;
 this.addNewFlag = false
 this.copyofitems.push(new_item)
}
}
