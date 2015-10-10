import Ember from 'ember';

export default Ember.Component.extend({
  newAnswer: false,
  actions: {
    showAnswerForm() {
      this.set('newAnswer', true);
    },
    saveAnswer() {
      var params = {
        answer: this.get('answer'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.set('newAnswer', false),
      this.sendAction('saveAnswer', params);
    }
  }
});
