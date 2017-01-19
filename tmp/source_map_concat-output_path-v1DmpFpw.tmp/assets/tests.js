'use strict';

define('ember-todo/tests/adapters/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/controllers/tasks.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/tasks.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/tasks.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/controllers/tasks/edit.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/tasks/edit.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/tasks/edit.js should pass ESLint.\n7:19  - \'self\' is assigned a value but never used. (no-unused-vars)');
  });
});
define('ember-todo/tests/controllers/tasks/new.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/tasks/new.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/tasks/new.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/helpers/create-offline-ref', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = createOfflineRef;
  var DEFAULT_NAME = '[EmberFire offline test app]';

  exports.DEFAULT_NAME = DEFAULT_NAME;
  /**
   * Creates an offline firebase reference with optional initial data and url.
   *
   * Be sure to `stubfirebase()` and `unstubfirebase()` in your tests!
   *
   * @param  {!Object} [initialData]
   * @param  {string} [url]
   * @param  {string} [apiKey]
   * @return {!firebase.database.Reference}
   */

  function createOfflineRef(initialData) {
    var url = arguments.length <= 1 || arguments[1] === undefined ? 'https://emberfire-tests-2c814.firebaseio.com' : arguments[1];
    var apiKey = arguments.length <= 2 || arguments[2] === undefined ? 'AIzaSyC9-ndBb1WR05rRF1msVQDV6EBqB752m6o' : arguments[2];

    if (!_firebase['default']._unStub) {
      throw new Error('Please use stubFirebase() before calling this method');
    }

    var config = {
      apiKey: apiKey,
      authDomain: 'emberfire-tests-2c814.firebaseapp.com',
      databaseURL: url,
      storageBucket: ''
    };

    var app = undefined;

    try {
      app = _firebase['default'].app(DEFAULT_NAME);
    } catch (e) {
      app = _firebase['default'].initializeApp(config, DEFAULT_NAME);
    }

    var ref = app.database().ref();

    app.database().goOffline(); // must be called after the ref is created

    if (initialData) {
      ref.set(initialData);
    }

    return ref;
  }
});
define('ember-todo/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-todo/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/helpers/destroy-firebase-apps', ['exports', 'ember', 'firebase'], function (exports, _ember, _firebase) {
  exports['default'] = destroyFirebaseApps;
  var run = _ember['default'].run;

  /**
   * Destroy all Firebase apps.
   */

  function destroyFirebaseApps() {
    var deletions = _firebase['default'].apps.map(function (app) {
      return app['delete']();
    });
    _ember['default'].RSVP.all(deletions).then(function () {
      return run(function () {
        // NOOP to delay run loop until the apps are destroyed
      });
    });
  }
});
define('ember-todo/tests/helpers/format-date.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/format-date.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/format-date.js should pass ESLint.\n4:12  - \'moment\' is not defined. (no-undef)');
  });
});
define('ember-todo/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'ember-todo/tests/helpers/start-app', 'ember-todo/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _emberTodoTestsHelpersStartApp, _emberTodoTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberTodoTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _emberTodoTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('ember-todo/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/helpers/replace-app-ref', ['exports'], function (exports) {
  exports['default'] = replaceAppRef;
  /**
   * Updates the supplied app adapter's Firebase reference.
   *
   * @param  {!Ember.Application} app
   * @param  {!firebase.database.Reference} ref
   * @param  {string} [model]  The model, if overriding a model specific adapter
   */

  function replaceAppRef(app, ref) {
    var model = arguments.length <= 2 || arguments[2] === undefined ? 'application' : arguments[2];

    app.register('service:firebaseMock', ref, { instantiate: false, singleton: true });
    app.inject('adapter:firebase', 'firebase', 'service:firebaseMock');
    app.inject('adapter:' + model, 'firebase', 'service:firebaseMock');
  }
});
define('ember-todo/tests/helpers/replace-firebase-app-service', ['exports'], function (exports) {
  exports['default'] = replaceFirebaseAppService;
  /**
   * Replaces the `firebaseApp` service with your own using injection overrides.
   *
   * This is usually not needed in test modules, where you can re-register over
   * existing names in the registry, but in acceptance tests, some registry/inject
   * magic is needed.
   *
   * @param  {!Ember.Application} app
   * @param  {!Object} newService
   */

  function replaceFirebaseAppService(app, newService) {
    app.register('service:firebaseAppMock', newService, { instantiate: false, singleton: true });
    app.inject('torii-provider:firebase', 'firebaseApp', 'service:firebaseAppMock');
    app.inject('torii-adapter:firebase', 'firebaseApp', 'service:firebaseAppMock');
  }
});
define('ember-todo/tests/helpers/resolver', ['exports', 'ember-todo/resolver', 'ember-todo/config/environment'], function (exports, _emberTodoResolver, _emberTodoConfigEnvironment) {

  var resolver = _emberTodoResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberTodoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberTodoConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-todo/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/helpers/start-app', ['exports', 'ember', 'ember-todo/app', 'ember-todo/config/environment'], function (exports, _ember, _emberTodoApp, _emberTodoConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberTodoConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberTodoApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-todo/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/helpers/stub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = stubFirebase;

  /**
   * When a reference is in offline mode it will not call any callbacks
   * until it goes online and resyncs. The ref will have already
   * updated its internal cache with the changed values so we shortcut
   * the process and call the supplied callbacks immediately (asynchronously).
   */

  function stubFirebase() {
    // check for existing stubbing
    if (!_firebase['default']._unStub) {
      var originalSet = _firebase['default'].database.Reference.prototype.set;
      var originalUpdate = _firebase['default'].database.Reference.prototype.update;
      var originalRemove = _firebase['default'].database.Reference.prototype.remove;

      _firebase['default']._unStub = function () {
        _firebase['default'].database.Reference.prototype.set = originalSet;
        _firebase['default'].database.Reference.prototype.update = originalUpdate;
        _firebase['default'].database.Reference.prototype.remove = originalRemove;
      };

      _firebase['default'].database.Reference.prototype.set = function (data, cb) {
        originalSet.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase['default'].database.Reference.prototype.update = function (data, cb) {
        originalUpdate.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase['default'].database.Reference.prototype.remove = function (cb) {
        originalRemove.call(this);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };
    }
  }
});
define('ember-todo/tests/helpers/unstub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = unstubFirebase;

  function unstubFirebase() {
    if (typeof _firebase['default']._unStub === 'function') {
      _firebase['default']._unStub();
      delete _firebase['default']._unStub;
    }
  }
});
define('ember-todo/tests/models/task.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/task.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/task.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/routes/tasks.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/tasks.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tasks.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/routes/tasks/edit.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/tasks/edit.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tasks/edit.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/routes/tasks/new.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/tasks/new.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tasks/new.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/test-helper', ['exports', 'ember-todo/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberTodoTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberTodoTestsHelpersResolver['default']);
});
define('ember-todo/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/unit/controllers/tasks-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:tasks', 'Unit | Controller | tasks', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-todo/tests/unit/controllers/tasks-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/controllers/tasks-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/tasks-test.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/unit/controllers/tasks/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:tasks/edit', 'Unit | Controller | tasks/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-todo/tests/unit/controllers/tasks/edit-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/controllers/tasks/edit-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/tasks/edit-test.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/unit/controllers/tasks/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:tasks/new', 'Unit | Controller | tasks/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-todo/tests/unit/controllers/tasks/new-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/controllers/tasks/new-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/tasks/new-test.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/unit/models/task-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('task', 'Unit | Model | task', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-todo/tests/unit/models/task-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/task-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/task-test.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/unit/routes/tasks-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:tasks', 'Unit | Route | tasks', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-todo/tests/unit/routes/tasks-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/tasks-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tasks-test.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/unit/routes/tasks/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:tasks/edit', 'Unit | Route | tasks/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-todo/tests/unit/routes/tasks/edit-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/tasks/edit-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tasks/edit-test.js should pass ESLint.\n');
  });
});
define('ember-todo/tests/unit/routes/tasks/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:tasks/new', 'Unit | Route | tasks/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-todo/tests/unit/routes/tasks/new-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/tasks/new-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tasks/new-test.js should pass ESLint.\n');
  });
});
/* jshint ignore:start */

require('ember-todo/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
