var inputFolderName;

function panda_cut(folderPath) {
    inputFolderName = folderPath;
    if (inputFolderName) {
        var collect = collectLayersAM();

        var psdName = activeDocument.name.split('.')[0];
        sendEvent("com.nullice.event.test2", psdName + ',' + collect);

    } else {
        alert("没有选择文件夹，脚本退出");
    }
}

function cutPictureAM(collect) {
    collect = collect.split(",");
    var count = collect.length / 2;
    var psdName = collect[count];

    userCancelled = false;

    var progressBarWindow = createProgressBar();

    if (progressBarWindow) {
        showProgressBar(progressBarWindow, "收集图层 ...", count - 1);
    }

    var history = activeDocument.activeHistoryState;
    for (var i=1,len=count; i<len; i++) {
        var name = collect[i];
        var imgName = psdName + '_' + collect[i + count].substring(1);
        // selectLayer(name);
        // trimAction();
        // exportAction(imgName);
        // activeDocument.activeHistoryState = history;
        // selectLayer(name);
        
        selectLayer(name);
        clickLayer(name);
        newDocument(name);
        trimAction();
        exportAction(imgName);
        closeDocument();
        activeDocument.activeHistoryState = history;
        selectLayer(name);

        if (progressBarWindow) {
            updateProgressBar(progressBarWindow, "导出 " + name);
            repaintProgressBar(progressBarWindow);
            if (userCancelled) {
                break;
            }
        }

    }

    if (progressBarWindow) {
        progressBarWindow.hide();
    }
}

function selectLayer(name) {
    var idShw = charIDToTypeID( "Shw " );
        var desc19 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var list14 = new ActionList();
                var ref14 = new ActionReference();
                var idLyr = charIDToTypeID( "Lyr " );
                ref14.putName( idLyr, name );
            list14.putReference( ref14 );
        desc19.putList( idnull, list14 );
        var idTglO = charIDToTypeID( "TglO" );
        desc19.putBoolean( idTglO, true );
    executeAction( idShw, desc19, DialogModes.NO );
}

function trimAction() {
    var idtrim = stringIDToTypeID( "trim" );
        var desc37 = new ActionDescriptor();
        var idtrimBasedOn = stringIDToTypeID( "trimBasedOn" );
        var idtrimBasedOn = stringIDToTypeID( "trimBasedOn" );
        var idTrns = charIDToTypeID( "Trns" );
        desc37.putEnumerated( idtrimBasedOn, idtrimBasedOn, idTrns );
        var idTop = charIDToTypeID( "Top " );
        desc37.putBoolean( idTop, true );
        var idBtom = charIDToTypeID( "Btom" );
        desc37.putBoolean( idBtom, true );
        var idLeft = charIDToTypeID( "Left" );
        desc37.putBoolean( idLeft, true );
        var idRght = charIDToTypeID( "Rght" );
        desc37.putBoolean( idRght, true );
    executeAction( idtrim, desc37, DialogModes.NO );
}

