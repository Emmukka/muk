alert("Welcome to Ehehehahahaha")
img= ["11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg"];
firstImg="";
firstElement="";
count=0;
t= 30;
winCounter= 8;


function randomImg(){
	for(i=0; i<img.length; i++){
		r= Math.floor(Math.random()*15);
		temp = img[i];
		img[i] = img[r];
		img[r] = temp;
	}
	console.log(img);
}
randomImg();

function changeImg(index, element){
	element.setAttribute('src', ""+img[index]);

		if(count == 0) {
			count++;
			firstImg = img[index];
			firstElement = element;
		}
		else {
			setTimeout(function(){
				if(firstImg == img[index] && firstElement != element){
					firstElement.style.visibility = "hidden";
					element.style.visibility = "hidden";
					winCounter--;
					if(winCounter == 0){
						alert("Bayar hurgey "+player+".Khairtaishv uruusn mn <3 ."+t+ "second uldsn");
						location.reload();
					}
					count=0;
				}
				else{
				firstElement.setAttribute('src', "backk.jpg");
				element.setAttribute('src', "backk.jpg");
				count=0;
				}
			}, 1000);
		}
	}
function startGame() {
	count=0;
	t=30;
	winCounter =8;
	document.getElementsByTagName("button")[0].disabled = true;
	player = prompt("Player's name:");
	document.getElementById("player").innerHTML= player;
	myVar= setInterval(myTimer, 1000);
}
function myTimer(){
		if (t==0) {
			clearInterval(myVar);
			alert("Chi amjsangude hahah unsy dhiad ehle!");
			document.getElementsByTagName("button")[0].disabled = false;
		}
		else {
			t--;
			document.getElementById("timer").innerHTML = "Time: " +t;
		}
	
}