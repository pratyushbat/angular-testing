import { AfterContentChecked, Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements AfterContentChecked {


  @ContentChild(TabComponent) tab!: TabComponent;
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  private currentTab!: TabComponent;

  ngAfterContentChecked(): void {
    console.log(this.tab)
    console.log(this.tabs)
    const tabs = this.tabs.toArray();
    console.log(tabs)
    const changedTab = tabs.find((tab) => tab.isOpened && this.currentTab != tab);
    if (changedTab)
      this.tabChanges(changedTab);
  }
  tabChanges(tab: TabComponent) {
    if (this.currentTab)
      this.currentTab.isOpened = false;

    this.currentTab = tab;
  }

  accItem(ev: any) {
    console.log(ev)
  }

}
