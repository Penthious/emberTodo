define('ember-todo/tests/controllers/tasks.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/tasks.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/tasks.js should pass ESLint.\n');
  });
});