import { Component, OnInit, ViewChild } from '@angular/core';
import * as _dayjs from 'dayjs';
import { DaterangepickerComponent, DaterangepickerDirective } from '../../../../src/daterangepicker';

@Component({
  selector: 'simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  selected: {startDate: _dayjs.Dayjs, endDate: _dayjs.Dayjs};
  @ViewChild(DaterangepickerDirective, { static: true }) pickerDirective: DaterangepickerDirective;
  inlineDate: any;
  inlineDateTime: any;
  picker: DaterangepickerComponent;
  constructor() {
    this.selected = {
      startDate: _dayjs().subtract(3,'week'),
      endDate: _dayjs().subtract(1,'week').subtract(3,'day')
    }
  }

  ngOnInit() {
    this.picker = this.pickerDirective.picker;
  }
  ngModelChange(e) {
    console.log({'ngModelChange()': e});
  }
  change(e) {
    console.log({'change()': e});
  }
  choosedDate(e) {
    this.inlineDate = e;
  }

  choosedDateTime(e) {
    this.inlineDateTime = e;
  }
  open(e) {
    this.pickerDirective.open(e);
  }
  clear(e) {
    // this.picker.clear(); // we can do
    this.selected = null; // now we can do
  }
}
