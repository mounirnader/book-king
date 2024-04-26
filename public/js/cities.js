const select = document.getElementById("city");
var egyptianCities = [
    "Cairo", "Alexandria", "Giza", "Shubra El-Kheima", "Port Said",
    "Suez", "Luxor", "Aswan", "Ismailia", "Tanta", "Faiyum", "Zagazig",
    "Asyut", "Mansoura", "Damietta", "Beni Suef", "Sohag",
    "Hurghada", "Minya", "Assiut", "El-Mahalla El-Kubra", "Qena",
    "Banha", "Kafr El Sheikh", "Arish", "Mallawi", "10th of Ramadan City",
    "Marsa Matruh", "Idfu", "Mit Ghamr", "Desouk", "Qalyub", "Abnub",
    "Kafr El Dawwar", "Akhmim", "Damanhur", "Dikirnis", "Bush",
    "Itay El Barud", "Safaga", "Arment", "Al-Qasasin", "Al-Qusiyya",
    "Al-Radisiyat Al-Bahriyah", "Al-Shohada", "Al-Yusr", "Ashmun",
    "Awsim", "Badr", "Badrashin", "Baltim", "Bani Mazar", "Bilqas",
    "Biyala", "Burj Al Arab", "Daraw", "Dairut", "Dishna", "Faqous",
    "Faraskur", "Fuwah", "Hihya", "Ibsheway", "Ihnasiya", "Izbat Al-Burj",
    "Juhaynah", "Kafr Az-Zayat", "Kafr Saqr", "Kafr Shukr", "Kafr Tadurah",
    "Kafr Turki", "Kafr Umm As Sa`ad", "Kafr Yusuf", "Kawm Hamada",
    "Kawm Umbu", "Kawm Wa Ar-Rab`", "Madbuli", "Madinat Sittah Uktubar",
    "Minuf", "Mithaibah", "Nahya", "Quesna", "Rafa", "Ras Gharib",
    "Ras Sedr", "Rosetta", "Samalut", "Samannud", "Sidi Barrani",
    "Sidi Salim", "Sinnuris", "Sumusta al Waqf", "Tallah", "Talkha",
    "Tamia", "Tarabin", "Tukh", "Zifta", "Zuhayr al-Qibliyah"
];

egyptianCities.forEach(function(city) {
    const option = document.createElement("option");
    option.value = city;
    option.text = city;
    select.add(option);
});
const defaultCity = select.querySelector('option[value="Cairo"]');
defaultCity.selected = true;