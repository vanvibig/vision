import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AnnotateService {

    constructor(private http: HttpClient) {
    }

    getAnnotate(): Observable<any> {
        return this.http.get<any>('https://vision-216016.appspot.com/annotate/');
    }
}
