import { Injectable } from '@angular/core';
import { FriendshipGroupModel } from './models/friendshipGroup.model';
import * as moment from 'moment';

@Injectable()
export class LocalStorageDaoService {

    constructor() { }

    getFriendShipGroups(): Array<FriendshipGroupModel> {
        const stored = window.localStorage.getItem("friendshipGroups");

        const friendshipGroups: Array<FriendshipGroupModel> = this.deserialize(stored);
        return friendshipGroups;
    }

    saveFriendShipGroups(friendshipGroups: Array<FriendshipGroupModel>): void {
        window.localStorage.setItem("friendshipGroups", this.serialize(friendshipGroups));
    }    

    private serialize(collection:any): string {
        const RE_ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})\.(\d{3})Z$/;
        return JSON.stringify(collection, function(k, v) {
            if (typeof v === 'string' && v.match(RE_ISO_DATE)) {
                return 'moment!' + v;
            }
            return v;
        })
    }

    private deserialize(serializedData: string): any {
        return JSON.parse(serializedData, function(k, v) {
            if (typeof v === 'string' && v.includes('moment!')) {
                return moment(v.split('!')[1]);
            }
            return v;
        })
    }
}
