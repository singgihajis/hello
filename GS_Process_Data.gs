function processForm(theForm) {
  var allTheData,birth,doc,doc2,doc3,doc4,fileBlob,fileBlob2,fileBlob3,fileBlob4,folder,name,sheet,targetRange,template;
  var nationality,marital,children,years,profiency,qualification,educational,subject,grade,email,phone,skype;
  var fileUrl,fileUrl2,fileUrl3,fileUrl4;
  var arrayOfNamesToWriteToSS,i,L,outerArray,innerArray,thisKey,TS;
  //Logger.log(theForm);
  
  arrayOfNamesToWriteToSS = ['name','birth','nationality','marital','children','years','profiency',
     'qualification','educational','subject','grade','email','phone','skype'];
  L = arrayOfNamesToWriteToSS.length;

  fileBlob = theForm.myFile1;
  fileBlob2 = theForm.myFile2;
  fileBlob3 = theForm.myFile3;
  fileBlob4 = theForm.myFile4;
  
  Logger.log(fileBlob)
  Logger.log(fileBlob2)
  Logger.log(fileBlob3)
  Logger.log(fileBlob4)
  
  if (folderId) {
    folder = DriveApp.getFolderById(folderId);//Put the folder ID into line 2 of Code.gs
  } else {
    folder = DriveApp.getRootFolder();//If no folder is designated then use the root folder
  };

  if (fileBlob.name) {doc = folder.createFile(fileBlob);  fileUrl = doc.getUrl();};
  if (fileBlob2.name) {doc2 = folder.createFile(fileBlob2); fileUrl2 = doc2.getUrl();}
  if (fileBlob3.name) {doc3 = folder.createFile(fileBlob3); fileUrl3 = doc3.getUrl();}
  if (fileBlob4.name) {doc4 = folder.createFile(fileBlob4); fileUrl4 = doc4.getUrl();}

  // Fill in response template
  template = HtmlService.createHtmlOutputFromFile('HTML_Feedback').getContent();
  
  allTheData = "";
  innerArray = [];
  
  if (ADD_TIMESTAMP) {
    TS = new Date();
    innerArray.push(TS);//Add time stamp to this row of data in first column
  };

  for (i=0;i<L;i+=1) {
    thisKey = arrayOfNamesToWriteToSS[i];
    allTheData = allTheData + theForm[thisKey] + " <br>";
    innerArray.push(theForm[thisKey]);
  };
  
  outerArray = [];
  outerArray.push(innerArray);

  //Logger.log('theForm.name: ' + theForm.name);
  template = template.replace('11111_PutTheDataHere_22222',allTheData);

  if (ADD_IMAGE_URLS_TO_SHEET) {//If the global variable used as a setting is set as true
    if (fileUrl) innerArray.push(fileUrl);
    if (fileUrl2) innerArray.push(fileUrl2);
    if (fileUrl3) innerArray.push(fileUrl3);
    if (fileUrl4) innerArray.push(fileUrl4);
  };

  // Record submission in spreadsheet
  if (!SPREADSHEET_FILE_ID) {return ['err','No Spreadsheet ID',template]};

  sheet = SpreadsheetApp.openById(SPREADSHEET_FILE_ID).getSheetByName(SHEET_NAME_TO_WRITE_DATA_TO);//Set name in Code.gs file
  sheet.appendRow(innerArray);
  //sheet.getRange(sheet.getLastRow()+1, 1, 1, innerArray.length).setValues(outerArray);

  return template;// Return HTML text for display in page
}