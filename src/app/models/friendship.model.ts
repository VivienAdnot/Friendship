import { FriendModel } from './friend.model' ;
import { MeetingModel } from './meeting.model';

export type FriendshipStatus = 'OK' | 'MaxTimespanNoSeeExceeded';

export interface FriendshipModel {
    friend: FriendModel;
    meetings: Array<MeetingModel>;
    status: FriendshipStatus;
}
