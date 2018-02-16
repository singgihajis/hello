function processForm(theForm) {
    var allTheData, doc, doc2, doc3, doc4, fileBlob, fileBlob2, fileBlob3, fileBlob4, folder, name, sheet, targetRange, template;
    var name, birthdate, birthplace, gender, marital, address, trip, belief, qualification, educational, subject, profiency, grade, email, phone, sosmed, myFile1;
    var fileUrl, fileUrl2, fileUrl3, fileUrl4;
    var arrayOfNamesToWriteToSS, i, L, outerArray, innerArray, thisKey, TS;

    arrayOfNamesToWriteToSS = ['name', 'birthdate', 'birthplace', 'gender', 'marital', 'address', 'trip', 'belief', 'qualification', 'educational', 'subject', 'profiency', 'grade', 'email', 'phone', 'sosmed', 'myFile1'];
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
        folder = DriveApp.getFolderById(folderId);
    } else {
        folder = DriveApp.getRootFolder();
    };

    if (fileBlob.name) {
        doc = folder.createFile(fileBlob);
        fileUrl = doc.getUrl();
    };
    if (fileBlob2.name) {
        doc2 = folder.createFile(fileBlob2);
        fileUrl2 = doc2.getUrl();
    }
    if (fileBlob3.name) {
        doc3 = folder.createFile(fileBlob3);
        fileUrl3 = doc3.getUrl();
    }
    if (fileBlob4.name) {
        doc4 = folder.createFile(fileBlob4);
        fileUrl4 = doc4.getUrl();
    }

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
        if (fileUrl2) innerArray.push(fileUrl2);
        if (fileUrl3) innerArray.push(fileUrl3);
        if (fileUrl4) innerArray.push(fileUrl4);
    };

    if (!SPREADSHEET_FILE_ID) {
        return ['err', 'No Spreadsheet ID', template]
    };

    sheet = SpreadsheetApp.openById(SPREADSHEET_FILE_ID).getSheetByName(SHEET_NAME_TO_WRITE_DATA_TO);
    sheet.appendRow(innerArray);

    return template;
};