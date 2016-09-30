//empty local storage data.
localStorage.setItem("data_ritesh", "");

var MyApp = MyApp || {
	ResumeData:{},
   init:function(){
   	$("#addeducation").on("click",function(){
   		CreateData.addEducation();
   	});

   	$("#addprojects").on("click",function(){
   		CreateData.addProject();
   	});
   	$("#addlanguage").on("click",function(){
   		CreateData.addLanguage();
   	});


   	$("#addtools").on("click",function(){
   		CreateData.addTool();
   	});

   	$("#addos").on("click",function(){
   		CreateData.addOperatingSystem();
   	});
 
   	$("#addworkshop").on("click",function(){
   		CreateData.addWorkShop();
   	});
   	$("#addhobby").on("click",function(){
   		CreateData.addHobby();
   	});

   }
};

//$( function() {
//  $( "#datepicker" ).datepicker();
//  } );

var myStorage = localStorage;
MyApp.init();
var CreateData = {
    closeIcon: "https://cdn1.iconfinder.com/data/icons/nuove/128x128/actions/fileclose.png",

    addEducation: function() {
        //all the input of education section
        var $inputs = $(".education_input");
        var education = {};
        if ($inputs.valid()) {
            //if form validation passes create   ul in it.
            $ul = $("<ul></ul>").appendTo($("#showeducation"));
            $ul.css("position", "relative");
            
            var str = "";

            $inputs.each(function(index) {
                var name = $(this).attr("name");
                var value = $(this).val();
                str = str + "<li>" + name + ":" + value + "</li>";
                education[name] = value;
            });
         
            $ul.append(str);
            $("<img></img>").appendTo($ul).
            addClass("close").
         
            attr("src", this.closeIcon).
         

            on("click", function() {
                $(this).parent().remove();
                MyApp.ResumeData.educations.pop();
            });
            MyApp.ResumeData.educations = MyApp.ResumeData.educations || Array();
            console.log(MyApp.ResumeData.educations.push(education));
        } else {
            alert("please fill all the detail");
        }



    },

    addProject: function() {
        var $projectElem = $("#showproject");
        //all the input of project section
        var $inputs = $(".project_input");
        var project = {};
        if ($inputs.valid()) {
            $ul = $projectElem.find("ul");
            var str = "";
            $inputs.each(function(index) {
                var name;
                var value = $(this).val();

                if (index === 0) {
                    str = str + value;
                    name = $(this).attr("name");
                    project[name] = str;

                } else if (index == 1 && value !== "") {
                    str = str + "(" + value + ")";
                    project[name] = str;
                }

            });
            $li = $("<li>" + str + "</li>").appendTo($ul);
            $li.css("position", "relative");
            $("<img></img>").appendTo($li).
            addClass("close").
            attr("src", this.closeIcon).
            on("click", function() {
                $(this).parent().remove();
                MyApp.ResumeData.projects.splice(MyApp.ResumeData.projects.indexOf($(this).parent().text()), 1);
            });
            MyApp.ResumeData.projects = MyApp.ResumeData.projects || Array();
            console.log(MyApp.ResumeData.projects.push(project));
        } else {
            alert("please fill all the detail");
        }




    },
    addWorkShop: function() {

        var $workshopElem = $("#showworkshop");
        //all the input of workshop section
        var $inputs = $(".workshop_input");
        var workshop = {};
        if ($inputs.valid()) {
            $ul = $workshopElem.find("ul");
            var $li;
            $inputs.each(function(index) {
                $li = $("<li>" + $(this).val() + "</li>").appendTo($ul);
                 name = $(this).attr("name");
                workshop[name] = $(this).val();
            });
            $li.css("position", "relative");
            $("<img></img>").appendTo($li).
            addClass("close").
            attr("src", this.closeIcon).
            on("click", function() {

                console.log(MyApp.ResumeData.workshops.splice(MyApp.ResumeData.workshops.indexOf($(this).parent().text()), 1));
                $(this).parent().remove();
                console.log(MyApp.ResumeData.workshops);
            });
            MyApp.ResumeData.workshops = MyApp.ResumeData.workshops || Array();
            console.log(MyApp.ResumeData.workshops.push(workshop));
        } else {
            alert("please fill all the detail");
        }



    },
    addHobby: function() {

        var $workshopElem = $("#showhobby");
        //all the input of workshop section
        var $inputs = $(".hobby_input");
        var hobby = {};
        if ($inputs.valid()) {
            $ul = $workshopElem.find("ul");
            var $li;
            $inputs.each(function(index) {
                $li = $("<li>" + $(this).val() + "</li>").appendTo($ul);
                 name = $(this).attr("name");
                hobby[name] = $(this).val();
            });
            $li.css("position", "relative");
            $("<img></img>").appendTo($li).
            addClass("close").
            attr("src", this.closeIcon).
            on("click", function() {
                $(this).parent().remove();

                MyApp.ResumeData.hobbies.splice(MyApp.ResumeData.hobbies.indexOf($(this).parent().text()), 1);

                console.log(MyApp.ResumeData.hobbies);
            });
            MyApp.ResumeData.hobbies = MyApp.ResumeData.hobbies || Array();
            console.log(MyApp.ResumeData.hobbies.push(hobby));
        } else {
            alert("please fill all the detail");
        }

    },
    addLanguage: function() {
        //all the input of language section
        var $input = $(".language_input");
        MyApp.ResumeData.skills = MyApp.ResumeData.skills || {};
        MyApp.ResumeData.skills.language = MyApp.ResumeData.skills.language || 
             new Set();
        var val = $input.val();
        if ($input.valid()) {
            if (MyApp.ResumeData.skills.language.has(val)) {
            } else {
                MyApp.ResumeData.skills.language.add(val);
                $("#span_language").text(Array.from(MyApp.ResumeData.skills.language).join(", "));

              if($("#li_language").find(".close").length===0){
                  $("<img></img>").appendTo($("#li_language")).
                addClass("close").
                attr("src", this.closeIcon).
                on("click", function() {
                    $("#span_language").empty();
                    MyApp.ResumeData.skills.tools = new Set();
                    $(this).remove();
                });	
                }
            }
             console.log(MyApp.ResumeData.skills);
        }
    },
    addTool: function() {

        var $input = $(".tool_input");
        MyApp.ResumeData.skills = MyApp.ResumeData.skills || {};
        MyApp.ResumeData.skills.tools = MyApp.ResumeData.skills.tools || 
            new Set()
        
        var val = $input.val();
        if ($input.valid()) {
            if (MyApp.ResumeData.skills.tools.has(val)) {

            } else {
                MyApp.ResumeData.skills.tools.add(val);
                $("#span_tool").text(Array.from(MyApp.ResumeData.skills.tools).join(", "));
                if($("#li_tool").find(".close").length===0){
                  $("<img></img>").appendTo($("#li_tool")).
                addClass("close").
                attr("src", this.closeIcon).
                on("click", function() {
                    $("#span_tool").empty();
                    MyApp.ResumeData.skills.tools = new Set();
                    $(this).remove();
                });	
                }
              
                console.log(MyApp.ResumeData.skills);
            }
        }

    },
    addOperatingSystem: function() {
        var $input = $(".operatingsystem_input");
        MyApp.ResumeData.skills = MyApp.ResumeData.skills || {};
        MyApp.ResumeData.skills.operatingSystem= MyApp.ResumeData.skills.operatingSystem || 
            new Set()
       
        var val = $input.val();
        if ($input.valid()) {
            if (MyApp.ResumeData.skills.operatingSystem.has(val)) {

            } else {
                MyApp.ResumeData.skills.operatingSystem.add(val);
                $("#span_operatingsystem").text(Array.from(MyApp.ResumeData.skills.operatingSystem).join(", "));
                  if($("#li_operatingsystem").find(".close").length===0){
                  	$("<img></img>").appendTo($("#li_operatingsystem")).
                addClass("close").
                attr("src", this.closeIcon).
                on("click", function() {
                    $("#span_operatingsystem").empty();
                    MyApp.ResumeData.skills.operatingSystem = new Set();
                     $(this).remove();
                });
                  }
                
                 console.log(MyApp.ResumeData.skills);
            }
        }


    },
    onSubmit: function() {

       
    }
};