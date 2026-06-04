const readline = require('readline');

const rl = readline.createInterface
({ 
    input: process.stdin,
     output: process.stdout 
    });

function ask(question) {
    return new Promise((resolve) => rl.question(question, (answer) => resolve(answer)));
}

(async function main() {
    try {
        const name = (await ask('Student Name: ')).trim();
        const marks = Number((await ask('Marks (0-100): ')).trim());
        const attendance = Number((await ask('Attendance Percentage (0-100): ')).trim());
        const deptCode = (await ask('Department Code (CS/IT/CE/ME): ')).trim().toUpperCase();

        console.log('\n=== Student Summary ===');
        console.log(`Name: ${name}`);
        console.log(`Marks: ${marks}`);

        // Pass / Fail using if-else
        if (marks >= 35) {
            console.log('Result: Pass');
        } else {
            console.log('Result: Fail');
        }

        // Grades using if-else if ladder
        let grade;
        if (marks >= 90){
             grade = 'A+';}
        else if (marks >= 75) {grade = 'A';
        }
        else if (marks >= 60)
            {grade = 'B';}
        else if (marks >= 35) 
            {grade = 'C';}
        else
            { grade = 'Fail';
        console.log(`Grade: ${grade}`);}

        // Department using switch
        let department;
        switch (deptCode) {
            case 'CS':
                department = 'Computer Science';
                break;
            case 'IT':
                department = 'Information Technology';
                break;
            case 'CE':
                department = 'Computer Engineering';
                break;
            case 'ME':
                department = 'Mechanical Engineering';
                break;
            default:
                department = 'Unknown Department';
        }
        console.log(`Department: ${department}`);

        // Attendance eligibility using ternary
        let attendanceEligibility = attendance >= 75 ? 'Eligible for Exam' : 'Not Eligible for Exam';
        console.log(`Attendance: ${attendance}% - ${attendanceEligibility}`);

        console.log('\n### Looping Statements ===');

        // For loop 1 to 20
        console.log('\nFor loop (1 to 20):');
        for (let i = 1; i <= 20; i++) console.log(i);

        // While loop even numbers 2 to 20
        console.log('\nWhile loop (even numbers 2 to 20):');
        let w = 2;
        while (w <= 20) {
            console.log(w);
            w += 2;
        }

        // Do-while loop 10 to 1
        console.log('\nDo-while loop (10 to 1):');
        let d = 10;
        do {
            console.log(d);
            d--;
        } while (d >= 1);

        console.log('\n=== Break & Continue ===');

        // For loop with break (stop at 15)
        console.log('\nFor loop with break (stop at 15):');
        for (let b = 1; b <= 20; b++) {
            console.log(b);
            if (b === 15) {
                console.log('Loop stopped using break at 15.');
                break;
            }
        }

        // For loop with continue (skip multiples of 3)
        console.log('\nFor loop with continue (skip multiples of 3):');
        for (let c = 1; c <= 20; c++) {
            if (c % 3 === 0) continue;
            console.log(c);
        }

    } catch (err) {
        console.error('Error:', err);
    } finally {
        rl.close();
    }
})();
