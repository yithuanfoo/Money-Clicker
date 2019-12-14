
var score = 1e7;

var accountant_qty = 0;
var accountant_cost = 40;
var accountant_prodrate = 5; // 5 per sec

var clerk_qty = 0;
var clerk_cost = 10;
var clerk_prodrate = 1; // 1 per sec

var president_qty = 0;
var president_cost = 1E7;
var president_prodrate = 1E6; // 1000000 per sec

var manager_qty = 0;
var manager_cost = 1000;
var manager_prodrate = 20; // 29 per sec

var updateinterval = 500;


function moneypush(){
score=score+1;
//alert("push! "+score);
document.getElementById("Score").innerHTML=Math.round(score);

}


function checkforproductcost(){
	
	if (score>=manager_cost){
		document.getElementById("managertext").innerHTML="Manager ("+ manager_qty + ")";
		document.getElementById("manager").style.display = "block";
	}else{

		document.getElementById("managertext").innerHTML="!!!!Manager ("+ manager_qty + ")";
		
		if( manager_qty == 0){
			document.getElementById("manager").style.display = "none";
		}
	}
	
	
	if (score>=clerk_cost){
		document.getElementById("clerktext").innerHTML="Clerk ("+ clerk_qty + ")";
		document.getElementById("clerk").style.display = "block";
	}else{

		document.getElementById("clerktext").innerHTML="!!!!Clerk ("+ clerk_qty + ")";
		
		//if( accountant_qty == 0){
		//	document.getElementById("clerk").style.display = "none";
		//}
	}
	
	if (score>=accountant_cost && clerk_qty > 0){
		document.getElementById("accountanttext").innerHTML="Accountant ("+ accountant_qty + ")";
		document.getElementById("accountant").style.display = "block";
	}else{

		document.getElementById("accountanttext").innerHTML="!!!!Accountant ("+ accountant_qty + ")";
		if(clerk_qty== 0){
			document.getElementById("accountant").style.display = "none";
		}
		
		
		
	}
	
	if(manager_qty*20<=accountant_qty){
			document.getElementById("accountant").style.display = "none";
		}
		
	
	if (score>=president_cost && president_qty == 0){
		document.getElementById("presidenttext").innerHTML="president ("+ president_qty + ")";
		document.getElementById("president").style.display = "block";
	}else{

		document.getElementById("presidenttext").innerHTML="!!!!president ("+ president_qty + ")";
	
			document.getElementById("president").style.display = "none";
		
	}
	
	score=score+accountant_qty* (accountant_prodrate / (1000/updateinterval) ) ;
	score=score+clerk_qty* (clerk_prodrate / (1000/updateinterval) ) ;
	score=score+manager_qty* (manager_prodrate / (1000/updateinterval) ) ;
	score=score+president_qty* (president_prodrate / (1000/updateinterval) ) ;
	
	document.getElementById("Score").innerHTML=Math.round(score);
	//window.setTimeout(checkforproductcost, updateinterval);
} //function checkforproductcost



function buyaccountant(){

if (score<accountant_cost|| clerk_qty == 0 ){
return;
}

accountant_qty = accountant_qty+1;

score=score-accountant_cost;

//increases cost by 35% ontop of the previous cost
accountant_cost= Math.round(accountant_cost*1.10);
if (accountant_cost>manager_cost*0.8){
	accountant_cost = 0.8*manager_cost;
}
//sets content within html element to right hand side
document.getElementById("accountantcost").innerHTML = accountant_cost;
document.getElementById("accountanttext").innerHTML = "Accountant ("+ accountant_qty + ")";
//creates new img html element
var accountantHTMLobj = document.createElement(  "img" /* src = 'Art/accountant.jpg'>"*/ );
accountantHTMLobj.src      =    'Art/accountant.jpg';
accountantHTMLobj.className      =    'boardroleimg';
document.getElementById("accountants").append( accountantHTMLobj );



} // function buyaccountant

function buyclerk(){

if (score<clerk_cost ){
return;	
}


clerk_qty = clerk_qty+1;

score=score-clerk_cost;
clerk_cost=Math.round(clerk_cost*1.35);
document.getElementById("clerkcost").innerHTML = clerk_cost;
document.getElementById("clerktext").innerHTML = "Clerk ("+ clerk_qty + ")";
var clerkHTMLobj = document.createElement( "img" );
clerkHTMLobj.src = 'Art/clerk.jpg';
clerkHTMLobj.className = 'boardroleimg';
document.getElementById("clerks").append( clerkHTMLobj );

}//function buyclerk

function buymanager(){

if (score<manager_cost ){
return;	
}


manager_qty = manager_qty+1;

score=score-manager_cost;
manager_cost=Math.round(manager_cost*1.45);
document.getElementById("managercost").innerHTML = manager_cost;
document.getElementById("managertext").innerHTML = "Manager ("+ manager_qty + ")";
var managerHTMLobj = document.createElement( "img" );
managerHTMLobj.src = 'Art/manager.jpg';
managerHTMLobj.className = 'boardroleimg';
document.getElementById("managers").append( managerHTMLobj );

}//function buymanager

function buypresident(){

if (score<president_cost || president_qty > 0){
return;	
}



president_qty = president_qty+1;

score=score-president_cost;
president_cost=Math.round(president_cost*1.39);
document.getElementById("presidentcost").innerHTML = president_cost;
document.getElementById("presidenttext").innerHTML = "president ("+ president_qty + ")";
var presidentHTMLobj = document.createElement( "img" );
presidentHTMLobj.src = 'Art/President.png';
presidentHTMLobj.className = 'boardroleimg';
document.getElementById("presidents").append( presidentHTMLobj );

}//function buypresident


//checkforproductcost();
setInterval( checkforproductcost, updateinterval);