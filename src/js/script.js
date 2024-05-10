import {CustomerModel} from "../js/customerModel.js";
import {customer} from "../js/db.js";
var recordIndex;



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

        customer.push(cusObj);

        var newRow = `<tr>
            <td>${inputValueId}</td>
            <td>${inputValueFname}</td>
            <td>${inputValueAddress}</td>
            <td>${inputValueSalary}</td>
        </tr>`;

        // Append the new row to the table
        $("#cus-table tbody").append(newRow);

        clearField();
    });
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

function clearField(){
    $("#add-inp-cusId").val('');
    $("#add-inp-cusName").val('');
    $("#add-inp-cusAddress").val('');
    $("#add-inp-cusSalary").val('');
}
