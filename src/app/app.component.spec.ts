/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { FriendshipGroupsComponent } from './friendship-groups/friendship-groups.component';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        });
    });

    it('should have a title', () => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Friendship');
    });

    it(`should have an element 'app-friendship-groups'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const element = fixture.nativeElement;
        const friendshipGroupsElement = element.querySelector('app-friendship-groups');
        expect(friendshipGroupsElement).not.toBeNull('You need a app-friendship-groups component in your root component');
    }));
});
