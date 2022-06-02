import { CateringDetailsComponent } from './catering-details/catering-details.component';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/components/admin/services/crud.service';

import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/shared/services/snackbar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catering-table',
  templateUrl: './catering-table.component.html',
  styleUrls: ['./catering-table.component.scss'],
})
export class CateringTableComponent
  extends CrudService<any, number>
  implements OnInit {
  @Input() displayedColumns: string[] = [];
  dataSource: any = [];
  hideBar: boolean = false;
  Subscription: Subscription = new Subscription();
  constructor(
    protected override _http: HttpClient,
    private _snackBar: SnackbarService,
    public dialog: MatDialog
  ) {
    super(_http, 'catering');
  }

  ngOnInit(): void {
    this.getCateringData();
  }

  getCateringData() {
    this.hideBar = false;
    this.Subscription.add(
      this.findAll().subscribe({
        next: (v) => this.constructTableData(v),
        error: (e) => this._snackBar.error('An error has occurred'),
        complete: () => {
          this.hideBar = true;
        },
      })
    );
  }

  constructTableData(tableData: any) {
    this.dataSource = tableData;
    this.hideBar = true;
    this.constructColumns(tableData);
  }
  constructColumns(columnData: any) {
    if (!this.displayedColumns.length && columnData[0]) {
      this.displayedColumns = Object.keys(columnData[0]).map((col) => {
        return col;
      });
    }
  }

  removeItem(row: any) {
    this.hideBar = false;
    this.delete(row.id).subscribe({
      next: (v) => this.getCateringData(),
      error: (e) => this._snackBar.error('An error has occurred'),
      complete: () => {
        this._snackBar.success('item was deleted successfully');
        this.hideBar = true;
      },
    });
  }

  openRecord(event) {
    const dialogRef = this.dialog.open(CateringDetailsComponent, {
      width: '80vw',
      data: { item: event.row },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._snackBar.success('Catering details updated sucessfully');
        this.getCateringData();
      }
    });
  }
  fixData(data) {
    let obj = {
      id: data.id,
      description: data.description,
      numberOfPeople: data.numberOfPeople,
      phoneNumber: data.phoneNumber,
      email: data.email,
      rejectionReason: data.rejectionReason,
      branchID: data.branch.id,
      cateringStatus: data.cateringStatus,
    };
    return obj;
  }

  changeStatus(data, status: number) {
    data['cateringStatus'] = status;
    let obj = this.fixData(data);
    this.update(obj, data.id).subscribe({
      error: (e) => this._snackBar.error('There was an error changing status'),
      complete: () => {
        this.getCateringData();
        this._snackBar.success('Status has been updated successfully');
      },
    });
  }
}
