/**
 * Created by Administrator on 15-9-14.
 */

addEvent(window,'load',function(){
    var oPlay_Ul = document.getElementById('play_img');
    var oPlay_Li = oPlay_Ul.getElementsByTagName('li');
    for( var i = 0 ; i < oPlay_Li.length ;i++){
        oPlay_Li[i].index = i;
        oPlay_Li[i].onclick = function(){


            oPlay_Li[this.index].className = 'p4';
            oPlay_Li[this.index+1].className = 'p5';
            oPlay_Li[this.index+2].className = 'p6';
            oPlay_Li[this.index+3].className = 'p7';


            oPlay_Li[this.index-3].className = 'p1';
            oPlay_Li[this.index-2].className = 'p2';
            oPlay_Li[this.index-1].className = 'p3';

        }
    }

    var oCeo = document.getElementById('ceo_box');
    var oCeo_Ul = document.getElementById('ceo_play');
    var oCeo_Li = oCeo_Ul.getElementsByTagName('li');
    var oCeo_pre = document.getElementById('ceo_pre');
    var oCeo_next = document.getElementById('ceo_next');

    left_right(oCeo,oCeo_Ul,oCeo_Li,oCeo_pre,oCeo_next)


})