/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FriendshipGroupService } from './friendship-group.service';

describe('FriendshipGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendshipGroupService]
    });
  });

  it('should ...', inject([FriendshipGroupService], (service: FriendshipGroupService) => {
    expect(service).toBeTruthy();
  }));
});
