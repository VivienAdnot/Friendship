/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToggleShowCreateFriendshipComponent } from './toggle-show-create-friendship.component';

describe('ToggleShowCreateFriendshipComponent', () => {
  let component: ToggleShowCreateFriendshipComponent;
  let fixture: ComponentFixture<ToggleShowCreateFriendshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleShowCreateFriendshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleShowCreateFriendshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
