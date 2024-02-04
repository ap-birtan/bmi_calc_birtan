

function rng(bmi)
{
	if(bmi<18.5)
	{
		return "Under Weight!!";

	}
	else if(bmi>=18.5&&bmi<=24.9)
	{
		return "Normal, No Risk!";
	}

	else if(bmi>24.9)
	{
		return "Obesity!!"
	}
	else
	{
		return "please fill up correctly!"
	}
}

function col(bmi)
{
	if(bmi<18.5)
	{
		return "blue";

	}
	else if(bmi>=18.5&&bmi<=24.9)
	{
		return "green";
	}

	else if(bmi>24.9)
	{
		return "red"
	}
}

function calc()
{
	let htf= parseInt(document.getElementById("htf").value);
let hti= parseInt(document.getElementById("hti").value);

let ht= (12*htf+hti)/39.37;
let wt= parseInt(document.getElementById("wt").value);
let dis=document.getElementById("dis");
let bar=document.getElementById("bar");
let res = wt/(ht*ht);
let bmi=Math.round(res * 10) / 10;
   dis.innerHTML="Your BMI is: "+bmi+" <br> <p style=color:"+col(bmi)+ "> "+rng(bmi)+"</p>";
   bar.style.width=2*bmi+"%";
   bar.style.backgroundColor=col(bmi);

}

