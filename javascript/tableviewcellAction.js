function morning_1action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/morning_img_2x.png" height="29" width="45" ><br /><font  class="compassViewTitleDiv"> 早晨 — 空腹</font>';

	registerDocEventListener();
}

function morning_2action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/morning_img_2x.png" height="29" width="45" ><br /><font  class="compassViewTitleDiv"> 早晨 — 饭后</font>';
	registerDocEventListener();
}

function moon_1action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/moon_2x.png" height="31" width="37" ><br /><font  class="compassViewTitleDiv"> 中午 — 饭前</font>';
	registerDocEventListener();
}

function moon_2action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/moon_2x.png" height="31" width="37" ><br /><font  class="compassViewTitleDiv"> 中午 — 饭后</font>';
	registerDocEventListener();
}

function night_1action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/night_2x.png" height="32" width="37" ><br /><font  class="compassViewTitleDiv"> 晚上 — 饭前</font>';
	registerDocEventListener();
}

function night_2action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/night_2x.png" height="32" width="37" ><br /><font  class="compassViewTitleDiv"> 晚上 — 饭后</font>';
	registerDocEventListener();
}

function midnight_1action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/midnight_2x.png" height="26" width="38" ><br /><font  class="compassViewTitleDiv"> 睡前</font>';
	registerDocEventListener();
}

function midnight_2action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/midnight_2x.png" height="26" width="38" ><br /><font  class="compassViewTitleDiv">凌晨</font>';
	registerDocEventListener();
}

function midnight_3action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/midnight_2x.png" height="26" width="38" ><br /><font  class="compassViewTitleDiv"> 其他</font>';
	registerDocEventListener();
}

