import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUserImagesComponent } from './save-user-images.component';

describe('SaveUserImagesComponent', () => {
  let component: SaveUserImagesComponent;
  let fixture: ComponentFixture<SaveUserImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveUserImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveUserImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
