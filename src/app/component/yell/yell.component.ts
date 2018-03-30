import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { YellService } from '../../shared/yell/yell.service';
import { MapService } from '../../shared/map/map.service';

import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-yell',
    templateUrl: 'yell.component.html',
    styleUrls: ['yell.component.scss']
})

export class YellComponent implements OnInit {
    yell: IYell = {
        id: 0,
        uid: '',
        userName: '',
        message: '',
        location: null,
        createdAt: '',
    };

    yellForm: FormGroup;

    constructor(
        private yellService: YellService,
        private mapService: MapService,
        private fb: FormBuilder) { }

    ngOnInit() {
        this.yellForm = this.fb.group({
            'message': [this.yell.message, [Validators.required]]
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
                    .subscribe((location: ILocation) => {
                        this.yell.location = location;
                        return ovserver.next();
                    });
            }
        });
    }

    setCurrentLocation() {
        this.mapService.getCurrentLocation()
            .subscribe(
            (location: ILocation) => this.yell.location = location,
        );
    }

    // TODO
    setYellMock() {
        this.yell.id = 0;
        this.yell.uid = 'anonymous';
        this.yell.userName = '匿名さん';
    }

    get message(): AbstractControl {
        return this.yellForm.get('message');
    }

    get timestamp() {
        return moment();
    }
}
