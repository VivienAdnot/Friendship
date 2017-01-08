import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FriendshipModel } from '../models/friendship.model';

@Component({
  selector: 'app-toggle-show-create-friendship',
  templateUrl: './toggle-show-create-friendship.component.html',
  styleUrls: ['./toggle-show-create-friendship.component.css']
})
export class ToggleShowCreateFriendshipComponent implements OnInit {
    @Output() friendshipCreated = new EventEmitter<FriendshipModel>();
    showFriendshipCreationEl: boolean

    constructor() {
        this.showFriendshipCreationEl = false;
    }

    ngOnInit() {
    }

    dismissFriendshipCreationEl() {
        this.showFriendshipCreationEl = false;
    }

    relayCreateFriendship(friendship: FriendshipModel) {
        this.friendshipCreated.emit(friendship);
    }
}
