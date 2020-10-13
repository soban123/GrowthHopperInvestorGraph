// let banksReturns = [
//     {bank:'faysalbank' , returns : 3.24} , 
//     {bank:'standardchartered' , returns : 5.5} , 
//     {bank:'alfalah' , returns : 5.5} , 
//     {bank:'bankislamic' , returns : 4.15 } ,
//     {bank:'meezan' , returns : 3.09}
// ]

let growthHopperReturns =  {
    label: 'Growth Hopper Returns',
    fill: false,
    backgroundColor: 'rgb(47, 91, 120)',
    borderColor: 'rgb(47, 91, 120)',
    data: [
      3200 , 1000 , 234 , 3003 , 4400 , 10034
    ]
}
let banksreturns = {
    label: 'Initial Bank dataset',
    fill: false,
    backgroundColor: 'rgb(255, 145, 0)',
    borderColor: 'rgb(255, 145, 0)',
    data: [
        200 , 1000 , 2234 , 33 , 400 , 10034
    ],
}

var config = {
    type: 'line',
    data: {
        labels: [ 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [ growthHopperReturns , banksreturns 
    ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Growth Hopper Returns Calculator'
        },
    }
};

 function start() {
    var ctx = document.getElementById('canvas').getContext('2d');
    new Chart(ctx, config);
};
start()
function change (value , isBank){

    let amount = 0 ; //1M
    switch(value){
        case '1' : amount = 1000000 ;break ;
        case '1.5' : amount = 1000000 ;break ;
        case '2' : amount = 2000000 ;break ;
        case '3' : amount = 3000000 ;break ;
        case '3.09' : amount = 3000000 ;break ;
        case '3.24' : amount = 3000000 ;break ;
        case '4' : amount = 3000000 ;break ;
        case '4.15' : amount = 3000000 ;break ;
        case '5' : amount = 4000000 ;break ;
        case '5.5' : amount = 5000000 ;break ;
        case '6' : amount = 5000000 ;break ;
        default : amount = 1000000 ;
    } 
   
    
    if(isBank){
        bankamount = amount
    }
    else{
        growthAmount = amount;
    }

    if(!isBank){

        var arr = [];
        while(arr.length < 6){
            var r = Math.floor(Math.random() * 6) ;
            r = r/10 ; 
            if(arr.indexOf(r) === -1) arr.push(r);
        }

         returnGrowth = value / 100  ; 

        growthHopperReturns =   {
            label: 'Growth  Returns',
            fill: false,
            backgroundColor: 'rgb(47, 91, 120)',
            borderColor: 'rgb(47, 91, 120)',
            data: [
                growthAmount * (returnGrowth + arr[0] ) , growthAmount  * (returnGrowth + arr[1] ) , growthAmount * (returnGrowth + arr[2] ) , growthAmount * (returnGrowth + arr[3] ) , growthAmount * (returnGrowth + arr[4] ), growthAmount * (returnGrowth + arr[5] )
            ]
        }

    }
    else{
         let returnValue = value / 100  ; 

        banksreturns =   {
            label: 'Bank  Returns',
            fill: false,
            backgroundColor: 'rgb(255, 145, 0)',
            borderColor: 'rgb(255, 145, 0)',
            data: [
                bankamount * (returnValue + 0.5)  ,  bankamount * (returnValue + 0.1) ,  bankamount * (returnValue + 0.2) ,  bankamount * (returnValue + 0.3) ,  bankamount * (returnValue + 0.4) ,  bankamount * (returnValue + 0.1)
            ]
        }
    }
    console.log(banksreturns.data , growthHopperReturns.data)
   


    var ctx = document.getElementById('canvas').getContext('2d');

     new Chart(ctx, {...config , data: {
        labels: [ 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [ growthHopperReturns , banksreturns 
    ]
    } }
    )
}

// setTimeout(change, 3000)