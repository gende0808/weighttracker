$(document).ready(function () {
    $(".dropdown-trigger").dropdown();
    $('.modal').modal({
        // specify options here
    });
    $('.datepicker').datepicker({
        // specify options here
        container: 'body',
        autoClose: true,
        format: 'yyyy-mm-dd',
    });
    $("#dateField").value("2021-11-05");
});
