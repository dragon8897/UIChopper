var dodo = function (info)
{
    // app.documents.add();
    var ddd = convert_to_pinyin('地方djslfkj的咖啡机');
    alert("dodo:" + ddd);
}


var set_directory = function ()
{
    var dirPath = Folder.selectDialog('选择路径：');
    return dirPath;
}
