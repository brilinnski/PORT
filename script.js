const heroLink = document.querySelector(".hero-link");

if (heroLink) {
	heroLink.addEventListener("click", (event) => {
		if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
			return;
		}

		event.preventDefault();
		document.body.classList.add("is-leaving");
		window.setTimeout(() => {
			window.location.href = heroLink.href;
		}, 240);
	});
}

const pageAudio = document.querySelector(".page-audio");
const audioPlayButton = document.querySelector(".audio-play");

if (pageAudio && audioPlayButton) {
	pageAudio.addEventListener("ended", () => pageAudio.pause());

	pageAudio.play().then(() => {
		audioPlayButton.hidden = true;
	}).catch(() => {
		audioPlayButton.hidden = false;
	});

	audioPlayButton.addEventListener("click", () => {
		pageAudio.play().then(() => {
			audioPlayButton.hidden = true;
		}).catch(() => {
			audioPlayButton.hidden = false;
		});
	});
}
