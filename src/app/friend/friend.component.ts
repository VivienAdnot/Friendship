import { Component, OnInit, Input } from '@angular/core';
import { FriendModel } from '../models/friend.model';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
    @Input() friend: FriendModel;

    constructor() { }

    ngOnInit() {
    }
}
