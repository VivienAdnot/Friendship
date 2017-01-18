import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { FriendshipModel } from '../models/friendship.model';

export interface IDatePickerDateModel {
    day: string;
    month: string;
    year: string;
    formatted: string;
    momentObj: moment.Moment;
}

export interface IFriendshipFormModel {
    name: string;
    meetingDate?: IDatePickerDateModel;
}

@Component({
    selector: 'app-create-friendship',
    templateUrl: './create-friendship.component.html',
    styleUrls: ['./create-friendship.component.css']
})

export class CreateFriendshipComponent implements OnInit {
    @Input() friendships: Array<FriendshipModel>;

    friendshipFormModel: IFriendshipFormModel;
    friendshipCreationFailed: boolean;
    opened: boolean;

    constructor() {
        this.opened = false;

        if(!this.friendships) {
            this.friendships = new Array<FriendshipModel>();
        }

        this.friendshipFormModel = this.resetFormModel();
    }

    ngOnInit() {
    }

    createFriendship() {
        const friendshipCreation: FriendshipModel = this.frienshipFactory(this.friendshipFormModel);
        this.tryCreateFriendship(friendshipCreation);
    }

    tryCreateFriendship(friendship: FriendshipModel) {
        const existingFriendshipNames: string[] = this.friendships.map((friendship: FriendshipModel) => {
            return friendship.friend.name;
        });

        const friendshipNameAlreadyExists = existingFriendshipNames.find((name: string) => name === friendship.friend.name);

        if(friendshipNameAlreadyExists) {
            this.friendshipCreationFailed = true;
        } else {
            this.friendships.push(friendship);
            this.onCreationSuccess();
        }
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

    onCreationSuccess(): void {
        this.friendshipCreationFailed = false;
        this.opened = false;
        this.friendshipFormModel = this.resetFormModel();
    }

    resetFormModel(): IFriendshipFormModel {
        return {
            name: '',
            meetingDate: null
        };
    }
}
