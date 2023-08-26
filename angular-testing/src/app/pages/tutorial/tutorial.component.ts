import { Component, ViewChild } from '@angular/core';
import { CourseComponent } from '../course/course.component';
import { of } from 'rxjs';
import { CourseSaleEvent } from 'src/app/interfaces/course.interface';
function getCoupons(id: number = 1) {
  const coupons = [];

  for (let i = id; i <= 10; i += 1) {
    coupons.push(`COUPON_${i}`);
  }

  return of(coupons);
}


@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {
 public course = {
    name: "C++",
    id: 2,
    description: "C++ programming",
    category: "Programming",
    price: 12,
    currency: "USD",
    date: "08/24/2023",
  };

  coupons: string[] = [];
  isOnSale = false;

  @ViewChild(CourseComponent) courseCmp!: CourseComponent;

  ngAfterViewInit(): void {
    if (this.courseCmp.isOnSale) {
      setTimeout(() => {
        this.onSale({ course: this.courseCmp.course, isOnSale: true });
      });
    }
  }

  onSale(evt: CourseSaleEvent) {
    if (!evt.isOnSale) {
      return;
    }

    this.coupons = [];
    this.isOnSale = true;

    getCoupons(evt.course.id).subscribe((coupons: string[]) => {
      //console.log(coupons)
      this.coupons = coupons;
    });
  }

  stopSale() {
    if (!this.courseCmp.isOnSale) {
      return;
    }

    this.courseCmp.toggleSale(false);
    this.coupons = [];
    this.isOnSale = false;
  }
}
