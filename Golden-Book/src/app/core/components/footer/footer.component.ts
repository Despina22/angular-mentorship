import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  text: string = 'Orion Innovation - ANGULAR WORKSHOP 2022';

  constructor() {}

  ngOnInit(): void {}
}
