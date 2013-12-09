# jQuery Navigation State

Set your navigation state when your navigation HTML is cached.

## Install

### Bower

```
$ bower install jquery-navigation-state
```

### Plain old simple include

```
<script src="jquery-navigation-state.js"></script>
```

## How to use

This plugin adds the class "active" to an element if it's data attributes matches
the list on the body tag.

### HTML

```html
<body data-active-nav-keys="page-5 page-20">
  <nav>
    <a href="/products" data-nav-key="page-5">Products</a>
    <a href="/about" data-nav-key="page-6">About</a>
  </nav>

  <nav>
    <a href="/products/cookies" data-nav-key="page-9">Cookies</a>
    <a href="/products/milk" data-nav-key="page-20">Milk</a>
  </nav>
  </body>
```

### Javascript

```javascript
$(function() {
  new NavigationState();
});
```
