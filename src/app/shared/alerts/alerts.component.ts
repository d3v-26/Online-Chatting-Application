import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { AlertService } from '../../services/alert.service';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  message: any

  constructor(private alertService: AlertService) { 
    this.subscription = alertService.getMessage().subscribe(message => {this.message = message})
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

}
