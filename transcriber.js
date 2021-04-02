$(function() {
	$("#file-input").on("change", function() {
		var thefile = this.files[0];
		var type = thefile.type;
		var player = $("video#player");
		var fileURL = URL.createObjectURL(thefile);
		player.attr("src", fileURL);

		/*
		var reader = new FileReader();
		reader.onloadend = function(event) {
			theurl = event.target.result;
			$("video").remove();
			var mime = thefile.type;
			$("#videocontainer").append("<video id='player' width='640' controls><source src='"+theurl+"' type='"+mime+"'></video>");
		}
		reader.readAsDataURL(thefile);
		*/
		showStatus("Video loaded.");
	})


	$(document).on("keydown", function(e) {
		switch(e.which)
		{
			case 9: 	// tab
				e.preventDefault();

				var player = $("video")[0];
				if (player.currentSrc == "") // non c'è nessun video
				{
					alert("nessun video");
					return;
				}

				if (e.shiftKey)
				{
					var newtime = player.currentTime - 4;
					if (newtime < 0)
						player.currentTime = 0;
					else
						player.currentTime = newtime;
				}
				else
				{
					player.paused ? player.play() : player.pause();
				}
				break;

			/******/ 
			
			case 83: 	// 's'
				if (e.metaKey || e.ctrlKey) {
					e.preventDefault();
					saveStuff(true);
				}
		}
	});

	/***/

	function saveStuff(manual) { // undefined if auto
		localStorage.setItem("transcription", $("#transcription").val());
		if (manual === undefined) {
			showStatus("Text automatically saved.");
		} else {
			showStatus("Text saved by the user.")
		}
	}

	/***/

	function showStatus(str) {
		var d = new Date();
		var now = d.toLocaleTimeString()
		$("#status").html(now + "&mdash; " + str);
	}

	/***/

	function updateCounter() {
		var lines = $("#transcription").val().split("\n");
		output = "";
		for (i = 0; i < lines.length; i++) {
			output += lines[i].length
			if (i != lines.length - 1) {	// is it the last one?
				output += "\n";
			}
		}
		$("#counter").val(output);

	}
	/***/

	oldtext = ""
	$("#transcription").on("change keyup paste", function(e) {
		var curtext = $(this).val();
		if (curtext == oldtext) {
			return;
		}
		oldtext = curtext;
		updateCounter();
	});

	/***/

	// refactor?
	$("#transcription").on("scroll", function(e) {
		$("#counter").scrollTop( $(this).scrollTop() );
	})

	$("#counter").on("scroll", function(e) {
		$("#transcription").scrollTop( $(this).scrollTop() );
	})


	/***/

	// onload:
	$("#transcription").val( localStorage.getItem("transcription") ).trigger("change");
	setInterval(saveStuff, 10000)
	showStatus("Text read from storage, ready.");
});

//https://codepen.io/SpencerCooley/pen/JtiFL/