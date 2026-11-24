 const tracks = document.querySelectorAll(".track");
    const trackInfo = document.querySelectorAll(".track-info");
    const nextButton = document.querySelector("#next-button");
    let currentTrack = 0;

    nextButton.addEventListener("click", function () {
      tracks[currentTrack].classList.remove("active");
      trackInfo[currentTrack].hidden = true;

      currentTrack = (currentTrack + 1) % tracks.length;

      tracks[currentTrack].classList.add("active");
      trackInfo[currentTrack].hidden = false;
    });