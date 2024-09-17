// Таблицы ацтекских знаков и чисел с расширенными описаниями на русском языке
const tonalpohualliSigns = [
    "Крокодил (Сипактли)", "Ветер (Экатль)", "Дом (Калли)", "Ящерица (Куэцпалин)", 
    "Змея (Коатль)", "Смерть (Микистли)", "Олень (Мазатль)", "Кролик (Точтли)", 
    "Вода (Атль)", "Собака (Ицкуинтли)", "Обезьяна (Оцоматли)", "Трава (Мальиналли)", 
    "Тростник (Акатль)", "Ягуар (Оцелотль)", "Орел (Куаутли)", "Гриф (Коскакуаутли)", 
    "Землетрясение (Олин)", "Кремень (Текпатль)", "Дождь (Киауитль)", "Цветок (Шочитль)"
];

const tonalpohualliNumbers = [...Array(13).keys()].map(n => n + 1);

// Описания знаков и чисел с добавлением деталей
const signDescriptions = {
    "Крокодил (Сипактли)": "Крокодил символизирует начало времени и сотворение мира. Это знак созидания и сильной энергии. Люди под этим знаком — первопроходцы, полные амбиций и устремлений.",
    "Ветер (Экатль)": "Ветер олицетворяет перемены, движение и вдохновение. Это знак коммуникации, интеллекта и стремления к знаниям. Те, кто родился под этим знаком, часто гибки, умны и любопытны.",
    "Дом (Калли)": "Дом символизирует безопасность, уют и стабильность. Этот знак связан с заботой о семье, домашнем очаге и традициях. Люди под этим знаком стремятся к стабильной жизни и построению прочных отношений.",
    "Ящерица (Куэцпалин)": "Ящерица символизирует выносливость и адаптацию. Этот знак связан с теми, кто умеет находить выход из сложных ситуаций и приспосабливаться к любым условиям.",
    "Змея (Коатль)": "Змея — символ мудрости, трансформации и силы. Люди под этим знаком проходят через большие жизненные изменения и становятся сильнее.",
    "Смерть (Микистли)": "Смерть олицетворяет конец одного этапа и начало другого. Люди под этим знаком часто переживают важные изменения в жизни и умеют оставлять прошлое позади.",
    "Олень (Мазатль)": "Олень символизирует грацию, духовность и природную гармонию. Люди под этим знаком часто спокойны, миролюбивы и духовно развиты.",
    "Кролик (Точтли)": "Кролик символизирует радость, плодородие и энергию. Люди под этим знаком оптимистичны, весёлы и полны жизни.",
    "Вода (Атль)": "Вода символизирует глубину чувств, интуицию и изменчивость. Люди под этим знаком глубоко чувствуют мир и обладают мощной интуицией.",
    "Собака (Ицкуинтли)": "Собака — символ преданности, защиты и верности. Люди под этим знаком часто верные друзья, защитники и наставники.",
    "Обезьяна (Оцоматли)": "Обезьяна олицетворяет веселье, креативность и остроумие. Люди под этим знаком склонны к искусству и развлечениям, обладают чувством юмора.",
    "Трава (Мальиналли)": "Трава символизирует гибкость и выживаемость. Этот знак указывает на способность человека к адаптации и выживанию в любых условиях.",
    "Тростник (Акатль)": "Тростник символизирует силу, стойкость и дисциплину. Люди под этим знаком часто становятся лидерами благодаря своей выносливости и организованности.",
    "Ягуар (Оцелотль)": "Ягуар олицетворяет мощь, силу и независимость. Люди под этим знаком — прирождённые воины и лидеры, обладающие бесстрашием.",
    "Орел (Куаутли)": "Орел символизирует проницательность, свободу и могущество. Люди под этим знаком обладают острым умом и стремятся к великим высотам.",
    "Гриф (Коскакуаутли)": "Гриф символизирует очищение и возрождение. Люди под этим знаком проходят через трансформацию и часто начинают жизнь заново.",
    "Землетрясение (Олин)": "Землетрясение символизирует кардинальные изменения и прогресс. Люди под этим знаком ведут к изменениям и стремятся к развитию.",
    "Кремень (Текпатль)": "Кремень символизирует решимость, ясность и силу воли. Этот знак указывает на сильный дух и умение принимать трудные решения.",
    "Дождь (Киауитль)": "Дождь олицетворяет изобилие, рост и плодородие. Люди под этим знаком полны энергии и заботятся о процветании.",
    "Цветок (Шочитль)": "Цветок символизирует красоту, гармонию и духовность. Люди под этим знаком привносят радость, искусство и любовь в мир."
};

// Функция для расчёта ацтекского знака и числа
function calculateAztecSign() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    if (isNaN(birthdate)) {
        alert("Пожалуйста, введите корректную дату.");
        return;
    }

    // Базовая дата начала ацтекского календаря (13 августа 1521 года)
    const startDate = new Date(1521, 7, 13);
    const daysDifference = Math.floor((birthdate - startDate) / (1000 * 60 * 60 * 24));
    const dayInTonalpohualli = daysDifference % 260;

    const sign = tonalpohualliSigns[dayInTonalpohualli % 20];
    const number = tonalpohualliNumbers[dayInTonalpohualli % 13];

    const description = signDescriptions[sign] || "Описание недоступно.";

    document.getElementById("aztecSign").textContent = sign;
    document.getElementById("aztecNumber").textContent = number;
    document.getElementById("aztecDescription").textContent = description;
    document.getElementById("result").classList.remove("hidden");
}
