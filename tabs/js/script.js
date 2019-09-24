window.addEventListener('DOMContentLoaded', function(){
    'use strict';

/**
 * Класс создание и настройки табов
 */
class Tabs{
    /**
     * Принимаем на вход часть имени классов для элементов: табов и контента
     * @param {часть имени класа} classHead 
     */
    constructor(classHead = 'info'){
        this._tab = document.querySelector(`.${classHead}`);
        this._tabs = document.querySelectorAll(`.${classHead}-header-tab`);
        this._tabContents = document.querySelectorAll(`.${classHead}-tabcontent`);
        this._changeTabs = this._changeTabs.bind(this);
    }

    /**
         * Отображение вкладки
         * @param {index} a - индекс вкладки
         */
    _showTab(a){
        this._tabContents[a].classList.add("show");
        this._tabContents[a].classList.remove("hide");
    }

    /**
         * Прячем вкладку
         * @param {index} a 
         */
    _hideTab(a){
        this._tabContents[a].classList.remove("show");
        this._tabContents[a].classList.add("hide");
    }

    /**
     * Перебераем вкладки и меняем им свойства
     * @param {индекс вкладки} a 
     */
    _displayTabs(a){
        for(let i = 0; i < this._tabContents.length; i++){
            if(a == i){
                this._showTab(i);
            } else {
                this._hideTab(i);
            }
        }
    }

    /**
     * Метод для обработки события: 
     * проверяем место нажатия, если попали на кнопку - берем её индекс
     * и запускаем перебор вкладок контента с этим индексом
     * @param {событие 'click'} event 
     */
    _changeTabs(event){
        let target = event.target;
    
        for(let i = 0; i < this._tabs.length; i++){
            if(this._tabs[i] == target){
               this._displayTabs(i);
               break;
            }
        }
    }

    /**
     * Применение скрипта к документу
     */
    apply(){
        // Прячем все вкладки кроме первой, так как только загружен документ
        this._displayTabs(0);
        // Добавляем слушатель на блок переключателей
        this._tab.addEventListener('click', this._changeTabs);
    }
}

//new Tabs().apply();
new Tabs('info').apply();

});