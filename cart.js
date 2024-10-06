let count =document.getElementById('count');
let cartHistory=document.getElementById('carthistory');
let stat = document.getElementById('label');
let busket = JSON.parse(localStorage.getItem('data')) || [];
// console.log(busket)
let total = document.getElementById('total');
function calculateTotalAmount(){
  const totalAmount=  busket.map((x)=>{
        let search = list?.find((y)=>y?.id === x?.id);
        console.log(' x?.item * search?.amount;   ', x?.item * search?.amount)
        return x?.item * search?.amount;    
        
    })
    console.log('totalAmount',totalAmount)
    return totalAmount
    // return this.ammo;

}

const hii=()=>{
    
        const sumOfAmount=calculateTotalAmount().reduce((acc,item)=>acc+item,0)
        console.log('sumOfAmount',sumOfAmount)
        localStorage.setItem('total',JSON.stringify(sumOfAmount))

        let getAmountFromLocalStorage=JSON.parse(localStorage.getItem("total"))||[];
        total.innerHTML = `<p>Total Amount${getAmountFromLocalStorage}</p>`
        // total.innerHTML=
        // console.log("dggfghgg",calculateTotalAmount())
    
}
hii()

const cartGenerate = () => {
    if(busket.length !== 0){
        return(
            stat.innerHTML = busket.map((x)=>
        
                {
                    //it is for matching the id from localstorage and fetch the data from database
                    let search = list.find((y)=>y.id === x.id)
                    return  `
                    
                    <div class="flex items-center justify-center space-y-5 border id="pack-${x.id}">
                    
                    <img class="h-40 w-30" src=${search.image}/>
                    <div>
                    <p>${search.title}</p>
                    <div class="flex flex-col ">
                    <div class="">
                    <button onclick="decrement(${x.id})">-</button>
                    <span id="quantity-${x.id}">${x.item}</span>
                 <button onclick="increment(${x.id})">+</button>
                    </div>
                    </div>
                    </div>
                    </div>
                    `
                }).join('')
        )

     }
    //else if(x.id===undefined){
    //     let pack=document.getElementById(`pack-${x.id}`);
    //     pack.remove()
    // }
    else{
        
        stat.innerHTML = 
        `
        <div class="flex flex-col items-center justify-center">
        <p>Cart is empty</p>
        <a href="index.html"> <button  class=" bg-black text-white rounded-2xl px-5">go Back to Home </button></a>
        
        </div>`;
    }
}
cartGenerate()

function increment(id){
  console.log("thisssssssss",id)
    const search = busket.find((x)=> x.id === id);

    if(search === undefined){

        busket.push({
            id : id,
            item : search.item
           
        })
    }
    
    else{
        search.item +=1
    }
    localStorage.setItem("data",JSON.stringify(busket))
    console.log(busket)
    calculation()
    update(id)
    hii()
    
    
}
function decrement(id){
    
    let search =busket.find((x)=>x.id === id);
    if(search === undefined){

        return;

    }
    else if(search.item===0){
        let pack=document.getElementById(`pack-${id}`);
        pack.remove();
        location.reload(true)
    }
    else{
        search.item -= 1
    }
    console.log(busket)
    calculation()
    update(id);
    busket = busket.filter((x)=>x.item != 0)
    localStorage.setItem("data",JSON.stringify(busket))
    hii()
    
}


function calculation(){
   count.innerHTML=busket.map((x)=>x.item).reduce((x,y)=>x+y,0); 
    // calculation()
}
calculation()

function update(id){
    let search= busket.find((x)=> x.id === id);
    document.getElementById(`quantity-${id}`).innerHTML=search.item;
    calculation()
}
