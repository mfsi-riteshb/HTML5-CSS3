var Form=Form||{
	
	checkValidity:function(element){
		var type=element.getAttribute("class");
	    if(type.includes("string")){
            var minLength=element.getAttribute("data-minlength");
            
            return this.inputLengthValidate(element,minLength);
	    }
	    else if(type.includes("phone")){
	    	return this.phoneValidate(element);
	    }
	    else if(type.includes("dob")) {

	    }
	    else if(type.includes("email")){
	    	
           return this.emailValidate(element,element.value);
	    }
	  
	   else{
        
	   }
	},
	inputLengthValidate:function(element,minLength){
	    var val=element.value;
	    if(val.length<minLength) {
			element.setAttribute("class",element.className+" "+"invalid");
			return true;
	    }	
	    else {
	    	element.setAttribute("class",element.className.replace("invalid",""));
	    	return false;	
	    }	
},

	emailValidate:function(element,value) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(re.test(value)){
			element.setAttribute("class",element.className.replace("invalid",""));
		    return false;
		}
		else {
			element.setAttribute("class",element.className+" invalid");
		  	return true;
		}
	},
	phoneValidate:function(element) {
		var length=element.value.length;
	    if(length!=10) {
	    	element.className=element.className+" invalid"
	    	return true;

	    }
	    else {
	    	element.className=element.className.replace("invalid","");
	    	return false;
	    }
	}
}



