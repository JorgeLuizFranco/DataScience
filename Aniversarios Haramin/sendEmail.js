function main() {
  // Load the sheet that contains the birthdays.
  var ss = SpreadsheetApp.getActive();
  var someSheet = ss.getActiveSheet().getSheetName();

  var sheet = SpreadsheetApp.getActive().getSheetByName(someSheet);

  // Get the last row in the sheet that has data.
  var numRows = sheet.getLastRow();

  // Load data in the first two columns from the second row till the last row. 
  // Remember: The first row has column headers so we don’t want to load it.
  var range = sheet.getRange(2, 1, numRows - 1, 2).getValues();

  // Use a for loop to process each row of data
  for(var index in range) {
    console.log(index);
    // For each row, get the person’s name and their birthday
    var row = range[index];
    console.log(row)
    var name = row[0];
    var birthday = row[1];

    // Check if the person’s birthday is today
    if(isBirthdayToday(birthday)) {
      //If yes, send an email reminder
      emailReminder(name);
    }
  }
}

// Check if a person’s birthday is today
function isBirthdayToday(birthday) {
  // If birthday is a string, convert it to date
  if(typeof birthday === "string")
    birthday = new Date(birthday);
  var today = new Date();
  if((today.getDate() === birthday.getDate()) &&
      (today.getMonth() === birthday.getMonth())) {
    return true;
  } else {
    return false;
  }
}

// Function to send the email reminder
function emailReminder(name) {
  console.log(name);
  var subject = "Aniversário Haramin: " + name;
  var recipient = "jovensharamin@gmail.com,gabriel.italianoleal@gmail.com,rodriguespadovannicole@gmail.com,Picharilloluiza16@gmail.com";
  var body = "Hoje é aniversário de " + name ;
  MailApp.sendEmail(recipient, subject, body);
}
