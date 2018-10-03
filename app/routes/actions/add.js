import Route from '@ember/routing/route';
import fetch from "fetch";
import {API_CONSTS} from "../../constants";

export default Route.extend({
  model() {
    let { title, content } = this.paramsFor(this.routeName);
    fetch(API_CONSTS.API_HOST_ADDRESS + API_CONSTS.API_BASE_URI + API_CONSTS.TASK_ADD_NEW + '?title=' + title + '&content=' + content , {
      method: 'GET',
      mode: "cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "same-origin"
    }).then((response) => {
      console.log(response.json());
      this.transitionTo('tasklist')
    }).catch((error) => {
      console.error(error.message);
      this.transitionTo('tasklist')
    });
  }
});
