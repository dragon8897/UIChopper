
var pop = function ()
{
    var cs = new CSInterface();

    function loadJSX(fileName)
    {
        var extensionRoot = cs.getSystemPath(SystemPath.EXTENSION) + "/jsx/";// 这里是指插件目录下的 jsx 文件夹，可自行设为任意目录
        cs.evalScript('$.evalFile("' + extensionRoot + fileName + '")');
    }
    loadJSX("pinyin.jsx");
    loadJSX("PandaCUT.jsx");

    cs.evalScript("dodo()");

    var result = window.cep.process.createProcess("usr/local/bin/mate");
    if (0 == result.err) {
        var pid = result.data;
        result = window.cep.process.isRunning(pid);
        if (true == result.data) {

        }
    }
}




