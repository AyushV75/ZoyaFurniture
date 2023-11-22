function saveDefaults() {
    var defUserEmail= $("#txtEmail").val();
    localStorage.setItem("UserEmail", defUserEmail)
}

function loadDefaults() {
    $("#txtEmail").val(localStorage.getItem ("UserEmail"));
}
function feedbackValidation(){
    if(doValidate_frmFeedback()){
        console.info("Feedback form is valid");
        var customerName=$("#txtName").val();
        var customerNumber=$("#txtNumber").val();
        var customerEmail= $("#textEmail").val();
        var customerRate=$("#txtRate").val();
        var customerMessage=$("#txtTextArea").val();

        var objFeedback= new Event(customerName,customerNumber,customerEmail,customerRate,customerMessage);
       CustomFeedBack.insert(objFeedback);

    }
    else {
        console.info("Feedback form is InValid");
    }
}
function accountValidation(){
    if(doValidate_frmRegister()){
        console.info("Registration form is Valid");
        var fullNames= $("#txtFullName").val();
        var userName=$("#txtUserName").val();
        var stateId=$("#cmbState").val();
        var userEmail=$("#txtEmail").val();
        var userAddress=$("#txtAddress1").val();
        var city=$("#txtCity").val();
        var postalCode=$("#txtPostalCode").val();

        var objRegister= new Events(fullNames,userName,stateId,userEmail,userAddress,city,postalCode);
        CustomFeedBack.insert(objRegister);
    }
    else {
        console.info("Registration form is InValid");
    }
}
function updateStatesDropdown(){
    var options = [];

    States.selectAll(options, callback);

    function callback(tx, results) {

        console.info("Success: States selected successfully");

        var htmlCode = "";

        for(var i = 0; i < results.rows.length; i++){
            var state = results.rows[i];
            var stateId = state['id'];
            var stateName = state['name'];

            if(stateName === "Ontario"){

                htmlCode += `<option selected value=${stateId}> ${stateName} </option>`;
            }
            else{
                htmlCode += `<option value=${stateId}> ${stateName} </option>`;
            }
        }

        var cmb = $("#cmbState");
        cmb = cmb.html(htmlCode);
        cmb.selectmenu("refresh");
    };
}