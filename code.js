
let rn="r1";
function rng(bmi)
{
	if(bmi<18.5)
	{
		rn="r2";
		return "Under Weight!!";
		


	}
	else if(bmi>=18.5&&bmi<=22.9)
	{
		rn="r3";
		return "Normal, No Risk!";
		
	}
	else if(bmi>=23&&bmi<=24.9)
	{
		rn="r4";
		return "Over Weight!!"
		
	}
	else if(bmi>=25&&bmi<=29.9)
	{
		rn="r5";
		return "Pre-Obese!!";
		
	}

	else if(bmi>30)
	{
		rn="r6";
		return "Obese!!"
		
	}
	else
	{
		return "please fill up correctly!"
	}
}
function color(row)
{
   rn=document.getElementById("r2");
   rn.style.border="none";
   rn=document.getElementById("r3");
   rn.style.border="none";
   rn=document.getElementById("r4");
   rn.style.border="none";
   rn=document.getElementById("r5");
   rn.style.border="none";
   rn=document.getElementById("r6");
   rn.style.border="none";

   rn=document.getElementById(row);
   rn.style.border="3px solid red";

}
function col(bmi)
{
	if(bmi<18.5)
	{
		return "blue";

	}
	else if(bmi>=18.5&&bmi<=22.9)
	{
		return "green";
	}

	else if(bmi>22.9)
	{
		return "red"
	}
}

function calc()
{
	let htf= parseInt(document.getElementById("htf").value);
	let hti;
if(document.getElementById("hti").value=="")
{
   hti= 0;
}
else
{
    hti= parseInt(document.getElementById("hti").value);
}

let ht= (12*htf+hti)/39.37;
let wt= parseInt(document.getElementById("wt").value);
let dis=document.getElementById("dis");
let bar=document.getElementById("bar");
let tab=document.getElementById("tab");

let res = wt/(ht*ht);
let bmi=Math.round(res * 10) / 10;
   dis.innerHTML="Your BMI is: "+bmi+" <br> <p style=color:"+col(bmi)+ "> "+rng(bmi)+"<br>"+shiftt(bmi,wt,ht)+"</p>";
   bar.style.width=2*bmi+"%";
   bar.style.backgroundColor=col(bmi);
   tab.style.display="block";
   color(rn);
   document.getElementById( 'dis' ).scrollIntoView();



}

function shiftt(bmi,wt,ht)
{
	let nwt=0;
	if(bmi<18.5)
	{
		nwt=Math.round((18.5*ht*ht-wt) * 10) / 10;
		return "You have to gain "+nwt+" kG for normal BMI"

	}

	else if(bmi>22.9)
	{
       nwt=Math.round((wt-22.9*ht*ht) * 10) / 10;
		return "You have to loose "+nwt+" kG for normal BMI"
	}
	else

	{
		return "";
	}


}
