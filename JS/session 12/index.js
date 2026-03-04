let students = [];
let running = true;

const createStudent = () => {

    let id, name, age, gpa, status;
    let isValid = false;

    do {

        id = prompt("Enter ID:");
        name = prompt("Enter name:");
        age = Number(prompt("Enter age (16-60):"));
        gpa = Number(prompt("Enter GPA (0-10):"));
        status = prompt("Enter status (active/inactive):");

        // Chuẩn hóa dữ liệu
        name = name ? name.trim() : "";
        status = status ? status.trim().toLowerCase() : "";

        // Validate
        let idValid = id && !students.some(st => st.id === id);
        let nameValid = name !== "";
        let ageValid = Number.isInteger(age) && age >= 16 && age <= 60;
        let gpaValid = !isNaN(gpa) && gpa >= 0 && gpa <= 10;
        let statusValid = status === "active" || status === "inactive";

        if (!idValid) {
            alert("ID invalid or already exists!");
        } else if (!nameValid) {
            alert("Name cannot be empty!");
        } else if (!ageValid) {
            alert("Age must be integer between 16 and 60!");
        } else if (!gpaValid) {
            alert("GPA must be between 0 and 10!");
        } else if (!statusValid) {
            alert("Status must be 'active' or 'inactive'!");
        } else {
            isValid = true;
        }

    } while (!isValid);

    students.push({
        id,
        name,
        age,
        gpa,
        status,
        createdAt: Date.now(),
        updatedAt: null,
        deletedAt: null
    });

    alert("Student created successfully!");
};



const updateStudent = () => {

    let id = prompt("Enter ID to update:");

    let student = students.find(st => st.id === id);

    if (!student) {
        return alert("Student not found!");
    }

    // Nhập dữ liệu mới (cho phép bỏ trống)
    let newName = prompt("Enter new name (leave blank to keep current):");
    let newAgeInput = prompt("Enter new age (16-60, leave blank to keep current):");
    let newGpaInput = prompt("Enter new GPA (0-10, leave blank to keep current):");
    let newStatusInput = prompt("Enter new status (active/inactive, leave blank to keep current):")

    // NAME
    if (newName && newName.trim() !== "") {
        student.name = newName.trim();
    }

    // AGE
    if (newAgeInput !== "") {
        let newAge = Number(newAgeInput);
        if (!Number.isInteger(newAge) || newAge < 16 || newAge > 60) {
            return alert("Invalid age! Update cancelled.");
        }
        student.age = newAge;
    }

    // GPA
    if (newGpaInput !== "") {
        let newGpa = Number(newGpaInput);
        if (isNaN(newGpa) || newGpa < 0 || newGpa > 10) {
            return alert("Invalid GPA! Update cancelled.");
        }
        student.gpa = newGpa;
    }

    // STATUS
    if (newStatusInput !== "") {
        let newStatus = newStatusInput.trim().toLowerCase();
        if (newStatus !== "active" && newStatus !== "inactive") {
            return alert("Invalid status! Update cancelled.");
        }
        student.status = newStatus;
    }

    student.updatedAt = new Date();

    alert("Student updated successfully!");
};

const softDeleteStudent = () => {

    let id = prompt("Enter ID to soft delete:");

    let student = students.find(st => st.id === id);

    if (!student) {
        return alert("Student not found!");
    }

    if (student.deletedAt !== null) {
        return alert("Student already deleted!");
    }

    let confirmation = confirm("Are you sure you want to soft delete this student?");

    if (!confirmation) {
        return alert("Operation cancelled.");
    }

    student.status = "inactive";
    student.deletedAt = new Date();
    student.updatedAt = new Date();

    alert("Soft delete successful!");
};

const restoreStudent = () => {

    let id = prompt("Enter ID to restore:");

    let student = students.find(st => st.id === id);

    if (!student) {
        return alert("Student not found!");
    }

    if (student.status !== "inactive" || student.deletedAt === null) {
        return alert("Student is not eligible for restore!");
    }

    student.status = "active";
    student.deletedAt = null;
    student.updatedAt = new Date();

    alert("Student restored successfully!");
};

const viewStudents = () => {
    let result = [...students]; // clone mảng gốc

    // ===== SEARCH =====
    let keyword = prompt("Nhập tên cần tìm (Enter để bỏ qua):");

    if (keyword && keyword.trim() !== "") {
        result = result.filter(student =>
            student.name.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    // ===== FILTER =====
    let statusFilter = prompt("Filter theo trạng thái (active/inactive, Enter để bỏ qua):");

    if (statusFilter === "active" || statusFilter === "inactive") {
        result = result.filter(student => student.status === statusFilter);
    }

    // ===== SORT =====
    let sortOption = prompt("Sort GPA (asc/desc, Enter để bỏ qua):");

    if (sortOption === "asc") {
        result = [...result].sort((a, b) => a.gpa - b.gpa);
    } else if (sortOption === "desc") {
        result = [...result].sort((a, b) => b.gpa - a.gpa);
    }

    // ===== PAGINATION =====
    let pageSize = +prompt("Nhập số bản ghi mỗi trang:");
    if (!pageSize || pageSize <= 0) pageSize = 3;

    let totalRecords = result.length;
    let totalPages = Math.ceil(totalRecords / pageSize);


    let nav;

    do {

        let start = (currentPage - 1) * pageSize;
        let end = start + pageSize;
        let pageData = result.slice(start, end);

        console.clear();
        console.log(`Trang ${currentPage}/${totalPages}`);
        console.log(`Tổng bản ghi: ${totalRecords}`);
        console.table(pageData);


        if (nav === "first") currentPage = 1;
        else if (nav === "last") currentPage = totalPages;
        else if (nav === "next" && currentPage < totalPages) currentPage++;
        else if (nav === "prev" && currentPage > 1) currentPage--;

    } while (nav !== "exit");


}



while (running) {
    let choice = prompt(`
==== STUDENT MANAGER ADVANCED ====
1. Create Student
2. Update Student
3. Soft Delete Student
4. Restore Student
5. View Students
6. Analytics Dashboard
0. Exit
`);

    switch (choice) {
        case "1":
            createStudent();
            break;
        case "2":
            updateStudent();
            break;
        case "3":
            softDeleteStudent();
            break;
        case "4":
            restoreStudent();
            break;
        case "5":
            viewStudents();
            break;
        case "0":
            running = false;
            break;
        default:
            alert("Invalid choice!");
    }
}