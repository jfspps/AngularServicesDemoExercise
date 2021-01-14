import { Injectable } from "@angular/core";
import { CounterService } from "./counterservice.service";

@Injectable()
export class UserService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService){

    }

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.onMakeInactive();
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.onMakeActive();
    }
}