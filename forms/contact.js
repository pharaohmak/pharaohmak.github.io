emailjs.init("hmxelbWgmRVAyNR78");

function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById('contact__form');
  const button = document.querySelector('.btn-send');
  const loadingIndicator = document.querySelector('.loading');
  const sentMessage = document.querySelector('.sent-message');

  // Validate form fields
  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const subject = form.querySelector('input[name="subject"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  if (!name || !email || !subject || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  setButtonState(button, 'loading');
  loadingIndicator.style.display = 'block';
  sentMessage.style.display = 'none';

  emailjs
    .sendForm(
      'service_b8gnzwh',
      'template_f74knvn',
      form,
      "hmxelbWgmRVAyNR78"
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setButtonState(button, 'success');
      loadingIndicator.style.display = 'none';
      sentMessage.style.display = 'block';

      button.style.display = 'none';
      // Hide success message after 5 seconds
      setTimeout(() => {
        sentMessage.style.display = 'none';
        button.style.display = 'inline-block';
      }, 5000);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setButtonState(button, 'error');
      loadingIndicator.style.display = 'none';

      // Show error message
      const errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      errorMessage.style.cssText = 'color: #ff3860; margin-top: 10px;';
      errorMessage.textContent = 'Failed to send message. Please try again or contact me directly.';

      const formBtn = form.querySelector('.form-btn');
      formBtn.appendChild(errorMessage);

      setTimeout(() => {
        if (errorMessage.parentNode) {
          errorMessage.parentNode.removeChild(errorMessage);
        }
      }, 5000);
    })
    .finally(() => {
      setButtonState(button, 'default');
    });
}

function setButtonState(button, state) {
  button.classList.remove('loading', 'success', 'error');
  button.classList.add(state);

  switch (state) {
    case 'loading':
      button.value = 'Sending...';
      button.disabled = true;
      break;
    case 'success':
      button.value = 'Message Sent!';
      button.disabled = true;
      setTimeout(() => {
        button.value = 'Send message';
        button.disabled = false;
      }, 3000);
      break;
    case 'error':
      button.value = 'Send message';
      button.disabled = false;
      break;
    case 'default':
    default:
      button.value = 'Send message';
      button.disabled = false;
      break;
  }
}

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact__form');
  if (form) {
    form.addEventListener('submit', handleSubmit);
  }
});
