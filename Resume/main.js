// program for creating resume without using html

const div = document.createElement("div");
div.className = "Information";
div.style.position = "relative";
div.style.paddingInline = "15em";

// Contact section

{
  let h1 = document.createElement("h1");
  h1.className = "name";
  h1.appendChild(document.createTextNode("Nisha Maurya"));
  div.appendChild(h1);
}

// Email section
{
  let h3 = document.createElement("h3");
  h3.className = "email";
  let spanEmail = document.createElement("span");
  spanEmail.innerText = "Email:  ";
  h3.appendChild(spanEmail);
  h3.appendChild(document.createTextNode("nishamaurya7499@gmail.com"));
  div.appendChild(h3);
}

// Address section
{
  let addressh3 = document.createElement("h3");
  addressh3.className = "address";
  let spanAddress = document.createElement("span");
  spanAddress.innerText = "Address:  ";
  addressh3.appendChild(spanAddress);
  addressh3.appendChild(document.createTextNode("Bareilly, Uttar Pradesh"));
  div.appendChild(addressh3);
}

// Social media links

{
  let linkedIn = document.createElement("a");
  let target = document.createAttribute("target");
  let linkedInHref = document.createAttribute("href");
  linkedInHref.value = "https://www.linkedin.com/in/nisha-maurya03/";
  target.value = "_blank";
  linkedIn.innerText = "LinkedIn";
  linkedIn.style.color = "black";
  linkedIn.setAttributeNode(linkedInHref);
  linkedIn.setAttributeNode(target);
  div.appendChild(linkedIn);
}

// Github link
{
  let github = document.createElement("a");
  let target = document.createAttribute("target");
  let githubHref = document.createAttribute("href");
  let nextline = document.createElement("br");
  let nextline2 = document.createElement("br");
  githubHref.value = "https://github.com/98Nishi";
  target.value = "_blank";
  github.innerText = "Github";
  github.style.color = "black";
  github.setAttributeNode(githubHref);
  github.setAttributeNode(target);
  div.appendChild(nextline2);
  div.appendChild(nextline);
  div.appendChild(github);
}

// profile pic
{
  let img = document.createElement("img");
  let src = document.createAttribute("src");
  src.value = "./nisha.png";
  img.setAttributeNode(src);
  img.style.width = "12%";
  img.style.position = "absolute";
  img.style.top = "0";
  img.style.left = "68.5%";
  img.style.borderRadius = "85%";
  img.style.objectFit = "cover";
  div.appendChild(img);
}

// creating line for separating
{
  let hr = document.createElement("hr");
  hr.style.borderTop = "2px solid grey";
  div.appendChild(hr);
}

// About me section

{
  let about = document.createElement("div");
  about.className = "about";
  let paragraph = document.createElement("p");
  let aboutMe =
    "Motivated web developer with a strong grasp of HTML, CSS, and JavaScript. Experienced in building user-friendly and responsive web applications. Enjoys problem-solving and staying updated with the latest web development trends. Committed to producing high-quality code and working effectively within teams to ensure project success.";
  let spanAbout = document.createElement("span");
  spanAbout.innerText = "About Me:  ";
  paragraph.appendChild(spanAbout);
  paragraph.appendChild(document.createTextNode(aboutMe));
  about.appendChild(paragraph);
  div.appendChild(about);
}

// ========================================
{
  let hr = document.createElement("hr");
  hr.style.borderTop = "2px solid grey";
  div.appendChild(hr);
}
// =========================================

// Education
{
  let education = document.createElement("div");
  let text = document.createElement("p");
  let edu = document.createElement("p");
  let clg = document.createElement("p");
  let course = document.createElement("p");
  text.innerText = "Education:  ";
  edu.innerText = "Diploma";
  clg.innerText = "Government Polytechnic Bareilly";
  course.innerText = "Pursuing Full Stack Course from PW Skills.";
  education.appendChild(text);
  education.appendChild(edu);
  education.appendChild(clg);
  education.appendChild(course);
  div.appendChild(education);
  // css style
  text.style.fontSize = "1.7em";
  text.style.fontWeight = "bold";
  edu.style.fontWeight = "bold";
  clg.style.fontWeight = "bold";
  course.style.fontWeight = "bold";
  // edu.style.color = '';
  // clg.style.color = 'Grey';
}

// ========================================
{
  let hr = document.createElement("hr");
  hr.style.borderTop = "2px solid grey";
  div.appendChild(hr);
}
// =========================================

{
  //Skill section
  let skillArr = [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "DSA",
    { Database: ["mySQL", "MongoDB"] },
  ];
  let skillBox = document.createElement("div");
  let title = document.createElement("p");
  let list = document.createElement("ul");

  skillArr.forEach((value) => {
    let li = document.createElement("li");

    let textNode = document.createTextNode(
      typeof value === "object"
        ? `${Object.keys(value)[0]}: ${
            Array.isArray(value[Object.keys(value)[0]])
              ? value[Object.keys(value)[0]].join(",")
              : value[Object.keys(value)[0]]
          }`
        : value
    );

    li.appendChild(textNode);
    list.appendChild(li);
  });

  title.innerText = "Skills:";
  skillBox.append(title, list);
  div.appendChild(skillBox);

  // Apply CSS styles
  title.style.fontSize = "1.7em";
  title.style.fontWeight = "bold";
}

