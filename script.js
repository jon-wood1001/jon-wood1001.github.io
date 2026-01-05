let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+id+' ]').classList.add('active')
            })
        }
    })
}

// This is poor practice. However, in theory, GitHub Pages does allow pulling from a JSON file.
// This is a work-around to allow a more seamless transfer of data.
// Data for the website.
const experience = {
    0 : {
        "title" : "IT Programmer Analyst for Web Applications (Intern)",
        "company" : "American Trim",
        "range" : "January 2025 - September, 2025",
        "responisbilities" : [
            "Developed and maintained web applications using PHP, HTML5, CSS3, and JavaScript to implement new features and resolve issues.",
            "Analyzed user requirements, translating them into technical specifications and functional solutions.",
            "Created technical documentation and provided user support for deployed web tools."
        ],
        "skills" : [
            "PHP",
            "HTML5",
            "CSS3",
            "JavaScript"
        ],
        "link" : "https://www.linkedin.com/company/american-trim/posts/?feedView=all",
    }
};
const projects = {
    0 : {
        "title" : "DERBi PIE Integration",
        "description" : "<p>Senior project in university. Worked with a team to integrate <a style='color:red; font-weight: 300; border-bottom: 1px solid red;' target='_blank' href='https://wordnet.princeton.edu/'>WordNet<i class='bx bx-link-external'></i></a> into a application known as <a style='color:red; font-weight: 300; border-bottom: 1px solid red;' target='_blank' href='https://derbipie.as.uky.edu/search'>DERBi PIE<i class='bx bx-link-external'></i></a>. The main goal was to map word roots to at least one WordNet synset.</p>",
        "skills" : [
            "Python",
            "NLTK",
            "Jupyter"
        ],
        "link" : "https://github.com/jon-wood1001/DERBi-PIE",
    },
    1 : {
        "title" : "Portfolio Web Page",
        "description" : "A curated showcase of my work, skills, and creative journey. Here, you’ll find projects that highlight my expertise in web programming and software development.",
        "skills" : [
            "HTML5",
            "CSS3",
            "JavaScript"
        ],
        "link" : "https://github.com/jon-wood1001/jon-wood1001.github.io",
    },
    2 : {
        "title" : "Goal Tracker",
        "description" : "An application that allows the user to log notable milestones they had set for themselves. Integrated a reward-based system for achieving milestones.",
        "skills" : [
            "Java",
            "Spring Boot",
            "Swing"
        ],
        "link" : "",
    },
    3 : {
        "title" : "Unity Projects",
        "description" : "Programmed and designed 2D and 3D gaming experiences within the Unity Engine. Focused on complex puzzles and intuitive game mechanics for a smooth and enjoyable user experience.",
        "skills" : [
            "Unity Game Engine",
            "C#",
            "2D/3D Design",
        ],
        "link" : "",
    }
};

