const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Form handling
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;

resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Update the resume dynamically
    document.getElementById('displayName')!.textContent = name;
    document.getElementById('displayEmail')!.textContent = email;
    document.getElementById('displayEmail')!.setAttribute('href', `mailto:${email}`);
    document.getElementById('displayPhone')!.textContent = phone;
    document.getElementById('displayEducation')!.textContent = education;
    document.getElementById('displayWorkExperience')!.textContent = workExperience;

    const skillsList = document.getElementById('displaySkills')!;
    skillsList.innerHTML = ''; // Clear existing skills
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
});
