import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';

import {YellService} from '../../service/yell/yell.service';
import {Yell} from '../../model/yell';
import {MapService} from '../../service/map/map.service';
import {Location} from '../../model/location';

import * as moment from 'moment';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'yell',
    templateUrl: 'yell.component.html',
    styleUrls: ['yell.component.scss']
})

export class YellComponent implements OnInit {
    yell: Yell = {
        id: 0,
        userId: '',
        userName: '',
        message: '',
        location: null,
        createdAt: '',
    };

    yellForm: FormGroup;

    constructor(
        private yellService: YellService,
        private mapService: MapService) {}

    ngOnInit() {
        this.yellForm = new FormGroup({
            'message': new FormControl(this.yell.message, [Validators.required]),
        });

        this.setCurrentLocation();
    }

    onSubmit() {
        this.setYell()
            .subscribe(() =>
                this.yellService.addYell(this.yell)
            );
        this.yellForm.reset();
    }

    setYell(): Observable<any> {
        return Observable.create(ovserver => {
            this.setYellMock();
            this.yell.message = this.message.value;
            this.yell.createdAt = this.timestamp;

            if (this.yell.location) {
                this.setCurrentLocation();
                return ovserver.next();
            } else {
                this.mapService.getCurrentLocation()
                    .subscribe((location: Location) => {
                        this.yell.location = location;
                        return ovserver.next();
                    });
            }
        })
    }

    setCurrentLocation() {
        this.mapService.getCurrentLocation()
            .subscribe(
            (location: Location) => this.yell.location = location,
        );
    }

    //TODO
    setYellMock() {
        this.yell.id = 0;
        this.yell.userId = 'anonymous';
        this.yell.userName = '匿名さん';
    }

    get message(): AbstractControl {
        return this.yellForm.get('message');
    }

    get timestamp() {
        return moment();
    }
}