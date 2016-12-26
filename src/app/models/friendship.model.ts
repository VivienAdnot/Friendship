import { FriendModel } from './friend.model' ;
import { MeetingModel } from './meeting.model';

export interface FriendshipModel {
    friend: FriendModel;
    meetings: Array<MeetingModel>;
    status: 'OK' | 'MaxTimespanNoSeeExceeded';
}
