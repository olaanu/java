const ntells = "50years";
document.write(ntells)
const sym = Symbol("mary");
const sym2 = Symbol("mary");

console.log(sym === sym2)

const car = {
    color: "red",
    wheel: "four",
    model: "honda",
    year: 2005,
    new: false
};
//adding inside the object
car.new = true;
car.seats = "three";
car.window = "tinted";
car.airconditioning = "good condition";
car.sunroof = "none";
car.overall = "good";

//deleting inside the object
delete car.color;

console.log(car.model)
console.log(car)

let a = 4+6

let sub = 5-4

let div = 15/5

let mul = 2*5

let exp =2**4

let mod = 15%4

console.log(a);
console.log(sub);
console.log(div);
console.log(mul);
console.log(exp);
console.log(mod);

let shoe = 200;
let bag = 250;
let cap = 150*2;
let totalprice = shoe+bag+cap;
let averageprice = totalprice/3;
let finalprice = totalprice-5;

console.log(shoe);
console.log(bag);
console.log(cap);
console.log(totalprice);
console.log(averageprice);
console.log(finalprice);

let x = 7;
x += 3;
let y = 6;
y =- 4;
let m = 1
let n = "1"

console.log(x);
console.log(y);
console.log(m+n);
let firstname = "Anuoluwapo"
let lastname = "Oladipo"
let name = firstname+lastname
console.log(firstname+" "+lastname);
console.log(name);

console.log(shoe< bag);
console.log(shoe<= bag);
console.log(shoe> bag);
console.log(shoe>= bag);

let orange = 280;
let grape = 350;
let cherry = 120*2;
let totprice = orange+grape+cherry;
let aveprice = totprice/3;
let finprice = totprice-5;

console.log(orange);
console.log(grape);
console.log(cherry);
console.log(totprice);
console.log(aveprice);
console.log(finprice);

console.log(totalprice< totprice);
console.log(totalprice> totprice);
console.log(totalprice<= totprice);
console.log(totalprice>= totprice);
console.log(averageprice< aveprice);
console.log(averageprice> aveprice);
console.log(averageprice<= aveprice);
console.log(averageprice>= aveprice);
console.log(finalprice< finprice);
console.log(finalprice> finprice);
console.log(finalprice<= finprice);
console.log(finalprice>= finprice);

// let apple = "fruit"
// if (apple === "fruit") {
//   alert ("Congratulations");
// } else{
//     alert("NOOOO");
// }

// let phone = "infinix"
// if (phone === "itel") {
//   alert ("Congratulations");
// } else{
//     alert("NOOOO");
// }

// 
if (shoe< 500 && bag> 1000 && cap> 200) {
    alert ("Congratulations");
  } else{
      alert("NOOOO");
  }

  if (car.wheel === "four" && car.seats === "three") {
    console.log("yes");
  }

  if (car.wheel === "four" && car.seats === "two") {
    console.log("yes");
  } else{
      console.log("no");
  }

  for(i = 0; i<= 1000; i++){
    if(i%2===0){
        console.log(i);
    }
  }

  for(g = 0; g<= 100; g++){
    if(g%10===0){
        console.log("true");
    } else{
      console.log("false");
    }
  }

// for(q = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";  q++;){
//     if(q ==="a"|| q === "e"|| q === "i"|| q === "o"|| q === "u"){
//       console.log("5");
//     } else{
//       console.log("1");
//     }
//   }
  