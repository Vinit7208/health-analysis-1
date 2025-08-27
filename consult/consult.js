const doctors = [
  {name:"Dr. John Smith", img:"image.jpg", rating:"★ 4.8", specialty:"Cardiology", exp:"15 years", location:"New York, NY", fee:"250"},
  {name:"Dr. Sarah Johnson", img:"image2.jpeg", rating:"★ 4.9", specialty:"Dermatology", exp:"12 years", location:"Los Angeles, CA", fee:"200"},
  {name:"Dr. Michael Chen", img:"image3.avif", rating:"★ 4.7", specialty:"Cardiology", exp:"20 years", location:"Chicago, IL", fee:"300"},
  {name:"Dr. Emily Davis", img:"image4.jpeg", rating:"★ 4.6", specialty:"Pediatrics", exp:"8 years", location:"Houston, TX", fee:"180"},
  {name:"Dr. Robert Wilson", img:"image5.jpg", rating:"★ 4.8", specialty:"Orthopedics", exp:"18 years", location:"Phoenix, AZ", fee:"280"},
  {name:"Dr. Lisa Brown", img:"image6.jpeg", rating:"★ 4.9", specialty:"Neurology", exp:"14 years", location:"Philadelphia, PA", fee:"320"},
];

const doctorGrid = document.getElementById("doctorGrid");
const noResults = document.getElementById("noResults");
const overlay = document.querySelector(".popup-overlay");
const bookingForm = document.getElementById("bookingForm");
const popup = document.querySelector(".popup");
const doctorList = document.querySelector(".doctor-list");

// Render doctors
function renderDoctors(list) {
  if (list.length === 0) {
    doctorGrid.innerHTML = "";
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
    doctorGrid.innerHTML = list.map(doc => `
      <div class="card">
        <img src="${doc.img}" alt="${doc.name}" />
        <span class="rating">${doc.rating}</span>
        <h3>${doc.name}</h3>
        <p class="specialty">${doc.specialty}</p>
        <p>🕒 ${doc.exp} experience</p>
        <p>📍 ${doc.location}</p>
        <span class="fee">Consultation: 💲${doc.fee}</span>
        <button class="btn book-btn">Book Appointment</button>
      </div>
    `).join("");
  }
}
renderDoctors(doctors); // Initial load

// Search filter
document.getElementById("searchBtn").addEventListener("click", () => {
  const nameInput = document.getElementById("searchName").value.toLowerCase().trim();
  const specialization = document.getElementById("searchSpecialization").value;
  const location = document.getElementById("searchLocation").value;

  const filtered = doctors.filter(doc => {
    const matchName = nameInput === "" || doc.name.toLowerCase().includes(nameInput);
    const matchSpecialization = specialization === "" || doc.specialty === specialization;
    const matchLocation = location === "" || doc.location === location;
    return matchName && matchSpecialization && matchLocation;
  });

  renderDoctors(filtered);

  // Left align if any filter applied
  if (nameInput || specialization || location) {
    doctorList.classList.add("left-align");
  } else {
    doctorList.classList.remove("left-align");
  }
});

// Open popup
doctorGrid.addEventListener("click", e => {
  if (e.target.classList.contains("book-btn")) {
    overlay.style.display = "flex";
    setTimeout(() => popup.classList.add("show"), 50);
    document.getElementById("name").focus();
  }
});

// Close popup
const closePopup = () => {
  popup.classList.remove("show");
  setTimeout(() => overlay.style.display = "none", 200);
};
document.querySelector(".close-btn").addEventListener("click", closePopup);
overlay.addEventListener("click", e => { if (e.target === overlay) closePopup(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closePopup(); });

// Form submit
bookingForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("✅ Appointment booked successfully!");
  closePopup();
  bookingForm.reset();
});
