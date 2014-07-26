sticky.js
========
A simple, lightweight jQuery plugin that allows you to make your html elements scroll alongside other content.

*Currently in pre-release, feedback and issues welcome.*

## Installation

Include script *after* the jQuery library:

```html
<script src="/path/to/sticky.js"></script>
```

## Usage
Any element in your HTML can become sticky through the use of the following data tag:
```html
<div class="secondary-content" data-scroll-with=".primary-content">...</div>

```
Then in your jQuery call the plugin as follows:
```javascript
jQuery('[data-scroll-with]').sticky();
```
The data attributes currently supported by the plugin are:

`data-scroll-with`
:	The selector for the element that you want to scroll alongside.

### Options
This plugin supports the following options:
```javascript
jQuery('a').share({});
```

## Authors

[Scott Sanders](https://github.com/scottsanders)