function calculateBMI() {
    // รับค่า input
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // แปลงจาก cm เป็น m
    
    // ตรวจสอบว่ามีการใส่ค่าครบหรือไม่
    if (!weight || !height) {
      alert("Please enter both weight and height!");
      return;
    }
  
    // คำนวณ BMI
    const bmi = weight / (height * height);
    const bmiResult = bmi.toFixed(2); // แสดงผลทศนิยม 2 ตำแหน่ง
  
    // กำหนดข้อความแนะนำตามค่า BMI
    let message = "";
    if (bmi < 18.5) {
      message = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      message = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      message = "Overweight";
    } else {
      message = "Obese";
    }
  
    // แสดงผลลัพธ์
    document.getElementById("bmi-result").textContent = bmiResult;
    document.getElementById("bmi-message").textContent = message;
  }
  