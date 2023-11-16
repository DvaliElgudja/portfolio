// JavaScript to handle modal opening and closing
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
  }
  
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
  }
  
  // Close modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target.className === 'modal') {
      event.target.style.display = 'none';
    }
  }
  ;