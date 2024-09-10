emailjs.init();

function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById('contact__form');
  const button = document.querySelector('.btn-send');
  const loadingIndicator = document.querySelector('.loading');
  const sentMessage = document.querySelector('.sent-message');

  setButtonState(button, 'loading');
  loadingIndicator.style.display = 'block';

  emailjs
    .sendForm(
      'service_b8gnzwh',
      'template_f74knvn',
      event.target,
      "hmxelbWgmRVAyNR78"
    )
    .then((response) => {
        console.log('Email sent successfully:', response);
        setButtonState(button, 'success');
        loadingIndicator.style.display = 'none';
        sentMessage.style.display = 'block';
    })
    .catch((error) => {
        console.error('Error sending email:', error);
        setButtonState(button, 'error');
        loadingIndicator.style.display = 'none';
        sentMessage.style.display = 'none';
    })
    .finally(() => {
      form.reset();
      setButtonState(button, 'default');
    });
}

function setButtonState(button, state) {
  button.classList.remove('loading', 'success', 'error');
  button.classList.add(state);

  switch (state) {
    case 'loading':
      button.innerHTML = 'Sending...';
      button.disabled = true;
      break;
    case 'success':
      button.innerHTML = 'Message Sent';
      button.disabled = true;
      break;
    case 'error':
      button.innerHTML = 'Send message';
      button.disabled = false;
      break;
    case 'default':
    default:
      button.innerHTML = 'Send message';
      button.disabled = false;
      break;
  }
}