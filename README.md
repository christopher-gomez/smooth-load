# Smooth Load

A GSAP powered, spinner component for Vue.js. Pretty and silky smooth.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/smooth-load) to install Smooth Load.

```bash
npm install smooth-load
```

## Usage

```javascript
import smoothLoad from 'smooth-load'

Vue.use(smoothLoad)
```

Then in your page view template use the component to hide your content while your data loads.

```html
<template>
  <div>
    <smooth-load :loading='loadVariable'/>
    <p>{{loadedContent}}</p>
  </div>
</template>
```

Check out the [docs](https://christophgomez.github.io/smooth-load/components/smooth-load.html) for a more detailed example and prop options!

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
