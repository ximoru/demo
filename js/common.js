/**
 * Created by zhousg on 2016/2/17.
 */
window.itcast = {};
/*封装的transitionEnd事件*/
itcast.transitionEnd = function(objDom,callback){
    if(typeof objDom != 'object'){
        return false;
    }
    objDom.addEventListener('transitionEnd',function(){
        /*if(callback){
         callback();
         }*/
        callback && callback();
    });
    objDom.addEventListener('webkitTransitionEnd',function(){
        callback && callback();
    });
};
/*tap事件封装*/
itcast.tap = function(objDom,callback){
    if(typeof objDom != 'object'){
        return false;
    }
    /*
     * 1 不能滑动
     * 2 响应需要在一定的时间完成  150ms
     * */
    var isMove = false;  /*记录是否滑动过*/
    var startTime = 0;
    objDom.addEventListener('touchstart',function(e){
        console.time('end');/*计时开始的一个申明 end*/
        startTime = Date.now();/*取到当前事件 ms*/
    });
    objDom.addEventListener('touchmove',function(e){
        isMove = true;
    });
    objDom.addEventListener('touchend',function(e){
        console.timeEnd('end');/*计时结束的时候 打印出时间差  end*/
        /*isMove是false*/
        /*并且 响应时间在150ms 内*/

        /*这就是一个模拟封装的tap事件的所有条件*/
        if(!isMove && (Date.now()-startTime) < 150){
            callback && callback(e);
        }

        /*注意要充值*/
        isMove = false;
        startTime = 0;

    });

}