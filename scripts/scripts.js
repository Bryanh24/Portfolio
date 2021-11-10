const OpenResumeBtn = document.querySelector('#open-resume-btn');

function OpenResume() {
    ResumeURL = 'https://bryanh24.github.io/Portfolio/files/Bryan-resume.pdf'
    window.open(ResumeURL, '_blank');
}

// Listeners
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    let ScreenWidth = screen.width >= 768;

    header.classList.toggle('scrolling-active', windowPosition && ScreenWidth);
});

OpenResumeBtn.addEventListener('click', OpenResume);