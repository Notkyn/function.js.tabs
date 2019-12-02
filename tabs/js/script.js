export class Tabs{
    constructor(classHead = 'info'){
        this._tab = document.querySelector(`.${classHead}`);
        this._tabs = document.querySelectorAll(`.${classHead}-header-tab`);
        this._tabContents = document.querySelectorAll(`.${classHead}-tabcontent`);
        this._changeTabs = this._changeTabs.bind(this);
    }

    _showTab(a){
        this._tabContents[a].classList.add("show");
        this._tabContents[a].classList.remove("hide");
    }

    _hideTab(a){
        this._tabContents[a].classList.remove("show");
        this._tabContents[a].classList.add("hide");
    }

    _displayTabs(a){
        for(let i = 0; i < this._tabContents.length; i++){
            if(a === i){
                this._showTab(i);
            } else {
                this._hideTab(i);
            }
        }
    }

    _changeTabs(event){
        let target = event.target;

        for(let i = 0; i < this._tabs.length; i++){
            if(this._tabs[i] === target){
                this._displayTabs(i);
                break;
            }
        }
    }

    apply(){
        this._displayTabs(0);
        this._tab.addEventListener('click', this._changeTabs);
    }
}
