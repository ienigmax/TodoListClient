import Component from '@ember/component';
import { inject as service } from '@ember/service';



export default Component.extend({
  router: service(),
  actions: {
    addNewTask(){

      let title = $('#title-inp').val(), content = $('#content-inp').val();
      let escapeSpecialChars = (str) => {
        return str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
      }

      if((typeof title === 'undefined')||(title === '')){
        $('#err-label').text('title missing');
      } else if((typeof content === 'undefined')||(content === '')){
        $('#err-label').text('content missing');
      } else {
        this.get('router').transitionTo('/actions/add/' + escapeSpecialChars(title) + '/' + escapeSpecialChars(content));
      }
    },
  }
});
