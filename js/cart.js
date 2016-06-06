/**
 * Created by zhousg on 2016/2/18.
 */
window.onload = function(){
    deleteFuc();
};
/*调用删除框*/
function deleteFuc(){
    /*
    * 1.弹出框
    * 2.删除图片的打开盖子的动画
    * 3.点击取消按钮关闭弹出框
    * */

    /*取到Dom对象*/
    var popWin = document.querySelector('.jd_popWin_box');
    var cancel = popWin.querySelector('.cancel');

    /*找到所有的删除按钮*/
    var allDeleteBtn = document.querySelectorAll('.product_info_option .f_right');

    var deleteUp = null;

    for(var i = 0 ; i < allDeleteBtn.length ; i ++){
        allDeleteBtn[i].index = i;
        allDeleteBtn[i].onclick = function(){
            /*1.弹出框*/
            popWin.parentNode.style.display = 'block';
            /*2.打开盖子*/
            deleteUp = this.firstElementChild;
            console.log(deleteUp);
            deleteUp.style.transition = 'all 1s ease';
            deleteUp.style.webkitTransition = 'all 1s ease';
            deleteUp.style.transform = 'rotate(-30deg)';
            deleteUp.style.webkitTransform = 'rotate(-30deg)';
            deleteUp.style.transformOrigin = '0 5px';
            deleteUp.style.webkitTransformOrigin = '0 5px';
        }
    }

    cancel.onclick = function(){
        /*1.关闭*/
        popWin.parentNode.style.display = 'none';
        if(deleteUp){
            deleteUp.style.transform = 'none';
            deleteUp.style.webkitTransform = 'none';
        }
    }
}
