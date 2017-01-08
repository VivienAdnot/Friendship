import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { FriendshipModel } from '../models/friendship.model';

interface IDatePickerDateModel {
    day: string;
    month: string;
    year: string;
    formatted: string;
    momentObj: moment.Moment;
}

interface IFriendshipFormModel {
    name: string;
    meetingDate?: IDatePickerDateModel;
}

@Component({
  selector: 'app-create-friendship',
  templateUrl: './create-friendship.component.html',
  styleUrls: ['./create-friendship.component.css']
})

export class CreateFriendshipComponent implements OnInit {
    @Output() friendshipCreated = new EventEmitter<FriendshipModel>();
    friendshipFormModel: IFriendshipFormModel;

    constructor() {
        this.friendshipFormModel = {
            name: '',
            meetingDate: null
        };
    }

    ngOnInit() {
    }

    createFriendship() {
        const friendshipCreation: FriendshipModel = this.frienshipFactory(this.friendshipFormModel);
        this.friendshipCreated.emit(friendshipCreation);
    }

    frienshipFactory(friendshipFormModel: IFriendshipFormModel): FriendshipModel {
        let friendship: FriendshipModel = {
            friend: {
                name: friendshipFormModel.name
            },
            meetings: []
        };

        if(friendshipFormModel.meetingDate) {
            friendship.meetings.push({
                date: friendshipFormModel.meetingDate.momentObj
            });
        }

        return friendship;
    }
}
