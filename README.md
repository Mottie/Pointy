# Pointy

A jQuery plugin that dynamically points one element at another.

## Features

* Pointy will create an arrow, at any angle, pointing from the pointer to the pointee (Pointy).
* Minimal setup with only one required option - setting the pointer.
* The background & border color of the arrow will automatically be matched to the pointer, unless overriding options are set.
* Additional options allow setting the arrow base width & border width.

## Notes

* jQuery v1.7+ is the only dependency.
* jQuery UI draggable is used in these demos, but any draggable plugin may be used.
* The outer width &amp; height of the elements is used in calculation, so any margin on the pointer will offset the arrow placement.
* Canvas is used to add an arrow which points from one element to another, so there is limited css effect on the arrow background &amp; border colors.

## To Do

* Allow multiple pointers per pointee.

## Setup

```html
<script src="js/jquery.min.js"></script>
<!-- using jQuery UI draggable -->
<script src="js/jquery-ui.min.js"></script>
<script src="js/jquery.pointy.js"></script>
<script>
$(function(){

  // $pointer points at $pointy
  var $pointer = $('.label.pointer'),

    // initialize pointy (showing all options; but not all defaults)
    $pointy = $('.repo-name').pointy({
      pointer      : $pointer,
      arrowWidth   : 10, // width of pointer base
      borderWidth  : 1,  // pointer stroke width
      flipAngle    : 45, // angle @ which to flip pointer to a closer side
      defaultClass : '', // additional class name added to the pointer & the arrow (canvas)
      activeClass  : 'pointy-active', // class added to base & pointer on updating

      // optional; if not set, plugin will attempt to match the base color
      borderColor     : null,
      backgroundColor : null,

      // tweaks
      useOffset : null
    });

  // Using jQuery UI draggable (any draggable code will work)
  $label.draggable({
    containment : '.top',
    drag : function() {
      $pointy.trigger('pointy-update');
    }
  });

});
</script>
```

## Documentation & Demos

* [Main documentation page](http://mottie.github.io/Pointy/)
* [Basic demo](http://mottie.github.io/Pointy/docs/basic.html)
* [Keyboard demo](http://mottie.github.io/Pointy/docs/keyboard.html) (using [this plugin](https://github.com/Mottie/Keyboard))

## Version

### v1.0.1-beta (4/28/2015)

* Fix npm package name.
* Add `pointer-events:none` to canvas; this allows clicking through the pointy arrow.
* Update keyboard demo code to refresh pointy arrow on textarea resize.
* Update jQuery to v1.11.2.

### v1.0.0-beta (3/14/2015)

* Initial release
