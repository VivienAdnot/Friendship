import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePickerModule } from 'ng2-datepicker';

import { FriendshipGroupService } from './friendship-group.service';
import { FriendshipService } from './friendship.service';
import { MeetingService } from './meeting.service';
import { LocalStorageDaoService } from './local-storage-dao.service';

import { AppComponent } from './app.component';
import { FriendshipComponent } from './friendship/friendship.component';
import { FriendshipGroupComponent } from './friendship-group/friendship-group.component';
import { FriendComponent } from './friend/friend.component';
import { FriendshipGroupsComponent } from './friendship-groups/friendship-groups.component';
import { CreateFriendshipComponent } from './create-friendship/create-friendship.component';
import { ToggleShowCreateFriendshipComponent } from './toggle-show-create-friendship/toggle-show-create-friendship.component';
import { CreateFriendshipGroupComponent } from './create-friendship-group/create-friendship-group.component';
import { ToggleShowCreateFriendshipGroupComponent } from './toggle-show-create-friendship-group/toggle-show-create-friendship-group.component';

@NgModule({
    declarations: [
        AppComponent,
        FriendshipComponent,
        FriendshipGroupComponent,
        FriendComponent,
        FriendshipGroupsComponent,
        CreateFriendshipComponent,
        ToggleShowCreateFriendshipComponent,
        CreateFriendshipGroupComponent,
        ToggleShowCreateFriendshipGroupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DatePickerModule
    ],
    providers: [FriendshipGroupService, MeetingService, FriendshipService, LocalStorageDaoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
