import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BotConfigServiceService } from '../bot-config-service.service';

@Component({
  selector: 'app-list-all-config',
  templateUrl: './list-all-config.component.html',
  styleUrls: ['./list-all-config.component.css'],
})
export class ListAllConfigComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'applicationName',
    'intents',
    'editAction',
    'deleteAction',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  fullData: any = [];
  constructor(
    private service: BotConfigServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.service.getAllConfigurations().subscribe((data) => {
      this.dataSource.data = JSON.parse(JSON.stringify(data));
    });
  }

  addConfig() {
    this.route.navigateByUrl('add');
  }

  editApplication(data: any) {
    this.route.navigateByUrl('edit/' + data.applicationName);
  }
}
