// Конфигурация экскурсии
// ЗДЕСЬ ВАМ НУЖНО НАСТРОИТЬ СВОИ ПАНОРАМЫ И ТОЧКИ!
const tourConfig = {
    // Список всех панорам
    scenes: {
        // Вход/вестибюль
        entrance: {
            id: 'entrance',
            title: 'Вход в школу',
            description: 'Главный вход и вестибюль школы. Здесь находится пост охраны и стенд с расписанием.',
            details: '1 этаж | Режим работы: 7:00 - 22:00',
            image: 'panoramas/entrance.jpg',
            // Точки перехода (стрелки)
            hotSpots: [
                {
                    pitch: -10,    // Угол по вертикали (-90 вниз, 90 вверх)
                    yaw: 10,       // Угол по горизонтали (0 прямо, 90 направо и т.д.)
                    sceneId: 'entrance2',
                    text: 'В коридор 1 этажа',
                    type: 'scene'
                },
            ]
        },
        
        // Коридор 1 этажа
        entrance2: {
            id: 'entrance2',
            title: 'Коридор 1 этажа',
            description: 'Главный коридор первого этажа. Здесь расположены кабинеты начальных классов.',
            details: '1 этаж | Кабинеты 101-108',
            image: 'panoramas/entrance2.jpg',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 110,
                    sceneId: 'entrance',
                    text: 'Назад к входу',
                    type: 'scene'
                },
                {
                    pitch: -5,
                    yaw: 240,
                    sceneId: 'secondfloorleft',
                    text: 'Подняться по лестнице',
                    type: 'scene'
                },
                {
                    pitch: -5,
                    yaw: -30,
                    sceneId: 'secondfloorright',
                    text: 'Подняться по лестнице',
                    type: 'scene'
                },
                {
                    pitch: -5,
                    yaw: -70,
                    sceneId: 'firstfloor1',
                    text: 'пройти дальше',
                    type: 'scene'
                }
                
            ]
        },

        firstfloor1: {
            id: 'firstfloor1',
            title: 'Развилка на первом этаже',
            description: 'Кабинет математики. Класс оборудован интерактивной доской и современными партами.',
            details: '',
            image: 'panoramas/firstfloor1.jpg',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 180,
                    sceneId: 'firstfloorleft1',
                    text: 'Пройти налево',
                    type: 'scene'
                },
		        {
                    pitch: -10,
                    yaw: 0,
                    sceneId: 'firstfloorright1',
                    text: 'Пройти направо',
                    type: 'scene'
                },
                {
                    pitch: -10,
                    yaw: 90,
                    sceneId: 'entrance2',
                    text: 'Вернуться ко входу',
                    type: 'scene'
                }
            ]
        },

        firstfloorleft1: {
            id: 'firstfloorleft1',
            title: 'Развилка на первом этаже',
            description: 'Кабинет математики. Класс оборудован интерактивной доской и современными партами.',
            details: '',
            image: 'panoramas/firstfloorleft1.jpg',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 180,
                    sceneId: 'firstfloorleft2',
                    text: 'Пройти дальше',
                    type: 'scene'
                },
		        {
                    pitch: -10,
                    yaw: 0,
                    sceneId: 'firstfloor1',
                    text: 'Вернуться назад',
                    type: 'scene'
                },
            ]
        },

        firstfloorleft2: {
            id: 'firstfloorleft2',
            title: 'Развилка на первом этаже',
            description: 'Кабинет математики. Класс оборудован интерактивной доской и современными партами.',
            details: '',
            image: 'panoramas/firstfloorleft2.jpg',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 0,
                    sceneId: 'firstfloorleft1',
                    text: 'Вернуться',
                    type: 'scene'
                }
            ]
        },


        firstfloorright1: {
            id: 'firstfloorright1',
            title: 'Развилка на первом этаже',
            description: 'Кабинет математики. Класс оборудован интерактивной доской и современными партами.',
            details: '',
            image: 'panoramas/firstfloorright1.jpg',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 90,
                    sceneId: 'firstfloorright2',
                    text: 'Пройти к столовой',
                    type: 'scene'
                },
		        {
                    pitch: -10,
                    yaw: -90,
                    sceneId: 'firstfloor1',
                    text: 'Вернуться обратно',
                    type: 'scene'
                }
            ]
        },

        firstfloorright2: {
            id: 'firstfloorright1',
            title: 'Развилка на первом этаже',
            description: 'Кабинет математики. Класс оборудован интерактивной доской и современными партами.',
            details: '',
            image: 'panoramas/firstfloorright2.jpg',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 185,
                    sceneId: 'firstfloorright1',
                    text: 'Пройти к столовой',
                    type: 'scene'
                }
            ]
        },
        
        // Кабинет 101
        secondfloorleft: {
            id: '2floorleft',
            title: 'Кабинет 101 - Математика',
            description: 'Кабинет математики. Класс оборудован интерактивной доской и современными партами.',
            details: '1 этаж | Учитель: Петрова М.И. | Вместимость: 25 человек',
            image: 'panoramas/2floorleft.jpg',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: -85,
                    sceneId: 'secondfloorleft1',
                    text: 'Пройти в коридор',
                    type: 'scene'
                },
		        {
                    pitch: -40,
                    yaw: 185,
                    sceneId: 'entrance2',
                    text: 'Выйти ко входу',
                    type: 'scene'
                },
                {
                    pitch: -10,
                    yaw: 95,
                    sceneId: 'secondfloor1',
                    text: 'Пройти направо',
                    type: 'scene'
                }
            ]
        },
        
        // Столовая
        secondfloorright: {
            id: 'secondfloorright',
            title: 'Школьная столовая',
            description: 'Просторная столовая с уютным дизайном. Есть горячее питание и буфет.',
            details: '1 этаж | Часы работы: 8:00 - 18:00',
            image: 'panoramas/2floorright.jpg',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 85,
                    sceneId: 'secondfloorright1',
                    text: 'Пройти в коридор',
                    type: 'scene'
                },
		{
                    pitch: -40,
                    yaw: 180,
                    sceneId: 'entrance2',
                    text: 'Выйти ко входу',
                    type: 'scene'
                }
            ]
        },
        
        // Спортзал
        joycab: {
            id: 'joycab',
            title: 'Спортивный зал',
            description: 'Большой спортивный зал для занятий физкультурой и спортивных секций.',
            details: '2 этаж | Площадь: 250 кв.м. | Оборудование: шведские стенки, маты, мячи',
            image: 'panoramas/joycab.jpg',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 105,
                    sceneId: 'secondfloorleft',
                    text: 'В коридор',
                    type: 'scene'
                }
            ]
        }

        
    },
    
    // Порядок для навигации (предыдущая/следующая)
    navigationOrder: ['entrance', 'entrance2', 'secondfloorleft', 'secondfloorright', 'joycab']
};

