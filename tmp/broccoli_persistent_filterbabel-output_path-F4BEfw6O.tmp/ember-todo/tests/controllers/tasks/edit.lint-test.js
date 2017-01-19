define('ember-todo/tests/controllers/tasks/edit.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/tasks/edit.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/tasks/edit.js should pass ESLint.\n7:19  - \'self\' is assigned a value but never used. (no-unused-vars)');
  });
});