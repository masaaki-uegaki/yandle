import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-graphs',
    templateUrl: './graphs.component.html',
    styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {
    chartType: string = 'line';

    chartDatasets: Array<any> = [
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'イェール数' }
    ];

    chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

    chartColors: Array<any> = [
        {
            backgroundColor: 'rgba(220,220,220,0.2)',
            borderColor: 'rgba(220,220,220,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgba(151,187,205,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(151,187,205,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        }
    ];

    chartOptions: any = {
        responsive: true
    };

    constructor() { }

    ngOnInit() {
    }

    chartClicked(e: any): void {
    }

    chartHovered(e: any): void {
    }
}
