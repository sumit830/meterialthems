import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from '../_services/index';
import { Alert } from '../_models/index';
@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnDestroy {
    private subscription: Subscription;
    message: any;
     alerts: Alert[] = [];


    constructor(private alertService: AlertService) { 
        // subscribe to alert messages
        this.subscription = alertService.getMessage().subscribe(message => { this.message = message; });
    }

    ngOnDestroy(): void {
        // unsubscribe on destroy to prevent memory leaks
        this.subscription.unsubscribe();
    }
     removeAlert(alert: Alert) {
         debugger;
        this.alerts = this.alerts.filter(x => x !== alert);
    }
}