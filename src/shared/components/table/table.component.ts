import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() displayedColumns: string[] = []
  @Input() dataSource: any
  @Input() title: string = 'Table'
  @Input() button_title = 'title'
  @Input() containsActionButtons!: boolean
  @Output() action = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
    if (!this.displayedColumns.length)
      this.displayedColumns = Object.keys(this.dataSource[0]).map(col => { return col })
    this.displayedColumns.push('actions')
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = changes['dataSource'].currentValue
  }

  performAction(row: any, action: 'edit' | 'delete' | 'add') {
    this.action.emit({ row: row, action })
  }
}
