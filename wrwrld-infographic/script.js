const API = "https://andrew248919.pythonanywhere.com";

/* ====== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====== */

function animateNumber(id, value) {
    const el = document.getElementById(id);
    let start = 0;
    const isPercent = typeof value === "string";
    const end = parseInt(value, 10);

    const timer = setInterval(() => {
        start++;
        el.textContent = isPercent ? start + "%" : start;
        if (start >= end) {
            el.textContent = value;
            clearInterval(timer);
        }
    }, 20);
}

function drawChart(id, value, max) {
    new Chart(document.getElementById(id), {
        type: "doughnut",
        data: {
            datasets: [{
                data: [value, max - value],
                backgroundColor: ["#4CAF50", "#eaeaea"],
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

/* ====== ОСНОВНАЯ ЛОГИКА ====== */

async function loadStatsAndEvents() {
    const stats = await fetch("/stats").then(r => r.json());
    const events = await fetch("/events").then(r => r.json());

    animateNumber("usersValue", stats.users);
    animateNumber("eventsValue", stats.events);
    animateNumber("attendanceValue", stats.percent + "%");

    drawChart("usersChart", stats.users, stats.users + 5);
    drawChart("eventsChart", stats.events, stats.events + 5);
    drawChart("attendanceChart", stats.percent, 100);

    renderEvents(events);
}

/* ====== СПИСОК МЕРОПРИЯТИЙ ====== */

function renderEvents(events) {
    const container = document.getElementById("eventsList");
    container.innerHTML = "";

    events.forEach(event => {
        const item = document.createElement("div");
        item.className = "event-item";
        item.textContent = event.name;

        item.onclick = () => toggleUsers(item, event.name);

        container.appendChild(item);
    });
}

async function toggleUsers(parent, eventName) {
    if (parent.nextSibling?.classList?.contains("users")) {
        parent.nextSibling.remove();
        return;
    }

    const users = await fetch(
        `/event/users?name=${encodeURIComponent(eventName)}`
    ).then(r => r.json());

    const box = document.createElement("div");
    box.className = "users";

    users.forEach(u => {
        const row = document.createElement("div");
        row.className = u.status === 1 ? "user ok" : "user no";
        row.textContent = `${u.name} ${u.surname}`;
        box.appendChild(row);
    });

    parent.after(box);
}


async function loadStatsAndEvents() {
    const eventsRes = await fetch(`${API}/events`);
    const events = await eventsRes.json();

    // ===== 1. КОЛ-ВО МЕРОПРИЯТИЙ =====
    const eventsCount = events.length;
    animateNumber("eventsValue", eventsCount);
    drawChart("eventsChart", eventsCount, eventsCount + 1);

    // ===== 2. СЧИТАЕМ ПОСЕЩАЕМОСТЬ И ПОЛЬЗОВАТЕЛЕЙ =====
    let came = 0;
    let promised = 0;
    const usersSet = new Set();

    for (const event of events) {
        const res = await fetch(
            `${API}/event/users?name=${encodeURIComponent(event.name)}`
        );
        const users = await res.json();

        users.forEach(u => {
            usersSet.add(u.name);
            if (u.status === "present") came++;
            else promised++;
        });
    }

    const totalUsers = usersSet.size;
    const percent = came + promised
        ? Math.round((came / (came + promised)) * 100)
        : 0;

    animateNumber("usersValue", totalUsers);
    animateNumber("attendanceValue", percent + "%");

    drawChart("usersChart", totalUsers, totalUsers + 1);
    drawChart("attendanceChart", percent, 100);

    // ===== 3. СПИСОК МЕРОПРИЯТИЙ =====
    renderEvents(events);
}

function renderEvents(events) {
    const list = document.getElementById("eventsList");
    list.innerHTML = "";

    events.forEach(event => {
        const li = document.createElement("li");
        li.className = "event-item";

        const title = document.createElement("div");
        title.className = "event-title";
        title.textContent = event.name;

        const usersList = document.createElement("ul");
        usersList.className = "users-list hidden";

        title.addEventListener("click", async () => {
            if (!usersList.hasChildNodes()) {
                const res = await fetch(
                    `${API}/event/users?name=${encodeURIComponent(event.name)}`
                );
                const users = await res.json();

                users.forEach(u => {
                    const uLi = document.createElement("li");
                    uLi.className = `user ${u.status}`;
                    uLi.textContent = u.name;
                    usersList.appendChild(uLi);
                });
            }

            usersList.classList.toggle("hidden");
        });

        li.appendChild(title);
        li.appendChild(usersList);
        list.appendChild(li);
    });
}

// ===== раскрытие списка по клику на статистику =====
document.getElementById("eventsStat").addEventListener("click", () => {
    document.getElementById("eventsSection").classList.toggle("hidden");
});

window.addEventListener("load", loadStatsAndEvents);

