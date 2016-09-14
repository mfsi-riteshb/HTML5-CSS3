// var ResumeData={
// 	"name":"",
// 	"surname":"",
// 	"phone":"",
// 	"address":"",
// 	 "dob":"",
// 	 "email":"",
// 	 "obective":"",
// 	"education":[],
// 	"projects":[],
// 	"skills":[
//      {"languages":[],
//       "tools":[],
//       "skills":[]
//     }
// 	],
// 	"workshop":[],
// 	"hobbies":[],

// };
var ResumeData={
"name":"Ritesh",
"surname":"Bisht",
"phone":"9958680578",
"address":"Plot no 72,Block b-9,Sector-5,rohini,Delhi-110085",
"dob":"17th july,1994",
"email":"ritesh.bisht93@gmail.com",
"objective":"To Reach excellence in all Sphere of information Technology ,by Seeking a position, which would enhance my analytical,decision making ,development \
and implementation skills in a professional work environment, thereby achieving group goals",
"education":[
            {"name":"B.Tech-Information Techology","year":"2012-2016","university":"Guru Gobind Singh Indrapratha University(GGSIPU)","percentage":"73"},
	    {"name":"XII ","year":"2011-2012","university":"CBSE","percentage":"84"},
            {"name":"X","year":"2009-2010","university":"CBSE","percentage":"80"}
            ],
"projects":[
	   {"description":"Created a Bank Management System as a college project using java and also an standalone application in java of snake game","url":""},
          { "description":"created a portfolio website using html,materialize and javascript","url":""},
	   {"description":"participated in web development competition and created a website using html,bootstrap,jquery.","url":"riteshbisht93.com/EWS/home.html"},
	   { "description":"did a summer project regarding providing university studentwith study material to read online and chat application(Laravel framework)","url":""},  
           {"description":"did some research on natural language processing(Language used python)","url":""},
         {"description": "Developed website(Corona Bpit) and created an android app(Corona 2k16) for college festival.","url":""},
 	{"description":"Rest Api creation. (PREVIEW).","url":""}

	],

"skills":[
	{"language":["java","Android","C","C++","SQL","HTML","Javascript","CSS","Jquery","Python"],
	 "tools":["Sublime Text","Atom Text Editor","Eclipse","Android Studio"],
         "operatingSystem":["Windows(XP,8.1)","Linux(Ubuntu)"]
	}
	],
"workshop":[
	
   {"description":"Attended Linux WorkShop organized by Rlabz"},
    {"description":"Completed a java course from innobuzz knowledge Solutions"},
    {"description":"Attended OSD conference at jaypee Knowledge Solutions"},
    {"description":"Appeared in AMCAT exam and acquired 95 percentile in Computer Programming and 88% percentilr in Computer Science."}

	],
"hobbies":[
	
    {"description":"Eager to learn about the basic of Computer Science to better understand the essence of programming and improve my skills."},
    {"description":"Watching movies and Listening to movies."}



	]
};

//for creating a elemnt node(eg h1,li,span) and appending it to element and appending text node in it as a child.
function createChildNodeWithText(element,elementType,text){
	
    var node=document.createElement(elementType);
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    element.appendChild(node);
}

//for creating emptynode and appending it to element
function createChildEmptyNode(element,elementType,a){
	var node=document.createElement(elementType);
	element.appendChild(node);

}

//for creating a text node only and appending it with a child;
function createChildTextNode(element,text){
	var node=document.createTextNode(text);
	element.appendChild(node);
}

//to  getelement bt id
function getElement(elementId){
	return document.getElementById(elementId);
}

//creating list element from object array.
function createListElement(element,listArray){
    for (var i=0;i<listArray.length;i++) {
    createChildNodeWithText(element,"li",listArray[i].description);
    }
}

//for setting attribute of element
function setAttribute(element,attribute,value){
	element.setAttribute(attribute,value);
}


function CheckDataAndShow(element,data){
	if(data==""){
		
		element.style.display="none";

	}
	else{
	
		createChildTextNode(element,data);
	}
}
//converting array to string.
function ArrayToString(arr){
	if(arr==undefined){

	}
	else {
     	var str="";
	    for(var i=0;i<arr.length;i++){
        str+=arr[i]+",";
	    }
    }

return str;
}

function rotateElement (element,deg) {
	//standard syntax
    element.style.transform="rotate("+deg+"deg)";
    //code for safari
    element.style.WebKitTransform="rotate("+deg+"deg)";
    //code for IE9
	element.style.msTransform="rotate("+deg+"deg)";     
}

// function MyProfile(name,phone,email,address,dob,objective,education,projects,skills,workshop,hobbies) {

