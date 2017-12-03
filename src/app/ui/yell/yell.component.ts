import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Yell } from '../../model/yell';

@Component({
    selector: 'yell',
    templateUrl: 'yell.component.html',
    styleUrls: [ 'yell.component.scss' ]
})

export class YellComponent implements OnInit {
    yell: Yell = {
        id: 0,
        userId: 0,
        message: ''
    };

    yellForm: FormGroup;

    constructor() {}

    ngOnInit() {
        this.yellForm = new FormGroup({
            'message': new FormControl(this.yell.message, [
              Validators.required
            ]),
        });
    }

    get message() { return this.yellForm.get('message'); }
}