document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    let name = "";
    let email = "";
    let phone = "";
    let education = "";
    let experience = "";
    let skills = "";

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

    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> <span id="edit.name" class="editable"> ${name} </span> </p>
    <p><strong>Email:</strong> <span id="edit.email" class="editable"> ${email} </span> </p>
    <p><strong>Phone:</strong>  <span id="edit.phone" class="editable"> ${phone} </span> </p>

    <h3>Education</h3>
    <p id="edit.education" class="editable">${education}</p>

    <h3>Experience</h3>
    <p id="edit.experience" class="editable">${experience}</p>

    <h3>Skills</h3>
    <p id="edit.skills" class="editable">${skills}</p>
    `;

    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
      activateEditFunctionality();
    } else {
      console.error("The resume output element is missing");
    }
  });

function activateEditFunctionality() {
  const editableElements = document.querySelectorAll(".editable");

  editableElements.forEach((element) => {
    element.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const originalText = target.innerText;

      // Create an input element to allow editing
      const input = document.createElement("input");
      input.type = "text";
      input.value = originalText;
      input.classList.add("edit-input");

      // Replace the current text with the input field
      target.innerHTML = "";
      target.appendChild(input);
      input.focus();

      // Handle saving the edited value
      input.addEventListener("blur", () => {
        target.innerHTML = input.value || originalText;
      });

      // Save on pressing Enter key
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          target.innerHTML = input.value || originalText;
        }
      });
    });
  });
}

