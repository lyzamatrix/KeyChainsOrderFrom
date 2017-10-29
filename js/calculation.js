    var number= new Array();
       number[0]=0;
       number[1]=1;
       number[2]=2;
       number[3]=3;
       number[4]=4;
       number[5]=5;
       number[6]=6;
       number[7]=7;
       number[8]=8;
       number[9]=9;
       number[10]=10;


      //For the Submit button
     function doSubmit() {
         alert("This has been submitted");
        }
      

      //If checkbox is checked then show dropdown menu
           window.onload = function() {
        var a = document.getElementById('numberkeychains');
       
        a.onclick = function() {
          if (a.checked == true) {document.getElementById('dropdown1').style.display = 'inline';
           }
          
          else {document.getElementById('dropdown1').style.display = '';
           
          }
        }
      
        var b = document.getElementById('personalizedkeychains');
        b.onclick = function() {
          if (b.checked == true) {document.getElementById('dropdown2').style.display = 'inline';}
          else {document.getElementById('dropdown2').style.display = '';
          }
        }
      }

         


      //For the first checkbox   
       function keychainsPrice()
      {
          var keychainPrice=0;
          var theForm = document.forms["keychainsform"];  
          var numberKeychains = theForm.elements["numberkeychains"];
          if(numberKeychains.checked==true)
          {
              keychainPrice=10;       
          }   
          return keychainPrice;    
      }



       //For the second checkbox 
       function secondkeychainsPrice()
      {
          var secondkeychainPrice=0;
          var theForm = document.forms["keychainsform"];
          var personalizedKeychains = theForm.elements["personalizedkeychains"];
          if(personalizedKeychains.checked==true)
          {
              secondkeychainPrice=20;
              
          }   
          return secondkeychainPrice;
      }
      
     // For the 1st dropdown menu
    function keychainsQuantity()
    {
       var keychainQuantity=0;
       var theForm = document.forms["keychainsform"];
       var keychainQuantity = theForm.elements["sel1"];
       keychainQuantity = number[keychainQuantity.value] * 10;
       return keychainQuantity;
     
     }

      // For the 2nd dropdown menu
    function secondkeychainsQuantity()
    {
       var secondkeychainQuantity=0;
       var theForm = document.forms["keychainsform"];
       var secondkeychainQuantity = theForm.elements["sel2"];
       secondkeychainQuantity = number[secondkeychainQuantity.value] * 20;
       return secondkeychainQuantity;
     
     }



      //For calculating the Total Amount
      function calculateTotal()
      {

          var kPrice = keychainsQuantity() + secondkeychainsQuantity();
          
       document.getElementById('totalPrice').innerHTML =
                                      "Total Price For Keychain is $"+kPrice;
       
      }                                 

   
    
