function morning_1action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/morning_img_2x.png" height="29" width="45" ><br /><font  class="compassViewTitleDiv"> 早晨 — 空腹</font>';

	console.log(div.innerHTML);
}

function morning_2action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/morning_img_2x.png" height="29" width="45" ><br /><font  class="compassViewTitleDiv"> 早晨 — 饭后</font>';
	console.log(div.innerHTML);
}

function moon_1action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/moon_2x.png" height="31" width="37" ><br /><font  class="compassViewTitleDiv"> 中午 — 饭前</font>';
	console.log(div.innerHTML);
}

function moon_2action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/moon_2x.png" height="31" width="37" ><br /><font  class="compassViewTitleDiv"> 中午 — 饭后</font>';
	console.log(div.innerHTML);
}

function night_1action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/night_2x.png" height="32" width="37" ><br /><font  class="compassViewTitleDiv"> 晚上 — 饭前</font>';
	console.log(div.innerHTML);
}

function night_2action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/night_2x.png" height="32" width="37" ><br /><font  class="compassViewTitleDiv"> 晚上 — 饭后</font>';
	console.log(div.innerHTML);
}

function midnight_1action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/midnight_2x.png" height="26" width="38" ><br /><font  class="compassViewTitleDiv"> 睡前</font>';
	console.log(div.innerHTML);
}

function midnight_2action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/midnight_2x.png" height="26" width="38" ><br /><font  class="compassViewTitleDiv">凌晨</font>';
	console.log(div.innerHTML);
}

function midnight_3action (hypeDocument, element, event) {
	// body...
	var div = hypeDocument.getElementById("compassViewTitleDiv");
	div.innerHTML = '<img src="' + hypeDocument.resourcesFolderURL() + '/midnight_2x.png" height="26" width="38" ><br /><font  class="compassViewTitleDiv"> 其他</font>';
	console.log(div.innerHTML);
}

//<img src="${resourcesFolderName}/morning_img@2x.png">