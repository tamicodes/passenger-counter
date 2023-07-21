//

let countEl = document.getElementById("count-el") ;

let count=0 ;

function increment(){
   
count+=1 ;
countEl.innerText= count ;




}
let saveEl = document.getElementById("save-el") ;

function save(){

let count1= count + "-" ;
    saveEl.textContent +=count1 ;

 countEl.textContent=0 ;
 count=0 ;



}

save();
