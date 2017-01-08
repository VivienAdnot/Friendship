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
    friendshipGroupCreationFailed: boolean;

    constructor(private friendshipGroupService: FriendshipGroupService) { }

    ngOnInit() {
        this.friendshipGroups = this.friendshipGroupService.getGroups();
    }

    save() {
        this.friendshipGroupService.save(this.friendshipGroups);
    }

    tryCreateFriendshipGroup(friendshipGroup: FriendshipGroupModel) {
        const existingFriendshipGroupNames: string[] = this.friendshipGroups.map((friendshipGroup: FriendshipGroupModel) => {
            return friendshipGroup.name;
        });

        const friendshipNameAlreadyExists = existingFriendshipGroupNames.find((name: string) => name === friendshipGroup.name);

        if(friendshipNameAlreadyExists) {
            this.friendshipGroupCreationFailed = true;
        } else {
            this.friendshipGroups.push(friendshipGroup);
            this.friendshipGroupCreationFailed = false;
        }
    }
}
