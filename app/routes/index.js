import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      console.log(params);
      this.transitionTo('results', params.zip);
    }
  }
});
