function Res(data) {
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.phone= data.phone;
    this.address = data.address;
    this.dob = data.dob;
    this.email = data.email;
    this.skills=data.skills;
    this.objective = data.objective;
    this.educations = data.educations;
    this.projects = data.projects;
    this.hobbies = data.hobbies;
    this.workshops = data.workshops;

};

var ResumeData={
"firstname":"Ritesh",
"lastname":"Bisht",
"phone":"9958680578",
"address":"Plot no 72,Block b-9,Sector-5,rohini,Delhi-110085",
"dob":"17th july,1994",
"email":"ritesh.bisht93@gmail.com",
"objective":"To Reach excellence in all Sphere of information Technology ,by Seeking a position, which would enhance my analytical,decision making ,development \
and implementation skills in a professional work environment, thereby achieving group goals",
"educations":[
            {"name":"B.Tech-Information Techology","year":"2012-2016","university":"Guru Gobind Singh Indrapratha University(GGSIPU)","percentage":"73"},
        {"name":"XII ","year":"2011-2012","university":"CBSE","percentage":"84"},
            {"name":"X","year":"2009-2010","university":"CBSE","percentage":"80"}
            ],
"projects":[
       {"project":"Created a Bank Management System as a college project using java and also an standalone application in java of snake game","url":""},
          { "project":"created a portfolio website using html,materialize and javascript","url":""},
       {"project":"participated in web development competition and created a website using html,bootstrap,jquery.","url":"riteshbisht93.com/EWS/home.html"},
       { "project":"did a summer project regarding providing university studentwith study material to read online and chat application(Laravel framework)","url":""},  
           {"project":"did some research on natural language processing(Language used python)","url":""},
         {"project": "Developed website(Corona Bpit) and created an android app(Corona 2k16) for college festival.","url":""},
    {"project":"Rest Api creation. (PREVIEW).","url":""}

    ],

"skills":{
    "language":["java","Android","C","C++","SQL","HTML","Javascript","CSS","Jquery","Python"],
     "tools":["Sublime Text","Atom Text Editor","Eclipse","Android Studio"],
    "operatingSystem":["Windows(XP,8.1)","Linux(Ubuntu)"]
},
    
"workshops":[
    
   {"workshop":"Attended Linux WorkShop organized by Rlabz"},
    {"workshop":"Completed a java course from innobuzz knowledge Solutions"},
    {"workshop":"Attended OSD conference at jaypee Knowledge Solutions"},
    {"workshop":"Appeared in AMCAT exam and acquired 95 percentile in Computer Programming and 88% percentilr in Computer Science."}

    ],
"hobbies":[
    
    {"hobby":"Eager to learn about the basic of Computer Science to better understand the essence of programming and improve my skills."},
    {"hobby":"Watching movies and Listening to movies."}



    ]
};



var Resume = {
    resumeData: {},
    init: function() {

        //----- CODE FOR JQUERY--------//

        //setting up basic data;
        // $("#objective").text(this.resumeData.objective);
        // $("#phone").text(this.resumeData.phone);
        // $("#email").text(this.resumeData.email);
        // $("#name").text(this.resumeData.firstname + " " + this.resumeData.lastname);
        // $("#address").text(this.resumeData.address);
        // $("#dob").text(this.resumeData.dob);
        // //set data for projects
        // this.createListElement($("#projects"), this.resumeData.projects);
        // //set data for hobbies
        // this.createListElement($("#hobbies"), this.resumeData.hobbies);
        // //set data for workshop
        // this.createListElement($("#workshops"), this.resumeData.workshops);
        // var skills = this.resumeData.skills;
        // // appending above three string to adjacent li element.
        // $("#skills").find("li").each(function(index) {
        //     if (index === 0) {
        //         console.log(skills[0].language.join(", "));
        //         $(this).append(skills[0].language.join(", "));
        //     } else if (index == 1) {
        //         console.log(skills[1].tools.join(", "));
        //         $(this).append(skills[1].tools.join(", "));
        //     } else {
        //         $(this).append(skills[2].operatingSystem.join(", "));
        //     }
        // });

if(localStorage.getItem("data_ritesh")){
    var ritesh = new Res(JSON.parse(localStorage.getItem("data_ritesh")));
    //  var ajay = new Res(ResumeData);
     console.log("hello");
     $("#resumeTemplate").tmpl(ritesh).appendTo("body");
    //$('#resumeTemplate').tmpl(ajay).appendTo("body");
}    
else{
     $("#noresumeTemplate").tmpl().appendTo("body");         
    }

},
    //function to show or hide datas section
    showHideData: function(el) {
        var $element = $(el);

        var $parentOfelementToHide = $element.parent().parent();
        var $elementToHideOrShow = $parentOfelementToHide.find(".hide");
        if ($elementToHideOrShow.length === 0) {
            $elementToHideOrShow = $parentOfelementToHide.find(".show");
        }
        var $icon = $element.children();
        $icon.toggleClass("rotate90");
        $icon.toggleClass("rotate0");
        $elementToHideOrShow.toggleClass("show");
        $elementToHideOrShow.toggleClass("hide");
    },


    // //creating list element from object array.
    // createListElement: function($element, listArray) {
    //     var str = "";
    //     console.log(listArray);
    //     for (var i = 0; i < listArray.length; i++) {
    //         str = str + "<li>" + listArray[i].description + "</li>";
    //     }
    //     $element.append(str);
    // },



};