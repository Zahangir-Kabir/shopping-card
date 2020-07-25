// document.getElementById('phone-countPlus').addEventListener('click', function(){
//     // const phoneInput = document.getElementById('phone-input');
//     // let phoneCount = parseInt(phoneInput.value);
//     // let phoneNewCount = phoneCount + 1;
//     // phoneInput.value = phoneNewCount;
//     // let phoneValue = phoneNewCount * 1219;
//     // document.getElementById('phone-price').innerText='$' + phoneValue;
//     productPrice('phone', true);
// });

function productPrice (product, isIncrease){
    const productInput = document.getElementById(product + '-input');
    let productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0 ){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let productValue = productNewCount;
    if(product == 'phone'){
        productValue = productNewCount * 1219;
    }
    if(product == 'case'){
        productValue = productNewCount * 59;
    }
    document.getElementById(product + '-price').innerText='$' +productValue;
    calulateTotal ();
}

function calulateTotal (){
    const phoneInput = getInputProductValue('phone');
    const caseInput = getInputProductValue ('case');


    let totalPrice = phoneInput * 1219 + caseInput * 59;
    document.getElementById('subTotal').innerText ='$' + totalPrice;

    let taxAmount =Math.round (totalPrice * 0.1);
    
    document.getElementById('tax').innerText = '$' + taxAmount;

    let grandTotal = totalPrice + taxAmount;
    document.getElementById('grandTotal').innerText = '$' + grandTotal;
}

function getInputProductValue (product){
    const productInput = document.getElementById(product + '-input');
    let productNumber = parseInt(productInput.value);
    return productNumber;
}