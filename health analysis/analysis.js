document.getElementById("analyzeBtn").addEventListener("click", function () {
  // Collect inputs
  const age = parseInt(document.getElementById("age").value);
  const sex = document.getElementById("sex").value;
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const systolic = parseFloat(document.getElementById("systolic").value);
  const diastolic = parseFloat(document.getElementById("diastolic").value);
  const cholesterol = parseFloat(document.getElementById("cholesterol").value);
  const sugar = parseFloat(document.getElementById("sugar").value);

  const activity = document.getElementById("activity").value;
  const sleep = parseFloat(document.getElementById("sleep").value);
  const alcohol = document.getElementById("alcohol").value;
  const smoker = document.getElementById("smoker").checked;

  const waist = parseFloat(document.getElementById("waist").value);
  const hip = parseFloat(document.getElementById("hip").value);

  // ---------- CALCULATIONS ----------
  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  let bmiStatus = "Normal";
  if (bmi < 18.5) bmiStatus = "Underweight";
  else if (bmi < 25) bmiStatus = "Normal";
  else if (bmi < 30) bmiStatus = "Overweight";
  else bmiStatus = "Obese";

  let bmr;
  if (sex === "Male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  bmr = Math.round(bmr);

  let multiplier = 1.2;
  if (activity === "Moderate Activity") multiplier = 1.55;
  if (activity === "High Activity") multiplier = 1.725;
  const tdee = Math.round(bmr * multiplier);

  let heartRisk = "Low Risk";
  if (systolic > 140 || diastolic > 90 || cholesterol > 240) heartRisk = "High Risk";
  else if (systolic > 130 || diastolic > 85 || cholesterol > 200) heartRisk = "Medium Risk";

  let diabetesRisk = "Low Risk";
  if (sugar > 126 || smoker || alcohol === "Heavy") diabetesRisk = "High Risk";
  else if (sugar > 100) diabetesRisk = "Medium Risk";

  let obesityRisk = "Low Risk";
  if (bmi >= 30 || waist / hip > 0.9) obesityRisk = "High Risk";
  else if (bmi >= 25) obesityRisk = "Medium Risk";

  // ---------- SHOW RESULTS ----------
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <div class="result-card">
      <h3>BMI</h3>
      <div class="value blue">${bmi}</div>
      <div class="status">${bmiStatus}</div>
      <div class="progress-bar">
        <div class="progress blue" style="--progress-width:${Math.min(bmi, 40) * 2.5}%;background:#2563eb;"></div>
      </div>
    </div>
    <div class="result-card">
      <h3>BMR</h3>
      <div class="value green">${bmr}</div>
      <div class="status">calories/day</div>
      <div class="progress-bar">
        <div class="progress green" style="--progress-width:${Math.min(bmr / 40, 100)}%;background:#10b981;"></div>
      </div>
    </div>
    <div class="result-card">
      <h3>TDEE</h3>
      <div class="value purple">${tdee}</div>
      <div class="status">calories/day</div>
      <div class="progress-bar">
        <div class="progress purple" style="--progress-width:${Math.min(tdee / 40, 100)}%;background:#8b5cf6;"></div>
      </div>
    </div>
    <div class="result-card">
      <h3>Heart Risk</h3>
      <div class="risk-tag ${heartRisk==="High Risk"?"high-risk":heartRisk==="Medium Risk"?"medium-risk":"low-risk"}">✔ ${heartRisk}</div>
    </div>
    <div class="result-card">
      <h3>Diabetes Risk</h3>
      <div class="risk-tag ${diabetesRisk==="High Risk"?"high-risk":diabetesRisk==="Medium Risk"?"medium-risk":"low-risk"}">✔ ${diabetesRisk}</div>
    </div>
    <div class="result-card">
      <h3>Obesity Risk</h3>
      <div class="risk-tag ${obesityRisk==="High Risk"?"high-risk":obesityRisk==="Medium Risk"?"medium-risk":"low-risk"}">✔ ${obesityRisk}</div>
    </div>
  `;
});