(function($){  
 $.fn.flowalong = function(options) {  
  
  // set default variables
  //
  var defaults = {  
    delay: 50,
    opacity: 0.85
  };  

  // extend default variables with user input
  //
  var options = $.extend(defaults, options);  

  var width = this.find('.flowalong-box').width();

  this.find('.flowalong-hover').css({'position': 'absolute', 'opacity' : defaults.opacity, 'left' : width*(-1)});
  this.find('.flowalong-box').css({'overflow' : 'hidden', 'position' : 'relative'});
      
  this.find('.flowalong-box').hover(
      function (e) {
      
      // get width and height of selected div
      //
      var w = $(this).width();
      var h = $(this).height();

      // get position where mouse enters div
      //
      var offset = $(this).offset();
      var x = (w/2)-(e.pageX - offset.left);
      var y = (h/2)-(e.pageY - offset.top);
      
      // calculate angle to center
      //
      var angle = Math.atan((h/2)/(w/2))*(180/Math.PI);   
      var direction = Math.atan(y/x)*(180/Math.PI);
      direction += (x<0 && y>0)? 180 : (x<0 && y<0)? 180 : (x>0 && y<0)? 360 : 0;
      
      // depending on direction mouse enters create different animation
      //
      if (direction <= angle || direction > 360-angle){
        $(this).find('.flowalong-hover').css({'left' : w*(-1), 'top': 0});
        $(this).find('.flowalong-hover').animate({
            left: '0',
        }, defaults.delay);
      }else if (direction > angle && direction < 180-angle){
        $(this).find('.flowalong-hover').css({'top': h*(-1), 'left' : 0});
        $(this).find('.flowalong-hover').animate({
          top: '0',
        }, defaults.delay);
      }else if (direction > 180-angle && direction < 180+angle){
        $(this).find('.flowalong-hover').css({'left' : w, 'top' : 0});
        $(this).find('.flowalong-hover').animate({
          left: '0',
        }, defaults.delay);
      }else{
        $(this).find('.flowalong-hover').css({'top': h, 'left' : 0});
        $(this).find('.flowalong-hover').animate({
          top: '0',
        }, defaults.delay); 
      }
          

      }, 
      function (e) {
        /** the width and height of the current div **/
      var w = $(this).width();
      var h = $(this).height();
          
          var offset = $(this).offset();
      
      if (e.pageX >= offset.left+w){
        $(this).find('.flowalong-hover').animate({
            left: w,
          }, defaults.delay);
      }else if(e.pageX <= offset.left){
        $(this).find('.flowalong-hover').animate({
            left: w*(-1),
          }, defaults.delay);      
      }else if(e.pageY >= offset.top+h){
        $(this).find('.flowalong-hover').animate({
            top: h,
          }, defaults.delay);  
      }else{
        $(this).find('.flowalong-hover').animate({
          top: h*(-1),
          }, defaults.delay);  
      }
      
      }
    ); 

 };  
})(jQuery);