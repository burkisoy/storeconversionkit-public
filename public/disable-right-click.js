// Script to disable right-click and other ways to access page source
document.addEventListener('DOMContentLoaded', function() {
  // Disable right-click
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });

  // Disable F12 key (developer tools)
  document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.shiftKey && e.key === 'J') || 
        (e.ctrlKey && e.key === 'U')) {
      e.preventDefault();
      return false;
    }
  });

  // Disable inspect element
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'c') {
      const selection = window.getSelection().toString();
      if (selection.length === 0) {
        e.preventDefault();
        return false;
      }
    }
  });

  // Show a message when right-click is attempted
  document.addEventListener('contextmenu', function() {
    const message = document.createElement('div');
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    message.style.color = 'white';
    message.style.padding = '15px 20px';
    message.style.borderRadius = '8px';
    message.style.zIndex = '9999';
    message.style.fontFamily = 'Arial, sans-serif';
    message.style.fontSize = '14px';
    message.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    message.textContent = 'Right-click is disabled on this website.';
    
    document.body.appendChild(message);
    
    setTimeout(function() {
      message.style.opacity = '0';
      message.style.transition = 'opacity 0.5s ease';
      setTimeout(function() {
        document.body.removeChild(message);
      }, 500);
    }, 2000);
  });
});