// Текущая сцена
let currentSceneId = 'entrance';
let viewer = null;

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initTour();
    initUI();
});

// Инициализация тура
function initTour() {
    const scene = tourConfig.scenes[currentSceneId];
    
    // Создаем конфигурацию для Pannellum
    const config = {
        type: 'equirectangular',
        panorama: scene.image,
        autoLoad: true,
        compass: true,
        showControls: true,
        hotSpots: []
    };
    
    // Добавляем хотспоты из конфига
    scene.hotSpots.forEach(spot => {
        config.hotSpots.push({
            pitch: spot.pitch,
            yaw: spot.yaw,
            text: spot.text,
            type: spot.type,
            sceneId: spot.sceneId,
            clickHandlerFunc: function() {
                loadScene(spot.sceneId);
            }
        });
    });
    
    // Создаем просмотрщик
    viewer = pannellum.viewer('panorama', config);
    
    // Обновляем интерфейс
    updateUI();
}

// Загрузка другой сцены
function loadScene(sceneId) {
    if (!tourConfig.scenes[sceneId]) {
        console.error('Сцена не найдена:', sceneId);
        return;
    }
    
    currentSceneId = sceneId;
    const scene = tourConfig.scenes[sceneId];
    
    // Обновляем панораму
    viewer.destroy();
    
    const config = {
        type: 'equirectangular',
        panorama: scene.image,
        autoLoad: true,
        hotSpots: []
    };
    
    scene.hotSpots.forEach(spot => {
        config.hotSpots.push({
            pitch: spot.pitch,
            yaw: spot.yaw,
            text: spot.text,
            type: spot.type,
            sceneId: spot.sceneId,
            clickHandlerFunc: function() {
                loadScene(spot.sceneId);
            }
        });
    });
    
    viewer = pannellum.viewer('panorama', config);
    
    // Обновляем интерфейс
    updateUI();
    
    // Обновляем положение на карте
    updateMapCurrentPosition(sceneId);
}

