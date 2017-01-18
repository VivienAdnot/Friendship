import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FriendshipGroupModel } from '../models/friendshipGroup.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-friendship-group',
    templateUrl: './create-friendship-group.component.html',
    styleUrls: ['./create-friendship-group.component.css']
})
export class CreateFriendshipGroupComponent implements OnInit {
    @Input() friendshipGroups: Array<FriendshipGroupModel>;

    opened: boolean;
    friendshipGroupCreationFailed: boolean;

    friendshipGroupForm: FormGroup;
    nameCtrl: FormControl;
    maxWeekSpanBetweenMeetingsCtrl: FormControl;

    constructor(private formBuilder: FormBuilder) {
        this.opened = false;

        if(!this.friendshipGroups) {
            this.friendshipGroups = new Array<FriendshipGroupModel>();
        }
    }

    ngOnInit() {
        this.resetForm();
    }

    static numberMin(maxWeekSpanBetweenMeetingsCtrl: FormControl) {
        const value:number = maxWeekSpanBetweenMeetingsCtrl.value;
        return (Number.isNaN(value) || value < 1) ? { numberMin: true } : null;
    }    

    createFriendshipGroup() {
        const friendshipGroupCreation = this.frienshipGroupFactory(this.friendshipGroupForm.value.nameCtrl, this.friendshipGroupForm.value.maxWeekSpanBetweenMeetingsCtrl);
        this.tryCreateFriendshipGroup(friendshipGroupCreation);
    }

    tryCreateFriendshipGroup(friendshipGroup: FriendshipGroupModel) {
        let existingFriendshipGroupNames: string[] = [];

        if(this.friendshipGroups.length) {
            existingFriendshipGroupNames = this.friendshipGroups.map((friendshipGroup: FriendshipGroupModel) => {
                return friendshipGroup.name;
            });
        }

        const friendshipNameAlreadyExists = existingFriendshipGroupNames.find((name: string) => name === friendshipGroup.name);

        if(friendshipNameAlreadyExists) {
            this.friendshipGroupCreationFailed = true;
        } else {
            this.friendshipGroups.push(friendshipGroup);
            this.onCreationSuccess();
        }
    }

    frienshipGroupFactory(name:string, maxWeekSpanBetweenMeetings:number): FriendshipGroupModel {
        return {
            name: name,
            maxWeekSpanBetweenMeetings: maxWeekSpanBetweenMeetings,
            friendships: []
        };
    }

    onCreationSuccess(): void {
        this.friendshipGroupCreationFailed = false;
        this.opened = false;
        this.resetForm();
    }    

    resetForm() {
        this.nameCtrl = this.formBuilder.control('', Validators.required);
        this.maxWeekSpanBetweenMeetingsCtrl = this.formBuilder.control('', [Validators.required, CreateFriendshipGroupComponent.numberMin]);

        this.friendshipGroupForm = this.formBuilder.group({
            nameCtrl: this.nameCtrl,
            maxWeekSpanBetweenMeetingsCtrl: this.maxWeekSpanBetweenMeetingsCtrl
        });
    }
}
