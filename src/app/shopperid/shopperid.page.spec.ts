import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopperidPage } from './shopperid.page';

describe('ShopperidPage', () => {
  let component: ShopperidPage;
  let fixture: ComponentFixture<ShopperidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopperidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopperidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
