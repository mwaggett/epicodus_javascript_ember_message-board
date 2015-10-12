import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    showEditQuestionForm() {
      this.set('editQuestion', true);
    },
    updateQuestion(model) {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        additional_notes: this.get('additional-notes')
      };
      this.set('editQuestion', false);
      this.sendAction('updateQuestion', model, params);
    }
  }
});
