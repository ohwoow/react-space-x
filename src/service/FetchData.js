export default class FetchData {

  startUrl = 'https://api.spacexdata.com/v4/'

  getData = async url => {
    const data = await fetch(url)

    if (!data.ok) {
      throw new Error(`Произошла ошибка ${data.status}`)
    }

    return await data.json()
  }

  getRocket = async () => await this.getData(this.startUrl + 'rockets')

  getLaunches = async () => await this.getData(this.startUrl + 'launches/past')

  getCompany = async () => await this.getData(this.startUrl + 'company')

}
