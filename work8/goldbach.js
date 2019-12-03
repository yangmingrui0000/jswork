var array = []
var array2 = []
function goldbach() {
    str = ''
    let number = parseInt(document.getElementById("odd").value)
    if (isNaN(number)) {
        alert("请输入数字")
        return 
    }
    if (number % 2 != 0) {
        alert("请输入大于2的偶数")
        return 
    }
    sushu(number)
    console.log(array)
    for(let i = 0 ; i <= array.length / 2 ; i++){
        for(let j = array.length - 1 ; j >= array.length / 2; j--){
            if(array[i] + array[j] == number){
                str += '<p>' + number + "可以拆分为两个素数" + array[i] + "与" + array[j] + "的和" + '</p>'
            }
        }
    }
    document.getElementById("goldbach").innerHTML = str
    array = []
}
function sushu(number) {
    
    for(let i = 2 ; i <= number ; i++){
        for(let j = 2 ; j < i ; j++){
            if(i % j == 0){
                break
            }
            if(j == i - 1){
                array.push(i)
                // console.log(array)
                break 
            }
        }
    }
}