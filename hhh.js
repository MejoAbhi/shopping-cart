// card.addEventListener('click',(e)=>{
//     const target=e.target;
//     const id =target.getAttribute('data-id');

//     if(target.classList.contains('increment')){
//         increment(id);
//     }else if(target.classList.contains('decrement')){
//         decrement(id);
//     }
// })


// let sumtotal=document.getElementById('sumtotal')

// let sumtotalAmount=parseInt(sumtotal.innerText)//total ammount in cart
// let totalquantity=parseInt(quantity.innerText)//quantity of a single cloth
// let price=parseInt(value.innerText)//price of a single element
// console.log()
// let amount=0
// let count=0;


// decrement.addEventListener('click',function(){
//     if(totalquantity>0){
//         totalquantity--;
//         count++;
//         quantity.textContent=totalquantity;
//         sumtotal.textContent=sumtotalAmount-(price*count)
//     }
// })


// function increment(id){
//     let quantity=document.getElementById(`quantity-${id}`)
//     let quantityAmount=parseInt(quantity.innerText);
//     quantity.innerText=quantityAmount+1
// }
// function decrement(id){
//     let quantity=document.getElementById(`quantity-${id}`)
//     let quantityAmount=parseInt(quantity.innerText);
//     if (quantityAmount > 0) {
//         quantity.innerText = quantityAmount - 1;
//     }
// }


// increment.addEventListener('click',function(){
//    totalquantity++;
//    count--;
//    quantity.textContent=totalquantity;
//    sumtotal.textContent=sumtotalAmount+(price*totalquantity);
// })

// function amount(id){
//     const quantityElement = document.getElementById(`quantity-${id}`);
//     let quantity= parseInt(quantityElement.innerText);
//     const valAm=document.getElementById(`value-${id}`);
//     const actVal=parseInt(valAm.innerText)
//     // const ids =e.target.getAttribute('data-id');
//     //  let total=0;
//     if(e.target.classList.contains('increment')){
//        total=parseInt(total+actVal);
//        console.log(total) 
//     }else if(e.target.classList.contains('decrement')){
               
//     }
    
//     // else if(decrement){
//     //     total=parseInt(total-actVal);
//     //     console.log(total)  
//     // }
// }


//---------------------------------------------------------
//Cart.js
// const totalAmount =localStorage.getItem("totalAmount");
//         document.getElementById('cart').innerText="$"+totalAmount;

//         const cartitem= localStorage.getItem("data");
//         const parsedata=JSON.parse(cartitem)
//         const output=document.getElementById('carthistory')
//         output.innerHTML =parsedata.map(e=>`
//            <div>
//                <p>${e.id}</p>
//                <p>${e.item}</p>
//                </div>
//            `).join('<br>')