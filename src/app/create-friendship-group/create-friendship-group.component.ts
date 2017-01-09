import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FriendshipGroupModel } from '../models/friendshipGroup.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-friendship-group',
    templateUrl: './create-friendship-group.component.html',
    styleUrls: ['./create-friendship-group.component.css']
})
export class CreateFriendshipGroupComponent implements OnInit {
    friendshipGroupForm: FormGroup;
    nameCtrl: FormControl;
    maxWeekSpanBetweenMeetingsCtrl: FormControl;

    static numberMin(maxWeekSpanBetweenMeetingsCtrl: FormControl) {
        const value:number = maxWeekSpanBetweenMeetingsCtrl.value;
        return (Number.isNaN(value) || value < 1) ? { numberMin: true } : null;
    }    

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.nameCtrl = this.formBuilder.control('', Validators.required);
        this.maxWeekSpanBetweenMeetingsCtrl = this.formBuilder.control('', [Validators.required, CreateFriendshipGroupComponent.numberMin]);

        this.friendshipGroupForm = this.formBuilder.group({
            nameCtrl: this.nameCtrl,
            maxWeekSpanBetweenMeetingsCtrl: this.maxWeekSpanBetweenMeetingsCtrl
        });       
    }

    createFriendshipGroup() {
        console.log(this.friendshipGroupForm.value.nameCtrl);
        console.log(this.friendshipGroupForm.value.maxWeekSpanBetweenMeetingsCtrl);
    }
}
