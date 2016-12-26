import { FriendshipGroupModel } from './models/friendshipGroup.model';
import { FriendModel } from './models/friend.model';
import { FriendshipModel } from './models/friendship.model';

export const BRUNO: FriendModel = {
    name: 'Bruno'
};

export const DAVID: FriendModel = {
    name: 'David'
};

export const BRUNO_F: FriendshipModel = {
    friend: BRUNO,
    meetings: [
        { date: '2016-01-01T08:02:00Z'},
        { date: '2016-02-01T08:02:00Z'},
        { date: '2016-03-01T08:02:00Z'}
    ],
    status: 'OK'
};

export const DAVID_F: FriendshipModel = {
    friend: DAVID,
    meetings: [
        { date: '2016-04-01T08:02:00Z'},
        { date: '2016-05-01T08:02:00Z'},
        { date: '2016-06-01T08:02:00Z'}
    ],
    status: 'OK'
};

export const PARIS: FriendshipGroupModel = {
    name: 'Paris',
    friendships: [
        BRUNO_F,
        DAVID_F
    ],
    maxDaySpanBetweenMeetings: 30
};
