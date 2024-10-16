import { BasePage } from './base.page'

export class SearchResultPage extends BasePage {
    constructor(page) {
        super(page);
        this.resultitem = this.page.locator('.result-item');
    }
    takeUrl(){
        return this.page.url();
    }
}