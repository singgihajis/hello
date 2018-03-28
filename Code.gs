var SPREADSHEET_FILE_ID = '1MZv9BcDQPUaG7n-XeWTOCMQmsVtkTulCBSyoTVgEOUw';
var SHEET_NAME_TO_WRITE_DATA_TO = "POB";
var folderId = "0B1WBPl8wpdmTb0xfMC1aWVAxN3M";
var ADD_TIMESTAMP = true;
var ADD_IMAGE_URLS_TO_SHEET = true;

function doGet() {
  var template = HtmlService.createTemplateFromFile('index');

  return template.evaluate()
      .setTitle('POB Limuny Web App')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
};