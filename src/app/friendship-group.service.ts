import { Injectable } from '@angular/core';
import { FriendshipGroupModel } from './models/friendshipGroup.model';
import { FriendModel } from './models/friend.model';
import { FriendshipModel } from './models/friendship.model';

@Injectable()
export class FriendshipGroupService {

    constructor() { }

    getGroups(): Array<FriendshipGroupModel> {
        const stored = window.localStorage.getItem("friendshipGroups");
        if (!stored) {
            return [];
        }

        const friendshipGroups: Array<FriendshipGroupModel> = JSON.parse(stored);
        return friendshipGroups;
    }

    save(friendshipGroups: Array<FriendshipGroupModel>) {
        window.localStorage.setItem("friendshipGroups", JSON.stringify(friendshipGroups));
    }
}
