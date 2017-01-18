import { Component, OnInit } from '@angular/core';
import { FriendshipGroupService } from '../friendship-group.service';
import { FriendshipGroupModel } from '../models/friendshipGroup.model';

@Component({
    selector: 'app-friendship-groups',
    templateUrl: './friendship-groups.component.html',
    styleUrls: ['./friendship-groups.component.css']
})
export class FriendshipGroupsComponent implements OnInit {
    friendshipGroups: Array<FriendshipGroupModel>;

    constructor(private friendshipGroupService: FriendshipGroupService) { }

    ngOnInit() {
        this.friendshipGroups = this.friendshipGroupService.getGroups();
    }

    save() {
        this.friendshipGroupService.save(this.friendshipGroups);
    }

    deleteFriendshipGroup(friendshipGroup: FriendshipGroupModel) {
        const index: number = this.friendshipGroups.indexOf(friendshipGroup);
        this.friendshipGroups.splice(index, 1);
    }
}
