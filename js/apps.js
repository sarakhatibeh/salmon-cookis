'use strict';

let array1 = [];
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// let customerRan=[];
function Location(name, minNum, maxNum, avNum) {
    this.name = name;
    this.minNum = minNum;
    this.maxNum = maxNum;
    this.avNum = avNum;
    this.customerRan =[];
    array1.push(this);
};

Location.prototype.customers = function (min, max) {
    min = this.minNum;
    max = this.maxNum;
    for (let i = 0; i <= 14; i++) {
        this.customerRan.push(Math.floor(Math.random() * (max - min + 1) + min));
    }

}

// Location.prototype.contaner = function () {

let table1 = document.getElementById('contaner');


function tableHeder(){

    let trEl = document.createElement('tr');
    table1.appendChild(trEl);
    let thEl1 = document.createElement('th');
    thEl1.textContent = "";
    trEl.appendChild(thEl1);
    for (let i = 0; i < hour.length; i++) {
    
        let thEl = document.createElement('th');
        thEl.textContent = hour[i];
        trEl.appendChild(thEl);
    }
    let thEl2 = document.createElement('th');
    thEl2.textContent = 'Total';
    trEl.appendChild(thEl2);
}


// }
Location.prototype.render=function(){

    let trE2 = document.createElement('tr');
    table1.appendChild(trE2);
    let tdEl1 = document.createElement('td');
    tdEl1.textContent = this.name;
    trE2.appendChild(tdEl1);
    
    let sum = 0;
    for (let i = 0; i < hour.length; i++) {
    
    
        let tdEl = document.createElement('td');
        let cookies =Math.floor(this.customerRan[i] * this.avNum);
        tdEl.textContent = cookies;
        trE2.appendChild(tdEl);
        sum += cookies;
    }
    let tdEl2 = document.createElement('td');
    tdEl2.textContent = sum;
    trE2.appendChild(tdEl2);
}









tableHeder();

let seattel = new Location('seattel', 23, 65, 6.3);
seattel.customers();
seattel.render();
let Tokyo = new Location('Tokyo',3,24,1.2);
Tokyo.customers();
Tokyo.render();
let Dubai	=new Location('Dubai', 11,38,3.7);
Dubai.customers();
Dubai.render();
let Paris	=new Location('Paris', 20,38,2.3);
Paris.customers();
Paris.render();
let Lima	=new Location('Lima', 2,16,4.2);
Lima.customers();
Lima.render();

let Total=new Location('Total' ,10,15,20)
Total.customers();
Total.render();
