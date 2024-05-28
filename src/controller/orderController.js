import ItemModel from "../model/ItemModel.js";
import CustomerModel from "../model/customerModel.js";
import { customer } from "../db/db.js";
import { item } from "../db/db.js";

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