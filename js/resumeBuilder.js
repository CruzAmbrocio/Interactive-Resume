function inName(name) {

	var nameList = name.trim().split(" ");
	var intName = nameList[0][0].toUpperCase() + nameList[0].slice(1) + ' ' + nameList[1].toUpperCase()
	return intName
}

var bio = {
	"name": "Cruz Ambrocio",
	"role": " Front End Developer",
	"contacts": {
		"mobile": "0000-0000",
		"email": "cruzambrocio1409@gmail.com",
		"github": "CruzAmbrocio",
		"linkedin": "CruzAmbrocio",
		"location": "14.581933,  -90.494787",
		"coordinate1": "14.581933",
		"coordinate2": "-90.494787"
	},
	"welcomeMessage": "Hola que hace!!!",
	"skills": ["Python","HTML","CSS","JavaScript","jQuery","Angular"],
	"biopic": "images/0bender-rodriguez-fumando.png"
};

function displayBio() {
	var formattedName = HTMLheaderName.replace("%data%",inName(bio.name));
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formatedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formatedLinkedin = HTMLlinkedin.replace("%data%",bio.contacts.linkedin);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedSkills = HTMLskills.replace("%data%",bio.skills);


	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formatedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formatedLinkedin);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formatedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formatedLinkedin);
	$("#footerContacts").append(formattedLocation);

	$("#header").append(formattedPic);
	$("#header").append(formattedMessage);

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
		for (skill in bio.skills) {
			$("#skills").append(HTMLskills.replace('%data%',bio.skills[skill]));
		}
	}
}

displayBio()

var work = {
	"jobs": [
		{"employer": "Programming",
		"title": "Cognits",
		"location": "Guatemala GT",
		"dates": "2015",
		"description": "Front-end Developer"
		}
	]
};

function displayWork() {
	$("#workExperience").append(HTMLworkStart);
	for (job in work.jobs) {
		$(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer)+HTMLworkTitle.replace("%data%", work.jobs[job].title));
		$(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[job].description))
	}
}
displayWork();

var education = {
	"schools": [
		{"name": "Cognits",
		"dates": 2015,
		"degree": "Developer",
		"major": ["Front-end"],
		"location": "Guatemala GT",
		"url": "http://www.cognits.co/"
		}
	]
};

function displayEducation() {
	$("#education").append(HTMLschoolStart);
	for (school in education.schools) {
		var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var degrees = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var schoolDegree = schoolName + " " + degrees;
		$(".education-entry:last").append(schoolDegree);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].major))
	};

};

displayEducation();

var projects = {
	"project": [{
		"title": "Weather forecast",
		"date": 2015,
		"description": "This application displays the weather information from anywhere",
		"images": "images/Weather.png",
		"url": "http://cruzambrocio.github.io/frontend-weather-forecast/"		},
		{
		"title": "Maps",
		"date": 2015,
		"description": "Localizate important place using api of Google Maps",
		"images": "images/maps.png",
		"url": "http://cruzambrocio.github.io/Maps_Udaciy/"
		}
	]
}

projects.display = function() {

	for (item in projects.project) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.project[item].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.project[item].date));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.project[item].description));
		var githubUrl = HTMLProjectURL.replace("%#%",projects.project[item].url);
		$(".project-entry:last").append(githubUrl.replace("%data%",projects.project[item].url));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.project[item].images));
	}
}

projects.display();
$("#mapDiv").append(googleMap);
