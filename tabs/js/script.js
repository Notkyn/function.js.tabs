window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    /**
     * Функция управления вкладками
     * @param {*} wrapper - родитель переключателей вкладок
     * @param {*} tabsBtn - масив переключателей
     * @param {*} contents - масив блоков контента
     */
    function tabsRun(wrapper, tabsBtn, contents){
        function displayTabs(a){
            for(let i = 0; i < contents.length; i++){
                if(a == i){
                    showTab(i); // показываем вкладку
                } else {
                    hideTab(i); // прячем вкладку
                }
            }
        }
    
        /**
         * Отображение вкладки
         * @param {index} a - индекс вкладки
         */
        function showTab(a){
            contents[a].classList.add("show");
            contents[a].classList.remove("hide");
        }
    
        /**
         * Прячем вкладку
         * @param {index} a 
         */
        function hideTab(a){
            contents[a].classList.remove("show");
            contents[a].classList.add("hide");
        }
    
        // Прячем все вкладки кроме первой, так как только загружен документ
        displayTabs(0);
    
        wrapper.addEventListener('click', function(event){
            let target = event.target;
    
            for(let i = 0; i < tabsBtn.length; i++){
                if(tabsBtn[i] == target){
                    displayTabs(i);
                    break;
                }
            }
        });
    }

    // Использование:

    // start
    let tab = document.querySelector(".info"),
        tabs = document.querySelectorAll(".info-header-tab"),
        tabContents = document.querySelectorAll(".info-tabcontent");

    tabsRun(tab, tabs, tabContents);
    // end

});