// Data for the charts
const activityData = [3000, 5000, 8000, 7000, 9000, 11000, 10000];
const sleepData = [8, 6.5, 7, 7.5, 8, 6, 7.8];
const heartRateData = [72, 75, 78, 80, 72, 74, 76];
const calorieData = [2500, 2300, 2200, 2100, 2400, 2500, 2600];
const macronutrientData = {
    labels: ['Carbs', 'Protein', 'Fat'],
    datasets: [{
        label: 'Macronutrient Breakdown',
        data: [60, 30, 10], // Example percentages
        backgroundColor: ['#f39c12', '#3498db', '#e74c3c']
    }]
};
// Activity Chart
const ctxActivity = document.getElementById('activityChart').getContext('2d');
const activityChart = new Chart(ctxActivity, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Steps',
            data: activityData,
            borderColor: '#2a9d8f',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        }
    }
});

// Sleep Chart
const ctxSleep = document.getElementById('sleepChart').getContext('2d');
const sleepChart = new Chart(ctxSleep, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Hours of Sleep',
            data: sleepData,
            borderColor: '#e76f51',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        }
    }
});
// Calorie Chart
const ctxCalorie = document.getElementById('calorieChart').getContext('2d');
const calorieChart = new Chart(ctxCalorie, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Calories Consumed',
            data: calorieData,
            backgroundColor: '#ff6384',
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        }
    }
});

// Macronutrient Breakdown Chart
const ctxMacronutrient = document.getElementById('macronutrientChart').getContext('2d');
const macronutrientChart = new Chart(ctxMacronutrient, {
    type: 'pie',
    data: macronutrientData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        }
    }
});


// Handle Sidebar Item Click to Show Corresponding Section
const sidebarItems = document.querySelectorAll('.sidebar ul li');
const sections = document.querySelectorAll('.section');

sidebarItems.forEach((item) => {
    item.addEventListener('click', () => {
        const targetSection = item.getAttribute('data-target');

        // Hide all sections
        sections.forEach((section) => {
            section.classList.remove('active');
        });

        // Show the clicked section
        const activeSection = document.getElementById(targetSection);
        activeSection.classList.add('active');
    });
});

// Set the default active section to 'Vitals'
document.querySelector('.vitals').classList.add('active');
// Update Blood Pressure
document.getElementById('updateBP').addEventListener('click', () => {
    const bpInput = document.getElementById('bpInput').value;
    const bpDisplay = document.getElementById('bloodPressure');
    
    if (bpInput) {
        bpDisplay.textContent = bpInput; // Update the displayed value
        alert('Blood pressure updated successfully!');
    } else {
        alert('Please enter a valid blood pressure value.');
    }
});
// Add Food Item to Food Log
document.getElementById('addFood').addEventListener('click', () => {
    const foodInput = document.getElementById('foodItem').value;
    const foodList = document.getElementById('foodList');
    
    if (foodInput) {
        const newFoodItem = document.createElement('li');
        newFoodItem.textContent = foodInput; // Add the food item to the list
        foodList.appendChild(newFoodItem);   // Append the new item to the list

        document.getElementById('foodItem').value = ''; // Clear the input
        alert('Food item added successfully!');
    } else {
        alert('Please enter a food item.');
    }
});
// Heart Rate Chart
const ctxHeartRate = document.getElementById('heartRateChart').getContext('2d');
const heartRateChart = new Chart(ctxHeartRate, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Heart Rate (BPM)',
            data: heartRateData,
            borderColor: '#ff6384',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});


