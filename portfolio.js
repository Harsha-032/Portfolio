function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
};
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
};

function scrollTo(){
  const home = document.getElementById('Home');
  const Project = document.getElementById('Project');
  const Skill = document.getElementById('Skill');
  const Education = document.getElementById('Education');
  const Contact = document.getElementById('Contact');
  home.scrollIntoView();
  Project.scrollIntoView();
  Skill.scrollIntoView();
  Education.scrollIntoView();
  Contact.scrollIntoView();

}

function openPopup(){
  const element = document.querySelector('.popup');
  if (element) {
    element.classList.add('open-popup');
  }
}
function closePopup(){
  const element = document.querySelector('.popup');
  if (element) {
    element.classList.remove('open-popup');
  }
}

let currentSection = null;

document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight - 150;
    const documentHeight = document.documentElement.offsetHeight;
    const documentScrollTop = document.documentElement.scrollTop;

    if (
      documentScrollTop >= sectionTop &&
      documentScrollTop < sectionTop + sectionHeight 
    ) {
      const id = section.id;
      if (currentSection !== id) {
        currentSection = id;
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.href.includes(`#${id}`)) {
            link.classList.add('active');
          }
        });
      }
    }
  });
});

document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    };
});


document.addEventListener('click', function(event) {
  if (!event.target.closest('.sidebar') && !event.target.classList.contains('menu')) {
    hidesidebar();
  }
});




