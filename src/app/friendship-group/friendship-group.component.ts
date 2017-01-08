import { Component, OnInit, Input } from '@angular/core';
import { FriendshipGroupModel } from '../models/friendshipGroup.model';
import { FriendshipModel } from '../models/friendship.model';

@Component({
  selector: 'app-friendship-group',
  templateUrl: './friendship-group.component.html',
  styleUrls: ['./friendship-group.component.css']
})
export class FriendshipGroupComponent implements OnInit {
    @Input() friendshipGroup: FriendshipGroupModel;
    friendshipCreationFailed: boolean;

    constructor() { }

    ngOnInit() { }

    tryCreateFriendship(friendship: FriendshipModel) {
        const existingFriendshipNames: string[] = this.friendshipGroup.friendships.map((friendship: FriendshipModel) => {
            return friendship.friend.name;
        });

        const friendshipNameAlreadyExists = existingFriendshipNames.find((name: string) => name === friendship.friend.name);
        if(friendshipNameAlreadyExists) {
            this.friendshipCreationFailed = true;
        } else {
            this.friendshipGroup.friendships.push(friendship);
        }
    }
}
