import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      var params = {
        zipcode: this.get('zip')
      };
      this.sendAction('zipLookup', params)
    }
  }
});
