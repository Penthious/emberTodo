define('ember-todo/tests/models/task.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/task.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/task.js should pass ESLint.\n');
  });
});