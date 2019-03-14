let ran_num = Math.random();
// 函数表达式.
const hongbao = (total,num) =>{
    const arr = [];//待分配的金额的数组
    // 定义计算量
    let restAmount= total,
    restNum= num;
    for(let i=0;i< num-1;i++){
        //前n-1个人发随机
        // restAmount/restNum*2

        let amount = parseFloat(Math.random()*((restAmount/restNum)*2-8)+4)
        .toFixed(2);
        restAmount -= amount;
        restNum--;
        arr.push(amount);
    }

    arr.push(restAmount.toFixed(2));
    return arr;
}

console.log(hongbao(100,20));