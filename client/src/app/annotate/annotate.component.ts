import {Component, OnInit} from '@angular/core';
import {AnnotateService} from "./annotate.service";

@Component({
    selector: 'app-annotate',
    templateUrl: './annotate.component.html',
    styleUrls: ['./annotate.component.css']
})
export class AnnotateComponent implements OnInit {

    text: any;

    constructor(private annotateService: AnnotateService) {
    }

    ngOnInit() {
        this.annotateService.getAnnotate().subscribe(
            res => {
                this.text = res.text;
            }
        );
    }

    upload(event) {

    }

}
