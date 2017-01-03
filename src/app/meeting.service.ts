import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class MeetingService {

    constructor() { }

    isToday(instant: moment.Moment): boolean {
        let now = moment();

        return instant.isSame(now, 'day');
    }
}
