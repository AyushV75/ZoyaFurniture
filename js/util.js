function doValidate_frmFeedback(){
    var form= $("#frmFeedback");
    form.validate({
        rules:{
            txtName:{
                required:true,
                rangelength:[2,20]
            },
            txtNumber:{
                required: true

            },
            txtEmail:{
                required:true,
                emailcheck: true
            },
            txtRate:{
                required:true,
                rangecheck:true
            }
        },
            messages:{
                txtName: {
                    required:"Please enter Name",
                    rangelength: "Name must be 2-20 character long"
                },
                txtNumber: {
                    required:"Pleas enter your mobile number"

                },
                txtEmail: {
                    required:"Please enter your email",
                    emailcheck: "Please enter valid Email"
                },
                txtRate: {
                    required:"Please enter rating",
                    rangecheck: "Please give rating between 0to 5"
                }

            }

    });
    return form.valid();
}
function doValidate_frmRegister(){
    var form= $("#frmRegister");
    form.validate({
       rules: {
           txtFullName:{
               required:true,
               rangelength:[2,20]
           },
           txtUserName:{
               required:true,
               rangelength:[2,20]
           },
           txtUserEmail:{
               required: true,
               emailcheck: true
           },
           txtPhoneNumber:{
               required: true,
               numbercheck: true
           },
           txtAddress1:{
               required:true
           },
           txtCity:{
               required:true
           },
           txtPostalCode:{
               required:true,
               postalcheck:true
           }
       },
        messages: {
            txtFullName:{
                required:"Please enter FullName",
                rangelength: "Name must be 2-20 character long"
            },
            txtUserName:{
                required:"Please enter UserName",
                rangelength: "Name must be 2-20 character long"
            },
            txtUserEmail:{
                required:"Please enter your email",
                emailcheck: "Please enter valid Email"
            },
            txtPhoneNumber:{
                required: "Please enter number",
                numbercheck: "Please enter valid number"
            },
            txtAddress1:{
                required:"Please enter address"
            },
            txtCity:{
                required:"Please enter City"
            },
            txtPostalCode:{
                required:"Please enter PostalCode",
                postalcheck:"Please enter valid Postal code"
            }
        }
    });
    return form.valid();
}
jQuery.validator.addMethod("emailcheck",
    function (value, element){
        var  EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return EmailRegex.test(value) ;
    });
jQuery.validator.addMethod("rangecheck",
    function (value,element){
        var RangeRegex= /^[0-5]$/;
        return RangeRegex.test(value);
    });
jQuery.validator.addMethod("numbercheck",
    function (value,element){
     var numRegex= /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
     return numRegex.test(value);
    });
jQuery.validator.addMethod("postalcheck",
    function (value,elements){
    var postRegex= /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/;
    return postRegex.test(value);
    });
