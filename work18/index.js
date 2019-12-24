function send(){
    let sno = document.getElementById('sno').value
    let name = document.getElementById('name').value
    let content = document.getElementById ('content').value
    let xmlhttp;
    if (window.XMLHttpRequest){
        //IE7+,Firefox,Chrome,Opera,Safari浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    } else {
        //IE6,IE5浏览器执行代码
        xmlhttp = new Activexobject("Microsoft.XMLHTTP");
    }

    xmlhttp.open('post','http://localhost:8080/ajax',true)        //调试通过app.js井
    //xmlhttp.open('post','http://139.9.81.203:8090/ajax',true)  //调试通过app.js并截图后，xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send('sno='+sno+'&name='+name+"&content="+content)
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send('sno=' + sno + '&name=' + name + "&content=" + content)

    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            let ajaxData=JSON.parse(xmlhttp.responseText)
            result = ajaxData.reverse().map((val)=>{return JSON.stringify(val)})
            document.getElementById("result").innerHTML=result.join('<br>');
        }
    }
}