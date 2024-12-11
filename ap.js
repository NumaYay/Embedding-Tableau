console.log("Hello Numa");
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbook name is: ${workbook.name}`);
  // get an array of dashboard within the workbook
  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((Element) => {
    index = Element.index;
    console.log(`The sheet with index ${index} is ${Element.name}`);
  });
  // get the active sheet for this workbook
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is ${vizActiveSheet.name}`);
  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((Element) => {
    index = Element.index;
    console.log(`The worksheet with index ${index} is ${Element.name}`);
  });
}
// Run the function when the viz becomes interactive.
viz.addEventListener("firstinteractive", logWorkbookInformation);
