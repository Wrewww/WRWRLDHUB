let SQL; // ← ГЛОБАЛЬНО

window.addEventListener("load", async () => {
    try {
        SQL = await initSqlJs({
            locateFile: file =>
                `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
        });

        const usersDB = await loadDB("users.db");
        const eventsDB = await loadDB("events.db");
        const attendanceDB = await loadDB("attendance.db");

        const users = getValue(usersDB, "SELECT COUNT(*) FROM users");
        const events = getValue(eventsDB, "SELECT COUNT(*) FROM events");
        const visits = getValue(
            attendanceDB,
            "SELECT COUNT(*) FROM attendance WHERE attendance_status = 1"
        );

        const total = users * events;
        const percent = total ? Math.round((visits / total) * 100) : 0;

        animateNumber("usersValue", users);
        animateNumber("eventsValue", events);
        animateNumber("attendanceValue", percent + "%");

        drawChart("usersChart", users, users + 5);
        drawChart("eventsChart", events, events + 5);
        drawChart("attendanceChart", percent, 100);

    } catch (e) {
        console.error("Ошибка загрузки:", e);
    }
});

async function loadDB(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Не найден файл: ${path}`);
    }
    const buffer = await response.arrayBuffer();
    return new SQL.Database(new Uint8Array(buffer));
}

function getValue(db, sql) {
    return db.exec(sql)[0].values[0][0];
}

function drawChart(id, value, max) {
    new Chart(document.getElementById(id), {
        type: "doughnut",
        data: {
            datasets: [{
                data: [value, max - value],
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
