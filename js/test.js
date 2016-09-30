
var pop = function ()
{
    cs.evalScript("dodo()");
}

var chop = function () {
    cs.evalScript("panda_cut('ffff')");
}

var set_directory = function () {
    cs.evalScript("set_directory()", function (res) {
        alert(res);
    });
}

