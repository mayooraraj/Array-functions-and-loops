
 const students =[{name:"Mayoora",age:24,department:"CSE",mark:80},
                {name:"Theertha",age:24,department:"MCA",mark:70},
                {name:"Grishya",age:20,department:"EEE",mark:90},
                {name:"Anitta",age:29,department:"MBA",mark:50},
                {name:"Arun",age:30,department:"Civil",mark:60}];
const table = document.getElementById('table');
const tableContent = document.getElementById('table_content');

//display

function displaycontent(filteredStudents) {
    tableContent.innerHTML = '';

    const studentsToDisplay = filteredStudents || students;

    studentsToDisplay.forEach(i => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${i.name}</td><td>${i.age}</td><td>${i.department}</td><td>${i.mark}</td>`;
        tableContent.appendChild(row);
    });
}

//sort
function sortElement(){
    const sortItem = document.getElementById('sort').value;

    if (sortItem === 'mark' || sortItem === 'age' ) {
      students.sort((a, b) => a[sortItem] - b[sortItem]);
    } 
    else{
        students.sort((a, b) => a[sortItem].localeCompare(b[sortItem]));
    }

    displaycontent();
}

//search
function searchInput() {
    const searchItem = document.getElementById('search_Item').value.toLowerCase();
    const filteredStudents = students.filter(student =>
        Object.values(student).some(value =>
            typeof value === 'string' && value.toLowerCase().includes(searchItem)
        )
    );
    
    displaycontent(filteredStudents);
}

//filter

function filterByMark() {
    const markFilterInput = document.getElementById('quantity');
    const markFilterValue = parseFloat(markFilterInput.value);

    if (!isNaN(markFilterValue)) {
        const filteredStudents = students.filter(student => student.mark > markFilterValue);
        displaycontent(filteredStudents);
    } else {
        console.error("Invalid input for mark filter");
    }

    markFilterInput.value = ''; 
}



displaycontent();


