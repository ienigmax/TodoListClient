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

         (response.data).forEach((elem) => {
           if(elem.status !== '1'){
             elem.checked_flag = 'checked';
           } else {
             elem.checked_flag = '';
           }

         });
         return (response.data);
       })
       .catch(error => console.error(error));
  },
  actions: {
    toggle_add_task() {
      $('.container-form.new-rec').toggle();
      $('.container-form.edit-rec').hide();
    },
    toggle_edit_task(uuid, title, content) {
      if(($('#title-inp-edit').val() === title) && ($('#content-inp-edit').val() === content) && ($('#tsk-uuid-hidden').val() === uuid)){
        $('.container-form.edit-rec').toggle();
      } else if(($('#title-inp-edit').val() !== title) || ($('#content-inp-edit').val() !== content) || ($('#tsk-uuid-hidden').val() !== uuid)){
        $('.container-form.edit-rec').show();
      }
      $('#title-inp-edit').val(title);
      $('#content-inp-edit').val(content);
      $('#tsk-uuid-hidden').val(uuid);
      
      $('.container-form.new-rec').hide();
    },
    removeOldTask(uuid){
      this.transitionTo('/actions/remove/' + uuid);
    },
    toggleStatus(uuid, status){
      if(status == '0'){
        status = 'on'
      } else if(status == '1') {
        status = 'off'
      }
      this.transitionTo('/actions/toggle/' + uuid + '/' + status);
    }
  }
});
