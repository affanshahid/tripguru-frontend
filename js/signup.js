$(function() {
    var $form = $('form');
    var $dialog = $('#dialog');
    var $modalText = $('#modal-text');

    $dialog.modal({ show: false });

    $form.submit(function(evt) {
        evt.preventDefault();
        var params = {
            name: $('#name').val(),
            dob: $('#dob').val(),
            homeTown: $('#town').val()
        };
        var body = JSON.stringify(params);
        $.ajax({
            url: 'drivers',
            method: 'POST',
            contentType: 'application/json',
            data: body,
            success: function() {
                $modalText.text('Sign up successful!');
                $dialog.modal('show');
            },
            error: function() {
                $modalText.text('Sign up failed!');
                $dialog.modal('show');
            }
        });
        return false;
    });
});