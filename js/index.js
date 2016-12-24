/**
 * Created by Administrator on 2016/11/28.
 */
/*更多的显示隐藏*/
var block=document.getElementById('block'),
    hide=document.getElementById('hide');
block.onmouseenter=function(e){
    hide.style.display='block';
    console.log('ok')
};
block.onmouseleave=function(e){
    hide.style.display='none';
};
/*点击扫二维码*/
var safe=document.getElementById('safe'),
    account=document.getElementById('account');
safe.onlick=function (e) {
    e=e||window.event;
    var target=e.target||e.srcElement;
    if(target=='safe'){

    }
};
/*瀑布流*/
function createLi() {
    for(var i=0;i<100;i++){
        var str=Math.round(Math.random()*3);
        var strId='midLi'+str;
        var mid=document.getElementById('mid');
        var midLast=document.getElementById('mid-last');
        var midLi=document.getElementById(strId);
        var midLiClone=midLi.cloneNode(true);
        mid.insertBefore(midLiClone,midLast);
    }
}
function win(attr) {
    return document.documentElement[attr]||document.body[attr];
}
createLi();
var main=document.getElementById('main');
var mainR=document.getElementById('mainR');
var header=document.getElementById('header');

window.onscroll=function(){
    var scrollBottom=win('scrollTop')+win('clientHeight');
    if(scrollBottom+200>=document.body.scrollHeight){
        createLi();
    }
    //让登录框显示

    var headerPos=header.clientHeight;
    var mainPos=mainR.clientHeight+mainR.offsetTop-win('scrollTop');
    var login=document.getElementById('login');
//因为fixed把登录框拉倒最下面，上面的高度就没有他了，bug
    if(mainPos<=headerPos){
        login.style.position='fixed';
        main.style.padding='10px 0 15px 0';

    }else if(mainPos+login.clientHeight>headerPos){
        login.style.position='';
        main.style.padding='15px 0 0 0'
    }







};
/*最后一个盒子的底部被导航栏的顶部48px覆盖时，出现登录框*/








