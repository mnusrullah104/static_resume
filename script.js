var toggleButton = document.getElementById('toggleButton');
var body = document.body;
toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
// Form handling
var resumeForm = document.getElementById('resumeForm');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Update the resume dynamically
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayEmail').setAttribute('href', "mailto:".concat(email));
    document.getElementById('displayPhone').textContent = phone;
    document.getElementById('displayEducation').textContent = education;
    document.getElementById('displayWorkExperience').textContent = workExperience;
    var skillsList = document.getElementById('displaySkills');
    skillsList.innerHTML = ''; // Clear existing skills
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
});
