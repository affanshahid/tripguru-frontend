/*globals Handlebars*/
$(function() {
    var driverTemplate = Handlebars.compile($('#driver-template').html());
    var driverTable = $('#driver-table');
    var refreshButton = $('#refresh');

    refreshButton.click(function() {
        refreshButton.attr('disabled', 'disabled');
        refreshDrivers(function() {
            refreshButton.removeAttr('disabled');
        });
    });

    refreshButton.click();

    function refreshDrivers(cb) {
        $.get('/drivers', function(data) {
            for (var i = 0; i < data.length; i++) {
                var driver = data[i];
                driver.age = (new Date()).getFullYear() - new Date(driver.dob).getFullYear();
                var $driver = $(driverTemplate(driver));
                $driver.hide();
                driverTable.append($driver);
                $driver.fadeIn('slow');
            }
            cb();
        }).fail(function() {
            cb();
        });
    }
});

