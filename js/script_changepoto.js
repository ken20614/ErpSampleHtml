
var cArr=["p7","p6","p5","p4","p3","p2","p1"];
var index=0;
$(".next").click( //下一張
    function(){
    nextimg();
    }
)
$(".prev").click( //上一張
    function(){
    previmg();
    }
)
//上一張
function previmg(){
    cArr.unshift(cArr[6]); //向數組的開頭添加一個或更多元素 並返回新的長度
    cArr.pop(); //移除最後一個元素
    //i是元素的索引，從0開始
    //e為當前處理的元素
    //each迴圈，當前處理的元素移除所有的class，然後添加數組索引i的class
    $("li").each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
    })
    index--;
    if (index<0) {
        index=6;
    }
    show();
}

//下一張
function nextimg(){
    cArr.push(cArr[0]); //向數組的末尾添加一個或更多元素 並返回新的長度
    cArr.shift(); //刪除元素數組中的第一個值 並返回
    $("li").each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
    })
    index++;
    if (index>6) {
        index=0;
    }
    show();
}