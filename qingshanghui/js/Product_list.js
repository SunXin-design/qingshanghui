/**
 * Created by Administrator on 15-9-12.
 */


addEvent(window,'load',function(){
    var oPacity_banner = document.getElementById('opacity_banner');
    var oPacity_Ul = document.getElementById('opacity_ul');

    var aPacity_Li = oPacity_Ul.getElementsByTagName('li');

    //鼠标点击，停止透明度切换；鼠标放上去，开始透明度切换
    oPacity(oPacity_Ul,aPacity_Li,oPacity_banner)

})


addEvent(window,'load',function(){
    setInterval(function(){
        ShowCountDown(2016,1,1,'spanTime')
    },1000);
    //window.setInterval(ShowCountDown(2016,1,1,'spanTime'),1000)
})



addEvent(window,'load',function(){

        var oProduct_Ul = document.getElementById('product_list');

       addEvent(window,'scroll',function(){

            var sTop=document.documentElement.scrollTop||document.body.scrollTop;
            var iHeight=document.documentElement.clientHeight;
            var aLi=oProduct_Ul.getElementsByTagName('li');
                lastLi=aLi[aLi.length-1];
                if(lastTop(lastLi)<(sTop+iHeight)){
                    Ajax('2.txt',function(str){


                        var arr=eval(str);


                                var oLi=document.createElement('li');
                                var oA = document.createElement('a');
                                var oB = document.createElement('b');
                                var oImg = document.createElement('img');
                                var oP1 = document.createElement('p');
                                var oP2 = document.createElement('p');
                                var oP3 = document.createElement('p');
                                var oEm1 = document.createElement('em');
                                var oEm2 = document.createElement('em');



                                oA.href="products.html";
                                oImg.src=arr[0].src;
                                oP1.innerHTML = arr[0].name;
                                oP2.innerHTML = arr[0].title;

                                oEm1.innerHTML = arr[0].price;
                                oEm2.innerHTML = arr[0].before_price;


                                oLi.appendChild(oA);
                                oB.appendChild(oImg);
                                oLi.appendChild(oB);
                                oLi.appendChild(oP1);
                                oLi.appendChild(oP2);


                                oP3.appendChild(oEm1);
                                oP3.appendChild(oEm2);
                                oLi.appendChild(oP3);


                                 oProduct_Ul.appendChild(oLi)


                    })
                }

       })
})


    function lastTop(obj) {
        var top = 0;
        while (obj) {
            top += obj.offsetTop;
            obj = obj.offsetParent;
        }
        return top;

    }

