/**
 * Created by DELL on 2019/2/12.
 */
window.onload=function() {
    //首页视频
    var container = document.querySelector(".container");
    var v3 = document.getElementById("v3");
    var ctr1 = document.querySelector(".ctr1");
    var img = document.querySelector(".ctr1 img");
    container.onmouseenter = function(){
        ctr1.style.display = "block";
    }
    container.onmouseleave = function(){
        ctr1.style.display = "none";
    }
    //为ctrl绑定点击事件
    console.log(ctr1);
    ctr1.onclick = function(e){
        console.log(123);
        e.preventDefault();
        //判断当前视频暂停状态true
        if(v3.paused) {
            v3.play();
            img.src = "./img/section/pause.png";
        }else{
            v3.pause();
            img.src = "./img/section/play.png";
        }
    }
}