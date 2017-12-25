import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

    transform(timestamp: string): string {
        moment.locale("ja");
        return moment(new Date(timestamp)).format('YYYY-MM-DD HH:mm:ss');
    }
}
