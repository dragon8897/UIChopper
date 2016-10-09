try {
    var loadSuccess = new ExternalObject("lib:\PlugPlugExternalObject"); //载入所需对象，loadSuccess 记录是否成功载入
} catch (e) {
    alert(e);// 如果载入失败，输出错误信息
}

function sendEvent(type, data) {
    if (loadSuccess) { 
        var eventJAX = new CSXSEvent(); //创建事件对象
        eventJAX.type = type; //设定一个类型名称
        eventJAX.data = data; // 事件要传递的信息
        eventJAX.dispatch(); // GO ! 发送事件
    }
}
