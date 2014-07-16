#ember-cli-masthead-injector


An EmberCLI addon to inject the Sky Masthead/Footer assets into your `app/index.html` file automatically.


##Installation

From within your Ember-CLI application run the following:

```npm install --save-dev git://github.com/bskyb-commerce/ember-cli-masthead-injector.git#master```

##Usage

One or more of the following placeholders can be placed anywhere that makes sense in your `app/index.html` file.

###<!-- @import skycomCss -->

Inserts the payload from http://assets.nb.sky.com/resources/mobile-ready/12/css/

Example:

```html
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>ServiceStatus</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- @import skycomCss -->

  {{BASE_TAG}}

  <link rel="stylesheet" href="assets/vendor.css">
  <link rel="stylesheet" href="assets/service-status.css">
</head>
```

###<!-- @import skycomHeader -->

Inserts the payload from http://assets.nb.sky.com/masthead/help-and-support/

Example:

```html
<body>

  <!-- @import skycomHeader -->
  <div class="emberContainer"></div>

  ...snip...
</body>
```

###<!-- @import skycomFooter -->

Inserts the payload from http://assets.nb.sky.com/footer/

Example:

```html
<body>

  ...snip...

  <div class="emberContainer"></div>
  <!-- @import skycomFooter -->
  
  ...snip...
</body
```

###<!-- @import skycomJs -->

Inserts the payload from http://assets.nb.sky.com/resources/mobile-ready/12/js/

Example:

```html
<body>

  ...snip...
  
  <!-- @import skycomJs -->

  <script>
    window.ServiceStatus = require('service-status/app')['default'].create(ServiceStatusENV.APP);
  </script>
</body>
```
