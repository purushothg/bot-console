import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllConfigComponent } from './list-all-config.component';

describe('ListAllConfigComponent', () => {
  let component: ListAllConfigComponent;
  let fixture: ComponentFixture<ListAllConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
