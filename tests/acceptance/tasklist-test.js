import { test } from 'qunit';
import moduleForAcceptance from 'todo-list-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | tasklist');

test('visiting /', async function(assert) {
  await visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
