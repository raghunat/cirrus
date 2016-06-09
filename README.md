# Cirrus
> NOTE: HAS TO BE NODE 0.1* Compliant! This does not include the tests

This module is the core classes for the Cirrus Framework. The following terminology is used:

- Task
  + An individual work module. Can be tied to a flow or standalone
- Router
  + A wrapper for HTTP responding modules that include many HTTP verb methods
- Resource Router
  + A generic router with override capabilities
- Resource
  + A Resource Router extension

## Examples
### Task
```js
//tasks/trigger-build/index.js
module.exports = (new cirrus.Task())
  .name('trigger-build') // Required
  .description('Triggers build based on s3 events')
  .dependencies([
    '../../modules/db',
    'lodash'
  ])
  .handler(function (event, context, loadDb, _) { } );
```

### Router
```js
//routers/builds/index.js
module.exports = (new cirrus.Router())
  .name('builds')
  .description('Creates Build Resources for Environments')
  .dependencies([
    '../../modules/db',
    'lodash',
    'superagent',
    'async'
  ])
  .path('builds')
  .get(function(req, res, db, _, superagent, db) { });
```

### Resource Router
```js
//resources/index.js
module.exports = (new cirrus.ResourceRouter())
  .name('generic')
  .description('Handles conventional {resource}/{id} like routing')
  .dependencies([])
  .get(function (req, res) {
    res.send200(req);
  })
  .getId(function (req, res) {
    res.send200(req);
  });
```

### Resource
```js
//resources/test.js
module.exports = (new cirrus.Resource())
  .name('test')
  .description('test')
  /////////////////////////////////////////////////////////////////////////////////////////////////
  // Uncomment and fill the methods for this particular resource to overwrite the generic method //
  // These methods will be passed the same variables from the resource-router module             //
  /////////////////////////////////////////////////////////////////////////////////////////////////
  // .get(function (req, res) {})
  // .getId(function (req, res) {})
  // .post(function (req, res) {})
  // .postId(function (req, res) {})
  // .put(function (req, res) {})
  // .putId(function (req, res) {})
  // .delete(function (req, res) {})
  // .deleteId(function (req, res) {})
  // .options(function (req, res) {})
  // .optionsId(function (req, res) {})
;
```
