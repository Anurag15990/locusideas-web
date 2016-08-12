import { moduleForModel, test } from 'ember-qunit';

moduleForModel('users/designers', 'Unit | Serializer | users/designers', {
  // Specify the other units that are required for this test.
  needs: ['serializer:users/designers']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
