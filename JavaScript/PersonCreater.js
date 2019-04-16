class Person { // Person card Template
    constructor(img, name, title, github){
        this.img = img;
        this.name = name;
        this.title = title;
        this.github = github;
    }
}

const people = []; // Empty Person array

people.push( // Creates new person to add to list
    new Person("/Images/Avatars/Carlos.PNG", "Carlos Lantigua", "Team Lead", "https://github.com/CLantigua2"),
    new Person("/Images/Avatars/William.PNG", "William Connatser", "Frontend Developer", "https://github.com/WilliamConnatser"),
    new Person("/Images/Avatars/Jonathan.PNG", "Jonathan Picazo", "Backend Developer", "https://github.com/macjabeth"),
    new Person("/Images/Avatars/Pavol.PNG", "Pavol Karas", "Backend Developer", "https://github.com/Pav0l"),
    new Person("/Images/Avatars/Triston.PNG", "Triston Armstrong", "UI Developer", "https://github.com/Tarmstrong95")
)

const cardCreater = (i, n, t, gh) => { //Creates DOM elements
    const section = document.querySelector(".about-cont");
    const div = document.createElement('div');
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const a = document.createElement("a");
    const itag = document.createElement('i');
    const hr = document.createElement('hr');

    section.appendChild(div);
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(a);
    div.appendChild(hr);
    a.appendChild(itag);

    div.className = 'pers-card';
    itag.className = 'fab fa-github';
    a.setAttribute('href', gh);
    a.setAttribute("target", "_blank");
    img.setAttribute('src', i);
    h2.textContent = n;
    p.textContent = t;
}

// Loops through person data and creates cards
people.forEach(person => cardCreater(person.img, person.name, person.title, person.github));