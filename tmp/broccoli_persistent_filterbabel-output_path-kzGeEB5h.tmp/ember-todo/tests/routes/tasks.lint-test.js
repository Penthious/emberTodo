define('ember-todo/tests/routes/tasks.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/tasks.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tasks.js should pass ESLint.\n');
  });
});