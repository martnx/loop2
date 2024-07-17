const nameSearch = 'Chris';
const para = document.createElement('p');
const name = document.querySelector(".name");
const number = document.querySelector(".number");



const phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
]

for(phoneBook of phonebook){
    console.log(phoneBook);
    if(phoneBook.name === nameSearch){
        name.textContent += phoneBook.name;
        number.textContent += phoneBook.number;
        console.log(phoneBook.name);
        console.log(phoneBook.number);
        break;
    }
}

// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(para);
