const BEEP = new Audio("data:audio/mpeg;base64,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wZ0G7jqlt/OcDIKX+/1NblSX+VKfQfP8xuJJGk7////rf////+PgXTv///1JThJJQainmySAB6imUyuVbVttUo7T4Csa821OuF88f62+CZHFnGf///mQgYIEO0SMF2NVy9NxYTdlqJ8AuS4zr//SJoTUJ+CaKKTcZvosrUPo8W/MUv0f033E9E/QpN6P///v/////WRR2mwUAYUABjabRu1vrOLKAF0kIdHjnEx/iNWo7jGn1////mApxNTJQQOU1Het/NoUFTMQs6Vja///THaGIl/0fojl8mjd/Jo8W+ZfpNpCajsz7////6kn/////WRRgDz//LD1KSTDjKOciSAKxdLx5S31uYqKIWj/+5JECgAC8V5M6g9rdFyr6Vo9rW6KtHcr5DEJQRkSpLRklSigvVc4QpmyPe9H3zHR1/in9P/8VNCMJOzYUDyVjfwHP0ZgiZt/3/+9EBnDKbegdUrckhgntHaQ9vX/X/9A/////+r/////mJ3/9ItRcoVRogAcmV9N8z0pvES8QQsKoMGXEymPQyWm6E4HQLqgpv/CZJAtYXQSwoF8e6SB56zABEoW+qgZjJAZovGr0Gl5/OjFKL3JwnaX9v7/X8y1f/////////49WAzMzEYYMZLq6CUANIqbDX7lisBIdraAEPwShTRc9WZ2vAqBc4NQ9GrUNaw0Czcrte0g1NEoiU8NFjx4NFh54FSwlOlgaCp0S3hqo8SLOh3/63f7P/KgKJxxhgGSnAFMCnIogwU5JoqBIDAuBIiNLETyFmiImtYiDTSlb8ziIFYSFv/QPC38zyxEOuPeVGHQ77r/1u/+kq49//6g4gjoVQSUMYQUSAP8PwRcZIyh2kCI2OwkZICZmaZxgnsNY8DmSCWX0idhtz3VTJSqErTSB//1X7TTTVVV//uSZB2P8xwRJ4HvYcItQlWBACM4AAABpAAAACAAADSAAAAEVf/+qCE000VVVVU0002//+qqqqummmmr///qqqppppoqqqqppppoqqATkEjIyIxBlBA5KwUEDBBwkFhYWFhUVFfiqhYWFhcVFRUVFv/Ff/xUVFRYWFpMQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==");  
const BEEP2 = new Audio("data:audio/mpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwLGAFU3XGAHhDcgAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwP+AAAABLAAAAAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwP+AAAABLAAAAAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAA");  
const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var video;
var canvas;
var canvasElement;
var localStream;
var parts = [];
var totalParts = null;

function init() {
	canvasElement = document.getElementById("canvas");
	video = document.createElement("video");
	canvas = canvasElement.getContext("2d");
	//document.getElementById('files').addEventListener('change', handleFileSelect, false);	

	if ('serviceWorker' in navigator) {
		//console.log('CLIENT: service worker registration in progress.');
		navigator.serviceWorker.register('service-worker.js').then(function() {
		  //console.log('CLIENT: service worker registration complete.');
		}, function() {
		  console.log('CLIENT: service worker registration failure.');
		});
	} else {
		console.log('CLIENT: service worker is not supported.');
	}			
}

function handleFileSelect(evt) {
    var files = evt.target.files;
    // Loop through the FileList and render image files as thumbnails.
    for (var i=0, f; f=files[i]; i++) {
      // Only process image files.
      if (!f.type.match('image.*'))
        continue;
      
      var reader = new FileReader();
      reader.onload = function(e) {
		convertDataUrlToImageData(e.target.result).then(function(imageData) { scanImage(imageData); });
      };
      reader.readAsDataURL(f);
    }
  }


function tick() {
	if (video.readyState === video.HAVE_ENOUGH_DATA) {
		canvasElement.hidden = false;
		canvasElement.height = video.videoHeight;
		canvasElement.width = video.videoWidth;
		canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
		var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
		for(var i=0; i<3; i++)
			scanImage(imageData);
	}
	requestAnimationFrame(tick);
}

function convertDataUrlToImageData(URI) {
  return new Promise(function(resolve, reject) {
    if (URI == null) return reject();
    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d'),
        image = new Image();
    image.addEventListener('load', function() {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(context.getImageData(0, 0, canvas.width, canvas.height));
    }, false);
    image.src = URI;
  });
}

function scanImage(imageData) {
		var code = jsQR(imageData.data, imageData.width, imageData.height, {
		  inversionAttempts: "dontInvert",
		});

		if (code) {
			var qrData = code.data;
			if (qrData.match(/^N80[0-9A-Z]{2}.+$/)) {
				//BEEP.play();
				
				var readCurrentPart = l2n(qrData.substring(3, 4));
				var readTotalParts = l2n(qrData.substring(5, 6));
				var rawData = qrData.substring(7);
				
				if (!totalParts) {
					totalParts = readTotalParts;
				} else if (totalParts != readTotalParts) {
					// If we just start reading a new block of parts while still reading the previous one, 
					// reset everything 
					stopScanning();
					return;
				}		

				var readParts = parts.filter(String).length;				
				if (!parts[readCurrentPart]) {
					parts[readCurrentPart] = rawData;
					readParts = parts.filter(String).length
					if (readParts < totalParts) 
						BEEP2.play();
				}
				
				if (readParts == totalParts) {
					var songData = parts.join('');				
					console.log(songData);
					loadSong(songData, true);
					stopScanning();
					return;
				} else {
					var progressBar = document.getElementById('scanProgress');
					progressBar.max = totalParts;
					progressBar.value = readParts;
					progressBar.style.display = 'block';
				}
			}
		}
}

function stopScanning() {
	resetScanningState();
	
	if (localStream) {
		if (typeof(localStream.pause) === "function") localStream.pause();
		localStream.src = "";
		localStream.getTracks().forEach(track => track.stop());
		localStream = null;	
	}
	if (video) {
		video.srcObject = null;
	}
	
	document.getElementById('canvas').style.display = 'none'; 	
	document.getElementById('scanProgress').style.display = 'none';
}

function loadSong(rawData, autoplay) {
	document.getElementById('audioSource').src = 'data:audio/opus;base64,' + rawData;
	document.getElementById('audioPlayer').load();
	if (autoplay) playSong()
	document.getElementById('log').value = rawData + '\n' + document.getElementById('log').value;	
}

function playSong() {
	document.getElementById('audioPlayer').play();
}

function resetScanningState() {
	parts = [];
	totalParts = null;
}

function scanSong() {
	resetScanningState();
	
	navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function(stream) {
	  localStream = stream;
	  video.srcObject = stream;
	  video.setAttribute("playsinline", true);
	  video.play();
	  document.getElementById('canvas').style.display = 'block';
	  requestAnimationFrame(tick);
	});

	requestAnimationFrame(tick);
}	

function l2n(s) {	
	var index = ALPHABET.indexOf(s.charAt(0));
	if (index == -1) throw 'Bad data read';
	var index2 = ALPHABET.indexOf(s.charAt(1));
	if (index2 == -1) throw 'Bad data read';
	
	return index * 36 + index2;
}