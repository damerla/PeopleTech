
function setOperation(opetation1){
   var a =document.getElementById("fst").value;
  
 var  b =  document.getElementById("sec").value;

  cal(a,b,opetation1);
}

 function cal(a , b, callback){
  return callback(a,b);
}
var add = function(a,b){
  document.getElementById("name").value=parseInt(a)+parseInt(b);
}
var sub = function(a,b){
  document.getElementById("name").value=parseInt(a)-parseInt(b);
}
var mul = function(a,b){
  document.getElementById("name").value=parseInt(a)*parseInt(b);
}
var div = function(a,b){
  document.getElementById("name").value=parseInt(a)/parseInt(b);
}
