import { Component } from "@angular/core";

@Component ({
    selector:'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    btnText: string = 'Add an Item Property Binding';
    goalText: string = '';
    goals = [];
    addItem() {
        this.goals.push(this.goalText);
        this.goalText ='';
      }
}

