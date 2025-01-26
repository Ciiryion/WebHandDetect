function getUserMedia(constraints) {
  // if Promise-based API is available, use it
  if (navigator.mediaDevices) {
    return navigator.mediaDevices.getUserMedia(constraints);
  }

  // otherwise try falling back to old, possibly prefixed API...
  var legacyApi =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  if (legacyApi) {
    // ...and promisify it
    return new Promise(function (resolve, reject) {
      legacyApi.bind(navigator)(constraints, resolve, reject);
    });
  }
}

function nextQuestion() {
  // Devait contenir le code qui enlève tout ce qui est affiché sur la webcam mais comme
  // je n'ai pas réussi à avoir accès à l'api la fonction ne fait rien
  console.log("Question suivante");
}

// Lancement de la caméra dès l'arrivée sur le site :
var type = "video";

if (
  !navigator.mediaDevices &&
  !navigator.getUserMedia &&
  !navigator.webkitGetUserMedia &&
  !navigator.mozGetUserMedia &&
  !navigator.msGetUserMedia
) {
  alert("User Media API not supported.");
}

var constraints = {};
constraints[type] = true;

getUserMedia(constraints)
  .then(function (stream) {
    var mediaControl = document.querySelector(type);

    if ("srcObject" in mediaControl) {
      mediaControl.srcObject = stream;
    } else if (navigator.mozGetUserMedia) {
      mediaControl.mozSrcObject = stream;
    } else {
      mediaControl.src = (window.URL || window.webkitURL).createObjectURL(
        stream
      );
    }

    mediaControl.play();
  })
  .catch(function (err) {
    alert("Error: " + err);
  });
