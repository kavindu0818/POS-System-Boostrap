import {CustomerModel} from "../js/customerModel.js";
import {customer} from "../js/db.js";


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

$(document).ready(function(){
    $("#add-btn-cus").click(function(){
        var inputValueId = $("#add-inp-cusId").val();
        var inputValueFname = $("#add-inp-cusName").val();
        var inputValueAddress = $("#add-inp-cusAddress").val();
        var inputValueSalary = $("#add-inp-cusSalary").val();

        var cusObj = new  CustomerModel(inputValueId, inputValueFname, inputValueAddress, inputValueSalary);

        // Push the customer object into the customer array
        customer.push(cusObj);

        // Generate HTML markup for a new table row
        var newRow = `<tr>
            <td>${inputValueId}</td>
            <td>${inputValueFname}</td>
            <td>${inputValueAddress}</td>
            <td>${inputValueSalary}</td>
        </tr>`;

        // Append the new row to the table
        $("#cus-table tbody").append(newRow);
    });
});
