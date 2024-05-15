import CustomerModel from "../model/customerModel.js";
import {customer} from "../db/db.js";
var recordIndex;


    $("#add-btn-cus").on('click',function(){
        console.log("hiiiiiiiiiii")
        var inputValueId = $("#add-inp-cusId").val();
        var inputValueFname = $("#add-inp-cusName").val();
        var inputValueAddress = $("#add-inp-cusAddress").val();
        var inputValueSalary = $("#add-inp-cusSalary").val();

        var cusObj = new  CustomerModel(inputValueId, inputValueFname, inputValueAddress, inputValueSalary);

        customer.push(cusObj);

        var newRow = `<tr>
            <td>${inputValueId}</td>
            <td>${inputValueFname}</td>
            <td>${inputValueAddress}</td>
            <td>${inputValueSalary}</td>
        </tr>`;

        $("#cus-table tbody").append(newRow);

        clearField();
    });

$("#cus-table").on('click', 'tr', function() {
    $("#tbl-value>tr").click(function (){
        let id=$(this).children(':eq(0)').text();
        let name=$(this).children(':eq(1)').text();
        let address=$(this).children(':eq(2)').text();
        let salary=$(this).children(':eq(3)').text();

        console.log(id+"  "+name+"  "+address+" "+salary);

        $('#serch-cus-id').val(id);
        $('#serch-cus-name').val(name);
        $('#serch-cus-address').val(address);
        $('#serch-cus-salary').val(salary);
    });
});

$("#cus-table").on('dblclick','tr',function() {
    let alertConfrimDelete = confirm('Do you really want to delete this customer');
    if (alertConfrimDelete==true) {
        let index = $(this).index();
        recordIndex = index;
        $('.delete_btn').click();
    }
});

$("#btn-remove-cus").click(function () {
    let customerID = $('#serch-cus-id').val();

    let response = deleteCustomer(customerID);
    if (response) {
        alert("Customer Removed Successfully");
    } else {
        alert("Customer not found or Update Failed..!");
    }
});

function deleteCustomer(customerID){
    let indexToDelete = -1;
    for (let i = 0; i < customer.length; i++) {
        if (customer[i].id === customerID) {
            indexToDelete = i;
            break;
        }
    }

    if (indexToDelete !== -1) {
        // Remove the customer from the array
        customer.splice(indexToDelete, 1);

        // Update the table
        updateTable();
        clearFieldSearch();

        return true; // Deleted successfully
    } else {
        return false; // Customer not found or deletion failed
    }
}

function updateTable() {
    $("#cus-table tbody").empty();

    customer.forEach(function(cus) {
        let row = `<tr>
            <td>${cus.id}</td>
            <td>${cus.name}</td>
            <td>${cus.address}</td>
            <td>${cus.salary}</td>
        </tr>`;
        $('#cus-table tbody').append(row);
    });
}

$("#btn-update-cus").click(function () {
    let customerID = $('#serch-cus-id').val();
    let response = updateCustomer(customerID);
    if (response) {
        alert("Customer Updated Successfully");
    } else {
        alert("Update Failed..!");

    }
});

function updateCustomer(customerID) {
    let cus = null;
    for (let i = 0; i < customer.length; i++) {
        if (customer[i].id === customerID) {
            cus = customer[i];
            break;
        }
    }

    if (cus !== null) {
        cus.id = $("#serch-cus-id").val();
        cus.name = $("#serch-cus-name").val();
        cus.address = $("#serch-cus-address").val();
        cus.salary = $("#serch-cus-salary").val();
        addCustomerTable();
        clearFieldSearch();
        return true;
    } else {
        return false;
    }
}

function addCustomerTable() {
    // Empty the table body
    $("#cus-table tbody").empty();

    for (let cus of customer) {
        let row = `<tr>
            <td>${cus.id}</td>
            <td>${cus.name}</td>
            <td>${cus.address}</td>
            <td>${cus.salary}</td>
        </tr>`;
        $('#cus-table').append(row);
    }
}

function clearFieldSearch(){
    $("#serch-cus-id").val('');
    $("#serch-cus-name").val('');
    $("#serch-cus-address").val('');
    $("#serch-cus-salary").val('');
}

function clearField(){
    $("#add-inp-cusId").val('');
    $("#add-inp-cusName").val('');
    $("#add-inp-cusAddress").val('');
    $("#add-inp-cusSalary").val('');
}