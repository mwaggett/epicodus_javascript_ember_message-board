import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  additional_notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
