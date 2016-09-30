$(function(){

jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please"); 


$('form').validate({
onfocusout:function(element){
	$(element).valid();
},
rules: {
	firstname:{
		
		required:true,
		minlength:3,
		lettersonly: true,
		maxlength:15
	},
	lastname:{
		required:true,
		minlength:3,
		lettersonly: true,
		maxlength:15
	},
	email:{
		required:true,
		email:true
	},
	phone:{
		required:true,
		minlength:10,
		maxlength:10

	},
	address:{
		required:true,
	},
	dob:{
		required:true,
		date:true
	},
	objective:{
		required:true,
		lettersonly: true
	},
	name:{
		required:true,
		lettersonly: true

	},
	language:{
		maxlength:10
	},
	tool:{
		maxlength:10
	},
	operatingsystem:{
		maxlength:15
	},
	year:{
		required:true

	},
	university:{
		required:true,
		lettersonly: true
	},
	percentage:{
		required:true
	},
	url:{
		
		url:true
	},
	project:{
		required:true
	},
	workshop:{
		required:true
	},
	hobby:{
		required:true
	}

},
submitHandler:function(form){
	 var $inputs = $(".basic_input");

        //check every detail  is set or not
        if ($inputs.valid() && MyApp.ResumeData.skills && MyApp.ResumeData.skills.language && MyApp.ResumeData.skills.tools && MyApp.ResumeData.skills.operatingSystem && MyApp.ResumeData.educations && MyApp.ResumeData.hobbies && MyApp.ResumeData.workshops && MyApp.ResumeData.projects) {
            $inputs.each(function() {
                MyApp.ResumeData[$(this).attr("name")] = $(this).val();
            });
            MyApp.ResumeData.skills.language = Array.from(MyApp.ResumeData.skills.language) || [];
            MyApp.ResumeData.skills.tools = Array.from(MyApp.ResumeData.skills.tools) || [];
            MyApp.ResumeData.skills.operatingSystem = Array.from(MyApp.ResumeData.skills.operatingSystem) || [];
            myStorage.setItem("data_ritesh", JSON.stringify(MyApp.ResumeData));
            console.log(MyApp.ResumeData);
            window.location = "index.html";
        } else {
            alert("please fill all the details");
            console.log(MyApp.ResumeData);
        }

}
});


});




