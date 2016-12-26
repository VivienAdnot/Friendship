import { Component, OnInit, Input } from '@angular/core';
import { FriendshipGroupModel } from '../models/friendshipGroup.model';

@Component({
  selector: 'app-friendship-group',
  templateUrl: './friendship-group.component.html',
  styleUrls: ['./friendship-group.component.css']
})
export class FriendshipGroupComponent implements OnInit {
    @Input() friendshipGroup: FriendshipGroupModel;

    constructor() { }

    ngOnInit() { }
}
