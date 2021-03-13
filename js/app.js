const form = document.querySelector("#github-form")
const userNameInput = document.querySelector("#github-name")
const clearAllUsers = document.querySelector("#clear-all-users")
const lastUsers = document.querySelector("#last-users")

const github = new GithubAPI()

eventListener()
function eventListener() {
  form.addEventListener("submit", getData)
  clearAllUsers.addEventListener("click", clearAllSearchUsers)
  document.addEventListener("DOMContentLoaded", function () {

  })
}

function getData(e) {
  let userName = userNameInput.value.trim()

  if (userName === "") {
    alert("Kullanıcı adı giriniz..")
  } else {
    github.getData(userName)
      .then(res => {
        if (res.userData.message === "Not Found") {
          alert("Böyle bir kullanıcı bulunamadı dostum :[")
        } else {
          console.log(res)
        }
      })
      .catch(err => console.error(err))
  }

  e.preventDefault()
}

function clearAllSearchUsers() {

}




