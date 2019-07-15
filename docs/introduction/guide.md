# Quick Start

Smooth Load is an aesthetically pleasing spinner; wrapped up in a very simple, and easy to use, customizable component.

## Install

If you are using module bundlers such as Webpack, you can directly include package into your project via:

NPM:

``` bash
$ npm install smooth-load --save
```

## Register

Then register `smooth-load` globally in your Vue.js app's entry:

``` js
// main.js
import Vue from 'vue'
import SmoothLoad from 'smooth-load'

Vue.use(SmoothLoad)
```

or import directly into a single component

``` js
import SmoothLoad from 'smooth-load'
export default {
  name: 'MyComponent',
  components: {
    SmoothLoad
  },
  data() {
    return {}
  },
}
```
