import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  constructor() {}

  getPrompt() {
    const promptEvent = (window as any).deferredPrompt;
    if (!promptEvent) {
      return;
    }
    promptEvent.prompt();
    promptEvent.userChoice.then(result => {
      console.log("👍", "userChoice", result);
      // Reset the deferred prompt variable, since
      // prompt() can only be called once.
      (window as any).deferredPrompt = null;
      // Hide the install button.
    });
  }

  ngOnInit() {}
}
