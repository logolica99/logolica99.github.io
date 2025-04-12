/**
 * Custom Toaster for ZenZone
 * This script creates a toaster notification that links to ZenZone
 */
document.addEventListener('DOMContentLoaded', function() {
  // Create toaster element
  function createToaster() {
  
    const toaster = document.createElement('div');
    toaster.className = 'zen-toaster ';
    toaster.innerHTML = `
      <div class="zen-toaster-icon"><img src="assets/img/zezone-logo.svg" alt="ZenZone Logo"></div>
      <div class="zen-toaster-content">Visit ZenZone - Unleash Your Zen Mode!</div>
      <div class="zen-toaster-close"><i class="bi bi-x"></i></div>
    `;
    document.body.appendChild(toaster);
    
    // Add click event to navigate to ZenZone
    toaster.addEventListener('click', function(e) {
      if (!e.target.closest('.zen-toaster-close')) {
        window.open('https://zenzone.vercel.app/', '_blank');
      }
    });
    
    // Add click event to close button
    const closeBtn = toaster.querySelector('.zen-toaster-close');
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      hideToaster();
      
      // Set cookie to remember user closed the toaster
      setCookie('zenToasterClosed', 'true', 1); // 1 day
    });
    
    return toaster;
  }
  
  // Show toaster with animation
  function showToaster() {
  
    
    
    const toaster = createToaster();


    
    // Trigger reflow for animation
    void toaster.offsetWidth;
    
    // Show after a delay
    
    setTimeout(() => {
      toaster.classList.add('show');
    }, 1000);
    
    // Auto hide after 30 seconds
   
  }
  
  // Hide toaster with animation
  function hideToaster() {
    const toaster = document.querySelector('.zen-toaster');
    if (toaster) {
      toaster.classList.remove('show');
      
      // Remove from DOM after animation completes
      setTimeout(() => {
        if (toaster.parentNode) {
          toaster.parentNode.removeChild(toaster);
        }
      }, 500);
    }
  }
  
  // Cookie helpers
  function setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }
  
  function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // Initialize toaster
  showToaster();
});