function exportAction(name) {
    var pngName = name + '.png';
    var idExpr = charIDToTypeID( "Expr" );
        var desc2 = new ActionDescriptor();
        var idUsng = charIDToTypeID( "Usng" );
            var desc3 = new ActionDescriptor();
            var idOp = charIDToTypeID( "Op  " );
            var idSWOp = charIDToTypeID( "SWOp" );
            var idOpSa = charIDToTypeID( "OpSa" );
            desc3.putEnumerated( idOp, idSWOp, idOpSa );
            var idDIDr = charIDToTypeID( "DIDr" );
            desc3.putBoolean( idDIDr, true );
            var idIn = charIDToTypeID( "In  " );
            desc3.putPath( idIn, new File( inputFolderName ) );
            var idovFN = charIDToTypeID( "ovFN" );
            desc3.putString( idovFN, ""+pngName+"" );
            var idFmt = charIDToTypeID( "Fmt " );
            var idIRFm = charIDToTypeID( "IRFm" );
            var idPNtwofour = charIDToTypeID( "PN24" );
            desc3.putEnumerated( idFmt, idIRFm, idPNtwofour );
            var idIntr = charIDToTypeID( "Intr" );
            desc3.putBoolean( idIntr, false );
            var idTrns = charIDToTypeID( "Trns" );
            desc3.putBoolean( idTrns, true );
            var idMtt = charIDToTypeID( "Mtt " );
            desc3.putBoolean( idMtt, true );
            var idEICC = charIDToTypeID( "EICC" );
            desc3.putBoolean( idEICC, false );
            var idMttR = charIDToTypeID( "MttR" );
            desc3.putInteger( idMttR, 255 );
            var idMttG = charIDToTypeID( "MttG" );
            desc3.putInteger( idMttG, 255 );
            var idMttB = charIDToTypeID( "MttB" );
            desc3.putInteger( idMttB, 255 );
            var idSHTM = charIDToTypeID( "SHTM" );
            desc3.putBoolean( idSHTM, false );
            var idSImg = charIDToTypeID( "SImg" );
            desc3.putBoolean( idSImg, true );
            var idSWsl = charIDToTypeID( "SWsl" );
            var idSTsl = charIDToTypeID( "STsl" );
            var idSLAl = charIDToTypeID( "SLAl" );
            desc3.putEnumerated( idSWsl, idSTsl, idSLAl );
            var idSWch = charIDToTypeID( "SWch" );
            var idSTch = charIDToTypeID( "STch" );
            var idCHsR = charIDToTypeID( "CHsR" );
            desc3.putEnumerated( idSWch, idSTch, idCHsR );
            var idSWmd = charIDToTypeID( "SWmd" );
            var idSTmd = charIDToTypeID( "STmd" );
            var idMDCC = charIDToTypeID( "MDCC" );
            desc3.putEnumerated( idSWmd, idSTmd, idMDCC );
            var idohXH = charIDToTypeID( "ohXH" );
            desc3.putBoolean( idohXH, false );
            var idohIC = charIDToTypeID( "ohIC" );
            desc3.putBoolean( idohIC, true );
            var idohAA = charIDToTypeID( "ohAA" );
            desc3.putBoolean( idohAA, true );
            var idohQA = charIDToTypeID( "ohQA" );
            desc3.putBoolean( idohQA, true );
            var idohCA = charIDToTypeID( "ohCA" );
            desc3.putBoolean( idohCA, false );
            var idohIZ = charIDToTypeID( "ohIZ" );
            desc3.putBoolean( idohIZ, true );
            var idohTC = charIDToTypeID( "ohTC" );
            var idSToc = charIDToTypeID( "SToc" );
            var idOCzerothree = charIDToTypeID( "OC03" );
            desc3.putEnumerated( idohTC, idSToc, idOCzerothree );
            var idohAC = charIDToTypeID( "ohAC" );
            var idSToc = charIDToTypeID( "SToc" );
            var idOCzerothree = charIDToTypeID( "OC03" );
            desc3.putEnumerated( idohAC, idSToc, idOCzerothree );
            var idohIn = charIDToTypeID( "ohIn" );
            desc3.putInteger( idohIn, -1 );
            var idohLE = charIDToTypeID( "ohLE" );
            var idSTle = charIDToTypeID( "STle" );
            var idLEzerothree = charIDToTypeID( "LE03" );
            desc3.putEnumerated( idohLE, idSTle, idLEzerothree );
            var idohEn = charIDToTypeID( "ohEn" );
            var idSTen = charIDToTypeID( "STen" );
            var idENzerozero = charIDToTypeID( "EN00" );
            desc3.putEnumerated( idohEn, idSTen, idENzerozero );
            var idolCS = charIDToTypeID( "olCS" );
            desc3.putBoolean( idolCS, false );
            var idolEC = charIDToTypeID( "olEC" );
            var idSTst = charIDToTypeID( "STst" );
            var idSTzerozero = charIDToTypeID( "ST00" );
            desc3.putEnumerated( idolEC, idSTst, idSTzerozero );
            var idolWH = charIDToTypeID( "olWH" );
            var idSTwh = charIDToTypeID( "STwh" );
            var idWHzeroone = charIDToTypeID( "WH01" );
            desc3.putEnumerated( idolWH, idSTwh, idWHzeroone );
            var idolSV = charIDToTypeID( "olSV" );
            var idSTsp = charIDToTypeID( "STsp" );
            var idSPzerofour = charIDToTypeID( "SP04" );
            desc3.putEnumerated( idolSV, idSTsp, idSPzerofour );
            var idolSH = charIDToTypeID( "olSH" );
            var idSTsp = charIDToTypeID( "STsp" );
            var idSPzerofour = charIDToTypeID( "SP04" );
            desc3.putEnumerated( idolSH, idSTsp, idSPzerofour );
            var idolNC = charIDToTypeID( "olNC" );
                var list1 = new ActionList();
                    var desc4 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNCzerozero = charIDToTypeID( "NC00" );
                    desc4.putEnumerated( idncTp, idSTnc, idNCzerozero );
                var idSCnc = charIDToTypeID( "SCnc" );
                list1.putObject( idSCnc, desc4 );
                    var desc5 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNConenine = charIDToTypeID( "NC19" );
                    desc5.putEnumerated( idncTp, idSTnc, idNConenine );
                var idSCnc = charIDToTypeID( "SCnc" );
                list1.putObject( idSCnc, desc5 );
                    var desc6 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNCtwoeight = charIDToTypeID( "NC28" );
                    desc6.putEnumerated( idncTp, idSTnc, idNCtwoeight );
                var idSCnc = charIDToTypeID( "SCnc" );
                list1.putObject( idSCnc, desc6 );
                    var desc7 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNCtwofour = charIDToTypeID( "NC24" );
                    desc7.putEnumerated( idncTp, idSTnc, idNCtwofour );
                var idSCnc = charIDToTypeID( "SCnc" );
                list1.putObject( idSCnc, desc7 );
                    var desc8 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNCtwofour = charIDToTypeID( "NC24" );
                    desc8.putEnumerated( idncTp, idSTnc, idNCtwofour );
                var idSCnc = charIDToTypeID( "SCnc" );
                list1.putObject( idSCnc, desc8 );
                    var desc9 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNCtwofour = charIDToTypeID( "NC24" );
                    desc9.putEnumerated( idncTp, idSTnc, idNCtwofour );
                var idSCnc = charIDToTypeID( "SCnc" );
                list1.putObject( idSCnc, desc9 );
            desc3.putList( idolNC, list1 );
            var idobIA = charIDToTypeID( "obIA" );
            desc3.putBoolean( idobIA, false );
            var idobIP = charIDToTypeID( "obIP" );
            desc3.putString( idobIP, """""" );
            var idobCS = charIDToTypeID( "obCS" );
            var idSTcs = charIDToTypeID( "STcs" );
            var idCSzeroone = charIDToTypeID( "CS01" );
            desc3.putEnumerated( idobCS, idSTcs, idCSzeroone );
            var idovNC = charIDToTypeID( "ovNC" );
                var list2 = new ActionList();
                    var desc10 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNCzeroone = charIDToTypeID( "NC01" );
                    desc10.putEnumerated( idncTp, idSTnc, idNCzeroone );
                var idSCnc = charIDToTypeID( "SCnc" );
                list2.putObject( idSCnc, desc10 );
                    var desc11 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNCtwozero = charIDToTypeID( "NC20" );
                    desc11.putEnumerated( idncTp, idSTnc, idNCtwozero );
                var idSCnc = charIDToTypeID( "SCnc" );
                list2.putObject( idSCnc, desc11 );
                    var desc12 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNCzerotwo = charIDToTypeID( "NC02" );
                    desc12.putEnumerated( idncTp, idSTnc, idNCzerotwo );
                var idSCnc = charIDToTypeID( "SCnc" );
                list2.putObject( idSCnc, desc12 );
                    var desc13 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNConenine = charIDToTypeID( "NC19" );
                    desc13.putEnumerated( idncTp, idSTnc, idNConenine );
                var idSCnc = charIDToTypeID( "SCnc" );
                list2.putObject( idSCnc, desc13 );
                    var desc14 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNCzerosix = charIDToTypeID( "NC06" );
                    desc14.putEnumerated( idncTp, idSTnc, idNCzerosix );
                var idSCnc = charIDToTypeID( "SCnc" );
                list2.putObject( idSCnc, desc14 );
                    var desc15 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNCtwofour = charIDToTypeID( "NC24" );
                    desc15.putEnumerated( idncTp, idSTnc, idNCtwofour );
                var idSCnc = charIDToTypeID( "SCnc" );
                list2.putObject( idSCnc, desc15 );
                    var desc16 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNCtwofour = charIDToTypeID( "NC24" );
                    desc16.putEnumerated( idncTp, idSTnc, idNCtwofour );
                var idSCnc = charIDToTypeID( "SCnc" );
                list2.putObject( idSCnc, desc16 );
                    var desc17 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNCtwofour = charIDToTypeID( "NC24" );
                    desc17.putEnumerated( idncTp, idSTnc, idNCtwofour );
                var idSCnc = charIDToTypeID( "SCnc" );
                list2.putObject( idSCnc, desc17 );
                    var desc18 = new ActionDescriptor();
                    var idncTp = charIDToTypeID( "ncTp" );
                    var idSTnc = charIDToTypeID( "STnc" );
                    var idNCtwotwo = charIDToTypeID( "NC22" );
                    desc18.putEnumerated( idncTp, idSTnc, idNCtwotwo );
                var idSCnc = charIDToTypeID( "SCnc" );
                list2.putObject( idSCnc, desc18 );
            desc3.putList( idovNC, list2 );
            var idovCM = charIDToTypeID( "ovCM" );
            desc3.putBoolean( idovCM, false );
            var idovCW = charIDToTypeID( "ovCW" );
            desc3.putBoolean( idovCW, false );
            var idovCU = charIDToTypeID( "ovCU" );
            desc3.putBoolean( idovCU, true );
            var idovSF = charIDToTypeID( "ovSF" );
            desc3.putBoolean( idovSF, true );
            var idovCB = charIDToTypeID( "ovCB" );
            desc3.putBoolean( idovCB, true );
            var idovSN = charIDToTypeID( "ovSN" );
            desc3.putString( idovSN, """images""" );
        var idSaveForWeb = stringIDToTypeID( "SaveForWeb" );
        desc2.putObject( idUsng, idSaveForWeb, desc3 );
    executeAction( idExpr, desc2, DialogModes.NO );
}

