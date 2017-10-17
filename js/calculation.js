    var theForm = document.forms["keychainsForm"];


     function doSubmit() {
         alert("This has been submitted");
        }
      
         
        function keychainsPrice()
      {
          var keychainsPrice=0;
          var theForm = document.forms["keychainsForm"];
          var numberKeychains = theForm.elements["numberkeychains"];
          if(numberKeychains.checked==true)
          {
              keychainsPrice=10;
          }   
          return keychainsPrice;
      }

       function secondkeychainsPrice()
      {
          var secondkeychainsPrice=0;
          var theForm = document.forms["keychainsForm"];
          var numberKeychains = theForm.elements["personalizedkeychains"];
          if(personalizedKeychains.checked==true)
          {
              keychainsPrice=20;
          }   
          return secondkeychainsPrice;
      }

      function calculateTotal()
      {
          var kPrice = keychainsPrice() + secondkeychainsPrice();
       
       document.getElementById('totalPrice').innerHTML =
                                      "Total Price For Keychains $"+kPrice;
      }                                 

   
    
