import {Component, OnInit, Pipe} from '@angular/core';
import {AnnotateService} from "../shared/annotate.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-annotate',
    templateUrl: './annotate.component.html',
    styleUrls: ['./annotate.component.css']
})
export class AnnotateComponent implements OnInit {

    text: any;
    sMsg: any;
    myFiles: any = [];
    urls: any = [];
    myFileNames: any = [];
    link: string;

    constructor(
        private annotateService: AnnotateService,
        private http: HttpClient) {
    }

    ngOnInit() {
    }

    getFileDetails(e) {
        // console.log (e.target.files);
        for (let i = 0; i < e.target.files.length; i++) {
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[i]); // read file as data url
            reader.onload = e => {
                // called once readAsDataURL is completed
                // this.urls.push(e.target.result);
            };
            this.myFiles.push(e.target.files[i]);
            this.myFileNames.push(e.target.files[i].name);
        }

        this.urls = [];
    }

    uploadFiles() {
        const frmData = new FormData();
        // for (let i = 0; i < this.myFiles.length; i++) {
        frmData.append('sampleFile', this.myFiles[0]);
        // }
        this.http.post<any>('http://localhost:8080/annotate-by-image', frmData).subscribe(
            res => {
                this.text = res.text.text.toString();
                // console.log(JSON.stringify(res.text.pages[0].blocks[0].paragraphs[0].words[0].text));
                // console.log(JSON.stringify(res.text.text.toString()));
            }
        );
    }

    annotateByLink() {
        this.http.post<any>('http://localhost:8080/annotate-by-link', {"link": this.link}).subscribe(
            res => {
                this.text = res.text.text.toString();
                // console.log(JSON.stringify(res.text.pages[0].blocks[0].paragraphs[0].words[0].text));
                // console.log(JSON.stringify(res.text.text.toString()));
            }
        );
    }

}

Pipe({name: 'safeHtml'})
export class Safe {
    constructor(private sanitizer:DomSanitizer){}

    transform(style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
        // return this.sanitizer.bypassSecurityTrustHtml(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
    }
}
