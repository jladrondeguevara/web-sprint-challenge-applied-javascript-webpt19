// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(datein, titlein, tempin) {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    date.textContent = datein;
    title.textContent = titlein;
    temp.textContent = tempin;

    return header;
}


const entry = document.querySelector('.header-container');

const newHeader = Header("MARCH 28, 2020, ", 'Lambda Times', '98°');

entry.appendChild(newHeader);
