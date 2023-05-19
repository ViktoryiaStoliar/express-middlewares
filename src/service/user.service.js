const fs = require('fs')

const path = './storage/storage.json'


class Service {
    getAllUser() {
        const data = JSON.parse(fs.readFileSync(path))

        if (!data.length) throw new Error('empty')

        return data
    }

    getUserById(id) {
        const data = JSON.parse(fs.readFileSync(path))
        const filtered = data.filter((el) => el.id == id)

        if (!filtered.length) throw new Error('id not found')

        return filtered
    }

    createUser(name, surname, email, pwd) {
        const data = JSON.parse(fs.readFileSync(path))
        const obj = {
            id: data.length + 1, name, surname, email, pwd
        }

        // if (filtered.length > 0) throw new Error('this label is exist')

        data.push(obj)
    }

    updataUser(id, name, surname, email, pwd) {
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

    patchUser(id, clientObj) {
        const data = JSON.parse(fs.readFileSync(path))
        const oldData = data.find((el) => el.id == id)
        const newData = { ...oldData, ...clientObj }
        const patched = data.filter((el) => el.id != id)
        if (patched.length == data.length) throw new Error('id not found')
        patched.push(newData)
        fs.writeFileSync(path, JSON.stringify(patched))
        return patched
    }


    deleteDataById(id) {
        const data = JSON.parse(fs.readFileSync(path))
        const filtered = data.filter((el) => el.id != id)

        if (filtered.length == data.length) throw new Error('id not found')

        fs.writeFileSync(path, JSON.stringify(filtered))
        return filtered
    }
}

module.exports = { Service }