// Обновление интерфейса
function updateUI() {
    const scene = tourConfig.scenes[currentSceneId];
    
    // Обновляем название
    document.getElementById('location-name').textContent = scene.title;
    
    // Обновляем описание
    document.getElementById('room-description').textContent = scene.description;
    document.getElementById('room-details').textContent = scene.details;
    
    // Обновляем кнопки навигации
    const currentIndex = tourConfig.navigationOrder.indexOf(currentSceneId);
    
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    
    if (currentIndex > 0) {
        prevBtn.disabled = false;
        prevBtn.onclick = () => loadScene(tourConfig.navigationOrder[currentIndex - 1]);
    } else {
        prevBtn.disabled = true;
    }
    
    if (currentIndex < tourConfig.navigationOrder.length - 1) {
        nextBtn.disabled = false;
        nextBtn.onclick = () => loadScene(tourConfig.navigationOrder[currentIndex + 1]);
    } else {
        nextBtn.disabled = true;
    }
    
    document.getElementById('btn-home').onclick = () => loadScene('entrance');
}

// Инициализация пользовательского интерфейса
function initUI() {
    // Кнопка сворачивания карты
    document.getElementById('toggle-map').addEventListener('click', function() {
        document.getElementById('map-container').classList.toggle('collapsed');
    });
    
    // Кнопка информации
    document.getElementById('info-toggle').addEventListener('click', function() {
        document.getElementById('info-content').classList.toggle('hidden');
    });
    
    // Добавляем кликабельные области на карту
    createMapHotspots();
}

// Создание кликабельных областей на карте
function createMapHotspots() {
    const mapElement = document.getElementById('map-hotspots');
    
    // Здесь вам нужно настроить координаты для вашей схемы школы
    // Каждая area - это кликабельная область на карте
    const hotspots = [
        { sceneId: 'entrance', shape: 'circle', coords: '150,100,10' },
        { sceneId: 'corridor1', shape: 'rect', coords: '120,150,180,170' },
        { sceneId: 'classroom101', shape: 'rect', coords: '90,200,130,220' },
        { sceneId: 'canteen', shape: 'rect', coords: '200,200,240,220' },
        { sceneId: 'gym', shape: 'rect', coords: '150,250,190,270' }
    ];
    
    hotspots.forEach(spot => {
        const area = document.createElement('area');
        area.shape = spot.shape;
        area.coords = spot.coords;
        area.alt = tourConfig.scenes[spot.sceneId].title;
        area.title = tourConfig.scenes[spot.sceneId].title;
        area.onclick = (e) => {
            e.preventDefault();
            loadScene(spot.sceneId);
        };
        mapElement.appendChild(area);
    });
}

// Обновление текущего положения на карте
function updateMapCurrentPosition(sceneId) {
    // Здесь можно добавить подсветку текущей точки на карте
    console.log('Текущая позиция:', sceneId);
}