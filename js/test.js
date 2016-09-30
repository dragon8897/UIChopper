
var chop = function () {
    var path = document.getElementById("dir_path").innerHTML;
    cs.evalScript("panda_cut('" + path + "')");
}

var set_directory = function () {
    cs.evalScript("set_directory()", function (res) {
        if (res != 'null')
        {
            document.getElementById("dir_path").innerHTML=res;            
        }
    });
}

