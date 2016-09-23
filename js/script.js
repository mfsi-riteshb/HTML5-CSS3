var Resume={
    resumeData:"",
    init:function(){
        this.resumeData=JSON.parse(localStorage.getItem("data_ritesh"));
        var educationElement=document.getElementById("educations");
        var projectElement=document.getElementById("projects");
        var skillsElement=document.getElementById("skills");
        var skillsElement=skillsElement.getElementsByTagName("li"); //recovering li element from dom
        var workshopElement=document.getElementById("workshops");
        var hobbyElement=document.getElementById("hobbies");
        var headerElement=document.getElementById("header");
        var objectiveElement=document.getElementById("objective");
        var phoneElement=document.getElementById("phone");
        var emailElement=document.getElementById("email");
        var nameElement=document.getElementById("name");
        var addressElement=document.getElementById("address");
        var dobElement=document.getElementById("dob");

        this.createChildTextNode(nameElement,this.resumeData.firstname+" "+this.resumeData.lastname);

        this.createChildTextNode(objectiveElement,this.resumeData.objective);
        
        this.createChildTextNode(phoneElement,this.resumeData.phone);
        this.createChildTextNode(emailElement,this.resumeData.email);

        this.createChildTextNode(addressElement,this.resumeData.address);    
        this.createChildTextNode(dobElement,this.resumeData.dob);

         //for projects
        this.createListElement(projectElement,this.resumeData.projects);
    

        //for hobbies
        this.createListElement(hobbyElement,this.resumeData.hobbies);
    

        //Array for storing
        this.createListElement(workshopElement,this.resumeData.workshops);

        var skill=this.resumeData.skills;

        // appending above three string to adjacent li element.
        this.createChildTextNode(skillsElement[0],skill[0].language.join(", "));
        this.createChildTextNode(skillsElement[1],skill[1].tools.join(", "));
        this.createChildTextNode(skillsElement[2],skill[2].operatingSystem.join(", "));

        //for showing the education data
        var educationObj=this.resumeData.educations; 

        //creating li elements and provide class as outerli
        for(var i=0;i<educationObj.length;i++){
            this.createChildEmptyNode(educationElement,"li");
            this.setAttribute(educationElement.getElementsByTagName("li")[i],"class","outerli");
        }

        var liElements=educationElement.getElementsByClassName("outerli");
        //creating header and li for above created li elemnets
    
        for(var j=0;j<liElements.length;j++){
            this.createChildNodeWithText(liElements[j],"h4",educationObj[j].name);
            this.createChildEmptyNode(liElements[j],"ul");
            this.createChildNodeWithText(liElements[j].getElementsByTagName("ul")[0],"li",educationObj[j].year);  
            this.createChildNodeWithText(liElements[j].getElementsByTagName("ul")[0],"li",educationObj[j].university);
            this.createChildNodeWithText(liElements[j].getElementsByTagName("ul")[0],"li",educationObj[j].percentage);
        }
    },

    
    //function to show or hide datas section

    showHideData:function(element) {
        var parentOfelementToHide=element.parentNode.parentNode;
        var elementToHideOrShow=parentOfelementToHide.getElementsByClassName("hide")[0] ||
                      parentOfelementToHide.getElementsByClassName("show")[0];
        var icon=element.childNodes[0];
        if (elementToHideOrShow.className=="hide") {
            this.setAttribute(elementToHideOrShow,"class","show");   
            this.rotateElement(icon,-90);   
        }
        else {
            this.setAttribute(elementToHideOrShow,"class","hide");
            icon.style.transform="rotate(0deg)";
            this.rotateElement(icon,0);
        }

    },

    createChildNodeWithText:function(element,elementType,text){

        var node=document.createElement(elementType);
        var textnode=document.createTextNode(text);
        node.appendChild(textnode);
       return element.appendChild(node);
    },
    
    //for creating emptynode and appending it to element
    createChildEmptyNode:function(element,elementType){
        var node=document.createElement(elementType);
        return element.appendChild(node);


    },

    //for creating a text node only and appending it with a child;
    createChildTextNode:function(element,text){
        var node=document.createTextNode(text);
       return element.appendChild(node);
    },

    //for setting attribute of element
    setAttribute:function(element,attribute,value){
        element.setAttribute(attribute,value);
    },

    //creating list element from object array.
    createListElement:function(element,listArray){
        for (var i=0;i<listArray.length;i++) {
        this.createChildNodeWithText(element,"li",listArray[i].description);
        }
    },

    rotateElement:function(element,deg) {
    //standard syntax
    element.style.transform="rotate("+deg+"deg)";
    //code for safari
    element.style.WebKitTransform="rotate("+deg+"deg)";
    //code for IE9
    element.style.msTransform="rotate("+deg+"deg)";     
    }

}












   

    
    



