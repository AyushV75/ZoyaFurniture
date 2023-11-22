var db;

function errorHandler(error) {
    console.error("SQL error: " + error.message);
}

var DB = {
    createDatabase: function () {
        var shortName = "ZoyaFurnitureDB";
        var version = "1.0";
        var displayName = "DB for Zoya's Furniture app";
        var dbSize = 2 * 1024 * 1024;

        function dbCreateSuccess() {
            console.info("Success: Database created successfully");
        }

        db = openDatabase(shortName,version,displayName,dbSize, dbCreateSuccess);
    },
    createTables:function (){
        db.transaction(function (tx){
            var sql="CREATE TABLE IF NOT EXISTS feedback("+
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"+
                "customerName VARCHAR(20) NOT NULL,"+
                "customerNumber INTEGER,"+
                "customerEmail VARCHAR(50),"+
                "customerRate INTEGER,"+
                "customerMessage VARCHAR(100));";
            var options=[];
            function successCallback(){
                console.info("Success: Create Table: feedback Successful");
            }
            tx.executeSql(sql,options,successCallback,errorHandler);

            var createStateTable= "CREATE TABLE IF NOT EXISTS state("
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";

            var insertStateValue = "INSERT INTO state(name) VALUES('Ontario'),('Alberta'),('British Columbia')," +
                "('Nova Scotia'),('Manitoba');"
            var dropStateTable = "DROP TABLE state";
            var options=[];
            function  successcallback(){
                console.info("Success: Drop table: state  successful");

            }
            function  successcallback2(){
                console.info("Success:  States Insert transaction  successfull");

            }
            function  successcallback1(){
                console.info("Success: Create table: state  successful");

            }
            tx.executeSql(dropStateTable,options,successcallback,errorHandler);
            tx.executeSql(createStateTable,options,successcallback1,errorHandler);
            tx.executeSql(insertStateValue,options,successcallback2,errorHandler);

            var createReviewTable="CREATE TABLE IF NOT EXISTS register( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "fullNames VARCHAR(30) NOT NULL," +
                "userName VARCHAR(20) NOT NULL," +
                "stateId INTEGER NOT NULL," +
                "userEmail VARCHAR(30)," +
                "userAddress TEXT," +
                "city VARCHAR(20)," +
                "postalCode VARCHAR(20)," +

                "FOREIGN KEY(stateId) REFERENCES state(id));";
            var options=[];
            function  successcallback4(){
                console.info("Success: Create tables... register \nsuccessful");

            }
            tx.executeSql(createReviewTable,options,successcallback4,errorHandler);

        });
    }
};






















