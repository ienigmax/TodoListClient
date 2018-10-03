import Component from '@ember/component';
// import EmberObject, { computed } from '@ember/object';
import $ from 'jquery';

export default Component.extend({

  didRender() {
      $('#todo-sum > span').text($('label.toggle_1').length);
      $('#finished-sum > span').text($('label.toggle_0').length);
      $('#total-sum > span').text($('label.toggle_0').length + $('label.toggle_1').length);
  }

});
