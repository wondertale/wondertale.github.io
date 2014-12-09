(function ($) {
// Due to a bug in older version of Firefox, need to add try/catch
$(document).ready(function(){
  try {
    // Check for local storage
    if (window['localStorage'] !== null) {
      // Get the last scrolled position
      if (localStorage.getItem('{scrollmark}' + window.location.href) !== null) {
        window.scrollTo(0, localStorage.getItem('{scrollmark}' + window.location.href));
        // @todo notify the user about the scroll
      }
      // Register the scroll even to track the last scrolled position
      $(window).scroll(function(e){
        localStorage.setItem('{scrollmark}' + window.location.href, $(window).scrollTop());
        // @todo find a more efficient way of marking the scroll location. Only set once scroll "stops"
      });
      // @todo add the capacity for manual setting of the scrollmark
      // @todo add scrollmark as query string parameter
    }
  }
  catch(e) {
  }
});
}(jQuery));