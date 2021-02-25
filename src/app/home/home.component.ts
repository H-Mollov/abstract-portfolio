import { Component, ViewChild } from '@angular/core';
import * as database from '../database/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }

  @ViewChild('focus') focusedElement;

  certificates: Array<any> = database.certificates;
  projects: Array<any> = database.projects;
  popupElement: HTMLElement;

  nextCertificate(event) {
    const firstCertificate = this.certificates.shift();
    this.certificates.push(firstCertificate);
  }

  previousCertificate(event) {
    const lastCertificate = this.certificates.pop();
    this.certificates.unshift(lastCertificate);
  }

  closeForm(event) {
    this.focusedElement.nativeElement.style.display = 'none';
    this.popupElement.style.display = 'none';
  }

  showForm(event) {
    const currentElement = event.target.textContent;
    this.popupElement = document.getElementsByClassName(`${currentElement.toLowerCase()}`)[0] as HTMLElement;
    
    this.popupElement.style.display = 'flex';
    this.focusedElement.nativeElement.style.display = 'flex';  
  }
}
