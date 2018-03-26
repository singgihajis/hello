var SPREADSHEET_FILE_ID = '1r3rBkduPjGM5hFSlbndHKo71E81iDTTBv3V3vLS16eE';
var SHEET_NAME_TO_WRITE_DATA_TO = "Sheet1";
var folderId = "0B1WBPl8wpdmTQVU2WHBCUTU2SGM";
var ADD_TIMESTAMP = true;
var ADD_IMAGE_URLS_TO_SHEET = true;

function doGet() {
  var template = HtmlService.createTemplateFromFile('index');

  return template.evaluate()
      .setTitle('POB Limuny Web App')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
};