import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'absolute-table-pagination',
    templateUrl: './absolute-table-pagination.component.html',
    styleUrls: ['./absolute-table-pagination.component.scss']
})
export class AbsoluteTablePaginationComponent implements OnInit, OnChanges {

    @Input() data: any[];
    @Input() rowCount: number;
    @Output() slicedData = new EventEmitter<any[]>();
    pager: any = {};
    pagedItems: any[];

    leftDark : string = "data:image/svg+xml,%3Csvg width='8' height='11' viewBox='0 0 8 11' style='transform: scale(-1,1)' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.712659 10.7402C0.84541 10.7402 0.979544 10.6985 1.09155 10.6151L6.95197 6.1724C7.0944 6.06423 7.17737 5.90133 7.17737 5.728C7.17737 5.55597 7.0944 5.39176 6.95197 5.2849L1.11644 0.86563C0.856472 0.668842 0.476196 0.707939 0.267389 0.952947C0.0585823 1.19795 0.100067 1.55634 0.360038 1.75313L5.60924 5.728L0.333765 9.72762C0.0737934 9.92441 0.0323086 10.2828 0.241115 10.5278C0.361421 10.6673 0.535657 10.7402 0.712659 10.7402Z' fill='black' fill-opacity='0.65'/%3E%3C/svg%3E%0A";
    leftGray : string = "data:image/svg+xml,%3Csvg width='8' height='12' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.70403 11.2361C6.57148 11.2361 6.43755 11.1923 6.32571 11.1048L0.474203 6.4441C0.331989 6.33062 0.249146 6.15972 0.249146 5.97789C0.249146 5.79742 0.331989 5.62515 0.474203 5.51304L6.30086 0.87691C6.56043 0.670465 6.94013 0.711481 7.14862 0.968512C7.35711 1.22554 7.31569 1.60152 7.05611 1.80797L1.81489 5.97789L7.08235 10.1738C7.34192 10.3802 7.38335 10.7562 7.17486 11.0132C7.05473 11.1595 6.88076 11.2361 6.70403 11.2361Z' fill='black' fill-opacity='0.25'/%3E%3C/svg%3E%0A";
    rightDark : string = "data:image/svg+xml,%3Csvg width='8' height='11' viewBox='0 0 8 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.712659 10.7402C0.84541 10.7402 0.979544 10.6985 1.09155 10.6151L6.95197 6.1724C7.0944 6.06423 7.17737 5.90133 7.17737 5.728C7.17737 5.55597 7.0944 5.39176 6.95197 5.2849L1.11644 0.86563C0.856472 0.668842 0.476196 0.707939 0.267389 0.952947C0.0585823 1.19795 0.100067 1.55634 0.360038 1.75313L5.60924 5.728L0.333765 9.72762C0.0737934 9.92441 0.0323086 10.2828 0.241115 10.5278C0.361421 10.6673 0.535657 10.7402 0.712659 10.7402Z' fill='black' fill-opacity='0.65'/%3E%3C/svg%3E%0A";
    rightGray : string = "data:image/svg+xml,%3Csvg width='8' height='12' viewBox='0 0 8 12' style='transform: scale(-1,1)' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.70403 11.2361C6.57148 11.2361 6.43755 11.1923 6.32571 11.1048L0.474203 6.4441C0.331989 6.33062 0.249146 6.15972 0.249146 5.97789C0.249146 5.79742 0.331989 5.62515 0.474203 5.51304L6.30086 0.87691C6.56043 0.670465 6.94013 0.711481 7.14862 0.968512C7.35711 1.22554 7.31569 1.60152 7.05611 1.80797L1.81489 5.97789L7.08235 10.1738C7.34192 10.3802 7.38335 10.7562 7.17486 11.0132C7.05473 11.1595 6.88076 11.2361 6.70403 11.2361Z' fill='black' fill-opacity='0.25'/%3E%3C/svg%3E%0A";

    constructor(public domSanitizer:DomSanitizer) { }

    ngOnChanges() {
        this.setPage(1);
    }

    ngOnInit() {
        this.setPage(1);
    }

    setPage(page: number) {
        this.pager = this.getPager(this.data.length, page);
        let temp = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
        this.slicedData.emit(temp);
    }

    getPager(totalItems: number, currentPage: number = 1) {
        let totalPages = Math.ceil(totalItems / this.rowCount);

        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }

        let startPage: number, endPage: number;
        if (totalPages <= 5) {

            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        let startIndex = (currentPage - 1) * this.rowCount;
        let endIndex = Math.min(startIndex + this.rowCount - 1, totalItems - 1);

        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: this.rowCount,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

}
