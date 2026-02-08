const API = "https://andrew248919.pythonanywhere.com"; // ОБЯЗАТЕЛЬНО замени

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
        usersList.style.display = "none";

        let loaded = false;

        title.addEventListener("click", async () => {
            if (!loaded) {
                console.log("fetch:", event.name);

                const response = await fetch(
                    `${API}/event/users?name=${encodeURIComponent(event.name)}`
                );

                const users = await response.json();

                usersList.innerHTML = "";

                users.forEach(u => {
                    const liUser = document.createElement("li");
                    liUser.className = `user ${u.status}`;
                    liUser.textContent = u.name;
                    usersList.appendChild(liUser);
                });

                loaded = true;
            }

            usersList.style.display =
                usersList.style.display === "none" ? "block" : "none";
        });

        li.appendChild(title);
        li.appendChild(usersList);
        list.appendChild(li);
    });
}

window.addEventListener("load", loadEvents);
