import Route from '@ember/routing/route';
import fetch from 'fetch';
import {API_CONSTS} from "../constants";

export default Route.extend({
  model() {
    return fetch(API_CONSTS.API_HOST_ADDRESS + API_CONSTS.API_BASE_URI + API_CONSTS.TASK_GET_ALL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then((result) => {
      alert(result);
    })
  }
});
