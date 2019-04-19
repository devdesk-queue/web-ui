class Person { // Person card Template
    constructor(img, name, title, github, twitter){
        this.img = img;
        this.name = name;
        this.title = title;
        this.github = github;
        this.twitter = twitter;
    }
}

const people = []; // Empty Person array

people.push( // Creates new person to add to list
    new Person("/Images/Avatars/Carlos.PNG", "Carlos Lantigua", "Team Lead", "CLantigua2", "codeLantigua"),
    new Person("/Images/Avatars/William.PNG", "William Connatser", "Frontend Developer", "WilliamConnatser", "ConnatserW"),
    new Person("/Images/Avatars/Jonathan.PNG", "Jonathan Picazo", "Backend Developer", "macjabeth", "macjabeth"),
    new Person("/Images/Avatars/Pavol.PNG", "Pavol Karas", "Backend Developer", "Pav0l", "KarasPavol"),
    new Person("/Images/Avatars/Triston.PNG", "Triston Armstrong", "UI Developer", "Tarmstrong95", "Triston08227721")
)

const cardCreater = (i, n, t, gh, tw) => { //Creates DOM elements
    const section = document.querySelector(".about-cont");
    const div = document.createElement('div');
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const a_gh = document.createElement("a");
    const a_tw = document.createElement("a");
    const itag_gh = document.createElement('i');
    const itag_tw = document.createElement('i');

    section.appendChild(div);
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(a_gh);
    div.appendChild(a_tw);
    a_gh.appendChild(itag_gh);
    a_tw.appendChild(itag_tw);

    div.className = 'pers-card';
    itag_gh.className = 'fab fa-github';
    itag_tw.className = 'fab fa-twitter';
    itag_gh.classList.add('gh');
    itag_tw.classList.add('tw');
    a_gh.setAttribute('href', `https://github.com/${gh}`);
    a_gh.setAttribute("target", "_blank");
    a_tw.setAttribute('href', `https://twitter.com/${tw}`);
    a_tw.setAttribute("target", "_blank");
    img.setAttribute('src', i);
    h2.textContent = n;
    p.textContent = t;
}

// Loops through person data and creates cards
people.forEach(person => cardCreater(person.img, person.name, person.title, person.github, person.twitter));