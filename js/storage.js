class Storage {
  static getSearchDataFromLocalStorage() {
    let users

    if (localStorage.getItem("users") === null) {
      users = []
    } else {
      users = JSON.parse(localStorage.getItem("users"))
    }

    return users
  }

  static addSearchDataToLocalStorage(userName) {
    let users = this.getSearchDataFromLocalStorage()
    
    if (users.indexOf(userName) === -1) {
      users.push(userName)
    }

    localStorage.setItem("users", JSON.stringify(users))
  }

  static removeSearchDataLocalStorage() {
    localStorage.removeItem("users")
  }
}