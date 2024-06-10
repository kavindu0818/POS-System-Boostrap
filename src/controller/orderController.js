import ItemModel from "../model/ItemModel.js";
import CustomerModel from "../model/customerModel.js";
import { customer } from "../db/db.js";
import { item } from "../db/db.js";
import { orderDetails } from "../db/db.js";
import { order } from "../db/db.js";
import orderDetailsModel from "../model/orderDetailsModel.js";

let selectedCustomerId;
let itemCode;
$('#invoice-input-cus-cmb').on('change', function(){
    selectedCustomerId = $('#invoice-input-cus-cmb option:selected').text();
    for (let customerArElement of customer) {
        if (customerArElement.id==selectedCustomerId){
            $('#invoice-cus-name').val(customerArElement.name);
            $('#invoice-cus-salary').val(customerArElement.salary);
            $('#invoice-cus-address').val(customerArElement.address);
            $('#item-select-cmb').focus();
        }
    }
});

$('#item-select-cmb').on('change', function(){
    itemCode = $('#item-select-cmb option:selected').text();
    for (let itm of item) {
        if (itm.code==itemCode){
            $('#itemName').val(itm.itemName);
            $('#item-select-price').val(itm.price);
            $('#item-select-qty').val(itm.qty);
            $('#invoice-input-cus-cmb').focus();
        }
    }
});

$(document).ready(function(){
    $('#item-select-add-btn').click(function(){

        var price = $('#item-select-price').val();
        var qty = $('#item-select-orderQty').val();

        var result = price * qty;

        $('#total').val(result);
        $('#subTotal').val(result);
    });
});

$(document).ready(function () {
    $('#discount, #subTotal').on('input', function () {
        // Get the values
        var discount = parseFloat($('#discount').val()) || 0;
        var subTotal = parseFloat($('#subTotal').val()) || 0;
        var total = parseFloat($('#total').val()) || 0;

        // Calculate the total after discount
        var result =  total - (total * discount / 100);

        // Update the total field
        $('#subTotal').val(result.toFixed(2));
    });
});

$(document).ready(function () {
    $('#cash, #balance').on('input', function () {
        // Get the values
        var subTotal = parseFloat($('#subTotal').val()) || 0;
        var cash = parseFloat($('#cash').val()) || 0;

        // Calculate the total after discount
        var result =  cash - subTotal;

        // Update the total field
        $('#balance').val(result.toFixed(2));
    });
});

$("#purchase").on('click',function(){

    var orderId = $("#invoice-code").val();
    var orderDate = $("#invoice-date").val();
    var cusId = $("#invoice-input-cus-cmb").val();
    var ItemId = $("#item-select-cmb").val();
    var qty = $("#item-select-orderQty").val();
    var total = $("#total").val();
    var cash = $("#cash").val();
    var discount = $("#discount").val();
    var itemName = $("#itemName").val();
    var price = $("#item-select-price").val();


    var cusObj = new orderDetailsModel(orderId,orderDate,cusId,ItemId,qty,total,cash,discount);

    orderDetails.push(cusObj);

    var newRow = `<tr>
            <td>${orderId}</td>
            <td>${itemName}</td>
            <td>${price}</td>
            <td>${qty}</td>
            <td>${total}</td>
        </tr>`;

    $(".table tbody").append(newRow);

    clearFields();
    // loadAllCustomerId();
});

function clearFields() {
    $("#invoice-code").val('');
    $("#invoice-date").val('');
    $("#invoice-input-cus-cmb").val('');
    $("#item-select-cmb").val('');
    $("#itemName").val('');
    $("#item-select-price").val('');
    $("#item-select-qty").val('');
    $("#total").val('');
    $("#cash").val('');
    $("#discount").val('');
}



