
let itemsArray=[];
function addToList() {
    let itemInput = document.getElementById('list-item-input').value;
    itemsArray.push(itemInput);
    console.log(itemInput);
   
    let listOfItems=``;
    itemsArray.forEach(element => {
        listOfItems += `<li>${element}</li>`;
    });

    document.getElementById('list-of-items').innerHTML =listOfItems;
}