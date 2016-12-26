import { FriendshipModel } from './friendship.model';

export interface FriendshipGroupModel {
    name: string;
    friendships: Array<FriendshipModel>;
    maxDaySpanBetweenMeetings: number;
}
