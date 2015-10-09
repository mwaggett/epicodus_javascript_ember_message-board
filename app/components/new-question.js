import Ember from 'ember';

export default Ember.Component.extend({
  newQuestion: false,
  actions: {
    showQuestionForm() {
      this.set('newQuestion', true);
    },
    saveQuestion() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        additional_notes: this.get('additional-notes')
      };
      this.set('newQuestion', false),
      this.sendAction('saveQuestion', params);
    }
  }
});
