const form = document.querySelector("#github-form")
const userNameInput = document.querySelector("#github-name")
const clearAllUsers = document.querySelector("#clear-all-users")
const lastUsers = document.querySelector("#last-users")

const github = new GithubAPI()
const ui = new UI()

eventListener()
function eventListener() {
  form.addEventListener("submit", getData)
  clearAllUsers.addEventListener("click", clearAllSearchUsers)
  document.addEventListener("DOMContentLoaded", function () {
    ui.addSearchDataToUI(JSON.parse(localStorage.getItem("users")))
  })
}

function getData(e) {
  let userName = userNameInput.value.trim()

  if (userName === "") {
    ui.displayMessage("Kullanıcı adı giriniz..")
  } else {
    github.getData(userName)
      .then(res => {
        if (res.userData.message === "Not Found") {
          ui.displayMessage("Böyle bir kullanıcı bulunamadı dostum :[")
        } else {
          ui.addSearchDataToUI(userName)
          Storage.addSearchDataToLocalStorage(userName)
          ui.userDetails(res.userData)
          ui.repoDetails(res.repoData)
        }
      })
      .catch(err => ui.displayMessage(err))
  }

  ui.clearInput()
  e.preventDefault()
}

function clearAllSearchUsers() {
  if (confirm("Silmek istediğinden emin misin dostum ??")) {
    Storage.removeSearchDataLocalStorage()
    ui.removeSearchDataUI()    
  }
}




