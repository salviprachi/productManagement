import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInventoryComponent } from './item-inventory.component';

describe('ItemInventoryComponent', () => {
  let component: ItemInventoryComponent;
  let fixture: ComponentFixture<ItemInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemInventoryComponent ],
      imports :[]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create @itemInventoryClicked() for itemInventoryFlag', () => {
     component.itemInventoryClicked()
    expect(component.itemInventoryFlag).toBe(true);
  });
  it('should create @itemInventoryClicked() for addNewFlag', () => {
     component.itemInventoryClicked()
    expect(component.addNewFlag).toBe(false);
  });
  it('should create @itemInventoryClicked() for adminFlag', () => {
    component.itemInventoryClicked()
    expect(component.adminFlag).toBe(false);
  });
  it('should create @adminActionClicked() for itemInventoryFlag', () => {
    component.adminActionClicked()
   expect(component.itemInventoryFlag).toBe(false);
 });
 it('should create @adminActionClicked() for addNewFlag', () => {
    component.adminActionClicked()
   expect(component.addNewFlag).toBe(false);
 });
 it('should create @adminActionClicked() for adminFlag', () => {
   component.adminActionClicked()
   expect(component.adminFlag).toBe(true);
 });
 it('should create @editItem()', () => {
  const item = {
    item_name : "test",
    item_image : "test1",
    disconted_price : "test1",
    actual_price : "test1",
    description : "test2"

  }
  component.editItem(item)
  expect(component.item_name).toBe("test");
});

it('should create @saveItem', () => {
  const   items = [
    {
      item_id: 1,
      item_name: "Tomato, 1kg",
      item_image: "tomato.jpg",
      disconted_price: "₹22.00",
      actual_price: "₹61.00",
      description: "fresh",
    },
    {
      item_id: 4,
      item_name: "Lemon, 250 g",
      item_image: "lemon.jpg",
      disconted_price: "₹36.00",
      actual_price: "₹50.00",
      description: "fresh",
    }
  ]
  component.saveItem(items)
  expect(component.copyofitems[3].item_name).toBe('Lemon, 250 g');
});

it('should create @deleteItem', () => {
  const items = [
    {
      item_id: 1,
      item_name: "Tomato, 1kg",
      item_image: "tomato.jpg",
      disconted_price: "₹22.00",
      actual_price: "₹61.00",
      description: "fresh",
    }
  ]
  component.deleteItem(items)
  expect(component.copyofitems[0].item_id).toBe(1);
});

it('should create @deleteItem', () => {
  const items = [
    {
      item_id: 2,
      item_name: "Tomato, 1kg",
      item_image: "tomato.jpg",
      disconted_price: "₹22.00",
      actual_price: "₹61.00",
      description: "fresh",
    }
  ]
  component.deleteItem(items)
  expect(component.copyofitems[1].item_id).toBe(2);
});

it('should create @addNewItem', () => {
  component.addNewItem()
  expect(component.addNewFlag).toBe(false);
});

  
});
