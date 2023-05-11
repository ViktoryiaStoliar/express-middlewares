const array = [
    {
        "id": 1, "name": "Hanna", "surname": "Pleshko", "email": "hannapleshko@gmail.com", "pwd":
            "12345678"
    },
    { "id": 2, "name": "Есения", "surname": "Грант", "email": "yesgrant@mail.ru", "pwd": "12345678" },
    {
        "id": 3, "name": "Анастасия", "surname": "Павлова", "email": "pavlova@gmail.com", "pwd":
            "12345678"
    },
    { "id": 4, "name": "Мария", "surname": "Гардон", "email": "gardon@mail.ru", "pwd": "12345678" },
    {
        "id": 5, "name": "Марта", "surname": "Котикова", "email": "martaktik@gmail.com", "pwd": "12345678"
    },
    { "id": 6, "name": "Борис", "surname": "Юревич", "email": "testdata@gmail.com", "pwd": "12345678" },
    { "id": 7, "name": "Рыжик", "surname": "Рыжий", "email": "email@gmail.com", "pwd": "12345678" },
    { "id": 8, "name": "Рейна", "surname": "Собачкова", "email": "dogdoggav@mail.ru", "pwd": "12345678" },
    { "id": 9, "name": "Максим", "surname": "Николаев", "email": "hanna@gmail.com", "pwd": "12345678" },
    {
        "id": 10, "name": "Константин", "surname": "Константинов", "email": "konst@mail.ru", "pwd":
            "12345678"
    },
    { "id": 11, "name": "Иван", "surname": "Иванов", "email": "ivaniv@gmail.com", "pwd": "12345678" },
]

function getAllUsers() {
    if (!array) throw new Error('empry')
    return array
}

function getUsersById(id) {
    const filtered = array.filter((el) => el.id == id)
    if (!filtered.length) throw new Error('this is id not found')
    return filtered[0]
}

function createUser(name, surname, email, pwd) {
    const filtered = array.filter((el) => el.email == email)
    if (filtered.length > 0) throw new Error('email exist')
    const obj = {
        "name": name,
        "surname": surname,
        "email": email,
        "pwd": pwd
    }
    array.push(obj)
    return array
}

function updataData(id, name, surname, email, pwd) {
    const filtered = array.filter((el) => el.id != id)
    if (filtered.length == array.length) return ('такого id нет')
    const obj = {
        "id": +id,
        "name": name,
        "surname": surname,
        "email": email,
        "pwd": pwd
    }
    filtered.push(obj)
    return filtered
}

function deleteData(id, name, surname, email, pwd){
    const filtered = array.filter((el) => el.id != id)
    if (filtered.length == array.length) return ('такого id нет')
    return filtered
}

module.exports = { getAllUsers, getUsersById, createUser, updataData,deleteData }