import { Component, OnInit, Input } from '@angular/core';
import { FriendshipModel } from '../models/friendship.model';
import { MeetingModel } from '../models/meeting.model';
import * as moment from 'moment';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-friendship',
  templateUrl: './friendship.component.html',
  styleUrls: ['./friendship.component.css']
})
export class FriendshipComponent implements OnInit {
    @Input() friendship: FriendshipModel;

    constructor(private meetingService: MeetingService) { }

    ngOnInit() {
    }

    getLastMeetingDate(): string {
        const lastMeeting: MeetingModel = this.friendship.meetings[this.friendship.meetings.length - 1];
        const dateAsMoment = moment(lastMeeting.date);
        return dateAsMoment.format('MMMM Do YYYY');
    }

    meetNow(): void {
        const newDate = moment();
        this.friendship.meetings.push({date: newDate});
    }

    alreadyMetToday(): boolean {
        const lastMeeting: MeetingModel = this.friendship.meetings[this.friendship.meetings.length - 1];
        const dateAsMoment = moment(lastMeeting.date);

        return this.meetingService.isToday(dateAsMoment);
    }
}
