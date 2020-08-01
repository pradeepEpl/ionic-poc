import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DealTileComponent } from './deal-tile.component';

describe('DealTileComponent', () => {
  let component: DealTileComponent;
  let fixture: ComponentFixture<DealTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealTileComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DealTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
