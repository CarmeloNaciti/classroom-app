import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Person } from '../model/person.model';

@Injectable()
export class PersonService {
    private api = 'http://api.classroom';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getById(id: Number): Observable<Person> {
        return this.http
            .get(this.api + `/person/${id}`, {headers: this.headers})
            .map(response => response.json() as Person)
            .catch(this.handleError);
    }

    update(person: Person): Observable<Person> {
        return this.http
            .put(this.api + `/person/update/${person.id_person}`, JSON.stringify(person), {headers: this.headers})
            .map(response => response.json() as Person)
            .catch(this.handleError);
    }

    getAllByGroup(): Observable<Person[]> {
        return this.http
            .get(this.api + '/person/view', {headers: this.headers})
            .map(response => response.json() as Person[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
