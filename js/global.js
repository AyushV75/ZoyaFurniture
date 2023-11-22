$(document).ready(function () {
    init();
    initDB();
});

function settingsLoaded() {
    loadDefaults();
}

function btnSubmit_click() {
    saveDefaults();
}
function buttonSubmit_click(){
    feedbackValidation();
}
// function contactPage_show(){
//     getPosition();
// }
function btnRegister_click(){
    accountValidation();
}
function accountPage_show(){
    updateStatesDropdown();

}
function init() {
   $("#homePage").on("pageshow",settingsLoaded);
   $("#btnSubmit").on("click",btnSubmit_click);
    // console.info("init");
    //$("#btnMap").on("click", btnMap_click);
    // $("#contactPage").on("pageshow",contactPage_show);
    $("#buttonSubmit").on("click",buttonSubmit_click);
    $("#btnRegister").on("click",btnRegister_click);
    $("#accountPage").on("pageshow",accountPage_show);

   loadDefaults();
}

function initDB(){
    try{
        DB.createDatabase();
        if (db) {
            console.info("Creating Tables ...");
            DB.createTables();
        }
        else{
            console.error("Error: Cannot create tables: Database does not exists");
        }

    }catch(e){
        console.error("Error (Fatal): Error in initDB. Can not proceed");
    }
}
