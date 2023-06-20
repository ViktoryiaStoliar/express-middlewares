function isValidUserId(req, res, next) {
  const { id } = req.params;

  if (!id) throw new Error("значение id не может быть пустым");
  if (isNaN(id)) throw new Error("id должно быть числом");
  if (id < 0) throw new Error("id не может быть отрицательным значением");

  next();
}

function isValidUserData(req, res, next) {
  const { name, surname, email, pwd } = req.body;

  if (!name) throw new Error("значение name пустое");
  if (!isNaN(name)) throw new Error("name должно быть строкой");

  if (!surname) throw new Error("значение surname пустое");
  if (!isNaN(surname)) throw new Error("surname должно быть строкой");

  if (!email) throw new Error("значение email пустое");
  if (!/^[\w\.\+]+@[a-z]+\.[a-z]{1,5}$/gm.test(email))
    throw new Error("неверный формат email");

  if (!pwd) throw new Error("значение pwd пустое");
  if (pwd.length < 8) throw new Error("в pwd должно быть не меньше 8 символов");

  next();
}

module.exports = { isValidUserId, isValidUserData };