function createExperienceBox(index, experience) {
    // This is the parent experience-info div.
    var experienceContainer = document.getElementById("experience-container");
    var experienceBox = document.createElement("div");
    experienceBox.setAttribute("class","experience-box");
    // This is the experience-info div.
    var experienceInfo= document.createElement("div");
    experienceInfo.setAttribute("class","experience-info");
    // This is the experience-info header.
    var experienceHeader = document.createElement("header");
    experienceHeader.setAttribute("class","inner-info");
    // This is the top div.
    var experienceTop = document.createElement("div");
    experienceTop.setAttribute("class","top");
    var experienceTop_a = document.createElement("a");
    experienceTop_a.setAttribute("target", "_blank");
    experienceTop_a.setAttribute("href", experience[index]["link"]);
    var experienceTop_i = document.createElement("i");
    experienceTop_i.setAttribute("class", "bx bx-link-external");
    experienceTop_a.append(experienceTop_i);
    experienceTop.append(experienceTop_a);
    experienceHeader.appendChild(experienceTop);
    // This is the experience-title h4.
    var experienceTitle = document.createElement("h4");
    experienceTitle.setAttribute("class", "experience-title");
    experienceTitle.innerHTML = experience[index]["title"];
    // This is the company h4.
    var experienceCompany = document.createElement("h4");
    experienceCompany.setAttribute("class", "company");
    experienceCompany.innerHTML = experience[index]["company"];
    // This is the range h4.
    var experienceRange = document.createElement("h4");
    experienceRange.setAttribute("class", "range");
    experienceRange.innerHTML = experience[index]["range"];
    // This is the responsiblities list.
    var experienceResponsibilitesDiv = document.createElement("div");
    experienceResponsibilitesDiv.setAttribute("class", "experience-desc");
    var experienceResponsibilitesUL = document.createElement("ul");
    for(let i = 0; i < experience[index]["responisbilities"].length; i++) {
        console.log("Iteration number:", experience[index]["responisbilities"][i]);
        var experienceResponsibilitesLI = document.createElement("li");
        experienceResponsibilitesLI.innerHTML = experience[index]["responisbilities"][i];
        experienceResponsibilitesUL.appendChild(experienceResponsibilitesLI);
    }
    experienceResponsibilitesDiv.appendChild(experienceResponsibilitesUL);
    // This is the skillset list.
    var experienceFooter = document.createElement("footer");
    experienceFooter.setAttribute("class", "skillset");
    var experienceSkillsUL = document.createElement("ul");
    experienceSkillsUL.setAttribute("class", "skills");
    for(let i = 0; i < experience[index]["skills"].length; i++) {
        experienceSkillsUL.innerHTML += '<li>'+ experience[index]["skills"][i] +'</li>\r\n';
    }
    experienceFooter.appendChild(experienceSkillsUL);
    // Appending the appropriate children to their respective parent.
    experienceHeader.appendChild(experienceTitle);
    experienceHeader.appendChild(experienceCompany);
    experienceHeader.appendChild(experienceRange);
    experienceHeader.appendChild(experienceResponsibilitesDiv);
    experienceInfo.appendChild(experienceHeader);
    experienceInfo.appendChild(experienceFooter);
    experienceBox.appendChild(experienceInfo);
    experienceContainer.appendChild(experienceBox);
}

function createProjectsBox(index, projects) {
    // This is the parent experience-info div.
    var projectContainer = document.getElementById("projects-container");
    var projectBox = document.createElement("div");
    projectBox.setAttribute("class","projects-box");
    // This is the experience-info div.
    var projectInfo= document.createElement("div");
    projectInfo.setAttribute("class","projects-info");
    // This is the experience-info header.
    var projectHeader = document.createElement("header");
    projectHeader.setAttribute("class","inner-info");
    // This is the top div.
    var projectTop = document.createElement("div");
    projectTop.setAttribute("class","top");
    var projectTop_a = document.createElement("a");
    projectTop_a.setAttribute("target", "_blank");
    projectTop_a.setAttribute("href", projects[index]["link"]);
    var projectTop_i = document.createElement("i");
    projectTop_i.setAttribute("class", "bx bx-link-external");
    projectTop_a.append(projectTop_i);
    if(projects[index]["link"] !== "") {
        projectTop.append(projectTop_a);
    }
    projectHeader.appendChild(projectTop);
    // This is the experience-title h4.
    var projectTitle = document.createElement("h4");
    projectTitle.setAttribute("class", "project-title");
    projectTitle.innerHTML = projects[index]["title"];
    // This is the description.
    var projectDesc = document.createElement("div");
    projectDesc.setAttribute("class", "project-desc");
    projectDesc.innerHTML = projects[index]["description"];
    // This is the skillset list.
    var projectFooter = document.createElement("footer");
    projectFooter.setAttribute("class", "skillset");
    var projectSkillsUL = document.createElement("ul");
    projectSkillsUL.setAttribute("class", "skills");
    for(let i = 0; i < projects[index]["skills"].length; i++) {
        projectSkillsUL.innerHTML += '<li>'+ projects[index]["skills"][i] +'</li>\r\n';
    }
    projectFooter.appendChild(projectSkillsUL);
    // Appending the appropriate children to their respective parent.
    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(projectDesc);
    projectInfo.appendChild(projectHeader);
    projectInfo.appendChild(projectFooter);
    projectBox.appendChild(projectInfo);
    projectContainer.appendChild(projectBox);
}
// Initializing Experience Boxes
for(let i = 0; i < Object.keys(experience).length; i++) {
    createExperienceBox(i, experience);
}
//Initializing Project Boxes
for(let i = 0; i < Object.keys(projects).length; i++) {
    createProjectsBox(i, projects);
}