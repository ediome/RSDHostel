var flag=0;
function start() {
	setInterval(function(){
			flag=0;
			dweetio.get_latest_dweet_for("chandra", function(err, dweet){
			    var dweet = dweet[0]; // Dweet is always an array of 1
			    var now = new Date;
			    var seconds = (now.getTime() - dweet.created.getTime())/1000;
			    if(seconds>16){
			    	flag=1;
			    	document.getElementById("replace").innerHTML = "Off";
			    }
			    else{
			    	flag=0;
			    	document.getElementById("replace").innerHTML = "On";
			    }
			    console.log(seconds);
			    console.log(dweet.thing); // The generated name
			    console.log(dweet.content); // The content of the dweet
			    console.log(dweet.created); // The create date of the dweet
			});
		}, 1000);
}
start();
