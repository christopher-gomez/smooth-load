# Component

## Visual Example

Here's an example of the spinner in action.

Normally, it'd be covering up the entire page until you're done loading your data.

<component-b-demo-1/>

## Code Example

And here's a code example.

<<< @/docs/.vuepress/components/CodeDemo.vue

As you can see, the spinner is really easy to use. The only requirement is that you bind a boolean variable that specifies when you're done loading your data to the component.

(Otherwise you'll be looking at the animation forever!).

## Props

Name | Type   | Description | Required | Default
:----: | :----: | :-----------: |:---: | :-----:
loading|Boolean|Toggles show/hide of the spinner|true|true
spin|Boolean|Controls whether the inner spinner is spinning|false|true
spinnerColor|String|Sets the inner spinner color|false|#ffffff
pulse|Boolean|Controls whether the outer circle is pulsing|false|false
pulseColorLeft|String|Sets the left half of the outer circle gradient|false|#1565c0
pulseColorRight|String|Sets the right half of the outer circle gradient|false|#149ac36b
text|String|Sets loading text underneath the spinner|false|
