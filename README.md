# LoginComoponent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Usage
 `npm install --save evolvus-login-component`
 Then Import `EvolvusLoginModule` to your AppModule then in your HTML file
 
 use `<app-login  [title]="'Example'" (onLogin)="yourOwnMethod($event)"></app-login>`
 
 `title` is attribute to display on login form mandatory
 `onLogin` is en emitted event on submitting the form if valid,emitted object `{username,password}`
 `yourOwnMethod($event)` you can write your own method example 
 <code>
 login(event:any){
  console.log(JSON.stringify(event));
 }
  </code>
