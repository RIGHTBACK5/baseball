var player = new Array();
var com = new Array();
var s;
var b;
var o;
var go;
var st = "<br><br><span>";
var et = "</span>";
var tb = $("#textbox").children();
var num = /^[0-9]+$/;

function reset(){//모든 기록을 지우고 새로 시작함
    com[0] = -2;
    com[1] = -1;
    com[2] = 0;
    for(var i=0; i<3; i++){
       com[i] = Math.floor(Math.random()*9)+1;//랜덤 숫자 지정, *9라는 뜻은 0~8 +1 1~9
       if(com[0]==com[1]||com[0]==com[2]||com[1]==com[2]){
           i--;
           continue;
       }
       console.log(com[i]);
    }
    s=0;
    b=0;
    o=0;
    go=1;
    tb.empty();
    tb.append("<span>경기장 입장!"+et);
    tb.append(st+go+"회 PLAY BALL!"+et);
}
reset();
$("#scan").click(function(){
    player[0] = $("#i1:text").val();
        $("#i1:text").val("");
    player[1] = $("#i2:text").val();
        $("#i2:text").val("");
    player[2] = $("#i3:text").val();
        $("#i3:text").val("");
    for(var i=0; i<3; i++){
        if(player[0]==player[1]||player[0]==player[2]||player[1]==player[2]||player[i]<1||player[i]>9){
            tb.append(st+"파울!"+et);
            return;
       }
    }
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            if(player[i]==com[j]){
                if(i==j) s++;
                else b++;
                break;
            }
            else if(j==2) o++;
        }
    }
    console.log("s:"+s+" b:"+b+" o:"+o);
    tb.append(st+"스트라이크:"+s+" 볼:"+b+" 아웃:"+o+et);
    if(go==9){
        tb.append(st+"게임 종료! 재시작?"+et);
        return;
    }
    else if(s==3){
        tb.append(st+"좌중간을 넘어갑니다!"+et);
        go=9;
    }
    else{
        go++;
        tb.append(st+go+"회 Play Ball!"+et);
    }
    s=0;
    b=0;
    o=0;
});
$("#rs").click(reset);

function showKeyCode(event) {
			event = event || window.event;
			var keyID = (event.which) ? event.which : event.keyCode;
			if( ( keyID >=48 && keyID <= 57 ) || ( keyID >=96 && keyID <= 105 ) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 )
			{
				return;
			}
			else
			{
				return false;
			}
		}