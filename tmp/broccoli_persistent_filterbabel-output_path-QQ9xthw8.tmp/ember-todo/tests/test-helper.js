define('ember-todo/tests/test-helper', ['exports', 'ember-todo/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberTodoTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberTodoTestsHelpersResolver['default']);
});