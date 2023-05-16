const fs = require('fs')

const path = './storage/storage.json'

function getAllUser() {
    const data = JSON.parse(fs.readFileSync(path))

    if (!data.length) throw new Error('empty')

    return data
}

function getUserById(id) {
    const data = JSON.parse(fs.readFileSync(path))
    const filtered = data.filter((el) => el.id == id)

    if (!filtered.length) throw new Error('id not found')

    return filtered
}

function createUser(name, surname, email, pwd) {
    const data = JSON.parse(fs.readFileSync(path))
    const obj = {
        id : data.length + 1, name, surname, email, pwd
    }
    data.push(obj)
}

function updataUser(id, name, surname, email, pwd) {
    const data = JSON.parse(fs.readFileSync(path))
    const filtered = data.filter((el) => el.id != id)
    const obj = {
        id, name, surname, email, pwd
    }

    if (filtered.length == data.length) throw new Error('id not found')
    filtered.push(obj)

    fs.writeFileSync(path, JSON.stringify(filtered))
    return data
}

function deleteDataById(id) {
    const data = JSON.parse(fs.readFileSync(path))
    const filtered = data.filter((el) => el.id != id)

    if (filtered.length == data.length) throw new Error('id not found')

    fs.writeFileSync(path, JSON.stringify(filtered))
    return filtered
}

module.exports = { getAllUser, getUserById, updataUser, createUser, deleteDataById }