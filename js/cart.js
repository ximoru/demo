/**
 * Created by zhousg on 2016/2/18.
 */
window.onload = function(){
    deleteFuc();
};
/*����ɾ����*/
function deleteFuc(){
    /*
    * 1.������
    * 2.ɾ��ͼƬ�Ĵ򿪸��ӵĶ���
    * 3.���ȡ����ť�رյ�����
    * */

    /*ȡ��Dom����*/
    var popWin = document.querySelector('.jd_popWin_box');
    var cancel = popWin.querySelector('.cancel');

    /*�ҵ����е�ɾ����ť*/
    var allDeleteBtn = document.querySelectorAll('.product_info_option .f_right');

    var deleteUp = null;

    for(var i = 0 ; i < allDeleteBtn.length ; i ++){
        allDeleteBtn[i].index = i;
        allDeleteBtn[i].onclick = function(){
            /*1.������*/
            popWin.parentNode.style.display = 'block';
            /*2.�򿪸���*/
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
        /*1.�ر�*/
        popWin.parentNode.style.display = 'none';
        if(deleteUp){
            deleteUp.style.transform = 'none';
            deleteUp.style.webkitTransform = 'none';
        }
    }
}
