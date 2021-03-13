class GithubAPI {
  constructor() {
    this.url = "https://api.github.com/users/"
  }

  async getData(userName) {
    const resDataUser = await fetch(this.url + userName)
    const resDataRepo = await fetch(this.url + userName + '/repos')

    const userData = await resDataUser.json()
    const repoData = await resDataRepo.json()

    return {
      userData,
      repoData
    }
  }
}