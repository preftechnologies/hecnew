document.addEventListener("DOMContentLoaded", () => {
    fetch("videos/get_video.php")
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById("videoGallery");
        if (!container) return;
  
        data.forEach(video => {
          container.innerHTML += `
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="card video-item">
                <div class="video-container">
                  <video width="100%" height="200" controls>
                    <source src="${video.video_url}" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title">${video.title}</h5>
                  <p class="card-text">${video.description}</p>
                </div>
              </div>
            </div>
          `;
        });
      });
  });
  