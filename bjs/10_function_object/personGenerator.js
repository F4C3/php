const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Земцов",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Олег",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ксения",
            "id_2": "Светлана",
            "id_3": "Лолита",
            "id_4": "Фортуна",
            "id_5": "Елизавета",
            "id_6": "Софья",
            "id_7": "Марина",
            "id_8": "Наталья",
            "id_9": "Анастасия",
            "id_10": "Рената"
        }
    }`,
    firstPatronymicFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Вадимовна",
            "id_2": "Александровна",
            "id_3": "Михайловна",
            "id_4": "Робертовна",
            "id_5": "Артёмовна",
            "id_6": "Матвеевна",
            "id_7": "Николаевна",
            "id_8": "Ильинична",
            "id_9": "Григорьевна",
            "id_10": "Константиновна"
        }
    }`,
    firstPatronymicMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Максимович",
            "id_2": "Ильич",
            "id_3": "Захарович",
            "id_4": "Максимович",
            "id_5": "Платонович",
            "id_6": "Русланович",
            "id_7": "Романович",
            "id_8": "Вадимович",
            "id_9": "Михайлович",
            "id_10": "Даниилович"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Менеджер",
            "id_2": "Инкассатор",
            "id_3": "Репетитор",
            "id_4": "Сметчик",
            "id_5": "Онколог",
            "id_6": "Астроном",
            "id_7": "Администратор базы данных",
            "id_8": "Ландшафтный дизайнер",
            "id_9": "Винодел",
            "id_10": "Вирусолог"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Преподаватель",
            "id_2": "Модель",
            "id_3": "Переводчик",
            "id_4": "Супервайзер",
            "id_5": "Таксист",
            "id_6": "Реаниматолог",
            "id_7": "Политолог",
            "id_8": "Авиадиспетчер",
            "id_9": "Актриса",
            "id_10": "Массажист"
        }
    }`,
    monthsOfTheYearJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    
    randomGender: function() {

        let gender = (this.randomIntNumber() === 1) ?
        this.GENDER_MALE:
        this.GENDER_FEMALE;       
        return gender;
    },

    randomBirthYear: function() {
        let birthYear = this.randomIntNumber(2007,1970) 
        let birthDay = this.randomIntNumber(30,1)
        let day = birthDay
        let birthMonths = this.randomValue(this.monthsOfTheYearJson)
        let months = birthMonths
        if(months === "Февраля"){
            day = this.randomIntNumber(29,1)
        }
        return `Дата рождения: ${day} ${months} ${birthYear} года`;      
    },

    randomFirstName: function() {
        let name = (this.person.gender === "Мужчина") ?
        this.randomValue(this.firstNameMaleJson):
        this.randomValue(this.firstNameFemaleJson);
        return name;
    },


     randomSurname: function() {   
        let surname = (this.person.gender === "Мужчина") ?
        this.randomValue(this.surnameJson):
        `${this.randomValue(this.surnameJson)}a`;
        return surname;
    },

    randomPatronymic: function() {   
        let patronymic = (this.person.gender === "Мужчина") ?
        this.randomValue(this.firstPatronymicMaleJson):
        this.randomValue(this.firstPatronymicFemaleJson);
        return patronymic;
    },
    randomProfession: function() {   
        let profession = (this.person.gender === "Мужчина") ?
        this.randomValue(this.professionMaleJson):
        this.randomValue(this.professionFemaleJson);
        return profession;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.year = this.randomBirthYear();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
