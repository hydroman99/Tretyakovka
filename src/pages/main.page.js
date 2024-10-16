import { BasePage } from './base.page'

export class MainPage extends BasePage {
    headPart = this.page.locator('.header-top__actions')
    popUp = this.page.locator('.popup_content')
    constructor(page) {
        super(page)
        this.searchButton = this.headPart.getByLabel('Поиск')
        this.searchFieldPopUp = this.popUp.getByPlaceholder('Что вы ищете?')
        this.searchBtnPopUp = this.popUp.getByLabel('Поиск')
    }
    async clickSearchButton () {
        await this.searchButton.click();
    }
    async searchSomething (text) {
        await this.searchFieldPopUp.fill(text);
        await this.searchBtnPopUp.click();
    }
}