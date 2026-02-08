const API = "https://andrew248919.pythonanywhere.com";

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
