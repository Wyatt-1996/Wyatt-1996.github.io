$('document').ready(function() {

    // form submit
    $('#submit-btn').on('click', function() {
        event.preventDefault();

        // capture name
        var inputName = $('#input-name').val();
        console.log(inputName);

        // capture email
        var inputEmail = $('#input-email').val();
        console.log(inputEmail);
        
        // capture option
        var inputOption = $('#input-option').val();
        console.log(inputOption);

        // capture message
        var inputMessage = $('#input-message').val();
        console.log(inputMessage);

        // validate inputs
        if (inputName === '' || inputEmail === '' || inputMessage === '') {
            alert('Must Complete the Form to Send Message!')
        }
    });

    // reload page when modal closed
    $('#close-modal').on('click', function() {
        document.location.reload(true);  
    });
    




});