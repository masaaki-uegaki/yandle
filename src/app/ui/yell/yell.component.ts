import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { YellService } from '../../service/yell/yell.service';
import { Yell } from '../../model/yell';
import { MapService } from '../../service/map/map.service';
import { Location } from '../../model/location';

@Component({
    selector: 'yell',
    templateUrl: 'yell.component.html',
    styleUrls: [ 'yell.component.scss' ]
})

export class YellComponent implements OnInit {
    yell: Yell = {
        id: 0,
        userId: 0,
        message: '',
        location: null
    };

    location: Location;

    yellForm: FormGroup;

    constructor(private yellService: YellService,
                private mapService: MapService) {}

    ngOnInit() {
        this.yellForm = new FormGroup({
            'message': new FormControl(this.yell.message, [Validators.required]),
        });
        this.mapService.getCurrentLocation(
            (location: Location) => {
                this.yell.location = location;
            }
        );
    }

    onSubmit() {
        this.yell.message = this.message.value;
        this.yellService.addYell(this.yell);
    }

    get message(): AbstractControl {
        return this.yellForm.get('message');
    }
}