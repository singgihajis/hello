var SPREADSHEET_FILE_ID = 'XXXXXX';
var SHEET_NAME_TO_WRITE_DATA_TO = "XXXXXX";
var folderId = "XXXXXX";
var ADD_TIMESTAMP = true;
var ADD_IMAGE_URLS_TO_SHEET = true;

function doGet() {
  var template = HtmlService.createTemplateFromFile('index');
  
  return template.evaluate()
      .setTitle('Bootstrap Form')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
};