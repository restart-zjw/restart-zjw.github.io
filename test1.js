var show_num = [];
var errorflag="×";
var rightflag="√";
draw(show_num);
function $(id) {
    return document.getElementById(id);
}
function checkPassword(n){
    var psd=$("userpsd").value;
    var repsd=$("userrepsd").value;
    var len_prd=psd.length;
    var len_reprd=repsd.length;
    switch (n){
        case 1:
        {
            if(len_prd>20||len_prd<6){
                $("info_password").className="red_flag";
                $("info_password").innerHTML="密码长度为6-20个字符";
                $("info_password_flag").className="red_flag";
                $("info_password_flag").innerHTML=errorflag;
            }else{
                $("info_password_flag").className="green_flag";
                $("info_password_flag").innerHTML=rightflag;
                $("info_password").className="info_ares";
                $("info_password").innerHTML=" ";
            }
            break;
        }
        case 2:
        {
            if(len_reprd>20||len_reprd<6){
                $("info_repassword").className="red_flag";
                $("info_repassword").innerHTML="密码长度为6-20个字符";
                $("info_repassword_flag").className="red_flag";
                $("info_repassword_flag").innerHTML=errorflag;
            }else{
                $("info_repassword_flag").className="green_flag";
                $("info_repassword_flag").innerHTML=rightflag;
                $("info_repassword").className="info_area";
                $("info_repassword").innerHTML=" ";
            }
            if(psd!=repsd){
                $("info_repassword").className="red_flag";
                $("info_repassword").innerHTML="密码与确认密码不同！";
                $("info_repassword_flag").className="red_flag";
                $("info_repassword_flag").innerHTML=errorflag;
            }else{
                $("info_repassword_flag").className="green_flag";
                $("info_repassword_flag").innerHTML=rightflag;
                $("info_repassword").className="info_area";
                $("info_repassword").innerHTML=" ";
            }
            break;
        }
    }
}
function checkName(){
    var name=$("username").value;
    name_len=name.length;
    if((name_len<4||name_len>20)||name_len==0||(name_len>0&&name_len<4)){
        $("info_name").className="red_flag";
        $("info_name").innerHTML="用户名非空，且长度为4-20个字符";
        $("info_name_flag").className="red_flag";
        $("info_name_flag").innerHTML=errorflag;
    }else{
        $("info_name_flag").className="green_flag";
        $("info_name_flag").innerHTML=rightflag;
        $("info_name").className="info_area";
        $("info_name").innerHTML=" ";
    }
}
function displayInfo(){
    $("info_name").className="black_flag";
    $("info_name").innerHTML="4-20个字符，由小写字母、中文、数字组成";
}
function displayPsd(){
    $("info_password").className="black_flag";
    $("info_password").innerHTML="密码为6-20个字符，由英文、数字及符号组成";
}
function displayRePsd(){
    $("info_password").className="black_flag";
    $("info_password").innerHTML="密码为6-20个字符，由英文、数字及符号组成";
}
function dj(){
    draw(show_num);
}
function sublim(){
    var val=document.getElementById("text").value;
    var num = show_num.join("");
    var check=document.getElementById("box").checked;
    if(val == ""){
        return;
    }
    if(check==true){
        if(val == num){
            alert('提交成功！');
            document.getElementById(".input-val").val('');
            draw(show_num);
            return check;
        }else {
            alert('验证码错误！');
            document.getElementById("text").value = '';
            draw(show_num);
            return false;
        }
    }else{
        alert('您必须同意当当服务条款后，才能提交注册。');
        return false;
    }
}
function draw(show_num) {
    var canvas_width=document.getElementById('canvas').clientWidth;
    var canvas_height=document.getElementById('canvas').clientHeight;
    var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
    var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
    canvas.width = canvas_width;
    canvas.height = canvas_height;
    var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m";
    var aCode = sCode.split(",");
    var aLength = aCode.length;//获取到数组的长度

    for (var i = 0; i <= 3; i++) {
        var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
        var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        var txt = aCode[j];//得到随机的一个内容
        show_num[i] = txt;
        var x = 10 + i * 20;//文字在canvas上的x坐标
        var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";

        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
    }
    for (var i = 0; i <= 5; i++) { //验证码上显示线条
        context.strokeStyle = randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.stroke();
    }
    for (var i = 0; i <= 30; i++) { //验证码上显示小点
        context.strokeStyle = randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    }
}
function randomColor() {//得到随机的颜色值
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
