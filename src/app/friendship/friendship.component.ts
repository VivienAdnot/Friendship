import { Component, OnInit, Input } from '@angular/core';
import { FriendshipModel } from '../models/friendship.model';
import { MeetingModel } from '../models/meeting.model';
import { MeetingService } from '../meeting.service';
import { FriendshipService } from '../friendship.service';
import * as moment from 'moment';
import { DateModel } from 'ng2-datepicker';
import { DatePickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-friendship',
  templateUrl: './friendship.component.html',
  styleUrls: ['./friendship.component.css']
})
export class FriendshipComponent implements OnInit {
    @Input() friendship: FriendshipModel;
    meetingCreationFailed: boolean;
    options: DatePickerOptions;

    constructor(private meetingService: MeetingService, private friendshipService: FriendshipService) {
        this.options = { maxDate: new Date()};
    }

    ngOnInit() {
    }

    getMostRecentMeeting(): string {
        const mostRecentMeeting: MeetingModel = this.friendshipService.getMostRecentMeeting(this.friendship);
        return mostRecentMeeting.date.format('MMMM Do YYYY');
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

    isMostRecentMeetingTooOld(): boolean {
        return this.friendshipService.isMostRecentMeetingTooOld(this.friendship);
    }
}
