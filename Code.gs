/* NOTE!!  IMPORTANT!!
  To make a copy of this file, click the "File" menu, and then click "Make a copy".
  If you want a copy of the form data to be written into a spreadsheet,
  then enter a spreadsheet file ID.
  If you want the uploaded files to go to a particular folder, then
  enter the folder ID below.  If you do not enter a folder ID, then
  the uploaded files will go into the root folder.  There does not need to be a
  folder designation for the spreadsheet.  All you need to enter is the spreadsheet ID, and whatever
  folder the spreadsheet is in, that is where the data will be written to.
  
  You can get the folder ID from the browsers address bar.  
  In Google Drive, you need to click on a folder.  
  Then look at the Address bar in the browser:

    https://drive.google.com/drive/folders/The_ID_is_Here
    
  In the file:
    
    JS_Main_Form.html
    
  There is an array literal named "requiredList".  Add or delete whatever name attribute names that you
  want to be required questions or not in the form.
*/

var SPREADSHEET_FILE_ID = 'XXXFile_IDXXX';
var SHEET_NAME_TO_WRITE_DATA_TO = "XXXSheet_NameXXX";
var folderId = "XXXFolder_IDXXX";
var ADD_TIMESTAMP = true;//Change to true if you want the timestamp added to the data
var ADD_IMAGE_URLS_TO_SHEET = true;

function doGet() {
  var template = HtmlService.createTemplateFromFile('index');

  // Build and return HTML in IFRAME sandbox mode.
  return template.evaluate()
      .setTitle('XXXWindow_TitleXXX')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
};