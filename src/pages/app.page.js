import { MainPage, SearchResultPage } from "./index";

export class App {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage(page);
        this.searchResultPage = new SearchResultPage(page);
    }
}