
//empty local storage data.
localStorage.setItem("data_ritesh","");

var MyApp=MyApp||{
	ResumeData:{}
}

var myStorage=localStorage;

var CreateData={
	addEducation:function() {
		var educationElem=document.getElementById("education");
		//all the input of education section
		var input=educationElem.getElementsByClassName("education_input");
		var education={};
		var flag=true;
		//if form validation passes create new ul and li properties in it.
		var ul=Resume.createChildEmptyNode(document.getElementById("showeducation"),"ul");
		ul.style.position="relative";
		//img used  to add icon to remove added  education

		var img=Resume.createChildEmptyNode(ul,"img");
		img.setAttribute("class","close");
		img.setAttribute("src","https://cdn1.iconfinder.com/data/icons/nuove/128x128/actions/fileclose.png");    //closed icon used to remove added education
		
		//function to perform when image icon of particular education is clicked
		img.addEventListener("click",function(){
			console.log(this);
				this.parentNode.parentNode.removeChild(this.parentNode);
				MyApp.ResumeData.educations.pop();

		},false);

		for(var i=0;i<input.length;i++){
			var name=input[i].getAttribute("name");
			var value=input[i].value;
			//if form validation is not passed or function inside if return true then remove the above created ul
			// because it is now not required also show message and set meaage to false such that no education array is created
			if(value==""||Form.checkValidity(input[i])) {
				ul.parentNode.removeChild(ul);
				alert("please fill all the details and correct details");
				education={};
				flag=false;
				break;
			}
			else{
				
				Resume.createChildNodeWithText(ul,"li",name+":"+value);
				education[name]=value;
			}

		}

		//if form calidation passed then create education array/get already present education array and push education  object into it
		if(flag) {
			MyApp.ResumeData.educations=MyApp.ResumeData.educations||Array();
			console.log(MyApp.ResumeData.educations.push(education));
		}
  
	},
	addProject:function() {
        var projectElem=document.getElementById("project");
        //all the input of project section
		var input=projectElem.getElementsByClassName("project_input");
		var project={};
		var flag=true;
		for(var i=0;i<input.length-1;i++) {
			var name=input[i].getAttribute("name");
			var value=input[i].value;

			//Form validation for each input should return true
			if(value==""||Form.checkValidity(input[i])) {	
				
				alert("please fill all the details and correct details");
				project={};
				flag=false;
				break;
			}
			else{
				//this  if/else is used for if url provided and if not
				var ul=Resume.createChildEmptyNode(document.getElementById("showproject"),"ul");
				var li;
				if(input[i+1].value!=""){
					 li=Resume.createChildNodeWithText(ul,"li",name+":"+value+" ("+input[i+1].value+")");	
				}
				else {
					li=Resume.createChildNodeWithText(ul,"li",name+":"+value);	
				}
				li.style.position="relative";
				//img used  to add icon to remove added project
				var img=Resume.createChildEmptyNode(li,"img");
				img.setAttribute("class","close");
				img.setAttribute("src","https://cdn1.iconfinder.com/data/icons/nuove/128x128/actions/fileclose.png");
				img.addEventListener("click",function() {
				//deleting the particular  li element in which this image exist  o.e ul>li>img	
				this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
				MyApp.ResumeData.projects.splice(MyApp.ResumeData.projects.indexOf(this.parentNode.childNodes[0].nodeValue),1);
				} ,false);
				project[name]=value;
			}
		}
		//if form validate then create project array and push project object in it.
		if(flag) {
			MyApp.ResumeData.projects=MyApp.ResumeData.projects||Array();
            console.log(MyApp.ResumeData.projects.push(project));
		}
  


		
	},
	addWorkShop:function(){
		 
		var workshopElem=document.getElementById("workshop");
		//all the input of workshop section
		var input=workshopElem.getElementsByClassName("workshop_input");
		var workshop={};
		var flag=true;
		for(var i=0;i<input.length;i++){
			var name=input[i].getAttribute("name");
			var value=input[i].value;
			//check validity of every section
			if(value=="" ||Form.checkValidity(input[i])) {	
				
				alert("please fill all the details and correct details");
				workshop={};
				flag=false;
				break;
			}
			else {
				var ul=Resume.createChildEmptyNode(document.getElementById("showworkshop"),"ul");
     			var li=Resume.createChildNodeWithText(ul,"li"," "+value);
     			li.style.position="relative";
     			//img used  to add icon to remove added workshop
				var img=Resume.createChildEmptyNode(li,"img");
				img.setAttribute("class","close");
				img.setAttribute("src","https://cdn1.iconfinder.com/data/icons/nuove/128x128/actions/fileclose.png");
				img.addEventListener("click",function() {
				this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
				//removing particular workshop out of many using its value (Using splice function)
				MyApp.ResumeData.workshops.splice(MyApp.ResumeData.workshops.indexOf(this.parentNode.childNodes[0].nodeValue),1);
					} ,false);
				workshop[name]=value;
			}

		}
		//if form validate then create project array and push workshop object in it.
		if(flag){
			 MyApp.ResumeData.workshops=MyApp.ResumeData.workshops||Array();
		     console.log(MyApp.ResumeData.workshops.push(workshop));
		}
	},
	addHobby:function() {
		var hobbyElem=document.getElementById("hobby");
		//all the input of hobby section
		var input=hobbyElem.getElementsByClassName("hobby_input");
		var hobby={};
		var flag=true;
		var ul=Resume.createChildEmptyNode(document.getElementById("showhobby"),"ul");
		for(var i=0;i<input.length;i++){
			var name=input[i].getAttribute("name");
			var value=input[i].value;
			//for validation inputs of hobby section 
			if(value==""||Form.checkValidity(input[i])) {	
				
				alert("please fill all the details and correct details");
				document.getElementById("showhobby").removeChild(ul);
				hobby={};
				flag=false;
				break;
			}
			else {
		    	var li=Resume.createChildNodeWithText(ul,"li"," "+value);
		    	li.style.position="relative";
				var img=Resume.createChildEmptyNode(li,"img");
				img.setAttribute("class","close");
				img.setAttribute("src","https://cdn1.iconfinder.com/data/icons/nuove/128x128/actions/fileclose.png");
				img.addEventListener("click",function() {
				this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
				MyApp.ResumeData.hobbies.splice(MyApp.ResumeData.hobbies.indexOf(this.parentNode.childNodes[0].nodeValue),1);
					} ,false);
				hobby[name]=value;
			}

		}
		//if form validate then create hobby array and push hobbies object in it.
		if(flag){
			 MyApp.ResumeData.hobbies=MyApp.ResumeData.hobbies||Array();
   			 console.log(MyApp.ResumeData.hobbies.push(hobby));
		}
	},
	addLanguage:function() {
			//all the input of language section
			var input=document.getElementsByClassName("language_input");
			var val=input[0].value;
			MyApp.ResumeData.skills=MyApp.ResumeData.skills||Array();
			MyApp.ResumeData.skills[0]=MyApp.ResumeData.skills[0]||{"language":new Set()}
			if(Form.checkValidity(input[0])) {
				alert("please fill the correct details");
			}
			else {
				if(MyApp.ResumeData.skills[0].language.has(val)){
						//do nothing
				}
				else{
					MyApp.ResumeData.skills[0].language.add(val);
					var span=document.getElementById("span_language");
					
					//to remove already present language input
					while (span.firstChild) {
   						 span.removeChild(span.firstChild);
					}
					Resume.createChildTextNode(span,Array.from(MyApp.ResumeData.skills[0].language).join(", "));
					var li=document.getElementById("li_language");
					li.style.position="relative";
					console.log(li.contains(img));
					var img=li.getElementsByClassName("close");
					if(!li.contains(img[0])){
				    img=Resume.createChildEmptyNode(li,"img");
					img.setAttribute("class","close");
					img.setAttribute("src","https://cdn1.iconfinder.com/data/icons/nuove/128x128/actions/fileclose.png");
					img.addEventListener("click",function() {
					this.previousSibling.removeChild(this.previousSibling.firstChild);
					this.parentNode.removeChild(this);
					MyApp.ResumeData.skills[0].language=new Set();
						} ,false);
					}
				}
				
			}
	},
	addTool:function() {
		var input=document.getElementsByClassName("tool_input");
			var val=input[0].value;
			MyApp.ResumeData.skills=MyApp.ResumeData.skills||Array();
			MyApp.ResumeData.skills[1]=MyApp.ResumeData.skills[1]||{"tools":new Set()}
			
            console.log(input);
			if(Form.checkValidity(input[0])){
				alert("please fill the correct details");
			}else{
				if(MyApp.ResumeData.skills[1].tools.has(val)){
					//do nothing
				}
				else{
					console.log(val);
				MyApp.ResumeData.skills[1].tools.add(val);
				var span=document.getElementById("span_tool");
				
				//to remove already present language input
				while (span.firstChild) {
   						 span.removeChild(span.firstChild);
				}
				Resume.createChildTextNode(span,Array.from(MyApp.ResumeData.skills[1].tools).join(", "));
				var li=document.getElementById("li_tool");
				li.style.position="relative";
				var img=li.getElementsByClassName("close");
				//to hceck if close image is already added
				if(!li.contains(img[0])){
					var img=Resume.createChildEmptyNode(li,"img");
					img.setAttribute("class","close");
					img.setAttribute("src","https://cdn1.iconfinder.com/data/icons/nuove/128x128/actions/fileclose.png");
					img.addEventListener("click",function() {
					this.previousSibling.removeChild(this.previousSibling.firstChild);
					this.parentNode.removeChild(this);
					MyApp.ResumeData.skills[1].tools=new Set();
						} ,false);
					}
				}
				
				
			}

	},
	addOperatingSystem:function() {
		var input=document.getElementsByClassName("operatingsystem_input");
			var val=input[0].value;
			MyApp.ResumeData.skills=MyApp.ResumeData.skills||Array();
			MyApp.ResumeData.skills[2]=MyApp.ResumeData.skills[2]||{"operatingSystem":new Set()}
			
            console.log(input);
			if(Form.checkValidity(input[0])){
				alert("please fill the correct details");
			}
			else {
				if(MyApp.ResumeData.skills[2].operatingSystem.has(val)){
					//do nothing
				}
				else{
					console.log(MyApp.ResumeData.skills[2].operatingSystem);
					MyApp.ResumeData.skills[2].operatingSystem.add(val);
					var span=document.getElementById("span_operatingsystem");
					//to remove already present language input
					while (span.firstChild) {
	   						 span.removeChild(span.firstChild);
					}
					Resume.createChildTextNode(span,Array.from(MyApp.ResumeData.skills[2].operatingSystem).join(", "));
					var li=document.getElementById("li_operatingsystem");
					li.style.position="relative";
					var img=li.getElementsByClassName("close");
					//to chekc if close iimage is already added
					if(!li.contains(img[0])){
						var img=Resume.createChildEmptyNode(li,"img");
						img.setAttribute("class","close");
						img.setAttribute("src","https://cdn1.iconfinder.com/data/icons/nuove/128x128/actions/fileclose.png");
						img.addEventListener("click",function() {
						this.previousSibling.removeChild(this.previousSibling.firstChild);
						this.parentNode.removeChild(this);
						MyApp.ResumeData.skills[2].operatingSystem=new Set();
							} ,false);
					}
				
				}
				
			}

	},
	onSubmit:function(){
      
        var input=document.getElementsByClassName("basic_input");
		var flag=true;
        for(var i=0;i<input.length;i++){	
        	//check validity for basic input
        	if(Form.checkValidity(input[i])) {
        		console.log(input[i]);
 				flag=false;
        		break;
        	}
        	else {
        		MyApp.ResumeData[input[i].getAttribute("name")]=input[i].value;
        	}
		}
		//check every detail  is set or not
        if(flag&&MyApp.ResumeData.skills&&MyApp.ResumeData.skills[0]&&MyApp.ResumeData.skills[1]&&MyApp.ResumeData.skills[2]&&MyApp.ResumeData.educations&&MyApp.ResumeData.hobbies&&MyApp.ResumeData.workshops&&MyApp.ResumeData.projects){
        	MyApp.ResumeData.skills[0].language=Array.from(MyApp.ResumeData.skills[0].language)||new Array();
			MyApp.ResumeData.skills[1].tools=Array.from(MyApp.ResumeData.skills[1].tools)||new Array();
        	MyApp.ResumeData.skills[2].operatingSystem=Array.from(MyApp.ResumeData.skills[2].operatingSystem)||new Array();
         	myStorage.setItem("data_ritesh", JSON.stringify(MyApp.ResumeData));
        	window.location="index.html"
        	}
        	else {
        		alert("please fill all the details");
        	}
        
	}

}

