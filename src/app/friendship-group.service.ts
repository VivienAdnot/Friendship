import { Injectable } from '@angular/core';
import { FriendshipGroupModel } from './models/friendshipGroup.model';
import { FriendModel } from './models/friend.model';
import { FriendshipModel } from './models/friendship.model';
import { LocalStorageDaoService } from './local-storage-dao.service';

@Injectable()
export class FriendshipGroupService {

    constructor(private dao: LocalStorageDaoService) { }

    getGroups(): Array<FriendshipGroupModel> {
        let friendshipGroups: Array<FriendshipGroupModel> = this.dao.getFriendShipGroups();
        return friendshipGroups;
    }

    save(friendshipGroups: Array<FriendshipGroupModel>) {
        this.dao.saveFriendShipGroups(friendshipGroups);
    }
}
