var video = document.getElementById("video");
var play = document.getElementById("play");
var unmute = document.getElementById("unmute");
var mute = document.getElementById("mute");
var links = document.getElementById("links");
var map = document.getElementById("map");

// unmute.onclick = function () {
// 	unmute.style.display = "none";
// 	mute.style.display = "block";
// 	video.muted = !video.muted;
// };

// mute.onclick = function () {
// 	mute.style.display = "none";
// 	unmute.style.display = "block";
// 	video.muted = !video.muted;
// };

video.onended = function () {
	play.style.display = "flex";
	// links.style.display = "flex";
	// mute.style.display = "none";
	// unmute.style.display = "none";
};

video.onclick = function () {
	// links.style.opacity = Number(links.style.opacity) ? 0 : 1;
};

// video.onclick = function () {
// 	links.style.display = "flex";
// };

play.onclick = function() {
	// links.style.opacity = 1;
	video.play();
	play.style.display = "none";
}

document.getElementsByClassName("links-item").onclick = function(e) {
	e.preventDefault();
};