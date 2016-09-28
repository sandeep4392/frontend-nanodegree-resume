var bio = {
    "name": "Sandeep Kumar Reddy",
    "role": "web developer",
    "contacts": {
        "mobile": "8143824622",
        "email": "mskreddy.95@gmail.com",
        "github": "sandeep4392",
        "location": "hyderabad"
    },
    "skills": ["HTML", "CSS", "C#.Net", "ASP.Net", "Ado.Net"],
    "bioPic": "images/profile.jpg",
    "welcomeMessage": "welcome to resume, i am ready to be hired."
};
bio.displaybio = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};
bio.displaybio();
var work = {
    "jobs": [{
        "employer": "infosys",
        "title": "systems engineer trainee",
        "location": "mysore",
        "dates": "2016-present",
        "description": "just starting",
        "url": "https://www.infosys.com/"
    }, {
        "employer": "udacity",
        "title": "web developer trainee",
        "location": "hyderabad",
        "dates": "1/09/2016-present",
        "description": "started learning in the udacity.",
        "url": "https://www.udacity.com/"
    }]
};
work.displaywork = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace("#", work.jobs[i].url);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedemployer + formattedTitle;
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formatteddescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedlocation);
        $(".work-entry:last").append(formattedDate);
        $(".work-entry:last").append(formatteddescription);
    }
};
work.displaywork();
var projects = {
    "projects": [{
        "title": "Sampling of an image using MATLAB.",
        "dates": "2014",
        "url": "https://www.tutorialspoint.com/dip/concept_of_sampling.htm",
        "description": "In this project we dealt with the basics of image processing and sampling techniques by using an image.",
        "images": [
            "images/project1-1.jpg",
            "images/project1-2.jpg"
        ]
    }, {
        "title": "Compressive sensing in direct sequence spread spectrum systems.",
        "dates": "2016",
        "url": "https://www.researchgate.net/publication/51948351_Demodulating_Subsampled_Direct_Sequence_Spread_Spectrum_Signals_usingCompressive_Signal_Processing",
        "description": "This is a final year project in which we performed compressive sensing in DSSS systems by using different sampling rations using MATLAB.",
        "images": [
            "images/project2-1.jpg",
            "images/project2-2.jpg"
        ]
    }]
};
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formatteddescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formatteddescription);
        if (projects.projects[i].images.length > 0) {
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();
var education = {
    "schools": [{
        "name": "Kluniversity",
        "location": "vijayawada",
        "degree": "b.tech",
        "dates": "2012-2016",
        "major": ["ece", "networking"],
        "url": "http://www.kluniversity.in/"
    }, {
        "name": "chaitanya",
        "location": "vijayawada",
        "degree": "inter",
        "dates": "2010-2012",
        "major": ["mpc", "networking"],
        "url": "http://srichaitanya.net/"
    }],
    "onlineCourses": [{
        "title": "Front end webdeveloper",
        "school": "udacity",
        "dates": "2016-2017",
        "url": "https://www.udacity.com/",
        "urltitle": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": ".net developer",
        "school": "microsoft",
        "dates": "2016-2017",
        "url": "https://www.microsoft.com/",
        "urltitle": "https://mva.microsoft.com/en-US/training-courses/introduction-to-asp-net-core-formerly-asp-net-5--13786"
    }]
};
education.edisplay = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedname = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
        $(".education-entry:last").append(formattedname);
        var formattedlocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedlocation);
        var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formatteddegree);
        var formatteddates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formatteddates);
        if (education.schools[i].major.length > 0) {
            for (var j = 0; j < education.schools[i].major; j++) {
                var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[i].major[j]);
                $(".education-entry:last").append(formattedmajor);
            }
        }
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title).replace("#", education.onlineCourses[k].urltitle);
        $(".education-entry:last").append(formattedTitle);
        var formattedonlinename = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        $(".education-entry:last").append(formattedonlinename);
        var formattedonlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
        $(".education-entry:last").append(formattedonlinedates);
        var formattedonlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url).replace("#", education.onlineCourses[k].url);
        $(".education-entry:last").append(formattedonlineurl);
    }
};
education.edisplay();
$("#mapDiv").append(googleMap);