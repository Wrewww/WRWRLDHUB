document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    const authTabs = document.querySelectorAll('.auth-tabs .tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    
    if (authTabs.length && authForms.length) {
        authTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                authTabs.forEach(t => t.classList.remove('active'));
                authForms.forEach(f => f.classList.remove('active'));
                
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    

    const profileTabs = document.querySelectorAll('.profile-courses .tab-btn');
    const profileTabContents = document.querySelectorAll('.profile-courses .tab-content');
    
    if (profileTabs.length && profileTabContents.length) {
        profileTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                profileTabs.forEach(t => t.classList.remove('active'));
                profileTabContents.forEach(c => c.classList.remove('active'));
                
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

const applyFiltersBtn = document.getElementById('apply-filters');
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            const categoryFilter = document.getElementById('category-filter').value;
            const priceFilter = document.getElementById('price-filter').value;
            const courseCards = document.querySelectorAll('.course-card');
            
            courseCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category') || 'all';
                const cardScience = card.getAttribute('data-science') || 'all';
                const cardPrice = card.querySelector('.price').textContent.toLowerCase();
                
                // Проверяем совпадение по категории (если выбрана)
                const categoryMatch = categoryFilter === 'all' || cardCategory === categoryFilter;
                // Проверяем совпадение по типу науки
                const scienceMatch = cardScience === 'all' || 
                                   (categoryFilter === 'social' && cardScience === 'social') ||
                                   (categoryFilter === 'technical' && cardScience === 'technical');
                // Проверяем совпадение по цене
                const priceMatch = priceFilter === 'all' || 
                                 (priceFilter === 'free' && cardPrice.includes('бесплатно')) || 
                                 (priceFilter === 'paid' && !cardPrice.includes('бесплатно'));
                
                // Показываем карточку только если все условия совпадают
                if (categoryMatch && scienceMatch && priceMatch) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }


    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Вход выполнен успешно! Перенаправляем в личный кабинет.');
            window.location.href = 'profile.html';
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('reg-confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Пароли не совпадают!');
                return;
            }
            
            alert('Регистрация прошла успешно! Теперь вы можете войти в систему.');
            document.querySelector('.tab-btn[data-tab="login"]').click();
        });
    }

    const likeBtns = document.querySelectorAll('.like-btn');
    
    likeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            let likes = parseInt(this.textContent.match(/\d+/) || 0);
            this.textContent = `👍 ${likes + 1}`;
        });
    });
    // Функционал смены ФИО в личном кабинете
    const profileName = document.querySelector('.profile-name');
    const editNameBtn = document.getElementById('edit-name-btn');
    const nameForm = document.getElementById('name-form');
    const saveNameBtn = document.getElementById('save-name-btn');
    const cancelNameBtn = document.getElementById('cancel-name-btn');
    
    if (editNameBtn && nameForm) {
        // Показываем форму редактирования
        editNameBtn.addEventListener('click', function() {
            // Заполняем форму текущими значениями
            const currentName = profileName.textContent.trim().split(' ');
            document.getElementById('last-name').value = currentName[0] || '';
            document.getElementById('first-name').value = currentName[1] || '';
            document.getElementById('middle-name').value = currentName[2] || '';
            
            // Показываем форму и скрываем кнопку редактирования
            nameForm.style.display = 'block';
            editNameBtn.style.display = 'none';
        });
        
        // Сохраняем изменения
        saveNameBtn.addEventListener('click', function() {
            const lastName = document.getElementById('last-name').value.trim();
            const firstName = document.getElementById('first-name').value.trim();
            const middleName = document.getElementById('middle-name').value.trim();
            
            if (!lastName || !firstName) {
                alert('Пожалуйста, заполните обязательные поля (Фамилия и Имя)');
                return;
            }
            
            // Формируем новое ФИО
            let newName = lastName + ' ' + firstName;
            if (middleName) {
                newName += ' ' + middleName;
            }
            
            // Обновляем отображение имени
            profileName.textContent = newName;
            
            // Здесь можно добавить AJAX-запрос для сохранения на сервере
            
            // Скрываем форму и показываем кнопку редактирования
            nameForm.style.display = 'none';
            editNameBtn.style.display = 'inline-block';
            
            alert('ФИО успешно изменено!');
        });
        
        // Отмена редактирования
        cancelNameBtn.addEventListener('click', function() {
            nameForm.style.display = 'none';
            editNameBtn.style.display = 'inline-block';
        });
    }

    const commentBtns = document.querySelectorAll('.comment-btn');
    
    commentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const commentsSection = this.closest('.blog-actions').nextElementSibling;
            
            if (commentsSection && commentsSection.classList.contains('comments-section')) {
                commentsSection.classList.toggle('hidden');
                
                if (commentsSection.classList.contains('hidden')) {
                    this.textContent = this.textContent.replace('Скрыть', 'Комментировать');
                } else {
                    this.textContent = this.textContent.replace('Комментировать', 'Скрыть');
                }
            }
        });
    });

    // Обработка отправки комментариев
    document.querySelectorAll('.comment-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const textarea = this.querySelector('textarea');
            const commentText = textarea.value.trim();
            
            if (commentText) {
                // Создаем новый комментарий
                const commentDiv = document.createElement('div');
                commentDiv.className = 'comment';
                
                // Используем текущую дату и время
                const now = new Date();
                const timestamp = now.toLocaleString();
                
                // Можно добавить имя пользователя (здесь используем "Аноним")
                const username = "Вы"; // Можно заменить на реальное имя пользователя
                
                commentDiv.innerHTML = `
                    <p><strong>${username}:</strong> ${commentText}</p>
                    <small>${timestamp}</small>
                `;
                
                // Добавляем комментарий в начало списка
                const commentsContainer = this.closest('.comments-section').querySelector('.comments-container') || 
                                         this.closest('.comments-section');
                commentsContainer.insertBefore(commentDiv, commentsContainer.firstChild);
                
                // Очищаем поле ввода
                textarea.value = '';
                
                // Сохраняем комментарий в localStorage
                saveCommentToStorage(this.closest('.blog-post').id, username, commentText, timestamp);
            }
        });
    });

    // Загружаем сохраненные комментарии при загрузке страницы
    loadSavedComments();

    function saveCommentToStorage(postId, username, text, timestamp) {
        // Получаем текущие комментарии из localStorage
        const comments = JSON.parse(localStorage.getItem('blogComments')) || {};
        
        // Если для этого поста еще нет комментариев, создаем массив
        if (!comments[postId]) {
            comments[postId] = [];
        }
        
        // Добавляем новый комментарий
        comments[postId].unshift({
            username: username,
            text: text,
            timestamp: timestamp
        });
        
        // Сохраняем обратно в localStorage
        localStorage.setItem('blogComments', JSON.stringify(comments));
    }

    function loadSavedComments() {
        const comments = JSON.parse(localStorage.getItem('blogComments')) || {};
        
        // Для каждого поста в блоге
        document.querySelectorAll('.blog-post').forEach(post => {
            const postId = post.id;
            if (comments[postId]) {
                const commentsContainer = post.querySelector('.comments-container') || 
                                         post.querySelector('.comments-section');
                
                // Добавляем каждый сохраненный комментарий
                comments[postId].forEach(comment => {
                    const commentDiv = document.createElement('div');
                    commentDiv.className = 'comment';
                    commentDiv.innerHTML = `
                        <p><strong>${comment.username}:</strong> ${comment.text}</p>
                        <small>${comment.timestamp}</small>
                    `;
                    commentsContainer.appendChild(commentDiv);
                });
            }
        });
    }

});