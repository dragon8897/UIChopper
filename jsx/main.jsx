var imagesDir = "";

// IDs for saving settings.
const settingsID = stringIDToTypeID("settings");
const imagesDirID = stringIDToTypeID("imagesDir");

var settings;

function loadSettings () {
	try {
		settings = app.getCustomOptions(settingsID);
	} catch (e) {
		saveSettings();
	}
	if (typeof settings == "undefined") saveSettings();
	settings = app.getCustomOptions(settingsID);
	if (settings.hasKey(imagesDirID))
    {
        imagesDir = settings.getString(imagesDirID);
    } 
}

function saveSettings () {
	var settings = new ActionDescriptor();
	settings.putString(imagesDirID, imagesDir);
	app.putCustomOptions(settingsID, settings, true);
}

function getImgDir () {
	return imagesDir;
}

loadSettings();

var set_directory = function ()
{
    imagesDir = Folder.selectDialog('选择路径：');
    if (imagesDir) 
    {
        imagesDir = imagesDir.fsName;
        saveSettings();
    }
    return imagesDir;
}