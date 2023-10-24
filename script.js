document.getElementById('registrationForm').addEventListener('submit', function(event) {
   event.preventDefault();

   // Get form data
   const formData = new FormData(event.target);
   const formDataObject = {};
   formData.forEach((value, key) => {
      formDataObject[key] = value;
   });

   // Make an API request to the back-end (AJAX or Fetch API)
   fetch('/api/register', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObject),
   })
   .then(response => response.json())
   .then(data => {
      alert('Registration successful!'); // You can customize this part
   })
   .catch(error => {
      console.error('Error:', error);
   });
});
