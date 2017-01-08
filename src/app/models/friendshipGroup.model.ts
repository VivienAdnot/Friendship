import { FriendshipModel } from './friendship.model';

export interface FriendshipGroupModel {
    name: string;
    maxWeekSpanBetweenMeetings: number;
    friendships: Array<FriendshipModel>;
}
