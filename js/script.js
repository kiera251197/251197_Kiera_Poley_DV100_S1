//Flights Counters

var shown;
var totalPrice = 0;
var priceShowTotal;



//Increase Counter
let counter = 0

function increaseCount(counterId, planetName, price, cartInfo) {
    let counterLabel = counterId.parentElement.parentElement.querySelector('.counterNumber');
    let count = parseInt(counterLabel.textContent, 10);
    count = count + 1;
    counterLabel.textContent = count;

    //Cart Display
    let price2 = parseInt(document.getElementById(price).textContent);
    let planetName2 = document.getElementById(planetName).textContent;
    
    //New ID Generator
    let index = planetName2.indexOf(" ");
    let newIdName = planetName2.substring(0, index);
    let newId = "counterNumber" + newIdName;
    let newTotalId = "flightTotal" + newIdName;

    //Show Totals in Cart
    let flightsTotalPrice = count*price2;

    totalPrice = totalPrice + price2;
    priceShowTotal = `<div id="totalText" class="totalText">
                    <p>Total:</p>
                    <p>R ${totalPrice}</p>
                </div>` 

    shown = `<div class="stylingCartMars">
                    <button id="trashDelete" onclick="clearItems('${cartInfo}', ${flightsTotalPrice})"><i id="trashIcon" class="fa-solid fa-trash fa-flip-horizontal" style="color: #45016d;"></i></button>
                    <img src="../assets/img/Images/flighhtMars.png">
                    <div class="stylingCartMarsText">
                        <h1>${planetName2}</h1>
                        <p>R${flightsTotalPrice}</p>
                    </div>
                    <div class="counterButton">
                            <button onclick="modalCounterMinus('${newId}', '${counterLabel}', ${price2}, '${cartInfo}')"><i class="fa-solid fa-minus" style="color: white;"></i></button>
                            <label class="counterNumber" id="${newId}">${count}</label>
                            <button onclick="modalCounterAdd('${newId}', '${counterLabel}', ${price2}, '${cartInfo}')"><i class="fa-solid fa-plus" style="color: white;"></i></button>
                        </div>
                </div>`
}



//Decrease Counter
function decreaseCount(button, planetName, price, cartInfo) {
    let counterLabel = button.parentElement.parentElement.querySelector('.counterNumber');
    let count = parseInt(counterLabel.textContent, 10);
    
    //Cart Display
    let price2 = parseInt(document.getElementById(price).textContent);
    let planetName2 = document.getElementById(planetName).textContent;

    //New ID Generator
    let index = planetName2.indexOf(" ");
    let newIdName = planetName2.substring(0, index);
    let newId = "counterNumber" + newIdName;
    let newTotalId = "flightTotal" + newIdName;

    //Show Totals in Cart
    if (count > 0) {
        count = count - 1;
        counterLabel.textContent = count;

        let flightsTotalPrice = count*price2;

    totalPrice = totalPrice - price2;
    priceShowTotal = `<div id="totalText" class="totalText">
                    <p>Total:</p>
                    <p>R ${totalPrice}</p>
                </div>` 

    shown = `<div class="stylingCartMars">
                    <button id="trashDelete" onclick="clearItems('${cartInfo}', ${flightsTotalPrice})"><i id="trashIcon" class="fa-solid fa-trash fa-flip-horizontal" style="color: #45016d;"></i></button>
                    <img src="../assets/img/Images/flighhtMars.png">
                    <div class="stylingCartMarsText">
                        <h1>${planetName2}</h1>
                        <p>R${flightsTotalPrice}</p>
                    </div>
                    <div class="counterButton">
                            <<button onclick="modalCounterMinus('${newId}', '${counterLabel}', ${price2}, '${newTotalId}', '${cartInfo}')"><i class="fa-solid fa-minus" style="color: white;"></i></button>
                            <label class="counterNumber" id="${newId}">${count}</label>
                            <button onclick="modalCounterAdd('${newId}', '${counterLabel}', ${price2}, '${newTotalId}', '${cartInfo}')"><i class="fa-solid fa-plus" style="color: white;"></i></button>
                        </div>
                </div>`
    }

    //Clears flight if less than or equal to 0
    if (count !== 0){
        shown = `<div class="stylingCartMars">
                    <button id="trashDelete" onclick="clearItems('${cartInfo}', ${flightsTotalPrice})"><i id="trashIcon" class="fa-solid fa-trash fa-flip-horizontal" style="color: #45016d;"></i></button>
                    <img src="../assets/img/Images/flighhtMars.png">
                    <div class="stylingCartMarsText">
                        <h1>${planetName2}</h1>
                        <p>R${flightsTotalPrice}</p>
                    </div>
                    <div class="counterButton">
                            <button onclick="decreaseCount('${newId}', '${counterLabel}', '${price2}', '${newTotalId}', '${cartInfo}')"><i class="fa-solid fa-minus" style="color: white;"></i></button>
                            <label class="counterNumber" id="${newId}">${count}</label>
                            <button onclick="modalCounterAdd('${newId}', '${counterLabel}', '${price2}', '${newTotalId}', '${cartInfo}')"><i class="fa-solid fa-plus" style="color: white;"></i></button>
                        </div>
                </div>`

                document.getElementById(cartInfo).innerHTML = shown;
    }else{
        shown = ` `;
    }
}



