// Function to show the job posting form
function showJobForm() {
    document.getElementById("post-job-form").style.display = "block";
}

// Function to close the form
function closeForm() {
    document.getElementById("post-job-form").style.display = "none";
}

// Function to post a job
function postJob() {
    const jobTitle = document.getElementById("jobTitle").value;
    const companyName = document.getElementById("companyName").value;
    const location = document.getElementById("location").value;
    const salary = document.getElementById("salary").value;

    if (!jobTitle || !companyName || !location || !salary) {
        alert("Please fill all fields.");
        return;
    }

    // Create job listing
    const jobContainer = document.getElementById("jobs-container");
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");
    jobCard.innerHTML = `
        <h3>${jobTitle}</h3>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Salary:</strong> ${salary}</p>
        <button onclick="applyJob()">Apply Now</button>
    `;
    
    jobContainer.appendChild(jobCard);

    // Close form and reset fields
    closeForm();
    document.getElementById("jobTitle").value = "";
    document.getElementById("companyName").value = "";
    document.getElementById("location").value = "";
    document.getElementById("salary").value = "";
}

// Function to apply for a job
function applyJob() {
    alert("Application submitted successfully!");
}
