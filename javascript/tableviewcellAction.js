function morning_1action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/morning_img_2x.png" height="29" width="45" ><br /><font  class="compassViewTitleDiv"> 早晨 — 空腹</font><span class="glucoseType" glucoseType="0" >';
	g_3 = 7;
	$("#compassPanl_10").hide();
	$("#compassPanl").show();
	registerDocEventListener();
}

function initValue () {
	// body...
	g_3 = 10;
	registerDocEventListener();
	$("#compassPanl_10").show();
	$("#compassPanl").hide();
}

function morning_2action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/morning_img_2x.png" height="29" width="45" ><br /><font  class="compassViewTitleDiv"> 早晨 — 饭后</font><span class="glucoseType" glucoseType="1" >';
	initValue();
}

function moon_1action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/moon_2x.png" height="31" width="37" ><br /><font  class="compassViewTitleDiv"> 中午 — 饭前</font><span class="glucoseType" glucoseType="2" >';
	initValue();
}

function moon_2action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/moon_2x.png" height="31" width="37" ><br /><font  class="compassViewTitleDiv"> 中午 — 饭后</font><span class="glucoseType" glucoseType="3" >';
	initValue();
}

function night_1action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/night_2x.png" height="32" width="37" ><br /><font  class="compassViewTitleDiv"> 晚上 — 饭前</font><span class="glucoseType" glucoseType="4" >';
	initValue();
}

function night_2action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/night_2x.png" height="32" width="37" ><br /><font  class="compassViewTitleDiv"> 晚上 — 饭后</font><span class="glucoseType" glucoseType="5" >';
	initValue();
}

function midnight_1action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/midnight_2x.png" height="26" width="38" ><br /><font  class="compassViewTitleDiv"> 睡前</font><span class="glucoseType" glucoseType="6" >';
	initValue();
}

function midnight_2action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/midnight_2x.png" height="26" width="38" ><br /><font  class="compassViewTitleDiv">凌晨</font><span class="glucoseType" glucoseType="7" >';
	initValue();
}

function midnight_3action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/midnight_2x.png" height="26" width="38" ><br /><font  class="compassViewTitleDiv"> 其他</font><span class="glucoseType" glucoseType="8" >';
	initValue();
}

