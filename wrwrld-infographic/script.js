const API_BASE = "https://andrew248919.pythonanywhere.com";

/* ---------- INIT ---------- */
window.addEventListener("load", () => {
    loadStatsAndEvents();
    initEventsToggle();
});

/* ---------- LOAD STATS ---------- */
async function loadStatsAndEvents() {
    try {
        const statsRes = await fetch(`${API_BASE}/stats`);
        const stats = await statsRes.json();

        animateNumber("usersValue", stats.users);
        animateNumber("eventsValue", stats.events);
        animateNumber("attendanceValue", stats.attendance_percent + "%");

        drawChart("usersChart", stats.users, stats.users + 5);
        drawChart("eventsChart", stats.events, stats.events + 5);
        drawChart("attendanceChart", stats.attendance_percent, 100);

        loadEventsList();
    } catch (e) {
        console.error("Ошибка загрузки статистики:", e);
    }
}

/* ---------- EVENTS LIST ---------- */
async function loadEventsList() {
    const list = document.getElementById("eventsList");
    list.innerHTML = "";

    const res = await fetch(`${API_BASE}/events`);
    const events = await res.json();

    for (const event of events) {
        const li = document.createElement("li");
        li.className = "event-item";

        li.innerHTML = `
            <div class="event-title">${event.name}</div>
            <ul class="users-list"></ul>
        `;

        li.addEventListener("click", async () => {
            const usersList = li.querySelector(".users-list");

            if (usersList.style.display === "block") {
                usersList.style.display = "none";
                usersList.innerHTML = "";
                return;
            }

            usersList.style.display = "block";
            usersList.innerHTML = "<li>Загрузка...</li>";

            const usersRes = await fetch(
                `${API_BASE}/event/users?name=${encodeURIComponent(event.name)}`
            );
            const users = await usersRes.json();

            usersList.innerHTML = "";

            users.forEach(u => {
                const userLi = document.createElement("li");
                userLi.className = `user ${u.present ? "present" : "absent"}`;
                userLi.textContent = `${u.name} ${u.surname}`;
                usersList.appendChild(userLi);
            });

            if (users.length === 0) {
                usersList.innerHTML = "<li class='user absent'>Нет данных</li>";
            }
        });

        list.appendChild(li);
    }
}

/* ---------- TOGGLE EVENTS BLOCK ---------- */
function initEventsToggle() {
    const label = document.querySelector(".stat-label");
    const section = document.getElementById("eventsSection");

    label.addEventListener("click", () => {
        section.classList.toggle("hidden");
    });
}

/* ---------- CHART ---------- */
function drawChart(id, value, max) {
    new Chart(document.getElementById(id), {
        type: "doughnut",
        data: {
            datasets: [{
                data: [value, Math.max(0, max - value)],
                backgroundColor: ["#e10600", "#eaeaea"],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: "75%",
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            }
        }
    });
}

/* ---------- ANIMATION ---------- */
function animateNumber(id, value) {
    const el = document.getElementById(id);
    let start = 0;
    const isPercent = typeof value === "string";
    const end = parseInt(value);

    const timer = setInterval(() => {
        start++;
        el.textContent = isPercent ? start + "%" : start;
        if (start >= end) {
            el.textContent = value;
            clearInterval(timer);
        }
    }, 20);
}
