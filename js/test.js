
var chop = function () {
    var path = document.getElementById("dir_path").innerHTML;
    // windows版本路径
    path = path.replace(/\\/g, "\\\\");
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

var get_directory = function () {
    cs.evalScript("getImgDir()", function (res) {
        if (res != 'null')
        {
            document.getElementById("dir_path").innerHTML=res;            
        }
    });
}

