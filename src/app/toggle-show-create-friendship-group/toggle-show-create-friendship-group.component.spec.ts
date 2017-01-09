/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToggleShowCreateFriendshipGroupComponent } from './toggle-show-create-friendship-group.component';

describe('ToggleShowCreateFriendshipGroupComponent', () => {
  let component: ToggleShowCreateFriendshipGroupComponent;
  let fixture: ComponentFixture<ToggleShowCreateFriendshipGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleShowCreateFriendshipGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleShowCreateFriendshipGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
