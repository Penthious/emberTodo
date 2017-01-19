define('ember-todo/tests/controllers/tasks/new.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/tasks/new.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/tasks/new.js should pass ESLint.\n');
  });
});