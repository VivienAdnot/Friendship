import { Injectable } from '@angular/core';
import { PARIS } from './mock-friendshipGroups';
import { FriendshipGroupModel } from './models/friendshipGroup.model';
import { FriendModel } from './models/friend.model';
import { FriendshipModel } from './models/friendship.model';

@Injectable()
export class FriendshipGroupService {

    constructor() { }

    getGroups(): Array<FriendshipGroupModel> {
        let array = [];
        array.push(PARIS);
        return array;
    }
}
