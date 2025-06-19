setTimeout(() => {
    const videos = document.querySelectorAll(".post-media-video");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
            video.currentTime = 0; // <--- This line was added
            video.play().catch(error => {
                console.error("Error attempting to play video:", error);
            });
        } else {
            video.pause();
        }
        });
    }, {
        threshold: 0.5 // adjust visibility threshold as needed
    });

    videos.forEach(video => {
        if (video instanceof HTMLVideoElement) {
            video.pause();
            observer.observe(video);
        } else {
            console.warn('Not a video element:', video);
        }
    });
}, 400);
