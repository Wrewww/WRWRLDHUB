/* ====== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====== */
const API = "https://andrew248919.pythonanywhere.com";

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

/* ====== СТАРТ ====== */

document.addEventListener("DOMContentLoaded", loadStatsAndEvents);
