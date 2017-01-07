import { Component, OnInit, Input } from '@angular/core';
import { FriendshipModel } from '../models/friendship.model';
import { MeetingModel } from '../models/meeting.model';
import { MeetingService } from '../meeting.service';
import { FriendshipService } from '../friendship.service';
import * as moment from 'moment';
import { DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-friendship',
  templateUrl: './friendship.component.html',
  styleUrls: ['./friendship.component.css']
})
export class FriendshipComponent implements OnInit {
    @Input() friendship: FriendshipModel;
    meetingCreationFailed: boolean;

    constructor(private meetingService: MeetingService, private friendshipService: FriendshipService) { }

    ngOnInit() {
    }

    getMostRecentMeeting(): string {
        const mostRecentMeeting: MeetingModel = this.friendshipService.getMostRecentMeeting(this.friendship);
        return mostRecentMeeting.date.format('MMMM Do YYYY');
    }

    meetNow(): void {
        let now = moment();
        this.friendship.meetings.push({date: now});
    }
    
    met(datePickerEvent: { type: string, data: string | DateModel }): void {
        const isDateChangedEvent = datePickerEvent.type === 'dateChanged';
        if(isDateChangedEvent) {
            const meetingProposal:MeetingModel = {
                date: (<DateModel>datePickerEvent.data).momentObj
            };

            const isMeetingAllowed: boolean = this.friendshipService.isMeetingCreationAllowed(this.friendship, meetingProposal);
            if(isMeetingAllowed) {
                this.friendship.meetings.push(meetingProposal);
            }

            else {
                this.meetingCreationFailed = true;
            }
        }
    }

    alreadyMetToday(): boolean {
        const mostRecentMeeting: MeetingModel = this.friendshipService.getMostRecentMeeting(this.friendship);
        return this.meetingService.isToday(mostRecentMeeting.date);
    }

    isLastMeetingTooOld(): boolean {
        return this.friendshipService.isLastMeetingTooOld(this.friendship);
    }
}
