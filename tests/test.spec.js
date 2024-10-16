import { test, expect } from '../src/helpers/fixtures/fixture';


test('Проверка результата после двух поисков', async ({goToPageFixture}) => {
    await goToPageFixture.mainPage.clickSearchButton();
    await goToPageFixture.mainPage.searchSomething('Пушкин');
    await expect (goToPageFixture.searchResultPage.resultitem.nth(0)).toHaveText('Кино 26.05.2023 — 26.05.2023 Дуэль и смерть Пушкина: киновзгляд');
    expect (goToPageFixture.searchResultPage.takeUrl()).toContain('?query=пушкин');
})