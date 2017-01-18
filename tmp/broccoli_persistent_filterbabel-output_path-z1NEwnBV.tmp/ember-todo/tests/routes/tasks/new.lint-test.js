define('ember-todo/tests/routes/tasks/new.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/tasks/new.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tasks/new.js should pass ESLint.\n');
  });
});