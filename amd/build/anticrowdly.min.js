define(['jquery', 'core/ajax'], function($, ajax) {

      function checkaiextension(originalstate) {
           var crowdvns = document.querySelector('[id^=crowdvns]');
           var crowdly = document.querySelector('[id^=crowdly]');
           
           if(crowdvns !== null || crowdly !== null){
              // Found.
              // Lets damage the crowdly divs.
              document.querySelectorAll('[id^=crowdvns]').forEach(e => e.remove());
              document.querySelectorAll('[id^=crowdly]').forEach(e => e.remove());
              var newstate = 0;
              checkcall(newstate);
           } else {
              // Not found.
              var newstate = 1;
              checkcall(newstate);
           }
           if(newstate != originalstate){
               console.error("State changed from " + originalstate + " to " + newstate + ". Reload page.");
             //  window.location.reload();
           }
           function checkcall(val) {
              if(val == 0){
                 console.error('Found AI Extention');
              } else {
                 console.error('AI Extention Not Found');
              }
              
               const request = {
                 methodname: 'quizaccess_anticrowdly_manageaccess',
                 args: {
                     status: val
                 },
               };
             ajax.call([request])[0];
           }
    }
    return {
        init: function(originalstate) {
           checkaiextension(originalstate);
        }
    };
});