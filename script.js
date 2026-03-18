console.log("✅ script.js connected"); // Task 3: JS connection test

// Task 4: Access all elements (DOM)
const studentNameInput = document.getElementById("studentName");
const pw1Input = document.getElementById("pw1");
const pw2Input = document.getElementById("pw2");
const calculateBtn = document.getElementById("btnCalc");
const outputBox = document.getElementById("outputBox");

console.log(studentNameInput, pw1Input, pw2Input, calculateBtn, outputBox);

// Task 5–6: Event handling + declare + call function
calculateBtn.addEventListener("click", function() {
    console.log("✅ Button clicked");
    calculateMarks(); // Task 6: call function
});

// Task 7–10: Function calculateMarks
function calculateMarks() {
    console.log("➡️ calculateMarks() executed");

    // Task 7: Get values + data types
    const name = studentNameInput.value.trim();
    const mark1 = Number(pw1Input.value);
    const mark2 = Number(pw2Input.value);

    console.log("Name:", name);
    console.log("Mark 1:", mark1);
    console.log("Mark 2:", mark2);

    // Validation (Task 10)
    if(name === "") {
        outputBox.className = "alert alert-danger";
        outputBox.innerHTML = "⚠️ Please enter student name";
        return;
    }
    if(mark1 > 100 || mark2 > 100) {
        outputBox.className = "alert alert-danger";
        outputBox.innerHTML = "⚠️ Marks cannot exceed 100";
        return;
    }

    // Task 8: Operators (Total, Average, Percentage)
    const total = mark1 + mark2 ;
    const average = total / 2;
    const percentage = (total / 200) * 100;

    console.log("Total:", total);
    console.log("Average:", average);
    console.log("Percentage:", percentage.toFixed(2) + "%");

    // Task 9: if/else Grade
    let grade = "";
    if(average >= 80) grade = "Excellent";
    else if(average >= 60) grade = "Good";
    else if(average >= 40) grade = "Satisfactory";
    else grade = "Fail";

    console.log("Grade:", grade);

    // Task 10: Display output (UI)
    outputBox.className = "alert alert-success";
    outputBox.innerHTML = `
        <strong>Student:</strong> ${name}<br>
        <strong>Total:</strong> ${total}<br>
        <strong>Average:</strong> ${average.toFixed(2)}<br>
        <strong>Percentage:</strong> ${percentage.toFixed(2)}%<br>
        <strong>Grade:</strong> ${grade}
    `;
}