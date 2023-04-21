import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  collapsed = true;

  constructor(private ds: DataStorageService) {}

  onSaveData() {
    this.ds.storeRecipes();
  }

  onFetchData() {
    this.ds.fetchRecipes().subscribe();
  }
}
