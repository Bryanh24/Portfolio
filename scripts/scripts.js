const OpenResumeBtn = document.querySelector('#open-resume-btn');

function OpenResume() {
    ResumeURL = '../files/Bryan-resume.pdf'
    window.open(ResumeURL, '_blank');
}

// Listeners
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;

    header.classList.toggle('scrolling-active', windowPosition);
});

OpenResumeBtn.addEventListener('click', OpenResume);