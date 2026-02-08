const API_URL = "https://andrew248919.pythonanywhere.com/stats";

window.addEventListener("load", async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Не удалось загрузить /stats");
        }

        const data = await response.json();

        const users = data.users;
        const events = data.events;
        const percent = Math.round(data.attendance_percent);

        animateNumber("usersValue", users);
        animateNumber("eventsValue", events);
        animateNumber("attendanceValue", percent + "%");

        drawChart("usersChart", users, users + 5);
        drawChart("eventsChart", events, events + 5);
        drawChart("attendanceChart", percent, 100);

    } catch (e) {
        console.error("Ошибка загрузки статистики:", e);
    }
});

function drawChart(id, value, max) {
    const el = document.getElementById(id);
    if (!el) return;

    new Chart(el, {
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
            animation: {
                animateRotate: true,
                duration: 1200
            },
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            }
        }
    });
}

function animateNumber(id, value) {
    const el = document.getElementById(id);
    if (!el) return;

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
const API = "https://andrew248919.pythonanywhere.com";

async function loadEvents() {
    const res = await fetch(`${API}/events`);
    const events = await res.json();

    const list = document.getElementById("eventsList");
    list.innerHTML = "";

    events.forEach(event => {
        const li = document.createElement("li");
        li.className = "event-item";

        const title = document.createElement("div");
        title.className = "event-title";
        title.textContent = event.name;

        const usersList = document.createElement("ul");
        usersList.className = "users-list";

        let loaded = false;

        li.addEventListener("click", async () => {
            if (!loaded) {
                const r = await fetch(
                    `${API}/event/users?name=${encodeURIComponent(event.name)}`
                );
                const users = await r.json();

                usersList.innerHTML = "";

                users.forEach(u => {
                    const uLi = document.createElement("li");
                    uLi.className = `user ${u.status}`;
                    uLi.textContent = u.name;
                    usersList.appendChild(uLi);
                });

                loaded = true;
            }

            usersList.style.display =
                usersList.style.display === "none" || !usersList.style.display
                    ? "block"
                    : "none";
        });

        li.appendChild(title);
        li.appendChild(usersList);
        list.appendChild(li);
    });
}

window.addEventListener("load", loadEvents);
