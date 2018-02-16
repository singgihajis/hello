function processForm(theForm) {
    var allTheData, doc, fileBlob, folder, name, sheet, targetRange, template;
    var name, owner, address, business, status, phone1, phone2, myFile1, salesman;
    var fileUrl;
    var arrayOfNamesToWriteToSS, i, L, outerArray, innerArray, thisKey, TS;
    
    arrayOfNamesToWriteToSS = ['name', 'owner', 'address', 'business', 'status', 'phone1', 'phone2', 'myFile1', 'salesman'
    ];
    L = arrayOfNamesToWriteToSS.length;

    fileBlob = theForm.myFile1;

    Logger.log(fileBlob)

    if (folderId) {
        folder = DriveApp.getFolderById(folderId);
    } else {
        folder = DriveApp.getRootFolder();
    };

    if (fileBlob.name) { doc = folder.createFile(fileBlob);
        fileUrl = doc.getUrl(); };

    template = HtmlService.createHtmlOutputFromFile('feedback').getContent();

    allTheData = "";
    innerArray = [];

    if (ADD_TIMESTAMP) {
        TS = new Date();
        innerArray.push(TS);
    };

    for (i = 0; i < L; i += 1) {
        thisKey = arrayOfNamesToWriteToSS[i];
        allTheData = allTheData + theForm[thisKey] + " <br>";
        innerArray.push(theForm[thisKey]);
    };

    outerArray = [];
    outerArray.push(innerArray);

    template = template.replace('PutTheDataHere', allTheData);

    if (ADD_IMAGE_URLS_TO_SHEET) {
        if (fileUrl) innerArray.push(fileUrl);
    };

    if (!SPREADSHEET_FILE_ID) {
        return ['err', 'No Spreadsheet ID', template] };

    sheet = SpreadsheetApp.openById(SPREADSHEET_FILE_ID).getSheetByName(SHEET_NAME_TO_WRITE_DATA_TO);
    sheet.appendRow(innerArray);

    return template;
};
