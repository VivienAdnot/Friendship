import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FriendshipComponent } from './friendship/friendship.component';
import { FriendshipGroupService } from './friendship-group.service';
import { MeetingService } from './meeting.service';
import { FriendshipGroupComponent } from './friendship-group/friendship-group.component';
import { FriendComponent } from './friend/friend.component';
import { FriendshipGroupsComponent } from './friendship-groups/friendship-groups.component';

@NgModule({
    declarations: [
        AppComponent,
        FriendshipComponent,
        FriendshipGroupComponent,
        FriendComponent,
        FriendshipGroupsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [FriendshipGroupService, MeetingService],
    bootstrap: [AppComponent]
})
export class AppModule { }
