// Initialize EmailJS
emailjs.init(); 

function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Show loading message
  document.querySelector('.loading').style.display = 'block';

  // Collect form data
  const form = document.getElementById('contact__form');
  const formData = new FormData(form);

  // Create an object to hold the form data
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Send the email using EmailJS
  emailjs
    .sendForm(
      'service_b8gnzwh',
      'template_f74knvn',
      event.target,
      "hmxelbWgmRVAyNR78"
    )
    .then((response) => {
        console.log('Email sent successfully:', response); // Log the successful response
        // Hide loading message
        document.querySelector('.loading').style.display = 'none';
  
        // Show success message
        document.querySelector('.sent-message').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    })
    .catch((error) => {
        console.error('Error sending email:', error); // Log the error
        // Hide loading message
        document.querySelector('.loading').style.display = 'none';
      
        // Show error message
        document.querySelector('.error-message').textContent = 'There was an error sending your message. Please try again later.';
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.sent-message').style.display = 'none';
    })
    .finally(() => {
      // Optionally reset the form
      form.reset();
    });
}