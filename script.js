window.addEventListener('DOMContentLoaded', () => {
    // Skills animation
    const skillsContainer = document.querySelector('.skills-container');
    const skillLevels = document.querySelectorAll('.skill-level');

    setTimeout(() => {
        skillsContainer.classList.add('visible');
    }, 200);

    skillLevels.forEach(skill => {
        if (skill.classList.contains('html-level')) {
            skill.style.width = '90%';
        } else if (skill.classList.contains('css-level')) {
            skill.style.width = '85%';
        } else if (skill.classList.contains('js-level')) {
            skill.style.width = '80%';
        } else if (skill.classList.contains('react-level')) {
            skill.style.width = '75%';
        } else if (skill.classList.contains('spring-level')) {
            skill.style.width = '70%';
        }
        else if (skill.classList.contains('sql-level')) {
            skill.style.width = '75%';
        }
    });

    // Projects animation
    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.classList.add('visible');
        }, index * 300);
    });
});
