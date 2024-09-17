// Таблицы ацтекских знаков и чисел
const tonalpohualliSigns = [
    "Crocodile (Cipactli)", "Wind (Ehecatl)", "House (Calli)", "Lizard (Cuetzpalin)", 
    "Serpent (Coatl)", "Death (Miquiztli)", "Deer (Mazatl)", "Rabbit (Tochtli)", 
    "Water (Atl)", "Dog (Itzcuintli)", "Monkey (Ozomatli)", "Grass (Malinalli)", 
    "Reed (Acatl)", "Jaguar (Ocelotl)", "Eagle (Cuauhtli)", "Vulture (Cozcacuauhtli)", 
    "Earthquake (Ollin)", "Flint (Tecpatl)", "Rain (Quiahuitl)", "Flower (Xochitl)"
];
const tonalpohualliNumbers = [...Array(13).keys()].map(n => n + 1);

// Описания знаков
const signDescriptions = {
    "Crocodile (Cipactli)": "Crocodile represents creation and initiation. Those born under this sign are pioneers, often creating new paths.",
    "Wind (Ehecatl)": "Wind signifies communication, intelligence, and change. People under this sign are flexible, adaptive, and quick-thinking.",
    "House (Calli)": "House represents protection and stability. It emphasizes strong family bonds and a sense of security.",
    "Lizard (Cuetzpalin)": "Lizard represents energy and adaptability. Those born under this sign are resilient and quick to adapt to new environments.",
    "Serpent (Coatl)": "Serpent is associated with transformation and power. It represents wisdom, fertility, and cyclical change.",
    "Death (Miquiztli)": "Death is associated with transformation and endings that lead to new beginnings. This sign represents change and renewal.",
    "Deer (Mazatl)": "Deer signifies grace, spirituality, and intuition. People with this sign are often peaceful and in tune with nature.",
    "Rabbit (Tochtli)": "Rabbit represents fertility, abundance, and joy. Those born under this sign are often cheerful and lively.",
    "Water (Atl)": "Water symbolizes fluidity, emotion, and intuition. It represents adaptability and deep emotional insight.",
    "Dog (Itzcuintli)": "Dog signifies loyalty and protection. It is the guardian of the underworld and represents fidelity and companionship.",
    "Monkey (Ozomatli)": "Monkey represents playfulness, creativity, and humor. People with this sign are often entertainers and communicators.",
    "Grass (Malinalli)": "Grass symbolizes resilience and survival. It represents strength in the face of adversity.",
    "Reed (Acatl)": "Reed symbolizes structure, discipline, and order. It is associated with leadership and responsibility.",
    "Jaguar (Ocelotl)": "Jaguar represents strength, stealth, and independence. People born under this sign are often warriors or leaders.",
    "Eagle (Cuauhtli)": "Eagle symbolizes vision, power, and freedom. It represents strength of will and insight.",
    "Vulture (Cozcacuauhtli)": "Vulture represents transformation and purification. It symbolizes renewal and rebirth.",
    "Earthquake (Ollin)": "Earthquake signifies movement, progress, and upheaval. This sign represents dynamic change and evolution.",
    "Flint (Tecpatl)": "Flint symbolizes sharpness, clarity, and sacrifice. It represents mental acuity and determination.",
    "Rain (Quiahuitl)": "Rain signifies fertility, abundance, and growth. It represents nurturing and the cyclical nature of life.",
    "Flower (Xochitl)": "Flower symbolizes beauty, joy, and celebration. It represents art, love, and spiritual connection."
};

// Функция для расчёта ацтекского знака и числа
function calculateAztecSign() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    if (isNaN(birthdate)) {
        alert("Please enter a valid date.");
        return;
    }

    // Базовая дата начала ацтекского календаря (13 августа 1521 года)
    const startDate = new Date(1521, 7, 13);
    const daysDifference = Math.floor((birthdate - startDate) / (1000 * 60 * 60 * 24));
    const dayInTonalpohualli = daysDifference % 260;

    const sign = tonalpohualliSigns[dayInTonalpohualli % 20];
    const number = tonalpohualliNumbers[dayInTonalpohualli % 13];

    const description = signDescriptions[sign] || "No description available.";

    document.getElementById("aztecSign").textContent = sign;
    document.getElementById("aztecNumber").textContent = number;
    document.getElementById("aztecDescription").textContent = description;
    document.getElementById("result").classList.remove("hidden");
}
