import { Component, OnInit, Input } from '@angular/core';
import { FriendshipModel } from '../models/friendship.model';
import { MeetingModel } from '../models/meeting.model';
import { MeetingService } from '../meeting.service';
import { FriendshipService } from '../friendship.service';
import * as moment from 'moment';

@Component({
  selector: 'app-friendship',
  templateUrl: './friendship.component.html',
  styleUrls: ['./friendship.component.css']
})
export class FriendshipComponent implements OnInit {
    @Input() friendship: FriendshipModel;

    constructor(private meetingService: MeetingService, private friendshipService: FriendshipService) { }

    ngOnInit() {
    }

    getLastMeetingDate(): string {
        let lastMeeting: moment.Moment = this.friendshipService.getLastMeeting(this.friendship);
        return lastMeeting.format('MMMM Do YYYY');
    }

    meetNow(): void {
        let now = moment();
        this.friendship.meetings.push({date: now});
    }

    alreadyMetToday(): boolean {
        let lastMeeting: moment.Moment = this.friendshipService.getLastMeeting(this.friendship);
        return this.meetingService.isToday(lastMeeting);
    }

    isLastMeetingTooOld(): boolean {
        return this.friendshipService.isLastMeetingTooOld(this.friendship);
    }
}
