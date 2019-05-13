import { Component } from "@angular/core";
import * as firebase from "firebase";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "booksheleves";
  constructor() {
    var config = {
      apiKey: "AIzaSyDl217rg03P9fVjb8RgdBnVzTiyTWiQvHA",
      authDomain: "auto-ecole-632d4.firebaseapp.com",
      databaseURL: "https://auto-ecole-632d4.firebaseio.com",
      projectId: "auto-ecole-632d4",
      storageBucket: "auto-ecole-632d4.appspot.com",
      messagingSenderId: "1033708489207"
    };
    firebase.initializeApp(config);
  }
}
