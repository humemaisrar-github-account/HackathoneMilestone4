var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById('resume-display');
//handle form submission
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault(); //prevent page reload
    //collect input value
    var profilePictureInput = document.getElementById("profilePicture");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //profile pic
    var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";
    //generate resume below dynamically
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class = \"profilePicture\">") : "", "\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">").concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n\n\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>");
    //diplay resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The Resume dislay element is missing.");
    }
});
