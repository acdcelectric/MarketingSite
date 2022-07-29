function empty()
{
  var x;
  a= document.getElementById("name").value;
  b=document.getElementById("emai_lid").value;
  c=document.getElementById("phone_number").value;
  if (a == "" ) 
   { 
      alert("Enter a Valid Name");
   };
   if (b == "" ) 
   { 
      alert("Enter a Email-id");
   };
   if (c == "" ) 
   { 
      alert("Enter a Phone Number");
   };
}
function SendMail()
{
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("emai_lid").value,
        phone_number: document.getElementById("phone_number").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_6jcooin","template_kga82kf",params).then(function (res) //PLEASE CHANGE YOUR SERVER ID AND TEMPLATE ID FROM EMAIL JS
    {
       alert ("Thank you for the response! ");
    })
}