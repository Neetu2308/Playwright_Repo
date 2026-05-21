//read using row and coloumn
const XLSX=require('xlsx')
function getcellData(row,coloumn)
{
    const workbook=XLSX.readFile('TestData/ApplicationData.xlsx')
    const sheet=workbook.Sheets['loginpage']
    const cellvalue=XLSX.utils.encode_cell({//encode cell--to fetch row based and coloumn based data
        r:row-1,//first row in excel is 0th row in js,to adjust this row-1 is used
        c:coloumn-1
    })
    const cell=sheet[cellvalue]//get the ecel data from excel file.
    return cell?cell.v:undefined//ternary operation similiar to if else
    /*
    if(cell)
{
return cell.v//store the particular value in cell to v
}
else{
return undefined
}*/

}
module.exports={getcellData}