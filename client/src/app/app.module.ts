import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AnnotateComponent} from './annotate/annotate.component';
import {HttpClientModule} from "@angular/common/http";

import {FacebookModule} from 'ngx-facebook';
import {FacebookCommentComponent} from './facebook-comment/facebook-comment.component';

import {FileUploadModule} from 'primeng/fileupload';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        AnnotateComponent,
        FacebookCommentComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FileUploadModule,
        FormsModule,
        FacebookModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
