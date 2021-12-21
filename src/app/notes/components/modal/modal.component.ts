import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
 selector: 'modal',
 templateUrl: './modal.component.html',
 styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

constructor() { }

ngOnInit() {
    $(document).ready(function() {
        console.log($('a[href="#openModal"]')[0]);
        $('a[href="#openModal"]')[0].click();
      })
}
}