function clickLayer(name) {
    var idslct = charIDToTypeID( "slct" );
        var desc34 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref20 = new ActionReference();
            var idLyr = charIDToTypeID( "Lyr " );
            ref20.putName( idLyr, name );
        desc34.putReference( idnull, ref20 );
        var idMkVs = charIDToTypeID( "MkVs" );
        desc34.putBoolean( idMkVs, false );
        var idLyrI = charIDToTypeID( "LyrI" );
            var list14 = new ActionList();
            list14.putInteger( 46959 );
        desc34.putList( idLyrI, list14 );
    executeAction( idslct, desc34, DialogModes.NO );
}

function newDocument(docName) {
    var idMk = charIDToTypeID( "Mk  " );
        var desc37 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref21 = new ActionReference();
            var idDcmn = charIDToTypeID( "Dcmn" );
            ref21.putClass( idDcmn );
        desc37.putReference( idnull, ref21 );
        var idNm = charIDToTypeID( "Nm  " );
        desc37.putString( idNm, ""+docName+"" );
        var idUsng = charIDToTypeID( "Usng" );
            var ref22 = new ActionReference();
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref22.putEnumerated( idLyr, idOrdn, idTrgt );
        desc37.putReference( idUsng, ref22 );
        var idVrsn = charIDToTypeID( "Vrsn" );
        desc37.putInteger( idVrsn, 5 );
    executeAction( idMk, desc37, DialogModes.NO );
}

