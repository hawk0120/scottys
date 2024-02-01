document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('mail').value,
        phone: document.getElementById('phoneNum').value,
        comment: document.getElementById('comment').value
    };
    console.log("formData: ", formData);


	const validateForm = () => {
		for(let i = 0; i < formData.length; i++) {
			if(formData[i].value == "") {
				alert("Please fill in the required fields");
				return false;
			}
		}
		return true;
	}



    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    };

    fetch('/submit-form', requestOptions)
        .then(response => response.json())
        
	.then(data => {
		document.getElementById('Contact').innerHTML = data.message;
		document.getElementById('Form').reset();
	})
        .catch(error => {
		document.getElementById('Contact').innerHTML = error.message;
		console.error('Error:', Error)});
});
