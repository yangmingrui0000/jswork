var oYear = document.getElementById('year');
var oMonth = document.getElementById('month');
var oday = document.querySelector('.day');
var oLi = document.querySelectorAll('.day li');
var curDate = new Date();

eachFor(1900,2051,function(val){
    var option = document.createElement("option");
    option.innerHTML = val;
    option.value = val;
    if(curDate.getFullYear() == val){
        option.selected = true;
    }
    oYear.appendChild(option);
});

eachFor(0,11,function(val){
    var option = document.createElement("option");
    option.innerHTML = parseInt(val) +1;
    option.value = val;
    if(curDate.getMonth() == val){
        option.selected = true;
    }
    oMonth.appendChild(option);
});

function eachFor(start, end, callback){
    for(var i = start; i <= end ; i++){
        callback(i);
    }
}
function query(){
    var year = oYear.value ;
    var month = oMonth.value ;
    if(year && month){
        console.log(year +"--"+month);
        var firstDate = new Date(year,month,1);
        var dayOfWeek = firstDate.getDay();
        var conutDay =  getMonthDays(year,month);
        console.log("countDay="+conutDay);
        oLi.forEach(function(el,index){
            el.innerHTML = '';
        })
        eachFor(1,conutDay,function(val){
            oLi[dayOfWeek + val - 1].innerHTML = val;
        });
    }else{
        alert('请先选择年份和月份');
    }
}
function getMonthDays(year,month){
    var datas = [];
    if(year%400 ==0 || (year%4==0 && year%100!=0)){
        datas = [31,29,31,30,31,30,31,31,30,31,30.31];
     
    }else{
        datas = [31,28,31,30,31,30,31,31,30,31,30.31];
    }
    console.log(year +"--"+ month +"--"+ datas[month]);
    return datas[month];
}
query();