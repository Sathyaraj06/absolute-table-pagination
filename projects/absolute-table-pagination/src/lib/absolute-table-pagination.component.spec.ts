import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsoluteTablePaginationComponent } from './absolute-table-pagination.component';

describe('AbsoluteTablePaginationComponent', () => {
  let component: AbsoluteTablePaginationComponent;
  let fixture: ComponentFixture<AbsoluteTablePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsoluteTablePaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsoluteTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
