"use strict";

function addLink() {
	//Get the selected text
	var selection = window.getSelection(),
		copytext = selection,
		newdiv = document.createElement('div');

	copytext = copytext.toString();
	copytext = copytext.replace(/\n(\d{2}:\d{2}(:\d{2})?)/g, '<br>$1'); // Replace first newlines on each message with <br>
	copytext = copytext.replace(/\n/g, ' '); // Remove all other newlines

  // Add < and > around username
	copytext = copytext.replace(/(<br>\d{2}:\d{2}(:\d{2})?) ([^ ]*) /g, '$1 <$3> ');

	// hide the newly created container
	newdiv.style.position = "absolute";
	newdiv.style.left = "-99999px";

	// insert the container, fill it with the text
	document.body.appendChild(newdiv);
	newdiv.innerHTML = copytext;
	selection.selectAllChildren(newdiv);

	window.setTimeout(function() {
		document.body.removeChild(newdiv);
	}, 100);
}

document.addEventListener('copy', addLink);
