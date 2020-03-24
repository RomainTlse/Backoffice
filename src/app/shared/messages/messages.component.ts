import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  faWindowClose = faWindowClose;
  faCheck = faCheck;
  faTimesCircle = faTimesCircle;
  faExclamationTriangle = faExclamationTriangle;
  faInfoCircle = faInfoCircle;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
