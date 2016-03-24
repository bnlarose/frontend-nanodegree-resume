/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "Berhane-Hiwet N. La Rose",
  "role" : "Systems Developer",
  "contacts" : {
    "mobile" : 3059805,
    "email" : "berhane.larose@gmail.com",
    "github" : "https://github.com/bnlarose",
    "location" : "Trinidad and Tobago"
  },
  "picture" : "images/me.jpg",
  "welcomeMsg" : "The beginning of knowledge is the discovery of something we do not understand- Frank Herbert.",
  "skills" :
    ["Java", "Python", "PHP", "HTML5", "JavaScript", "MySQL", "SQLite"
      ]
};

var work = {
  "jobs" : [
    {
      "employer" : "Cable and Wireless Communications Limited",
      "title" : "Internet Helpdesk",
      "location" : "294 Southern Main Road, Cunupia",
      "dates" : "Jan 2015 - Present",
      "description" : "Effectively manage and resolve multinational customer queries and issues, while maintaining an average handle time of under 7 minutes and a personal customer satisfaction rate of over 95%. Maintain comprehensive knowledge of company policies and business practices across multiple territories. Keep abreast of advances in IT, as they pertain to networking, hardware, software, Operating Systems and mobile devices. Correctly classify and escalate customer queries and/or issues to other departments/teams, both locally and regionally"
    },
    {
      "employer" : "Market Facts & Opinions 2000 Ltd.",
      "title" : "Executive Interviewer and Office Editor",
      "location" : "Tragerete Road, Port-of-Spain",
      "dates" : "June 2014 - Dec 2014",
      "description" : "Stringently assessed quality of questionnaire/interview data—ensures data is both relevant and accurate. Ensured proper capture of open-ended and verbatim responses. Effectively co-ordinated with, and interviewed executive-level individuals in order to satisfy client-relative market research. Delivered completed questionnaires to Project Manager on scheduled basis"
    },
    {
      "employer" : "Under U Specialised Lingerie",
      "title" : "I.T. Manager",
      "location" : "Shops of Arima, Tumpuna Road, Arima",
      "dates" : "January 2014",
      "description" : "Established and modified inventory identification and cataloguing system for over 15 product categories. Managed data collection by staff for use in inventory cataloguing system. Began implementation of an integrated sales interface encompassing both a physical and an online Point-of-Sale. Performed research activities to better align project design and processes with the needs of senior management."
    }
  ]
};

var education = {
  "schools" : [
    {
      "name" : "School of Business and Computer Science",
      "location" : "Sagan Drive, Champs Fleurs",
      "degree" : "BSc",
      "major" : ["Computing and Systems Development"],
      "years" : "2014 - present"
    },
    {
      "name" : "School of Business and Computer Science",
      "location" : "Sagan Drive, Champs Fleurs",
      "degree" : "Diploma",
      "major" : ["Business Information Systems"],
      "years" : "2005 - 2011"
    }
  ],
  "online_courses" : [
    {
      "title" : "JavaScript Basics",
      "school" : "Udacity",
      "date" : "2016",
      "url" : "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
      "title" : "How to Use Git and GitHub",
      "school" : "Udacity",
      "date" : "2016",
      "url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    },
    {
      "title" : "Programming Fundamentals with Python",
      "school" : "Udacity",
      "date" : "2016",
      "url" : "https://www.udacity.com/course/programming-foundations-with-python--ud036"
    }
  ]
};

function displayWork () {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location)
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployer + " " + formattedTitle);
    $("#workExperience").append(formattedLoc);
    $("#workExperience").append(formattedDates);
    $("#workExperience").append(formattedDesc);
  }
}

function displaySchool () {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years)
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolName + formattedDegree);
    $("#education").append(formattedSchoolDates + " " + formattedSchoolLoc);
    $("#education").append(formattedMajor);
  }
  $("#education").append(HTMLonlineClasses);
  for (course in education.online_courses) {
    var formattedCourseProvider = HTMLonlineSchool.replace("%data%", education.online_courses[course].school);
    var formattedCourseURL = HTMLonlineURL.replace("%data%", education.online_courses[course].url);
    var formattedCourseDates = HTMLonlineDates.replace("%data%", education.online_courses[course].date)
    var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.online_courses[course].title);
    $("#education").append( formattedCourseTitle + formattedCourseProvider);
    $("#education").append(formattedCourseDates);
    $("#education").append(formattedCourseURL);
  }
}

function locationizer(work_obj) {
  var locations = [];
  for (work in work_obj.jobs) {
    var loc = work_obj.jobs[work].location;
    locations.push(loc);
  }
  return locations;
}

$("#main").append(internationalizeButton);

function inName (name) {
  var names = name.trim().split(" ");
  names[1] = names[1].toUpperCase();
  names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1);
  return names[0] + " " + names[1];
}

$("#mapDiv").append(googleMap);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email)


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedWelcome);
$("#header").append(formattedPicture);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGitHub);
$("#footerContacts").append(formattedLocation);

if (bio.skills.length >= 1) {
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#header").append(formattedSkill);
  }
}
if (education.schools.length >= 1) {
  displaySchool();
}

if (work.jobs.length >= 1){
  displayWork();
}