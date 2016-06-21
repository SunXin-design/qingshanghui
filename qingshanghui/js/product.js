// JavaScript Document



//购物数量
addEvent(window,'load',function(){
    //尺寸表格隔行变色
   tR_changecolor('size_table');



    var oProduct_size_choose = document.getElementById('product_size_choose');
    var oProdcut_choose_span = oProduct_size_choose.getElementsByTagName('span');
    var oProduct_number_choose = document.getElementById('product_number_choose');

    var oProduct_number_choose_span =  oProduct_number_choose.getElementsByTagName('span');
    var oQuantity_number = document.getElementById('quantity_number');
    for(var j = 0; j < oProdcut_choose_span.length;j++) {
        oProdcut_choose_span[j].index = j;
        oProdcut_choose_span[j].onclick = function () {
            for( var k = 0; k < oProdcut_choose_span.length ; k++) {

                oProdcut_choose_span[k].className = 'not_change';
            }
                oProdcut_choose_span[this.index].className = 'change';
        }
    }


    //按钮控制数量增加
    oProduct_number_choose_span[0].onclick =function() {

        if(oQuantity_number.value == 1){
            oQuantity_number.value = 1;
        }
        else{
            oQuantity_number.value--;
        }
    }
    oProduct_number_choose_span[2].onclick =function() {
            oQuantity_number.value++;
    };






});


//弹出登录对话框
addEvent(window,'load',function(){

    var oShopping_now = document.getElementById('shopping_now');
    var oClose_dialog = document.getElementById('close_dialog');
    var oShow_big_div = document.getElementById('show_big_div');
    var oLogin_dialog = document.getElementById('login_dialog');

    var a = getCookie('user');
    var b = getCookie('pwd');
    oShopping_now.onclick = function(){
        if(a&&b){
            window.open('ordering.html','_blank')
        }
        else{
        oShow_big_div.style.display = 'block';
        oLogin_dialog.style.display = 'block';
        }
    };
    oClose_dialog.onclick = function () {
        oShow_big_div.style.display = 'none';
        oLogin_dialog.style.display = 'none';
    }



})

addEvent(window,'load',function(){
    setInterval(function(){
        ShowCountDown(2016,1,1,'spanTime')
    },1000);
    //window.setInterval(ShowCountDown(2016,1,1,'spanTime'),1000)
})



//显示图片放大
addEvent(window,'load',function(){

   var oShow_pic = document.getElementById('show_pic');

    var oShow_dt = oShow_pic.getElementsByTagName('dt');

    var oShow_dt_img = oShow_dt[0].getElementsByTagName('img')[0];

    //var oShow_dd = oShow_pic.getElementsByTagName('dd');

    var oShow_dd_img = oShow_pic.getElementsByTagName('img');

    var oBig_img = document.getElementById('big_img');

    for( var i = 1 ;i < oShow_dd_img.length;i++){
        oShow_dd_img[i].index = i;
        oShow_dd_img[i].onclick = function(){

            oShow_dt_img.src = "img3/pic"+[this.index]+".jpg";
            oBig_img.src = "img3/big"+[this.index]+".jpg";
        }

    }

    var oPic_pre = document.getElementById('pic_pre');
    var oPic_next = document.getElementById('pic_next');
    var oPic_show_ul = document.getElementById('pic_show');
    var aPic_show_li = oPic_show_ul.getElementsByTagName('li');

    var j = 0;
    var k = aPic_show_li[0].offsetWidth;
    oPic_pre.onclick = function (){
            j--;
        oPic_show_ul.left -= k;

        oShow_dt_img.src = "img3/pic"+j+".jpg";
    }
    oPic_next.onclick = function (){
        j++;
        oPic_show_ul.left += k;
        oShow_dt_img.src = "img3/pic"+j+".jpg";
    }





});

//图片放大镜
addEvent(window,'load',function(){
    var oDiv=document.getElementById('pic_zoom');
    var oMark=getByClass(oDiv, 'mark')[0];
    var oFloat=getByClass(oDiv, 'float_layer')[0];
    var oBig=getByClass(oDiv, 'big_pic')[0];
    var oSmall=getByClass(oDiv, 'small_pic')[0];
    var oImg=oBig.getElementsByTagName('img')[0];

    oMark.onmouseover=function ()
    {
        oFloat.style.display='block';
        oBig.style.display='block';
    };

    oMark.onmouseout=function ()
    {
        oFloat.style.display='none';
        oBig.style.display='none';
    };

    oMark.onmousemove=function (ev)
    {
        var oEvent=ev||event;
        var a = document.documentElement.scrollTop||document.body.scrollTop;

        var l = oEvent.clientX - oDiv.offsetLeft - oSmall.offsetLeft - oFloat.offsetWidth/2;

        var t = oEvent.clientY-oDiv.offsetTop + a - oSmall.offsetTop-oFloat.offsetHeight/2;

        if(l <  0)
        {
            l=0;
        }
        else if(l > oMark.offsetWidth-oFloat.offsetWidth)
        {
            l = oMark.offsetWidth-oFloat.offsetWidth;
        }

        if(t < 0)
        {
            t = 0;
        }
        else if(t > oMark.offsetHeight-oFloat.offsetHeight)
        {
            t = oMark.offsetHeight-oFloat.offsetHeight;
        }

        oFloat.style.left=l+'px';
        oFloat.style.top=t+'px';

        var percentX = l/(oMark.offsetWidth-oFloat.offsetWidth);
        var percentY = t/(oMark.offsetHeight-oFloat.offsetHeight);
        console.log(oImg.offsetWidth-oBig.offsetWidth)
        oImg.style.left = -percentX*(oImg.offsetWidth-oBig.offsetWidth)+'px';
        oImg.style.top = -percentY*(oImg.offsetHeight-oBig.offsetHeight)+'px';
    };
})




