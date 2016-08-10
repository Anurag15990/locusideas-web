import { moduleForModel, test } from 'ember-qunit';

moduleForModel('username', 'Unit | Model | username', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
