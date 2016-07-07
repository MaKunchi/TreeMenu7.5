/**
 * Created by BruceMa on 2016/7/7.
 */
function hide(id){
    var pid=document.getElementById(id);
    pid.onClick=function(){
        this.nextSibling.style.display="none";
    }
}
window.onload=function(){
    hide("myText");
}

