
    const gameLaunchButtons = document.querySelectorAll('.game-launch-btn');
    const closeGameBtn = document.getElementById('closeGameBtn');
    const backToTopBtn = document.getElementById('backToTopBtn');
    const gameOverlay = document.getElementById('gameOverlay');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const gameIframe = gameOverlay.querySelector('.game-frame');
    const gameLoader = gameOverlay.querySelector('.loader');

    gameLaunchButtons.forEach(button => {
      button.addEventListener('click', () => {
        const gameSrc = button.dataset.src; // Get the URL from the clicked button
        if (gameSrc) {
          gameLoader.style.display = 'block'; // Show the spinner
          gameIframe.src = gameSrc;
          gameOverlay.style.display = 'flex';
        }
      });
    });

    // Hide the spinner once the iframe content has fully loaded
    gameIframe.addEventListener('load', () => {
      if (gameIframe.src !== 'about:blank') {
        gameLoader.style.display = 'none';
      }
    });

    function closeGame() {
      gameOverlay.style.display = 'none';
      gameIframe.src = 'about:blank'; // Stop the game to save resources
    }

    closeGameBtn.addEventListener('click', closeGame);
    gameOverlay.addEventListener('click', (event) => {
      // If the user clicks on the dark background (the overlay itself), close the modal
      if (event.target === gameOverlay) {
        closeGame();
      }
    });

    // Add keyboard accessibility to close the modal with the Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && gameOverlay.style.display === 'flex') {
        closeGame();
      }
    });

    // Set the current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // --- Back to Top Button Logic ---
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
        setTimeout(() => { // Use timeout to allow display property to apply before transition
            backToTopBtn.style.opacity = "1";
            backToTopBtn.style.visibility = "visible";
        }, 10);
      } else {
        backToTopBtn.style.opacity = "0";
        backToTopBtn.style.visibility = "hidden";
      }
    }

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // --- Theme Toggle Logic ---
    const body = document.body;

    const applyTheme = (theme) => {
      body.classList.toggle('deep-red-mode', theme === 'deep-red');
      themeToggleBtn.innerHTML = theme === 'deep-red' ? '☀️' : '🌙';
      localStorage.setItem('theme', theme);
    };

    themeToggleBtn.addEventListener('click', () => {
      const newTheme = body.classList.contains('deep-red-mode') ? 'default' : 'deep-red';
      applyTheme(newTheme);
    });

    applyTheme(localStorage.getItem('theme') || 'default');

    // --- Typed.js Logic ---
    new Typed('#typed-intro', {
      strings: [
        'Hey Guyss! I’m Suvee — building cool websites, gaming daily, and vibing with full-on mass energy 🔥'
      ],
      typeSpeed: 40,
      loop: false,
      cursorChar: '&#9646;',
    });