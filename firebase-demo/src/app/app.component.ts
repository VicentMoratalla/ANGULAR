import { Component, OnDestroy } from '@angular/core';
import {AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{

  //siymbol is an observable
  courses$;
  course$;
  author$;
  // courses: any;
  // subscription: Subscription;

  constructor(private db: AngularFireDatabase){

    this.courses$ = db.list('/courses').valueChanges();
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();
    // this.subscription = db.list('/courses').valueChanges().subscribe(courses=>{
    //   this.courses = courses;
    //   console.log(this.courses);
    // });

  }

  add(course: HTMLInputElement){
    this.db.list('/courses').push({
      name: course.value,
      price: 150,
      isLive: true,
      sections: [
        {title: 'Components'},
        {title: 'Directives'},
        {title: 'Templates'}
      ]
    });
      // .then();

     course.value = ''; 

  }

  update(course){
    console.log('THIS IS COURSE ', course);
    this.db.object('/courses/' + course)
      //you can pass top it a primitive value or a complex object
      //set or update you can use any of them
      .update({
        name: 'First Title',
        isLive: false
      });
  }

  delete(course){
    this.db.object('/courses/'+ course)
      .remove()
      .then(x => console.log("DELETED ", course));
  }

  ngOnDestroy(){
    // if(this.subscription) this.subscription.unsubscribe();
  }
}
