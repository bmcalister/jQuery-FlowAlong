jQuery-FlowAlong
================

FlowAlong is a simple hover effect for your portfolio or menu. The Hover Div will follow the direction of your mouse creating a sleek effect.

View the demo [here](http://htmlpreview.github.com/?https://github.com/bmcalister/jQuery-FlowAlong/blob/master/demo/index.html).

## How to initialize FlowAlong:

### HTML

`````HTML
<div id="selector">

  <div class="flowalong-box">
    <!-- content for visible div goes here -->
    <div class="flowalong-hover">
      <!-- content for hover div goes here -->
    </div>
  </div>
  
   <div class="flowalong-box">
    <!-- content for visible div goes here -->
    <div class="flowalong-hover">
      <!-- content for hover div goes here -->
    </div>
  </div>
  
  ...

</div>
`````


### JavaScript :
`````javaScript
$([selector]).flowalong();
`````

## Options
Currently there are two Options you can specify
* opacity (0 - 1)
* duration (animation duration in ms)

I might add some more later.

`````javascript
$([selector]).flowalong({
  optionName: value,
  optionName: value,
  ...
});
`````

## Styling
Be sure to style the two classes ".flowalong-box" and ".flowalong-hover" yourself as they are not prestyled. Also don't forget to set the dimensions. Demo included.


* * *
Copyright (c) 2013 Brian Mc Alister
Licensed under the MIT License