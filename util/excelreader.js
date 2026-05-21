const XLSX=require('xlsx')//importing the excel library
function getData(){
    const workbook=XLSX.readFile('TestData/ApplicationData.xlsx')//read file is used to open the excel file
    const sheet=workbook.Sheets['loginpage']//to open sheets in workbook
    const data=XLSX.utils.sheet_to_json(sheet)//to convert excel to java script
    //first row in excel sheet is considered as header so if any data is entered in that row it will be ignored
    return data
}   
module.exports={getData}//to access in different files/