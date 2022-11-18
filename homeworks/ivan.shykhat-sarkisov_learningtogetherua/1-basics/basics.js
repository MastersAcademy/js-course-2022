const courseVendor = 'Masters Academy';
let courseUsersInChat = 0;
const courseUsersMale = 33;
const courseUsersFemale = 9;

courseUsersInChat = courseUsersFemale + courseUsersMale;
console.log(`Кількість користувачів у чаті курсу від ${courseVendor} дорівнює: ${courseUsersInChat}`);

console.log(`Кількість дівчаток у чаті курсу на ${courseUsersMale - courseUsersFemale} менша за хлопчиків`);

const minutesQuantityOfCourse = 60 * 2 * 8;
console.log(`Тривалість курсу у хвилинах дорівнює: ${minutesQuantityOfCourse}`);

const hoursQuantityOfCourse = minutesQuantityOfCourse / 60;
console.log(`Тривалість курсу у годинах дорівнює: ${hoursQuantityOfCourse}`);

console.log(`Кількість хлопчиків у чаті курсу непарна. Це відомо з того, що остача від ділення їх кількості ${courseUsersMale} на 2 дорівнює: ${courseUsersMale % 2}`);

console.log(`Кількість дівчаток у чаті курсу це 3 піднесена до степеня 2: ${3 ** 2}`);
