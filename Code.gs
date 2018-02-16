
var SPREADSHEET_FILE_ID = '1peMyca0njiwh5kdjYmG_MkuVaKFMyfGXFbW7NBO9BbQ';
var SHEET_NAME_TO_WRITE_DATA_TO = 'POB';
var folderId = '1wtD5osWSccyNgnI4jCz_bBHGIS_hNNrA';

var ADD_TIMESTAMP = true;
var ADD_IMAGE_URLS_TO_SHEET = true;

function doGet() {
  var template = HtmlService.createTemplateFromFile('index');
  return template.evaluate()
      .setTitle('Laporan Teknisi')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
};