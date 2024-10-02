// let decrement=document.getElementById('decrement')
// let increment=document.getElementById('increment')
// let value=document.getElementById("value")


const cards= document.querySelector('.card')
let cartcount=document.getElementById('count')
let total=0;
// let count=0;

let busket = JSON.parse(localStorage.getItem("data"))|| [];
// fetch('./card.json')
// .then(res =>res.json())
// .then(data =>{
// cards.innerHTML= data.map(user=>
//             `
//         <div class="flex flex-col justify-center items-center md:flex-row ">
//         <div class="card  flex border bg-slate-200 flex-col h-80 w-40 rounded-lg" id="${user.id}"> 
//         <div img-id="img-${user.id}" class="image h-30">
//             <img src=${user.image}/>
//         </div>
//         <h1 class="text-xl font-bold">${user.title}</h1>
//         <div class="flex justify-between mx-2 font-semibold">
//         <h3 id="value-${user.id}">${user.amount}</h3> 
//         <div class="inc">
//             <button  onclick="decrement(${user.id})" data-id="${user.id}" class="decrement " >-</button>
//             <span class="quantity" id="quantity-${user.id}">${search.item === undefined? 0:search.item}</span>
//             <button onclick="increment(${user.id})" data-id="${user.id}" class="increment" ">+</button>
//         </div>
//         </div>
//         </div>
//         </div>
//         `
// )
// });
let shop = () =>{
    return(cards.innerHTML = list.map((user)=>{
        let {id,image,title,amount}=user
        let search=busket.find((x)=>x.id === id) || []
        return`
        
        
        <div class="card flex border justify-center items-center bg-gradient-to-b from-slate-500 to-black  flex-col h-80 w-60 rounded-lg md:rounded-lg lg:rounded-lg" id="${id}"> 
        <div img-id="img-${id}" class="h-60 overflow-hidden">
            <img  src=${image}/>
        </div>
        
        <div class="text-white pb-5 pt-1">
        <h1 class="text-xl font-bold">${title}</h1>
        </div>
        <div class=" text-white flex space-x-20 py-5 font-semibold">
        <h3 class="bg-lime-500 px-2 rounded" id="value-${id}">$${amount}</h3> 
        <div class="inc ">
            <button  onclick="decrement(${id})" data-id="${id}" class="decrement " >-</button>
            <span class="quantity" id="quantity-${id}">${search.item === undefined? 0:search.item}</span>
            <button onclick="increment(${id})" data-id="${id}" class="increment" ">+</button>
        </div>
        
        
        </div>
        </div>
        `
    })

    )};
    shop();

   
        

    // cards.addEventListener('click',(e)=>{
    //     const id =e.target.getAttribute('data-id');

    //     if(e.target.classList.contains('increment')){
    //         // increment(id);
    //         // console.log(id)
    //         // amount(id)
    //         // calculation(id);
    //         var valAm=document.getElementById(`value-${id}`);
    //         var actVal=parseInt(valAm.innerText)
    //         total=parseInt(total+actVal);
    //         console.log(total) 
    //         localStorage.setItem("totalAmount",total)
    //         count=parseInt(count+1)
    //         cartcount.innerText=`${count}`
    //         console.log("count",count)
            
    //     }
    //     else if(e.target.classList.contains('decrement')){
    //         // decrement(id);
    //         // amount(id);
            
    //         // console.log(id)
    //         const quantityElement = document.getElementById(`quantity-${id}`);
    //         let quantity= parseInt(quantityElement.innerText)
    //         if(quantity>0){
    //             var valAm=document.getElementById(`value-${id}`);
    //             var actVal=parseInt(valAm.innerText)
    //             total=parseInt(total-actVal);
    //             console.log(total)  
    //             localStorage.setItem("totalAmount",total)
                
    //             count=parseInt(count-1)
    //             cartcount.innerText=`${count}`
    //             console.log("count",count)
                
    //         }
    //       }
    // });





function increment(id){
     
    // const quantityElement = document.getElementById(`quantity-${id}`);
    // let quantity =parseInt(quantityElement.innerText)
    // quantityElement.innerText =quantity+1;
    
    const search = busket.find((x)=> x.id === id);
    // var valAm=document.getElementById(`value-${id}`);
   
    if(search === undefined){

        busket.push({
            id : id,
            item : 1
           
        })
    }else{
        search.item +=1
    }
    // if(c){
    //     let remain=x.item;
    //     var actVal=parseInt(valAm.innerText)
    //     total=parseInt(total+(actVal*remain));
        
    // }else{
    //     var actVal=parseInt(valAm.innerText)
    //     total=parseInt(total+actVal);
       
    // }
    
            
            
    // console.log("total",total) 
            
    // localStorage.setItem("totalAmount",total)
    sumTotal(id)
    console.log("total amount",sumTotal())
    localStorage.setItem("data",JSON.stringify(busket))
    console.log(busket)
    calculation()
    update(id)
    
}
function decrement(id){
    
    // const quantityElement = document.getElementById(`quantity-${id}`);
    // let quantity= parseInt(quantityElement.innerText)
    // if(quantity>0){

    //     quantityElement.innerText = quantity-1
    // }
    let search =busket.find((x)=>x.id === id);
    if(search === undefined){

        return;
    }else{
        search.item -= 1
    }
    console.log(busket)
    calculation()
    update(id);
    busket = busket.filter((x)=>x.item != 0)
    localStorage.setItem("data",JSON.stringify(busket))
}

function calculation(){

    //reduce function takes the first as total and second as the remaining
    cartcount.innerHTML=busket.map((x)=>x.item).reduce((x,y)=>x+y,0)
}
//it will always update the calculation
calculation();
function update(id){
    let search= busket.find((x)=> x.id ===id);
    document.getElementById(`quantity-${id}`).innerHTML=search.item;
    calculation()
}

const sumTotal=(id)=>{
    busket.map((x)=>{
        let search = list.find((y)=>y.id === x.id);
        let ammo=parseInt(x.item * search.amount) ;
        return ammo;
    })
}
