// this.name=name;
// this.phone=phone;
// this.email=email;
// this.address=address;
// this.dob=dob;
// this.educations=educations;
// this.skills=skills;
// this.objective=objective;
// this.projects=projects;
// this.workshop=workshop;
// this.hobbies=hobbies;
// }


// function Education(name,year,university,percentage) {
// 	this.name=name;
// 	this.year=year;
// 	this.university=university;
// 	this.percentage=percentage;
// }

// function Skills(language,tools,operatingSystem) {
//     this.language=language;
//     this.tools=tools;
//     this.operatingSystem=operatingSystem;
// }

// function Language(name) {
//     this.name=name;
// }

// function Tools(name){
//     this.name=name;
// }

// function OperatingSystem(name) {
//     this.name=name;
// }


// function Hobbies(description){
// 	this.description=description;
// }

// function Projects(descriptionm,url){
//     this.description=description;
//     this.url=url;
// }

// function Workshop(description) {
// 	this.description=description;
// }


(function(){

 var educationElement=getElement("educations");
    var projectElement=getElement("projects");
    var skillsElement=getElement("skills");
    var skillsElement=skillsElement.getElementsByTagName("li"); //recovering li element from dom
    var workshopElement=getElement("workshops");
    var hobbyElement=getElement("hobbies");
    var headerElement=getElement("header");
    var objectiveElement=getElement("objective");
    var phoneElement=getElement("phone");
    var emailElement=getElement("email");
    var nameElement=getElement("name");
    var addressElement=getElement("address");
    var dobElement=getElement("dob");


    // for(var i=0;i<ResumeData.workshop;i++){
         
    // }
    createChildTextNode(nameElement,ResumeData.name+" "+ResumeData.surname);
    createChildTextNode(objectiveElement,ResumeData.objective);

    CheckDataAndShow(phoneElement,ResumeData.phone);

    CheckDataAndShow(emailElement,ResumeData.email);
  

    CheckDataAndShow(addressElement,ResumeData.address);
    CheckDataAndShow(dobElement,ResumeData.dob);
    
    //for projects
    createListElement(projectElement,ResumeData.projects);
    
    //for hobbies
    createListElement(hobbyElement,ResumeData.hobbies);
    
    //for workshop
    createListElement(workshopElement,ResumeData.workshop);


    //processing skills and display
    var skillObj=ResumeData.skills[0];

    //changing Language array to String
    var languageArr=skillObj.language;
    var language=ArrayToString(languageArr);
    
    //changing Tools array to String
    var toolsArr=skillObj.tools;
    var tools=ArrayToString(toolsArr);


    ///changing operating system to String
    var operatingSystemArr=skillObj.operatingSystem;
    var operatingSystem=ArrayToString(operatingSystemArr);

    // appending above three string to adjacent li element.
    createChildTextNode(skillsElement[0],language);
    createChildTextNode(skillsElement[1],tools);
    createChildTextNode(skillsElement[2],operatingSystem);


    //for showing the education data
    var educationObj=ResumeData.education; 

    //creating li elements and provide class as outerli
    for(var i=0;i<educationObj.length;i++){
   	    createChildEmptyNode(educationElement,"li");
        setAttribute(educationElement.getElementsByTagName("li")[i],"class","outerli")
    }
   
    var liElements=educationElement.getElementsByClassName("outerli");
    //creating header and li for above created li elemnets
    for(var j=0;j<liElements.length;j++){
   	    createChildNodeWithText(liElements[j],"h4",educationObj[j].name);
   	    createChildEmptyNode(liElements[j],"ul");
   	    createChildNodeWithText(liElements[j].getElementsByTagName("ul")[0],"li",educationObj[j].year);  
        createChildNodeWithText(liElements[j].getElementsByTagName("ul")[0],"li",educationObj[j].university);
        createChildNodeWithText(liElements[j].getElementsByTagName("ul")[0],"li",educationObj[j].percentage);
    }
})();

//function to show or hide datas section
function showHideData (element) {
    var parentOfelementToHide=element.parentNode.parentNode;
    var elementToHideOrShow=parentOfelementToHide.getElementsByClassName("hide")[0] ||
                      parentOfelementToHide.getElementsByClassName("show")[0];
    var icon=element.childNodes[0];
    if (elementToHideOrShow.className=="hide") {
    	setAttribute(elementToHideOrShow,"class","show");	
        rotateElement(icon,-90);   
    }
    else {
    	setAttribute(elementToHideOrShow,"class","hide");
    	icon.style.transform="rotate(0deg)";
    	rotateElement(icon,0);
    }

}

