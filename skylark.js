particlesJS('particles-js', {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff' /* White particle color */
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 1, // Set opacity to 1 for solid white particles
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff', // Set line color to white
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
  

  window.addEventListener('load', function() {
    var loadingContainer = document.querySelector('.loading-container');
    var welcomeMessage = document.querySelector('.typing-effect');
    var loadingBar = document.querySelector('.loading-bar');
    var loadingBarContainer = document.querySelector('.loading-bar-container');
    var loadingPercentage = 0;
    var loadingInterval = setInterval(function() {
        loadingPercentage += 1;
        loadingBar.style.width = loadingPercentage + '%';
        if (loadingPercentage >= 100) {
            clearInterval(loadingInterval);
            loadingContainer.style.display = 'none';
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            welcomeMessage.style.display = 'block';
            setTimeout(function() {
                var satoshiDiv = document.querySelector('.satoshi');
                satoshiDiv.style.display = 'block';
                initializeWaveVisualizer();
            }, 500);
            typeEffect();
        }
    }, 25);

    function typeEffect() {
      var text = "void";
      var typingSpeed = 80;
      var typingContainer = document.querySelector('.typing-effect');
      var charIndex = 0;
    
      var typingInterval = setInterval(function() {
        if (charIndex < 6) {
          typingContainer.textContent += text[charIndex];
        } else if (charIndex < 11) {
          typingContainer.innerHTML += "<span style='color: red;'>" + text[charIndex] + "</span>";
        } else {
          typingContainer.textContent += text[charIndex];
        }
        charIndex++;
    
        // Check if the "Sabel" span element exists
        var sabelSpan = typingContainer.querySelector('span');
        if (sabelSpan) {
          // If it does, set its color to red
          sabelSpan.style.color = 'red';
        }
    
        if (charIndex >= text.length) {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
    }
    

  
    var player; // Declare the player variable outside the playVideo() function

   
    function playVideo() {
        var videoContainer = document.getElementById('video-container');
        var videoButton = document.getElementById('video-button');
        var videoId = 'r_wjTjwyY6o'; // YouTube video ID from the provided link

        //https://youtu.be/TtL7FEqKeGw?si=Gwq1_xkYTbCKDqAE

        if (!window.YT) {
            // Load the YouTube IFrame API if it's not loaded already
            var tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        // Function to create the YouTube player once the IFrame API is loaded
        window.onYouTubeIframeAPIReady = function () {
            player = new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: videoId,
                events: {
                    onReady: function (event) {
                        event.target.playVideo();
                        videoButton.textContent = "Pause recording";
                    },
                    onStateChange: function (event) {
                        if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
                            videoButton.textContent = "Play recording";
                        } else if (event.data === YT.PlayerState.PLAYING) {
                            videoButton.textContent = "Pause recording";
                        }
                    },
                },
            });
        };

        if (player && player.getPlayerState() === YT.PlayerState.PLAYING) {
            player.pauseVideo();
            videoButton.textContent = "Play recording";
        } else if (player && player.getPlayerState() === YT.PlayerState.PAUSED) {
            player.playVideo();
            videoButton.textContent = "Pause recording";
        } else {
            // Show the video container and start loading the YouTube IFrame API
            videoContainer.style.display = 'none';
        }
    }

    var videoButton = document.getElementById('video-button');
    videoButton.addEventListener('click', playVideo);
});