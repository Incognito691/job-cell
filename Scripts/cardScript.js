// Array of job titles, descriptions, and locations
const companyNames = [
  "ABC Tech Solutions",
  "Innovate Corp",
  "FutureSoft Inc.",
  "Creative Minds Ltd.",
  "NextGen Enterprises",
  "Global Insights",
  "Prime Solutions",
  "Vertex Technologies",
  "Eagle Eye Systems",
  "Synergy Partners",
  "Elite Innovations",
  "Skyline Enterprises",
  "Vanguard Solutions",
  "Pulse Tech",
  "NexGen Dynamics",
];

const jobTitles = [
  "Software Engineer",
  "Product Manager",
  "UI/UX Designer",
  "Data Scientist",
  "Marketing Specialist",
  "HR Manager",
  "Accountant",
  "Customer Support",
  "Project Manager",
  "DevOps Engineer",
  "Business Analyst",
  "Graphic Designer",
  "Sales Manager",
  "Content Writer",
  "QA Engineer",
];

const jobDescriptions = [
  "Join our team to develop innovative software solutions. Join our team to develop innovative software solutions.Join our team to develop innovative software solutions.Join our team to develop innovative software solutions.",
  "Lead the development of our next-generation products.",
  "Design user-friendly interfaces for our applications.",
  "Analyze data to drive business decisions.",
  "Create and execute marketing strategies.",
  "Manage recruitment and employee relations.",
  "Handle financial records and ensure accuracy.",
  "Assist customers with their inquiries.",
  "Oversee project planning and execution.",
  "Maintain and improve our IT infrastructure.",
  "Analyze business processes and improve efficiency.",
  "Create visual content for our brand.",
  "Drive sales and build customer relationships.",
  "Craft compelling content for our website.",
  "Test and ensure the quality of our products.",
];

const locations = [
  "Kathmandu",
  "Lalitpur",
  "Bhaktapur",
  "Pokhara",
  "Chitwan",
  "Butwal",
  "Biratnagar",
  "Dharan",
  "Janakpur",
  "Hetauda",
  "Nepalgunj",
  "Birgunj",
  "Dhangadhi",
  "Itahari",
  "Bharatpur",
];

// Get the container element
const cardsContainer = document.getElementById("cards");

// Function to create a job card HTML
function createJobCard(index) {
  return `
        <div class="card">
            <div class="companyInfo">
                <div class="companyLogo">Logo</div>
                <h3 class="companyName">${
                  companyNames[Math.floor(Math.random() * 14) + 1]
                }</h3>
            </div>
            <p class="title">${
              jobTitles[Math.floor(Math.random() * 14) + 1]
            }</p>
            <p class="description">${
              jobDescriptions[Math.floor(Math.random() * 14) + 1]
            }</p>
            <div class="infoSection">
                <div class="time">${
                  Math.floor(Math.random() * 60) + 1
                } days left</div>
                <div class="duration">${
                  index % 2 === 0 ? "Full Time" : "Part Time"
                }</div>
                <div class="location">${locations[Math.floor(Math.random() * 14) + 1]}</div>
            </div>
            <div class="apply">
                <button class="applybutton">Apply Now</button>
            </div>
        </div>
    `;
}

// Create and append all job cards using a for loop
for (let i = 0; i < 15; i++) {
  const jobCardHTML = createJobCard(i);
  cardsContainer.innerHTML += jobCardHTML;
}
