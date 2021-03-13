class UI {
  constructor() {
    this.profile = document.querySelector("#profile")
    this.repo = document.querySelector("#repos")
    this.lastUsers = document.querySelector("#last-users")
    this.userNameInput = document.querySelector("#github-name")
  }

  clearInput() {
    this.userNameInput.value = ""
  }

  userDetails(user) {
    this.profile.innerHTML = `
    <div class="row">
      <div class="col-md-4">
        <a href="${user.html_url}" target="_blank">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
        </a>
        <hr>
        <div id="fullName"><strong> ${user.name}</strong></div>
        <hr>
        <div id="bio">${user.bio}</div>
      </div>
      <div class="col-md-8 mt-2">
        <button class="btn btn-secondary">
          Takipçi <span class="badge badge-light">${user.followers}</span>
        </button>
        <button class="btn btn-info">
          Takip Edilen <span class="badge badge-light">${user.following}</span>
        </button>
        <button class="btn btn-danger">
          Repolar <span class="badge badge-light">${user.public_repos}</span>
        </button>
        <hr>
        <li class="list-group-item">
          <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>

        </li>
        <li class="list-group-item">
          <img src="images/location.png" width="30px"> <span id="location">${user.location}</a>

        </li>
        <li class="list-group-item">
          <img src="images/mail.png" width="30px"> <span id="email">${user.email}</span>
        </li>
      </div>
    </div>
    `
  }

  repoDetails(repos) {
    this.repo.innerHTML = ""

    repos.forEach((repo) => {
      this.repo.innerHTML += `
        <div class="mb-2 card-body">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank" id="repoName">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <button class="btn btn-secondary">
                Starlar <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
              </button>

              <button class="btn btn-info">
                Forklar <span class="badge badge-light" id="repoFork">${repo.forks_count}</span>
              </button>
            </div>
          </div>
        </div>
        `
    })
  }

  displayMessage(message) {
    const div = document.createElement("div")
    div.className = "alert alert-danger"
    div.textContent = message
    this.profile.appendChild(div)

    setTimeout(() => {
      div.remove()
    }, 3000)
  }
}