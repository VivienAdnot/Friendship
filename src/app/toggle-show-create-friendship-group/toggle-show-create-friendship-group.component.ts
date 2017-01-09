import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FriendshipGroupModel } from '../models/friendshipGroup.model';

@Component({
    selector: 'app-toggle-show-create-friendship-group',
    templateUrl: './toggle-show-create-friendship-group.component.html',
    styleUrls: ['./toggle-show-create-friendship-group.component.css']
})
export class ToggleShowCreateFriendshipGroupComponent implements OnInit {
    @Output() friendshipGroupCreated = new EventEmitter<FriendshipGroupModel>();
    showFriendshipGroupCreationEl: boolean

    constructor() {
        this.showFriendshipGroupCreationEl = false;
    }

    ngOnInit() {
    }

    dismissFriendshipGroupCreationEl() {
        this.showFriendshipGroupCreationEl = false;
    }

    relayCreateFriendshipGroup(friendshipGroup: FriendshipGroupModel) {
        this.friendshipGroupCreated.emit(friendshipGroup);
    }  
}
