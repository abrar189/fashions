alert('hello');
var name = prompt('please enter your name');
 console.log(name);




var userModel = prompt('please enter your favorite model (jacop or ton or tcharly) ?');

if(userModel =='jacop')
{
  jacop();
  
  document.write();

}
else if(userModel =='ton'){
  
  ton();

 document.write(ton());

}
else if(userModel =='tcharly')
{
  tcharely();
  document.write(tcharely());
}




  


while(userModel !== 'jacop' && userModel !=='ton' && userModel !=='tcharly' ){
  var userModel = prompt('please enter your favorite model (jacop or ton or tcharly) ?');
}

var modelnum = prompt('how many models do you want to show?');
for(var i = 1; i <= modelnum; i++){
  if(userModel =='jacop')
{
jacop();  
  document.write(jacop());

}
else if(userModel =='ton'){
  ton();
    document.write(ton());

}
else if(userModel =='tcharly')
{ tcharely();
  
  document.write(tcharely());
}

}

function jacop(){
  var image = '<img src="http://soulartistmanagementblog.com/wp-content/uploads/2015/09/Museum_Issue3_Fashion_Portfolio_HR_7-500x625.jpg" alt= "jacop"/>';
  return image;
}

function ton(){
    var image2 = '<img src="https://www.malemodelscene.net/wp-content/uploads/2020/05/MODEL-CITIZEN-EXCLUSIVE-INTERVIEW-WITH-TON-HEUKELS-3.jpg" alt= "ton"/>';
    return image2;

}

function tcharely(){
  var image3 = '<img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Charlie_Puth_2017_%28cropped%29.jpg" alt= "tcharly"/>';
  return image3;
}




var sum = 50 + 40;
 if(sum < 100 )
  {
   console.log('true');
 }
 else if(sum > 100)
 {
   console.log('false');}
  




