import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FriendshipGroupModel } from '../models/friendshipGroup.model';
import { FriendshipModel } from '../models/friendship.model';

@Component({
  selector: 'app-friendship-group',
  templateUrl: './friendship-group.component.html',
  styleUrls: ['./friendship-group.component.css']
})
export class FriendshipGroupComponent implements OnInit {
    @Input() friendshipGroup: FriendshipGroupModel;
    @Output() requestDelete = new EventEmitter<FriendshipGroupModel>();

    constructor() {
    }

    ngOnInit() { }

    deleteFriendship(friendship: FriendshipModel) {
        const index: number = this.friendshipGroup.friendships.indexOf(friendship);
        this.friendshipGroup.friendships.splice(index, 1);
    }

    requestDeleteFriendshipGroup() {
        this.requestDelete.emit(this.friendshipGroup);
    }
}
