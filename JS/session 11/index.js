      
let students = [];
let choice;

while (choice !== 9) {
    choice = Number(prompt(
        "===== STUDENT MANAGEMENT =====\n" +
        "1. Create Student\n" +
        "2. Read All Students\n" +
        "3. Filter Scholarship Candidates\n" +
        "4. Update Student Profile\n" +
        "5. Delete Record\n" +
        "6. Compliance Verification\n" +
        "7. Academic Statistics\n" +
        "8. Data Normalization\n" +
        "9. Exit\n" +
        "Enter your choice:"
    ));
    switch (choice) {
        case 1:
            let id = prompt("Enter ID:");
            let name = prompt("Enter Name:");
            let age = Number(prompt("Enter Age:"));
            let gpa = Number(prompt("Enter GPA:"));
            let status = prompt("Enter Status (active/inactive):");

            let student = { id, name, age, gpa, status };
            students.push(student);
            alert("Student created successfully!");
            break;
        case 2:
            if (students.length === 0) {
                alert("No students available.");
            } else {
                let output = "ID | Name | Age | GPA | Status\n";
                output += "----------------------------------\n";
                students.forEach(s => {
                output += `${s.id} | ${s.name} | ${s.age} | ${s.gpa} | ${s.status}\n`;
                });
                console.log(output);
                alert("Check console for student list.");
            }
            break;
        case 3:
            let scholarship = students.filter(s => s.gpa > 8.0);
            console.log("Scholarship Candidates:", scholarship);
            alert("Check console for scholarship candidates.");
            break;
        case 4:
            let updateId = prompt("Enter ID to update:");
            let foundStudent = students.find(s => s.id === updateId);

            if (foundStudent) {
            foundStudent.name = prompt("Enter new Name:");
            foundStudent.gpa = Number(prompt("Enter new GPA:"));
            alert("Student updated successfully!");
            } else {
                alert("Student not found.");
            }
            break;
        case 5:
            let deleteId = prompt("Enter ID to delete:");
            let index = students.findIndex(s => s.id === deleteId);

            if (index !== -1) {
            students.splice(index, 1);
            alert("Student deleted successfully!");
            } else {
            alert("Student not found.");
            }
            break;
        case 6:
            let hasMinor = students.some(s => s.age < 18);
            let allActive = students.every(s => s.status === "active");

            console.log("Has student under 18:", hasMinor);
            console.log("All students active:", allActive);
            alert("Check console for compliance verification.");
            break;
        case 7:
            if (students.length === 0) {
            alert("No students available.");
            } else {
            let avgGpa = students.reduce((sum, s) => sum + s.gpa, 0) / students.length;
            console.log("Average GPA:", avgGpa.toFixed(2));
            alert("Check console for average GPA.");
            }
            break;
        case 8:
            let normalizedList = students.map(s => ({
            ...s,
            name: s.name.toUpperCase()
            }));
            console.log("Normalized Data:", normalizedList);
            alert("Check console for normalized data.");
            break;
        case 9:
            alert("Exiting program...");
            break;
        default:
            alert("Invalid choice. Please try again.");
    }
}