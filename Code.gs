var SPREADSHEET_FILE_ID = "1GuG9r3jEAdUBokcyNKO1006PrdDZ55BKmE2lY8kRMIk";
var SHEET_NAME_TO_WRITE_DATA_TO = "Teknisi";
var folderId = "0B00PjoDaZvAGZE14Si15cDltbjg";
var ADD_TIMESTAMP = true;
var ADD_IMAGE_URLS_TO_SHEET = true;

function doGet() {
  var template = HtmlService.createTemplateFromFile('index');
  return template.evaluate()
      .setTitle('Laporan Teknisi')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
};