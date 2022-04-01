import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin, map, mergeMap, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/components/admin/services/crud.service';
import { BranchesService } from './../branches.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-branches-management',
  templateUrl: './branches-management.component.html',
  styleUrls: ['./branches-management.component.scss']
})
export class BranchesManagementComponent extends CrudService<number, any> implements OnInit, OnDestroy {
  form$: any;
  type: string = 'add' || 'edit';
  formValues: any;
  subscriptions: Subscription = new Subscription();
  paramID: number = 0;
  constructor(private branchesService: BranchesService, protected override _http: HttpClient, private router: ActivatedRoute, private route: Router,
    private _snackBar: MatSnackBar
  ) {
    super(_http, 'branch')
  }

  ngOnInit(): void {
    this.subscriptions.add(this.getBranchForm())
    this.subscriptions.add(this.getQueryParams())
  }
  getBranchForm() {
    this.branchesService.getBranchForm().subscribe({
      next: (v) => {
        this.form$ = v
      }
    })
  }

  saveItem($event: any) {
    switch ($event.type) {
      case 'add':
        {
          this.save($event.payload).subscribe({ next: () => this.openSnackBar('Branch added successfully'), error: () => this.openSnackBar('error has occurred'), complete: () => this.route.navigate(['admin', 'branches']) })
        }
        break;
      case 'edit':
        {
          $event.payload.id = this.paramID
          this.update($event.payload, this.paramID).subscribe({ next: () => this.openSnackBar('Category added successfully'), error: () => this.openSnackBar('error has occurred'), complete: () => this.route.navigate(['admin', 'branches']) })
        }
        break;
    }
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'Ok', { duration: 5000 })
  }
  getQueryParams() {
    this.router.queryParams.subscribe((params: any) => {
      if (params.id && params.type == 'edit') {
        this.paramID = params.id
        this.type = 'edit'
        this.subscriptions.add(this.findOne(params.id).subscribe(value => {
          this.formValues = value
        }))
      }
    })
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
