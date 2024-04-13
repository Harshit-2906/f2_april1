/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.filter(arr => arr.profession === 'developer').map(arr => console.log(arr));
    
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(arr => {
        if (arr.profession === 'developer') {
            console.log(arr);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newEmployee = { id: 4, name: "Susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    //console.log("arr added:");
    console.log(newEmployee);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let filteredEmployees = arr.filter(arr => arr.profession !== 'admin');
    
    console.log(filteredEmployees);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArray = [
        { id: 5, name: 'Shubham', age: '24', profession: 'blogger' },
        { id: 6, name: 'Palak', age: '25', profession: 'software specialist '},
        { id: 7, name: 'Sanah', age: '25', profession: 'charted accountant' }
    ];

    // Concatenate the two arrays
    let concatenatedArray = arr.concat(newArray);

    // Log the concatenated array
    console.log(concatenatedArray);
  }