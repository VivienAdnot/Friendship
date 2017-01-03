import { Injectable } from '@angular/core';
import { FriendshipModel } from './models/friendship.model';
import { MeetingModel } from './models/meeting.model';
import * as moment from 'moment';

@Injectable()
export class FriendshipService {

    constructor() { }

    isLastMeetingTooOld(friendship: FriendshipModel): boolean {
        let lastMeeting: moment.Moment = this.getLastMeeting(friendship);
        let twoMonthsFromNow = moment().subtract(2, 'months');
        return lastMeeting.isSameOrBefore(twoMonthsFromNow, 'day');
    }

    getLastMeeting(friendship: FriendshipModel): moment.Moment {
        let lastMeeting: MeetingModel = friendship.meetings[friendship.meetings.length - 1];
        return moment(lastMeeting.date);
    }
}
