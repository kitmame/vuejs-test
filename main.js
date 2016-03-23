var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

(function(){
  'use strict';
  new Vue({
    el: '#app',
    data: {
      message: 'hello vue.js!',
      todos: [
        { text: 'study' },
        { text: 'cook' },
        { text: 'sleep' }
      ],
      val1: '',
      val2: '',
    },
    computed: {
      val1and2: function() {
        return +this.val1 + +this.val2;
      }
    },
  });
})();
