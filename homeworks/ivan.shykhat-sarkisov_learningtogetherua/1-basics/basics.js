const courseVendor = 'Masters Academy';
let courseUsersInChat;
let courseUsersMale = 33;
let courseUsersFemale = 9;

courseUsersInChat = courseUsersFemale + courseUsersMale;
console.log('Кількість користувачів у чаті курсу від ' + courseVendor + ' дорівнює: ' + courseUsersInChat);

console.log(`Кількість дівчаток у чаті курсу на ${courseUsersMale - courseUsersFemale} менша за хлопчиків`);

let minutesQuantityOfCourse = 60 * 2 * 8;
console.log('Тривалість курсу у хвилинах дорівнює: ' + minutesQuantityOfCourse);

let hoursQuantityOfCourse = minutesQuantityOfCourse / 60;
console.log('Тривалість курсу у годинах дорівнює: ' + hoursQuantityOfCourse);

console.log('Кількість хлопчиків у чаті курсу непарна. Це відомо з того, що остача від ділення їх кількості (' + courseUsersMale + ') на 2 дорівнює: ' + (courseUsersMale % 2));

console.log('Кількість дівчаток у чаті курсу (' + courseUsersFemale + ') є числом 3 піднесеним до степеня 2: ' + (3 ** 2));

