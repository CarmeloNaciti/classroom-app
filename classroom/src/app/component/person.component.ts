import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Person } from '../model/person.model';
import { PersonService } from '../service/person.service';

@Component({
    templateUrl: '../view/person.view.html',
    providers: [ PersonService ]
})

export class PersonComponent implements OnInit {
    person: Person;

    constructor(private personService: PersonService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.personService.getById(+params['id']))
            .subscribe(person => this.person = person);
    }

    updatePerson(): void {
        this.personService.update(this.person).subscribe(person => this.person = person);
    }
}
