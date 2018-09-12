import { Component, OnInit } from "@angular/core";
import { FacebookService, InitParams } from "ngx-facebook";

@Component({
    selector: "app-facebook-comment",
    templateUrl: "./facebook-comment.component.html",
    styleUrls: ["./facebook-comment.component.css"]
})
export class FacebookCommentComponent implements OnInit {
    constructor(private fb: FacebookService) {
        let initParams: InitParams = {
            appId: "743802065956102",
            xfbml: true,
            version: "v2.8"
        };

        fb.init(initParams);
    }

    ngOnInit() {}
}
