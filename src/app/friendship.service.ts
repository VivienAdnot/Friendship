import { Injectable } from '@angular/core';
import { FriendshipModel } from './models/friendship.model';
import { MeetingModel } from './models/meeting.model';
import * as moment from 'moment';

@Injectable()
export class FriendshipService {

    constructor() { }

    isMostRecentMeetingTooOld(friendship: FriendshipModel, maxWeekSpanBetweenMeetings: number): boolean {
        const mostRecentMeeting: MeetingModel = this.getMostRecentMeeting(friendship);
        const maxWeeksFromNow = moment().subtract(maxWeekSpanBetweenMeetings, 'weeks');
        return mostRecentMeeting.date.isSameOrBefore(maxWeeksFromNow, 'day');
    }

    getMostRecentMeeting(friendship: FriendshipModel): MeetingModel {
        const meetingsDates: moment.Moment[] = friendship.meetings.map((meeting: MeetingModel) => {
            return meeting.date;
        });

        const mostRecentMomentFromNow: moment.Moment = moment.max(meetingsDates);

        return friendship.meetings.find((meeting: MeetingModel) => {
            return meeting.date == mostRecentMomentFromNow;
        });
    }

    isMeetingCreationAllowed(friendship: FriendshipModel, meetingProposal:MeetingModel): boolean {
        const today = moment();
        if(meetingProposal.date.isAfter(today, 'day')) {
            return false;
        }

        for(let meeting of friendship.meetings) {
            if(meeting.date.isSame(meetingProposal.date, 'day')) {
                return false;
            }
        }

        return true;
    }
}
