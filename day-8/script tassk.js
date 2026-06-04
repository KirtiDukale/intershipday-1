const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Student Name: ", (studentName) => {
  rl.question("Enter Marks (0-100): ", (marks) => {
    rl.question("Enter Attendance Percentage: ", (attendance) => {
      rl.question("Enter Department Code (CS/IT/CE/ME): ", (department) => {

        marks = parseInt(marks);
        attendance = parseFloat(attendance);

        // Pass or Fail
        if (marks >= 35) {
          console.log(`${studentName} has Passed.`);
        } else {
          console.log(`${studentName} has Failed.`);
        }

        // Grade
        if (marks >= 90) {
          console.log("Grade: A+");
        } else if (marks >= 75) {
          console.log("Grade: A");
        } else if (marks >= 60) {
          console.log("Grade: B");
        } else if (marks >= 35) {
          console.log("Grade: C");
        } else {
          console.log("Grade: Fail");
        }

        // Department
        switch (department.toUpperCase()) {
          case "CS":
            console.log("Department: Computer Science");
            break;
          case "IT":
            console.log("Department: Information Technology");
            break;
          case "CE":
            console.log("Department: Computer Engineering");
            break;
          case "ME":
            console.log("Department: Mechanical Engineering");
            break;
          default:
            console.log("Invalid Department Code");
        }

        // Attendance Eligibility
        const eligibility =
          attendance >= 75 ? "Eligible for Exam" : "Not Eligible for Exam";

        console.log("Attendance Status:", eligibility);

        // For Loop
        console.log("\nNumbers from 1 to 20:");
        for (let i = 1; i <= 20; i++) {
          console.log(i);
        }

        // While Loop
        console.log("\nEven Numbers from 2 to 20:");
        let j = 2;
        while (j <= 20) {
          console.log(j);
          j += 2;
        }

        // Do-While Loop
        console.log("\nNumbers from 10 to 1:");
        let k = 10;
        do {
          console.log(k);
          k--;
        } while (k >= 1);

        // Break Example
        console.log("\nBreak Example:");
        for (let i = 1; i <= 20; i++) {
          if (i === 15) break;
          console.log(i);
        }

        // Continue Example
        console.log("\nContinue Example:");
        for (let i = 1; i <= 20; i++) {
          if (i % 3 === 0) continue;
          console.log(i);
        }

        rl.close();
      });
    });
  });
});