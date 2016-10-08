var userCancelled = false;
//
// User interface
//
function createProgressBar()
{
	var rsrcString = 'palette { \
    text: "Please wait...", \
    preferredSize: [350, 60], \
    orientation: "column", \
    alignChildren: "fill", \
    barRow: Group { \
        orientation: "row", \
        bar: Progressbar { \
            preferredSize: [300, 16] \
        }, \
        cancelBtn: Button { \
            text: "取消" \
        } \
    }, \
    lblMessage: StaticText { \
        alignment: "left", \
        text: "" \
    }, \
    warning: Panel { \
        orientation: "column", \
        alignChildren: "fill", \
        message: StaticText { \
            text: "脚本工作中，请勿做任何操作。", \
            properties: { \
                multiline: true \
            } \
        } \
    } \
}';

	// create window
	var win;
	try {
		win = new Window(rsrcString);
	}
	catch (e) {
		alert("Progress bar resource is corrupt! Please, redownload the script with all files.", "Error", true);
		return false;
	}

	win.barRow.cancelBtn.onClick = function() {
		userCancelled = true;
	};

	win.onResizing = win.onResize = function () {
		this.layout.resize();
	}

	win.onClose = function() {
		userCancelled = true;
		return false;
	};
	return win;
}

function showProgressBar(win, message, maxValue)
{
	win.lblMessage.text = message;
	win.barRow.bar.maxvalue = maxValue;
	win.barRow.bar.value = 0;

	win.center();
	win.show();
	repaintProgressBar(win, true);
}

function updateProgressBar(win, message)
{
	++win.barRow.bar.value;
	if (message) {
		win.lblMessage.text = message;
	}
}

function repaintProgressBar(win, force /* = false*/)
{
	win.update();
}