// ========================================
{
  let hr = document.createElement("hr");
  hr.style.borderTop = "2px solid grey";
  div.appendChild(hr);
}
// =========================================

{
  //Project section

  let projectName = ["PortFolio Website", "TO-DO WebApp"];
  let projectLink = [
    "https://portfolio021.netlify.app/",
    "https://app-todo-0b498b.netlify.app/",
  ];
  let gitRepoLink = [
    " https://github.com/98Nishi/Portfolio",
    " https://github.com/98Nishi/GWM-Web/tree/main/TODO%20app",
  ];
  let projectBox = document.createElement("div");
  let title = document.createElement("p");
  title.innerText = "Projects:";
  let infoList = document.createElement("ul");

  let projectInfo1 = {
    element: ["HTML5", "CSS3", "JavaScript"],
    achievement:
      "This project has provided me with valuable experience in web development, including HTML, CSS, and JavaScript, as well as design principles, performance optimization, and the ability to effectively showcase my work.",
    gitRepo: gitRepoLink[0],
  };

  let projectInfo2 = {
    element: ["HTML5", "CSS3", "JavaScript"],
    achievement:
      "By creating a todo web app, I acquired hands-on experience in web development, while also mastering DOM manipulation, event handling, UX design principles.",
    gitRepo: gitRepoLink[1],
  };

  projectName.map((value, idx) => {
    let li = document.createElement("li");
    let aTag = document.createElement("a");
    let projectHref = document.createAttribute("href");

    aTag.innerText = projectName[idx];
    projectHref.value = projectLink[idx];
    aTag.setAttributeNode(projectHref);
    li.appendChild(aTag);

    // Add project information to the list item
    let projectInfo;
    if (idx === 0) {
      projectInfo = projectInfo1;
    } else if (idx === 1) {
      projectInfo = projectInfo2;
    }

    let infoParagraph = document.createElement("p");
    let elementsText = `Elements: ${
      Array.isArray(projectInfo.element) ? projectInfo.element.join(", ") : ""
    }`;
    let achievementText = `Achievements: ${projectInfo.achievement}`;
    let gitLink = document.createElement("a");
    gitLink.innerText = "GitHub Repo";
    gitLink.href = projectInfo.gitRepo;
    gitLink.target = "_blank";

    infoParagraph.innerHTML = `${elementsText}<br>${achievementText}<br>`;
    // infoParagraph.innerText = `${elementsText}\n${achievementText}\n`;
    infoParagraph.appendChild(gitLink);
    li.appendChild(infoParagraph);

    infoList.appendChild(li);

    // css
    title.style.fontSize = "1.7em";
    title.style.fontWeight = "bold";
  });

  projectBox.appendChild(title);
  projectBox.appendChild(infoList);
  div.appendChild(projectBox);
}

// ========================================
{
  let hr = document.createElement("hr");
  hr.style.borderTop = "2px solid grey";
  div.appendChild(hr);
}
// =========================================

// certificates

{
  // certificates
  let certificate = document.createElement("div");
  let title = document.createElement("p");
  let para = document.createElement("p");
  let list = document.createElement("ul");
  let links = [
    "https://drive.google.com/file/d/1C0-0blqMD3jjBF61-Fc_R0ikIvs-IFCM/view",
    "https://drive.google.com/file/d/1OWJlNIuhuBv9aVD-fmTceZy8KjeVAh3r/view",
    "https://olympus.mygreatlearning.com/courses/31782/certificate",
  ];
  let certiName = ["Groww With Code", "OASIS INFOBYTE ", "Bootstrap"];
  title.innerText = "Internship and Certificates:";
  para.innerText =
    "As a web developer intern, I actively contributed to web development projects, gaining practical experience in HTML, CSS, and JavaScript while collaborating with the development team to create responsive and user-friendly web applications. During my internship, I developed a calculator and a tribute page using HTML, CSS, and JavaScript.The calculator provided accurate calculations, and the tribute page honored a notable individual with informative content and responsive design.";

  links.map((value, idx) => {
    let li = document.createElement("li");
    let aTag = document.createElement("a");

    aTag.href = links[idx];
    aTag.target = "_blank";
    aTag.innerText = certiName[idx];
    li.appendChild(aTag);
    list.appendChild(li);
  });
  certificate.appendChild(title);
  certificate.appendChild(para);
  certificate.appendChild(list);

  div.appendChild(certificate);

  // css
  para.style.marginLeft = "20px";
  title.style.fontSize = "1.7em";
  title.style.fontWeight = "bold";
}

// ========================================
{
  let hr = document.createElement("hr");
  hr.style.borderTop = "2px solid grey";
  div.appendChild(hr);
}
// =========================================

{
  let language = ["English", "Hindi"];
  let languageBox = document.createElement("div");
  let title = document.createElement("p");
  let printList = document.createElement("ul");

  language.map((value) => {
    let li = document.createElement("li");

    li.innerText = value;
    printList.appendChild(li);
  });
  title.innerText = "Language:";
  languageBox.appendChild(title);
  languageBox.appendChild(printList);
  div.appendChild(languageBox);

  // css

  title.style.fontSize = "1.5em";
  title.style.fontWeight = "bold";
}

document.body.appendChild(div);
