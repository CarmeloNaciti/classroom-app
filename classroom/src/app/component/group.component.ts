import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from '../model/person.model';
import { PersonService } from '../service/person.service';

@Component({
    templateUrl: '../view/group.view.html',
    providers: [ PersonService ]
})

export class GroupComponent implements OnInit {
    persons: Person[];

    constructor (private personService: PersonService, private router: Router) {}

    ngOnInit(): void {
        this.getPersons();
    }

    getPersons(): void {
        this.personService.getAllByGroup().subscribe(persons => this.persons = persons);
    }

    viewPerson(person: Person): void {
        this.router.navigate(['/person', person.id_person]);
    }
}