function closeDocument() {
    var idCls = charIDToTypeID( "Cls " );
        var desc54 = new ActionDescriptor();
        var idSvng = charIDToTypeID( "Svng" );
        var idYsN = charIDToTypeID( "YsN " );
        var idN = charIDToTypeID( "N   " );
        desc54.putEnumerated( idSvng, idYsN, idN );
        var idDocI = charIDToTypeID( "DocI" );
        desc54.putInteger( idDocI, 2383 );
        var idforceNotify = stringIDToTypeID( "forceNotify" );
        desc54.putBoolean( idforceNotify, true );
    executeAction( idCls, desc54, DialogModes.NO );
}

//
// ActionManager mud
//

// Faster layer collection:
// 	https://forums.adobe.com/message/2666611

function collectLayersAM(progressBarWindow)
{
	var layers = [];
	var layerCount = 0;

	var ref = null;
	var desc = null;

	var idOrdn = app.charIDToTypeID("Ordn");

	// Get layer count reported by the active Document object - it never includes the background.
	ref = new ActionReference();
	ref.putEnumerated(app.charIDToTypeID("Dcmn"), app.charIDToTypeID("Ordn"), app.charIDToTypeID("Trgt"));
	desc = app.executeActionGet(ref);
	layerCount = desc.getInteger(app.charIDToTypeID("NmbL"));

	if (layerCount == 0) {
		// This is a flattened image that contains only the background (which is always visible).
		var bg = app.activeDocument.backgroundLayer;
		var layer = {layer: bg, parent: null};
		layers.push(layer);
	}
	else {
		// There are more layers that may or may not contain a background. The background is always at 0;
		// other layers are indexed from 1.

		var idLyr = app.charIDToTypeID("Lyr ");
        var idName = app.charIDToTypeID("Nm  ");

		var FEW_LAYERS = 10;

		// newer PS's freeze or crash on Mac OS X Yosemite
		//if (layerCount <= FEW_LAYERS) {
			// don't show the progress bar UI for only a few layers
			//progressBarWindow = null;
		//}

		if (progressBarWindow) {
			// The layer count is actually + 1 if there's a background present, but it should be no biggie.
			showProgressBar(progressBarWindow, "Collecting layers... Might take up to several seconds.", (layerCount + FEW_LAYERS) / FEW_LAYERS);
		}

		try {
			// Collect normal layers.
            var layerName;
			for (var i = layerCount; i >= 1; --i) {
				ref = new ActionReference();
				ref.putIndex(idLyr, i);
				desc = app.executeActionGet(ref);

                layerName = desc.getString(idName);
				
				if (layerName[0] == '@')
				{
                    layers.push(layerName);
				}

				if (progressBarWindow && ((i % FEW_LAYERS == 0) || (i == layerCount))) {
					updateProgressBar(progressBarWindow);
					repaintProgressBar(progressBarWindow);
					if (userCancelled) {
						throw new Error("cancel");
					}
				}
			}
		}
		catch (e) {
			if (e.message != "cancel") throw e;
		}

		if (progressBarWindow) {
			progressBarWindow.hide();
		}
	}

	return layers;
}
