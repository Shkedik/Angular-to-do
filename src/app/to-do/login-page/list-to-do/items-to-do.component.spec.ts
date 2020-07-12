import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsToDoComponent } from './items-to-do.component';

describe('ItemsToDoComponent', () => {
  let component: ItemsToDoComponent;
  let fixture: ComponentFixture<ItemsToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