//Increase inside cart modal
function modalCounterAdd(counterId, counterOg, price, flightsPrice){
    let newTotal = 0;
    let cartIncreaseCounter = document.getElementById(counterId);
    let oldCounter = document.getElementById(counterOg);
    let priceFlightsTotal = document.getElementById(price);
    let count = parseInt(cartIncreaseCounter.textContent, 10);

    console.log(count);

    count = count + 1;

    newTotal = flightsPrice*count;

    cartIncreaseCounter.textContent = count;
    oldCounter.textContent = count;
    flightsPrice = "R" + newTotal;

    priceFlightsTotal = `R${newTotal.toFixed(2)}`;

    shown = `<div id="totalText" class="totalText">
                    <p>Total:</p>
                    <p>R ${priceFlightsTotal}</p>
                </div>

                <div class="shoppingCartButtons">
                    <button id="checkOutButton" class="checkOutButton"><a href="../index.html">Check Out</a></button>
                    <button id="continueShoppingButton" class="continueShoppingButton"><a href="../pages/flights.html">Continue Shopping</a></button>
                </div>`

    document.getElementById('cartBelow').innerHTML = shown;
}



//Decrease inside cart modal
function modalCounterMinus(counterId, counterOg, price, flightsPrice){
    let newTotal = 0;
    let cartIncreaseCounter = document.getElementById(counterId);
    let oldCounter = document.getElementById(counterOg);
    let priceFlightsTotal = document.getElementById(price);
    let count = parseInt(cartIncreaseCounter.textContent, 10);

    count = count - 1;

    newTotal = priceFlightsTotal*count;

    if(count > 0){
        newTotal = flightsPrice*count;
        cartIncreaseCounter.textContent = count;
        oldCounter.textContent = count;
        flightsTotalPrice.textContent = newTotal;
    
        priceFlightsTotal = priceFlightsTotal - flightsPrice;

        shown = `<div id="totalText" class="totalText">
                    <p>Total:</p>
                    <p>R ${priceFlightsTotal}</p>
                </div>

                <div class="shoppingCartButtons">
                    <button id="checkOutButton" class="checkOutButton"><a href="../index.html">Check Out</a></button>
                    <button id="continueShoppingButton" class="continueShoppingButton"><a href="../pages/flights.html">Continue Shopping</a></button>
                </div>`

        document.getElementById('cartBelow').innerHTML = shown;        
    }else{
        document.getElementById(place).innerHTML = ` `;

        shown = `<div id="totalText" class="totalText">
                    <p>Total:</p>
                    <p>R 0.00</p>
                </div>

                <div class="shoppingCartButtons">
                    <button id="checkOutButton" class="checkOutButton"><a href="../index.html">Check Out</a></button>
                    <button id="continueShoppingButton" class="continueShoppingButton"><a href="../pages/flights.html">Continue Shopping</a></button>
                    </div>`
        
        document.getElementById('cartBelow').innerHTML = shown;
    }
}



//Cart
function cartButtons(place){
    document.getElementById(place).innerHTML = shown;
    document.getElementById('cartBelow').innerHTML = priceShowTotal;
}



//Cart Modal

let cartModal;
document.addEventListener("DOMContentLoaded", function () {
    cartModal = document.getElementById('cartModal');
});


document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById('shoppingCartIcon');
    const close = document.getElementById('closeModal');
    const cartModal = document.getElementById('cartModal');

    if (cartIcon && close && cartModal) {
        cartIcon.addEventListener('click', () => {
            cartModal.classList.add('show');
        });

        close.addEventListener('click', () => {
            cartModal.classList.remove('show');
        });
    }
});



//Search Bar

const search = () =>{
    const searchbox = document.getElementById("searchbox").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
    const productName = document.getElementsByTagName("h2")

    for(var i=0; 1 < productName.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
    console.log(searchbox) 
}

//Click Off of Search
function DisplaySearchBAr() 
{
    console.log("Clicked into search bars");
    var searchBarElement = document.getElementById("product-list");
    searchBarElement.style.display = "block";
}

//on click
//focus = active to type
//blur = inactive - so clicking to not type anymore
document.getElementById("searchbox").addEventListener("blur", (e) => {
  var searchBarElement = document.getElementById("product-list");
    searchBarElement.style.display = "none";
}, true);



//Form name
function getName(){
    let name = document.getElementById('userName').value;
    console.log(name);
    let message = `<h1>Thank You ${name} for your message!</h1>`;
    document.getElementById('exampleModalLabel').innerHTML = message;
}


//Trash icon delete flights
function clearItems(place, price){
    shown = ` `;

    document.getElementById(place).innerHTML = shown;
    let price2 = totalPrice - price;

    priceShowTotal = `<div id="totalText" class="totalText">
                    <p>Total:</p>
                    <p>R ${price2}</p>
                </div>` 

    document.getElementById('cartBelow').innerHTML = priceShowTotal; 
}