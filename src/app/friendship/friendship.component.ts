import { Component, OnInit, Input } from '@angular/core';
import { FriendshipModel } from '../models/friendship.model';
import * as moment from 'moment';

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
        const lastMeeting = this.friendship.meetings[this.friendship.meetings.length - 1];
        const dateAsMoment = moment(lastMeeting.date);
        return dateAsMoment.format('MMMM Do YYYY');
    }

    met(): void {
        const newDate = moment();
        this.friendship.meetings.push({date: newDate});
    }
}
