import { Component, OnInit, Input } from '@angular/core';
import { FriendshipModel } from '../models/friendship.model';

@Component({
  selector: 'app-friendship',
  templateUrl: './friendship.component.html',
  styleUrls: ['./friendship.component.css']
})
export class FriendshipComponent implements OnInit {
    @Input() friendship: FriendshipModel;

    constructor() { }

    ngOnInit() {
    }

    getLastMeetingDate(): string {
        return 'N/A';
    }
}
