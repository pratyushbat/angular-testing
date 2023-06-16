import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnChanges {

  @Input() userId: number | undefined;
  public user: Record<string, any> | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    const id = changes['userId'];
    const { previousValue, currentValue } = id;
    if (currentValue && previousValue != currentValue) {
      this.setUserDetail(currentValue);
    }
  }
  private setUserDetail(value: number) {
    this.http(value).subscribe(res => {
      this.user = res;
      console.log(res)
    })
  }

  private http(id: any): Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/users/" + id;
    return from(fetch(url).then(res => res.json()))
  }
}
