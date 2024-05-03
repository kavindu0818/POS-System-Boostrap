$("#customer").hide();
$("#item").hide();
$("#orders").hide();

$("#customer-btn").on('click', () => {
    $("#customer").show();
    $("#home").hide();
    $("#item").hide();
    $("#orders").hide();
});

$("#item-btn").on('click', () => {
    $("#item").show();
    $("#home").hide();
    $("#customer").hide();
    $("#orders").hide();
});

$("#Order-btn").on('click', () => {
    $("#orders").show();
    $("#home").hide();
    $("#customer").hide();
    $("#item").hide();
});