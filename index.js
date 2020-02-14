let token = "123", // ключ к api
    group_id = "123", // ID Группы
    api_version = "5.92";
let request = require("request");

request(`https://api.vk.com/method/groups.getRequests?v=${api_version}&access_token=${token}&group_id=${group_id}`, function ids(error, response, body) { //Запрашиваем список ID Заявок
    let id_list = JSON.parse(body).response.items; //записываем в переменую id_list массив с id заявок.
    for (let key in id_list) { //перебираем заявки и принимаем по одному.
        request(`https://api.vk.com/method/groups.approveRequest?v=${api_version}&access_token=${token}&group_id=${group_id}&user_id=${id_list[key]}`);
    }
});
