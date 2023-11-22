var CustomFeedBack= {
    insert: function (objFeedback){
        db.transaction(function (tx){
           var sql="INSERT INTO feedback(customerName,customerNumber,customerEmail,customerRate,customerMessage) VALUES(?,?,?,?,?);";
           var options= [objFeedback.customerName,objFeedback.customerNumber,objFeedback.customerEmail,objFeedback.customerRate,objFeedback.customerMessage];
           function successTransaction(){
               console.info("Success: Insert transaction successful");

           }
           tx.executeSql(sql,options,successTransaction,errorHandler);
        });
    },
    // selectAll:function (options,callback){
    //     db.transaction(function (tx){
    //         var sql="SELECT * FROM feedback;";
    //         tx.executeSql(sql,options,callback,errorHandler);
    //     });
    // },


}
var Register= {
    insert: function (objRegister){
        db.transaction(function (tx){
            var sql="INSERT INTO feedback(fullNames,userName,stateId,userEmail,userAddress,city,postalCode) VALUES(?,?,?,?,?,?,?);";
            var options= [objRegister.fullNames,objRegister.userName,objRegister.stateId,objRegister.userEmail,objRegister.userAddress,objRegister.city,objRegister.postalCode];
            function successTransaction(){
                console.info("Success: Insert transaction successful");

            }
            tx.executeSql(sql,options,successTransaction,errorHandler);
        });
    },
}
var States = {

    insert: function (stateObj) {
        db.transaction(function (tx){

            var sql = "INSERT INTO state VALUES(?);";

            var options = [stateObj.name];

            function successTransaction(){
                console.info("Success: Insert transaction successful");
            }

            tx.executeSql(sql, options, successTransaction, errorHandler);
        });
    },
    selectAll: function(options, callback){
        db.transaction(function(tx){
            var sql = "SELECT * FROM state;";

            tx.executeSql(sql, options, callback, errorHandler);
        });
    }
};