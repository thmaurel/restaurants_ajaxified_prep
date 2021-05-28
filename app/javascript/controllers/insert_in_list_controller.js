import { Controller } from "stimulus";
import { csrfToken } from "@rails/ujs";

export default class extends Controller {
  static targets = ['items', 'form'];

  connect() {
    console.log(this.element);
    console.log(this.itemsTarget);
    console.log(this.formTarget.action);
  }

  send(event) {
    event.preventDefault();
    console.log('toto')
    console.log(new FormData(this.formTarget))
    fetch(this.formTarget.action, {
      method: 'POST',
      headers: { 'Accept': "application/json", 'X-CSRF-Token': csrfToken() },
      body: new FormData(this.formTarget)
    })
      .then((data) => {
        console.log(data);
        // if (data.inserted_item) {
        //   this.itemsTarget.insertAdjacentHTML("beforeend", data.inserted_item);
        // }
        // this.formTarget.outerHTML = data.form;
      });
  }
}

