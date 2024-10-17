import { test } from '../src/helpers/fixtures/fixture';
import { expect } from '@playwright/test';
import { allure } from "allure-playwright"


test('Проверка результата после двух поисков', async ({goToPageFixture}) => {
    await allure.step("Нажать на кнопку поиска в челке страницы", async () => {
        await goToPageFixture.mainPage.clickSearchButton();})
    await allure.step("Ввести в поле поиска 'Пушкин' и выполнить поиск", async () => {    
        await goToPageFixture.mainPage.searchSomething('Пушкин')});
    await allure.step("Выполнить проверку по тексту в 1 блоке результата поиска", async () => {
        await expect(goToPageFixture.searchResultPage.resultitem.nth(0)).toContainText('Кино 26.05.2023 — 26.05.2023 Дуэль и смерть Пушкина: киновзгляд')});
    await allure.step("Выполнить проверку что в УРЛе есть слово 'Пушкин' в URL кодировке", async () => {
        expect(goToPageFixture.searchResultPage.takeUrl()).toContain('?query=%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD')});
    await allure.step("Повторно нажать на кнопку поиска в челке страницы", async () => {
        await goToPageFixture.mainPage.clickSearchButton()});
    await allure.step("Ввести в поле поиска 'Стравинский'", async () => {
        await goToPageFixture.mainPage.searchSomething('Стравинский')});
    await allure.step("Выполнить проверку по тексту в 1 блоке результата поиска", async () => {
        await expect(goToPageFixture.searchResultPage.resultitem.nth(0)).toContainText('События 30.05.2021 VIVARTE VI. Стравинский, Моцарт, Цемлинский')});
    await allure.step("Выполнить проверку что в УРЛе есть слово 'Стравинский' в URL кодировке", async () => {
        expect(goToPageFixture.searchResultPage.takeUrl()).toContain('?query=стравинский')});
})