import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { YellService } from '../../service/yell/yell.service';
import { Yell } from '../../model/yell';
import { MapService } from '../../service/map/map.service';
import { Location } from '../../model/location';

import * as moment from 'moment'; 
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'yell',
    templateUrl: 'yell.component.html',
    styleUrls: [ 'yell.component.scss' ]
})

export class YellComponent implements OnInit {
    yell: Yell = {
        id: 0,
        userId: 0,
        userName: 'Anonymous',
        message: '',
        location: null,
        createdAt: null,
    };

    location: Location;

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
        this.setYell();
        this.yellService.addYell(this.yell);
        this.yellForm.reset();
    }

    setYell() {
        this.setYellMock();

        this.yell.message = this.message.value;
        this.yell.createdAt = this.timestamp;

        this.setCurrentLocation();
    }

    setCurrentLocation() {
        this.mapService.getCurrentLocation()
            .subscribe(
                (location: Location) => this.yell.location = location,
            );
    }

    //TODO
    setYellMock() {
        this.yell.userName = '匿名さん';
    }

    get message(): AbstractControl {
        return this.yellForm.get('message');
    }

    get timestamp() {
        return moment();
    }
}