var TOTAL = 0;

function option_check(){
 
   //Sandwich    
 var item1=document.getElementById("chickenSandwich").value;
 var item2=document.getElementById("chickenCheeseSandwich").value;
 var item3=document.getElementById("vegetableSandwich").value;
 var item4=document.getElementById("vegetableCheeseSandwich").value;
 var item5=document.getElementById("beefSandwich").value;
 var item6=document.getElementById("beefCheeseSandwich").value;
 var item7=document.getElementById("clubSandwich").value;
 var item8=document.getElementById("continentalClubSandwich").value;
 
 //bbq
 var item9=document.getElementById("broast").value;
 var item10=document.getElementById("chickenCheeseBroast").value;
 var item11=document.getElementById("tikka").value;
 var item12=document.getElementById("mboti").value;
 var item13=document.getElementById("bboti").value;
 var item14=document.getElementById("skabab").value;
 var item15=document.getElementById("bkabab").value;     
 
 //rolls
 var item16=document.getElementById("ZR").value;
 var item17=document.getElementById("CR").value;
 var item18=document.getElementById("MR").value;
 var item19=document.getElementById("ZMR").value;
 var item20=document.getElementById("BR").value;
 var item21=document.getElementById("SW").value;
 
 //chinese
 var item22=document.getElementById("chickenSoup").value;
 var item23=document.getElementById("hotSourSoup").value;
 var item24=document.getElementById("sR").value;
 var item25=document.getElementById("xyz").value;
 var item26=document.getElementById("efR").value;
 var item27=document.getElementById("mno").value;
 var item28=document.getElementById("mcm").value;
 var item29=document.getElementById("cFr").value; 
 var item30=document.getElementById("mCC").value;
 var item31=document.getElementById("rOg").value;
 var item32=document.getElementById("iPi").value;
 var item33=document.getElementById("salsoPasta").value;
 
 //steaks
 var item34=document.getElementById("PS").value;
 var item35=document.getElementById("SS").value;
 var item36=document.getElementById("MS").value;
 var item37=document.getElementById("Mus").value;
 var item38=document.getElementById("chiSt").value;
 var item39=document.getElementById("saSt").value;
 
 //burgers
 var item40=document.getElementById("zBurger").value;
 var item41=document.getElementById("mZburger").value;
 var item42=document.getElementById("bBurger").value;
 var item43=document.getElementById("cBurger").value;
 
 //beverages
 var item44=document.getElementById("bCoff").value;
 var item45=document.getElementById("cCoff").value;
 var item46=document.getElementById("eCoff").value;
 var item47=document.getElementById("tEa").value;
 var item48=document.getElementById("kTea").value;
 var item49=document.getElementById("sDrink").value;
 var item50=document.getElementById("fLim").value;
 var item51=document.getElementById("mWat").value;
 
 //desserts
 var item52=document.getElementById("cCak").value;
 var item53=document.getElementById("cCakT").value;
 var item54=document.getElementById("cLCak").value;
 var item55=document.getElementById("cFCak").value;
 var item56=document.getElementById("iCre").value;
 var item57=document.getElementById("kUlfi").value;
 
 //deals
 var item58=document.getElementById("D1").value;
 var item59=document.getElementById("D2").value;
 var item60=document.getElementById("D3").value;
 var item61=document.getElementById("D4").value;
 var item62=document.getElementById("D5").value;
 var item63=document.getElementById("D6").value;
 var item64=document.getElementById("D7").value;
 var item65=document.getElementById("D8").value;
 
 //Amounts
 var sandwichAmount;
 var bbqAmount;
 var RollAmount;
 var chineseAmount;
 var steakAmount;
 var burgerAmount;
 var beverageAmount;
 var dessertAmount;
 var dealAmount;
 
 //total Amount
 var total;

//calculation
sandwichAmount=parseInt((item1*200)+(item2*250)+(item3*200)+(item4*230)+(item5*300)+(item6*330)+(item7*300)+(item8*350));

bbqAmount=parseInt((item9*300)+(item10*300)+(item11*300)+(item12*250)+(item13*300)+(item14*250)+(item15*250));

RollAmount=parseInt((item16*200)+(item17*150)+(item18*180)+(item19*230)+(item20*200)+(item21*230));

chineseAmount = parseInt((item22*120)+(item23*150)+(item24*450)+(item25*350)+(item26*250)+(item27*300)+(item28*450)+(item29*400)+(item30*400)+(item31*450)+(item32*350)+(item33*350));

steakAmount=parseInt((item34*950)+(item35*950)+(item36*930)+(item37*860)+(item38*1200)+(item39*1350));

burgerAmount=parseInt((item40*250)+(item41*300)+(item42*230)+(item43*200));

beverageAmount=parseInt((item44*250)+(item45*250)+(item46*250)+(item47*90)+(item48*150)+(item49*80)+(item50*1200)+(item51*90));

dessertAmount=parseInt((item52*190)+(item53*220)+(item54*200)+(item55*195)+(item56*190)+(item57*150));

dealAmount=parseInt((item58*2800)+(item59*1200)+(item60*1300)+(item61*1450)+(item62*1100)+(item63*1200)+(item64*1600)+(item65*3200));

//calculating final amount
 total = (sandwichAmount + bbqAmount + RollAmount + chineseAmount + steakAmount + burgerAmount + beverageAmount + dessertAmount + dealAmount);

if (total < 0){
  TOTAL=total;
  document.getElementById("total").innerHTML = "Your Total Amount is 0" ;
}
else{
  TOTAL=total;
  document.getElementById("total").innerHTML = "Your Total Amount is " +  (total);
}

}


function final(){
//details
var person=document.getElementById("user").value;
var customerAddress=document.getElementById("address").value;
var customerPhone=document.getElementById("num").value;


if (person==''){
  alert("Please enter your name to proceed");
}

else if (customerAddress == ''){
  alert("Please enter your address to proceed");
}

else if (customerPhone == ''){
  alert("Please enter your number to proceed");
}

else if (TOTAL<=0){
  alert("Please select items you want to order");
}

else{
  window.open("../confirm order/thankyou.html");
}
}


