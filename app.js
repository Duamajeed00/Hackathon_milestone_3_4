var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0
  ? void 0
  : _a.addEventListener("submit", function (event) {
      event.preventDefault();
      var nameElement = document.getElementById("name");
      var emailElement = document.getElementById("email");
      var phoneElement = document.getElementById("phone");
      var educationElement = document.getElementById("education");
      var experienceElement = document.getElementById("experience");
      var skillsElement = document.getElementById("skills");
      var name = "";
      var email = "";
      var phone = "";
      var education = "";
      var experience = "";
      var skills = "";
      if (
        nameElement &&
        emailElement &&
        educationElement &&
        experienceElement &&
        skillsElement
      ) {
        name = nameElement.value;
        email = emailElement.value;
        phone = phoneElement.value;
        education = educationElement.value;
        experience = experienceElement.value;
        skills = skillsElement.value;
      } else {
        console.error("One or more elements are missing");
        return;
      }
      var resumeOutput =
        '\n    <h2>Resume</h2>\n    <p><strong>Name:</strong> <span id="edit.name" class="editable"> '
          .concat(
            name,
            ' </span> </p>\n    <p><strong>Email:</strong> <span id="edit.email" class="editable"> '
          )
          .concat(
            email,
            ' </span> </p>\n    <p><strong>Phone:</strong>  <span id="edit.phone" class="editable"> '
          )
          .concat(
            phone,
            ' </span> </p>\n\n    <h3>Education</h3>\n    <p id="edit.education" class="editable">'
          )
          .concat(
            education,
            '</p>\n\n    <h3>Experience</h3>\n    <p id="edit.experience" class="editable">'
          )
          .concat(
            experience,
            '</p>\n\n    <h3>Skills</h3>\n    <p id="edit.skills" class="editable">'
          )
          .concat(skills, "</p>\n    ");
      var resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        activateEditFunctionality();
      } else {
        console.error("The resume output element is missing");
      }
    });
function activateEditFunctionality() {
  var editableElements = document.querySelectorAll(".editable");
  editableElements.forEach(function (element) {
    element.addEventListener("click", function (event) {
      var target = event.target;
      var originalText = target.innerText;
      // Create an input element to allow editing
      var input = document.createElement("input");
      input.type = "text";
      input.value = originalText;
      input.classList.add("edit-input");
      // Replace the current text with the input field
      target.innerHTML = "";
      target.appendChild(input);
      input.focus();
      // Handle saving the edited value
      input.addEventListener("blur", function () {
        target.innerHTML = input.value || originalText;
      });
      // Save on pressing Enter key
      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          target.innerHTML = input.value || originalText;
        }
      });
    });
  });
}

