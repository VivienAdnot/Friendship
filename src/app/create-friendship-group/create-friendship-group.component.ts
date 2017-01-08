import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FriendshipGroupModel } from '../models/friendshipGroup.model';

interface IFriendshipGroupFormModel {
    name: string;
    maxWeekSpanBetweenMeetings: number;
}

@Component({
    selector: 'app-create-friendship-group',
    templateUrl: './create-friendship-group.component.html',
    styleUrls: ['./create-friendship-group.component.css']
})
export class CreateFriendshipGroupComponent implements OnInit {
    friendshipGroupFormModel: IFriendshipGroupFormModel;
    @Output() friendshipGroupCreated = new EventEmitter<FriendshipGroupModel>();

    constructor() {
        this.friendshipGroupFormModel = {
            name: '',
            maxWeekSpanBetweenMeetings: 6
        };      
    }

    ngOnInit() {
    }

    createFriendshipGroup() {
        const friendshipGroupCreation: FriendshipGroupModel = this.frienshipGroupFactory(this.friendshipGroupFormModel);
        this.friendshipGroupCreated.emit(friendshipGroupCreation);
    }

    frienshipGroupFactory(friendshipFormModel: IFriendshipGroupFormModel): FriendshipGroupModel {
        return {
            name: friendshipFormModel.name,
            maxWeekSpanBetweenMeetings: friendshipFormModel.maxWeekSpanBetweenMeetings,
            friendships: []
        };
    }    

}
