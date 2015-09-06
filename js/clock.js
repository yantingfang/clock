define(function(require,exports,module){
	exports.updateTime=function (){
    	var now=new Date();
    	var sec=now.getSeconds();
    	var min=now.getMinutes()+sec/60;
    	var hour=(now.getHours()%12)+min/60+sec/3600;
    	var secangle=sec*6
    	var minangle=min*6;
    	var hourangle=hour*30;
    	var minhand=document.getElementById("minutehand");
    	var hourhand=document.getElementById("hourhand");
    	var sechand=document.getElementById("secondhand");
    	minhand.setAttribute("transform","rotate("+minangle+",50,50)");
        hourhand.setAttribute("transform","rotate("+hourangle+",50,50)");
        sechand.setAttribute("transform","rotate("+secangle+",50,50)");
        setInterval(function(){
        	var now=new Date();
    	var sec=now.getSeconds();
    	var min=now.getMinutes()+sec/60;
    	var hour=(now.getHours()%12)+min/60+sec/3600;
    	var secangle=sec*6
    	var minangle=min*6;
    	var hourangle=hour*30;
    	var minhand=document.getElementById("minutehand");
    	var hourhand=document.getElementById("hourhand");
    	var sechand=document.getElementById("secondhand");
    	minhand.setAttribute("transform","rotate("+minangle+",50,50)");
        hourhand.setAttribute("transform","rotate("+hourangle+",50,50)");
        sechand.setAttribute("transform","rotate("+secangle+",50,50)");
        },1000);
    }
})