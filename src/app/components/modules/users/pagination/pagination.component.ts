import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})


export class PaginationComponent {
@Input() currentPage: number = 1;
@Input() total: number = 0;
@Input() limit: number = 5;
@Output() changPage = new EventEmitter<number>();

  pages: number[] = [];
  
  ngOninit(): void{
    const pagesCount = Math.ceil(this.total / this.limit)
    console.log(pagesCount);
  }
}
