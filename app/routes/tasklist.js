import Route from '@ember/routing/route';
import fetch from 'fetch';
import {API_CONSTS} from "../constants";

export default Route.extend({
  model(){

     return fetch(API_CONSTS.API_HOST_ADDRESS + API_CONSTS.API_BASE_URI + API_CONSTS.TASK_GET_ALL, {
        method: 'GET',
        mode: "cors",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: "same-origin"
      }).then((response) => response.json())
       .then( (response) => {
         let i = 1;
         (response.data).forEach((elem) => {
           if(elem.status !== '1'){
             elem.checked_flag = 'checked';
           } else {
             elem.checked_flag = '';
           }

           if(i == ((response.data).length) ){


           }
          i++;
         });return (response.data);
       })
       .catch(error => console.error(error));
  }
});
