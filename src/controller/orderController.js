import ItemModel from "../model/ItemModel.js";
import CustomerModel from "../model/customerModel.js";
import { customer } from "../db/db.js";
import { item } from "../db/db.js";

$(document).ready(function() {
    console.log("Document is ready");
    // loadAllCustomerId();
    loadAllItemId();
});

// customerController.loadAllCustomerId();

function loadAllCustomerId() {
    // Clear existing options in the combo box
    const customerSelect = $('#invoice-input-cus-cmb');
    customerSelect.empty();

    let id = "0001";
    let name = "kavindu";

    for (let cus of customer) {
        $('#invoice-input-cus-cmb').append(`<option>${cus._id}</option>`);
    }
}


function loadAllItemId() {
    // Clear existing options in the combo box
    const itemSelect = $('#item-select-cmb');
    itemSelect.empty();

    if (!item || item.length === 0) {
        console.error("Item array is empty or undefined");
        return;
    }

    // Append each item code as an option to the combo box
    for (let itm of item) {
        itemSelect.append(`<option value="${itm.code}">${itm.code}</option>`);
    }
}


// $(document).ready(function() {
//     var $comboBox = $('#invoice-input-cus-cmb');
//
//     // Populate the combo box with customer data
//     $.each(customer, function(index, value) {
//         // var option = $('<option></option>').attr('value', value._id).text(value.id);
//         $comboBox.append(option);
//     });
// });
//
// $('#invoice-input-cus-cmb').on('change', function() {
//     // Get the selected customer
//     let selectedCustomer = searchCustomer($('#invoice-input-cus-cmb').val());
//
//     if (selectedCustomer) {
//         // Populate the input fields with the selected customer's data
//         $('#invoice-cus-name').val(selectedCustomer.name);
//         $('#invoice-cus-salary').val(selectedCustomer.salary);
//         $('#invoice-cus-address').val(selectedCustomer.address);
//     }
// });
//
// function searchCustomer(cusID) {
//     for (let cust of customer) {
//         if (cust.id == cusID) {  // Use '==' to compare string with number
//             return cust;
//         }
//     }
//     return null;
// }