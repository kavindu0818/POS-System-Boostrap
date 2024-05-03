
$("#customer").hide(); // Show Customer section
$("#item").hide();     // Hide Item section
$("#orders").hide();
$("#customer-btn").on('click', () => {
    $("#customer").show(); // Show Customer section
    $("#home").hide();     // Hide Home section
    $("#item").hide();     // Hide Item section
    $("#orders").hide();   // Hide Orders section
});

$("#item-btn").on('click', () => {
    $("#item").show();     // Show Item section
    $("#home").hide();     // Hide Home section
    $("#customer").hide(); // Hide Customer section
    $("#orders").hide();   // Hide Orders section
});

$("#Order-btn").on('click', () => { // Corrected ID to match HTML
    $("#orders").show();    // Show Orders section
    $("#home").hide();      // Hide Home section
    $("#customer").hide();  // Hide Customer section
    $("#item").hide();      // Hide Item section
});
