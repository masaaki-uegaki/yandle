import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { YellService } from '../../shared/yell/yell.service';
import { Yell } from '../../../typings.d';

@Component({
    selector: 'app-moments',
    templateUrl: 'moments.component.html',
    styleUrls: ['./moments.component.scss']
})
export class MomentsComponent implements OnInit {
    yells: Observable<Yell[]>;

    constructor(private yellService: YellService) { }

    ngOnInit() {
        this.yells = this.yellService.getMoments();
    }
}
