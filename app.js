let list1=['Arjun', 'Adwait', 'Swapnil','Amit', 'Vishal', 'Adnan'];
let list2=[ 'Adwait','Laxman','Amit','Adnan','Nitin','Gaurav'];

const stringifiedList1 = JSON.stringify(list1);
const stringifiedList2 = JSON.stringify(list2);

localStorage.setItem("listA",stringifiedList1);
localStorage.setItem("listB",stringifiedList2);

let savedListA = localStorage.getItem("listA");
let savedListB = localStorage.getItem("listB");

let listAEl = document.getElementById("lista");
let listBEl = document.getElementById("listb");

let listAUniqueEl = document.getElementById("uniqueListA");
let listBUniqueEl = document.getElementById("uniqueListB");
let listABUniqueEl = document.getElementById("uniqueListAB");

listAUniqueEl.value = "";
listBUniqueEl.value = "";
listABUniqueEl.value = "";


let listAValue = "";
let listBValue = ""; 

let uniqueListA = [];
let uniqueListB = [];
let uniqueListAB = [];

let uniqueList = []
let listA = []
let listB = []

// for getting the common names in both Lists
function getCommonNamesList(listA,listB){
    uniqueList = listA.filter((each) => listB.includes(each))
}

// for getting the unique names in one List
function getUniqueNamesList(listA,listB){
    uniqueList = []
    for (let each of listA) {
        // console.log(each)
        if (!listB.includes(each)){
            uniqueList.push(each)
        }
    }
    //console.log(uniqueListA)
    
}


//for taking the inputs in array format
function getLists(listAValue,listBValue) {

    if (listAValue != ""){
        listAValue = listAValue.replace(/'/g, '"');
        listAValue = listAValue.replace(" ","");
        listAValue = JSON.parse(listAValue)   
    }

    if (listBValue !=""){
        listBValue = listBValue.replace(/'/g, '"');
        listBValue = listBValue.replace(" ","");
        listBValue = JSON.parse(listBValue)
    }

    if (listAValue instanceof Array) {
        listA = listAValue;
    }
    else {
        listA = JSON.parse(savedListA);
    }
    if (listBValue instanceof Array) {
        listB = listBValue;
    }
    else{
        listB = JSON.parse(savedListB);
    }
    // console.log(listA)
    // console.log(listB)   
} 


function textAreaA() {

    listAValue = listAEl.value;
    listBValue = listBEl.value;

    getLists(listAValue,listBValue);
   
    getUniqueNamesList(listA,listB)
    // console.log(uniqueList)

    uniqueListA = [...uniqueList];
    listAUniqueEl.value = JSON.stringify(uniqueListA);

} 

function textAreaB() {

    listAValue = listAEl.value;
    listBValue = listBEl.value;

    getLists(listAValue,listBValue);
    getUniqueNamesList(listB,listA)
    // console.log(uniqueList)

    uniqueListB = [...uniqueList]
    listBUniqueEl.value = JSON.stringify(uniqueListB);
}

function textAreaC(){

    listAValue = listAEl.value;
    listBValue = listBEl.value;

    getLists(listAValue,listBValue);
    
    getCommonNamesList(listA,listB)
    // console.log(uniqueList)
    uniqueListAB = [...uniqueList]
    listABUniqueEl.value = JSON.stringify(uniqueListAB);
}

function textAreaD() {
    listAUniqueEl.value = "";
    listBUniqueEl.value = "";
    listABUniqueEl.value = "";

    textAreaA();
    textAreaB();
    textAreaC();
}





