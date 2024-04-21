
document.addEventListener('DOMContentLoaded', function () {

    // статистика текущего сезона
    const statistics2024 = [
        // Номер, фамилия, матчей, голов забито, ассистов, матчей на 0, голов пропущено
        { number: "1", name: "Исаев", matches: "4", goals: "0", assist: "0", zeromatch: "0", lostgoals: "11", team: "proand8x8" },
        { number: "3", name: "Фирдавс", matches: "6", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "4", name: "Малышев", matches: "0", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "8x8" },
        { number: "5", name: "Волокитин", matches: "2", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "8x8" },
        { number: "6", name: "Касулин", matches: "3", goals: "1", assist: "0", zeromatch: "0", lostgoals: "0", team: "8x8" },
        { number: "7", name: "Тапчан", matches: "6", goals: "0", assist: "3", zeromatch: "0", lostgoals: "0", team: "8x8" },
        { number: "8", name: "Швамбергер", matches: "0", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "proand8x8" },
        { number: "9", name: "Белоножкин", matches: "12", goals: "2", assist: "2", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "10", name: "Костич", matches: "11", goals: "8", assist: "3", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "12", name: "Шаропов", matches: "3", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "14", name: "Голуб", matches: "4", goals: "8", assist: "3", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "17", name: "Петрищев", matches: "5", goals: "0", assist: "2", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "18", name: "Губский", matches: "0", goals: "0", assist: "2", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "19", name: "Агатов", matches: "0", goals: "0", assist: "2", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "20", name: "Власов", matches: "9", goals: "1", assist: "2", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "22", name: "Макарчев", matches: "6", goals: "3", assist: "1", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "23", name: "Аракелян", matches: "1", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "24", name: "Лешанков", matches: "0", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "25", name: "Грумынский", matches: "0", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "26", name: "Голованов", matches: "0", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "28", name: "Ларин", matches: "0", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "30", name: "Салимгареев", matches: "2", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },       
        { number: "31", name: "Дудочкин", matches: "1", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "8x8" },
        { number: "32", name: "Волконский", matches: "7", goals: "3", assist: "3", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "33", name: "Пашаев", matches: "3", goals: "1", assist: "1", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "35", name: "Сыпченко", matches: "1", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "37", name: "Шеин", matches: "10", goals: "3", assist: "4", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "41", name: "Синицын", matches: "8", goals: "0", assist: "2", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "47", name: "Языков", matches: "9", goals: "18", assist: "6", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "52", name: "Савельев", matches: "7", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "55", name: "Нестор", matches: "0", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "63", name: "Скворцов", matches: "7", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "64", name: "Беров", matches: "0", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "66", name: "Королев", matches: "5", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "69", name: "Долгов", matches: "2", goals: "1", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "72", name: "Абянов", matches: "1", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "72", name: "Абянов", matches: "0", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "74", name: "Котов", matches: "2", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "75", name: "Матвеев", matches: "7", goals: "1", assist: "1", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "77", name: "Иванов", matches: "2", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "81", name: "Мытько", matches: "5", goals: "0", assist: "0", zeromatch: "0", lostgoals: "24", team: "pro" },
        { number: "86", name: "Гусев", matches: "0", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "89", name: "Пожидаев", matches: "1", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "90", name: "Юсуф", matches: "1", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "99", name: "Батуев", matches: "2", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        // Добавьте остальных игроков
    ];


    // Статистика за все время 
    const statisticsall = [
        // Номер, фамилия, матчей, голов забито, ассистов, матчей на 0, голов пропущено

        { number: "1", name: "Исаев", matches: "83", goals: "0", assist: "1", zeromatch: "9", lostgoals: "216", team: "proand8x8" },
        { number: "3", name: "Фирдавс", matches: "6", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "4", name: "Малышев", matches: "19", goals: "1", assist: "5", zeromatch: "0", lostgoals: "0", team: "8x8" },
        { number: "5", name: "Волокитин", matches: "60", goals: "24", assist: "13", zeromatch: "0", lostgoals: "0", team: "8x8" },
        { number: "6", name: "Касулин", matches: "3", goals: "1", assist: "0", zeromatch: "0", lostgoals: "0", team: "8x8" },
        { number: "7", name: "Тапчан", matches: "291", goals: "164", assist: "45", zeromatch: "0", lostgoals: "0", team: "8x8" },
        { number: "8", name: "Швамбергер", matches: "6", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "proand8x8" },
        { number: "9", name: "Белоножкин", matches: "463", goals: "152", assist: "96", zeromatch: "0", lostgoals: "0", team: "proand8x8" },
        { number: "10", name: "Костич", matches: "40", goals: "13", assist: "3", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "12", name: "Шаропов", matches: "3", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "14", name: "Голуб", matches: "20", goals: "21", assist: "14", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "17", name: "Петрищев", matches: "29", goals: "1", assist: "4", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "18", name: "Губский", matches: "235", goals: "124", assist: "19", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "19", name: "Агатов", matches: "14", goals: "1", assist: "8", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "20", name: "Власов", matches: "221", goals: "18", assist: "6", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "22", name: "Макарчев", matches: "55", goals: "47", assist: "24", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "23", name: "Аракелян", matches: "1", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "24", name: "Лешанков", matches: "90", goals: "8", assist: "9", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "25", name: "Грумынский", matches: "8", goals: "0", assist: "3", zeromatch: "2", lostgoals: "0", team: "pro" },
        { number: "26", name: "Голованов", matches: "32", goals: "0", assist: "3", zeromatch: "2", lostgoals: "123", team: "pro" },
        { number: "28", name: "Ларин", matches: "25", goals: "0", assist: "0", zeromatch: "4", lostgoals: "52", team: "pro" },
        { number: "30", name: "Салимгареев", matches: "22", goals: "0", assist: "2", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "31", name: "Дудочкин", matches: "1", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "8x8" },
        { number: "32", name: "Волконский", matches: "26", goals: "5", assist: "4", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "33", name: "Пашаев", matches: "13", goals: "4", assist: "2", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "35", name: "Сыпченко", matches: "1", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "37", name: "Шеин", matches: "145", goals: "31", assist: "36", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "41", name: "Синицын", matches: "25", goals: "0", assist: "2", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "47", name: "Языков", matches: "173", goals: "304", assist: "121", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "52", name: "Савельев", matches: "7", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "55", name: "Нестор", matches: "37", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "63", name: "Скворцов", matches: "90", goals: "2", assist: "9", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "64", name: "Беров", matches: "39", goals: "39", assist: "3", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "66", name: "Королев", matches: "5", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "69", name: "Долгов", matches: "65", goals: "14", assist: "10", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "72", name: "Абянов", matches: "5", goals: "4", assist: "1", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "74", name: "Котов", matches: "14", goals: "1", assist: "1", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "75", name: "Матвеев", matches: "7", goals: "1", assist: "1", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "77", name: "Иванов", matches: "2", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "81", name: "Мытько", matches: "14", goals: "0", assist: "0", zeromatch: "0", lostgoals: "62", team: "pro" },
        { number: "86", name: "Гусев", matches: "10", goals: "0", assist: "1", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "89", name: "Пожидаев", matches: "1", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "90", name: "Юсуф", matches: "17", goals: "1", assist: "3", zeromatch: "0", lostgoals: "0", team: "pro" },
        { number: "99", name: "Батуев", matches: "2", goals: "0", assist: "0", zeromatch: "0", lostgoals: "0", team: "pro" },
        // Добавьте остальных игроков
    ];

    // АРХИВ

    const statisticsarchive = [

    ];

    // Получаем элемент с номером игрока
    const playerNumber = document.querySelector('.number').textContent;

    // Получаем элементы статистики за все время и за текущий сезон
    const statisticplayersall = document.querySelector('.statisticplayersall');
    const statisticthisyears = document.querySelector('.statisticthisyears');

    // Находим соответствующего игрока в статистике за все время
    const playerStatsAll = statisticsall.find(playerStat => playerStat.number === playerNumber);

    // Находим соответствующего игрока в статистике текущего сезона
    const playerStatsThisYear = statistics2024.find(playerStat => playerStat.number === playerNumber);

    // Функция для форматирования чисел с округлением до двух знаков после запятой
    const formatNumber = (number) => {
        return Math.round(number * 100) / 100;
    };

    // Если статистика за все время найдена
    if (playerStatsAll) {
        // Передаем данные в соответствующие блоки
        statisticplayersall.querySelector('.matchesall').textContent = playerStatsAll.matches;
        statisticplayersall.querySelector('.goalall').textContent = playerStatsAll.goals;
        statisticplayersall.querySelector('.assistall').textContent = playerStatsAll.assist;
        statisticplayersall.querySelector('.zeromatchall').textContent = playerStatsAll.zeromatch !== "0" ? playerStatsAll.zeromatch : "0";
        statisticplayersall.querySelector('.goallostall').textContent = playerStatsAll.lostgoals !== "0" ? playerStatsAll.lostgoals : "0";

        // Вычисляем средние значения
        const goalAverageAll = formatNumber(playerStatsAll.goals / playerStatsAll.matches);
        const assistAverageAll = formatNumber(playerStatsAll.assist / playerStatsAll.matches);
        const assistGoalsAll = formatNumber(parseFloat(playerStatsAll.goals) + parseFloat(playerStatsAll.assist));

        // Проверяем, не является ли среднее значение `NaN`
        if (isNaN(goalAverageAll)) {
            goalAverageAll = 0;
        }
        if (isNaN(assistAverageAll)) {
            assistAverageAll = 0;
        }
        if (isNaN(assistGoalsAll)) {
            assistGoalsAll = 0;
        }

        // Передаем средние значения в соответствующие блоки
        statisticplayersall.querySelector('.goalallOnaverage').textContent = goalAverageAll;
        statisticplayersall.querySelector('.assistallOnaverage').textContent = assistAverageAll;
        statisticplayersall.querySelector('.assistgoalsall').textContent = assistGoalsAll;
    }

    // Если статистика текущего сезона найдена
    if (playerStatsThisYear) {
        // Передаем данные в соответствующие блоки
        statisticthisyears.querySelector('.matches').textContent = playerStatsThisYear.matches;
        statisticthisyears.querySelector('.goal').textContent = playerStatsThisYear.goals;
        statisticthisyears.querySelector('.assist').textContent = playerStatsThisYear.assist;
        statisticthisyears.querySelector('.zeromatch').textContent = playerStatsThisYear.zeromatch !== "0" ? playerStatsThisYear.zeromatch : "0";
        statisticthisyears.querySelector('.goallost').textContent = playerStatsThisYear.lostgoals !== "0" ? playerStatsThisYear.lostgoals : "0";


        // Вычисляем средние значения
        const goalAverageThisYear = formatNumber(playerStatsThisYear.goals / playerStatsThisYear.matches);
        const assistAverageThisYear = formatNumber(playerStatsThisYear.assist / playerStatsThisYear.matches);
        const assistGoalsThisYear = formatNumber(parseFloat(playerStatsThisYear.goals) + parseFloat(playerStatsThisYear.assist));

        // Проверяем, не является ли среднее значение `NaN`
        if (isNaN(goalAverageThisYear)) {
            goalAverageThisYear = 0;
        }
        if (isNaN(assistAverageThisYear)) {
            assistAverageThisYear = 0;
        }
        if (isNaN(assistGoalsThisYear)) {
            assistGoalsThisYear = 0;
        }

        // Передаем средние значения в соответствующие блоки
        statisticthisyears.querySelector('.goalOnaverage').textContent = goalAverageThisYear;
        statisticthisyears.querySelector('.assistOnaverage').textContent = assistAverageThisYear;
        statisticthisyears.querySelector('.assistgoals').textContent = assistGoalsThisYear;
    }

});