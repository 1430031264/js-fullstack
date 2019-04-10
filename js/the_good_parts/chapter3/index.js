var empty_object={};

var stooge = {
    "fitst-name":"Jermo",
    "last-name":"Howard"
};
var flight={
    airline:"Oceanic",
    number:815,
    departure:{
        IATA:"SYD",
        time:"2004-9-22 14:55",
        city:"sydney"
    },
    arrival:{
        IATA:"LAX",
        time:"2004-9-23 18:55",
        city:"Los Angeles"
    }
};
//检索
flight.number


// 更新
stooge['fitst-name']='jerome';
stooge.nickname='curly';
// console.log(stooge["fitst-name"]);
// console.log(stooge.nickname);


//引用
var x=flight;
x.departure.city="beijing";
var ct=flight.departure.city;
console.log(ct);
console.log(flight.departure.city);

//原型

if(typeof Object.beget !== 'function'){
    Object.beget = function(o){
        var F = function(){};
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.beget(stooge);

//反射
typeof flight.number
console.log(typeof flight.number);
