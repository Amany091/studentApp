import { Notification } from './../../../Models/notification';
import { Component } from '@angular/core';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  notification:Notification[]=[
    { id:1, doctor:"Dr:Ehab", content: "lectet canceled", timeleft: "daysleft", image: '../../assets/images/android.jpg' }
  ]
}
