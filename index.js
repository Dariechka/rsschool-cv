const fromAbout = document.getElementById('about');
const fromCode = document.getElementById('code');
const fromProject = document.getElementById('project');
const fromContacts = document.getElementById('contacts');

const toAbout = document.querySelector('.sumary');
const toCode = document.querySelector('.code'); 
const toProject = document.querySelector('.project');
const toContacts = document.querySelector('.contacts');

fromAbout.addEventListener('click', function() {
    let coords = toAbout.getBoundingClientRect();
    window.scrollTo(coords.left, coords.top);
});

fromCode.addEventListener('click', function() {
    let coords = toCode.getBoundingClientRect();
    window.scrollTo(coords.left, coords.top);
});

fromProject.addEventListener('click', function() {
    let coords = toProject.getBoundingClientRect();
    window.scrollTo(coords.left, coords.top);
});

fromContacts.addEventListener('click', function() {
    let coords = toContacts.getBoundingClientRect();
    window.scrollTo(coords.left, coords.top);
});


