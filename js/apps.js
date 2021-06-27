'use strict'
alert('welcom');

let Seattle = {
    minNum: 23,
    maxNum: 65,
    avNum: 6.3,
    customerRan: [],

    customers: function (min, max) {


        for (let i = 0; i <= 14; i++) {

            this.customerRan.push(Math.floor(Math.random() * (max - min + 1) + min));



        };

    },

    
    
    render: function () {


        let divAv = document.getElementById('avgCooki');
        let name = document.createElement('h2');
        name.textContent = 'Seattle';
        divAv.appendChild(name);

        let ulAv = document.createElement('ul');
        divAv.appendChild(ulAv);

        let sum = 0;
        let multi;
        for (let i = 0; i <= 14; i++) {


            let liAv = document.createElement('li');
            ulAv.appendChild(liAv);


            if (i <= 6) {
                let time = i + 6;
               
                multi = Math.floor(this.avNum * this.customerRan[i]);
                sum+=multi;
                liAv.textContent = `${time} am : ${multi} cookies`;
            }
            else if (i > 6) {
                let time2 = i - 6;
                multi = Math.floor(this.avNum * this.customerRan[i]);
                sum+=multi;
                liAv.textContent = `${time2} pm : ${multi} cookies`;
            }
               

        }

        let total = document.createElement('li')
        ulAv.appendChild(total);
        total.textContent = `Total : ${sum} cookies`;

    }



        
   
}

Seattle.customers(23, 65);
Seattle.render();










let Tokyo = {
    minNum: 3,
    maxNum: 24,
    avNum: 1.2,
    customerRan: [],

    customers: function (min, max) {


        for (let i = 0; i <= 14; i++) {

            this.customerRan.push(Math.floor(Math.random() * (max - min + 1) + min));



        };

    },

    
    
    render: function () {


        let divAv = document.getElementById('Tokyo');
        let name = document.createElement('h2');
        name.textContent = 'Tokyo';
        divAv.appendChild(name);

        let ulAv = document.createElement('ul');
        divAv.appendChild(ulAv);

        let sum = 0;
        let multi;
        for (let i = 0; i <= 14; i++) {


            let liAv = document.createElement('li');
            ulAv.appendChild(liAv);


            if (i <= 6) {
                let time = i + 6;
               
                multi = Math.floor(this.avNum * this.customerRan[i]);
                sum+=multi;
                liAv.textContent = `${time} am : ${multi} cookies`;
            }
            else if (i > 6) {
                let time2 = i - 6;
                multi = Math.floor(this.avNum * this.customerRan[i]);
                sum+=multi;
                liAv.textContent = `${time2} pm : ${multi} cookies`;
            }
               

        }

        let total = document.createElement('li')
        ulAv.appendChild(total);
        total.textContent = `Total : ${sum} cookies`;

    }



        
   
}

Tokyo.customers(23, 65);
Tokyo.render();




let Dubai = {
    minNum: 11,
    maxNum: 38,
    avNum: 3.7,
    customerRan: [],

    customers: function (min, max) {


        for (let i = 0; i <= 14; i++) {

            this.customerRan.push(Math.floor(Math.random() * (max - min + 1) + min));



        };

    },

    
    
    render: function () {


        let divAv = document.getElementById('Dubai');
        let name = document.createElement('h2');
        name.textContent = 'Dubai';
        divAv.appendChild(name);

        let ulAv = document.createElement('ul');
        divAv.appendChild(ulAv);

        let sum = 0;
        let multi;
        for (let i = 0; i <= 14; i++) {


            let liAv = document.createElement('li');
            ulAv.appendChild(liAv);


            if (i <= 6) {
                let time = i + 6;
               
                multi = Math.floor(this.avNum * this.customerRan[i]);
                sum+=multi;
                liAv.textContent = `${time} am : ${multi} cookies`;
            }
            else if (i > 6) {
                let time2 = i - 6;
                multi = Math.floor(this.avNum * this.customerRan[i]);
                sum+=multi;
                liAv.textContent = `${time2} pm : ${multi} cookies`;
            }
               

        }

        let total = document.createElement('li')
        ulAv.appendChild(total);
        total.textContent = `Total : ${sum} cookies`;

    }



        
   
}

Dubai.customers(23, 65);
Dubai.render();





let Paris = {
    minNum: 20,
    maxNum: 38,
    avNum: 2.3,
    customerRan: [],

    customers: function (min, max) {


        for (let i = 0; i <= 14; i++) {

            this.customerRan.push(Math.floor(Math.random() * (max - min + 1) + min));



        };

    },

    
    
    render: function () {


        let divAv = document.getElementById('Paris');
        let name = document.createElement('h2');
        name.textContent = 'Paris';
        divAv.appendChild(name);

        let ulAv = document.createElement('ul');
        divAv.appendChild(ulAv);

        let sum = 0;
        let multi;
        for (let i = 0; i <= 14; i++) {


            let liAv = document.createElement('li');
            ulAv.appendChild(liAv);


            if (i <= 6) {
                let time = i + 6;
               
                multi = Math.floor(this.avNum * this.customerRan[i]);
                sum+=multi;
                liAv.textContent = `${time} am : ${multi} cookies`;
            }
            else if (i > 6) {
                let time2 = i - 6;
                multi = Math.floor(this.avNum * this.customerRan[i]);
                sum+=multi;
                liAv.textContent = `${time2} pm : ${multi} cookies`;
            }
               

        }

        let total = document.createElement('li')
        ulAv.appendChild(total);
        total.textContent = `Total : ${sum} cookies`;

    }



        
   
}

Paris.customers(23, 65);
Paris.render();






let Lima = {
    minNum: 2,
    maxNum: 16,
    avNum: 4.6,
    customerRan: [],

    customers: function (min, max) {


        for (let i = 0; i <= 14; i++) {

            this.customerRan.push(Math.floor(Math.random() * (max - min + 1) + min));



        };

    },

    
    
    render: function () {


        let divAv = document.getElementById('Lima');
        let name = document.createElement('h2');
        name.textContent = 'Lima';
        divAv.appendChild(name);

        let ulAv = document.createElement('ul');
        divAv.appendChild(ulAv);

        let sum = 0;
        let multi;
        for (let i = 0; i <= 14; i++) {


            let liAv = document.createElement('li');
            ulAv.appendChild(liAv);


            if (i <= 6) {
                let time = i + 6;
               
                multi = Math.floor(this.avNum * this.customerRan[i]);
                sum+=multi;
                liAv.textContent = `${time} am : ${multi} cookies`;
            }
            else if (i > 6) {
                let time2 = i - 6;
                multi = Math.floor(this.avNum * this.customerRan[i]);
                sum+=multi;
                liAv.textContent = `${time2} pm : ${multi} cookies`;
            }
               

        }

        let total = document.createElement('li')
        ulAv.appendChild(total);
        total.textContent = `Total : ${sum} cookies`;

    }



        
   
}

Lima.customers(23, 65);
Lima.render();









