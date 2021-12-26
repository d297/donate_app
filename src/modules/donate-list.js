import * as extraFunctions from '../core/utils/index';

export class DonateList {
    #donatesContainer;
    #html;
    
    constructor(donates){
        this.#donatesContainer = 'div';
        this.#html = `
            <h2 class="donates-container__title">Список донатов</h2> 
        `;
        this.donates = donates;

    }
    addDonatesOnHtml(donates, donatesList){
        donates.forEach(elem => {
            donatesList.insertAdjacentHTML('beforeend', `<div class="donate-item">${extraFunctions.getFormattedTime(elem.date)}<b> - ${elem.amount}</b></div>`);
        });
    }

    render(){

        let donatesContainer = document.createElement(this.#donatesContainer);
        donatesContainer.classList.add('donates-container');
        donatesContainer.innerHTML = this.#html;        
        let donatesList = document.createElement('div');
        donatesList.classList.add('donates-container__donates');

        this.addDonatesOnHtml(this.donates, donatesList);
        
        donatesContainer.append(donatesList);

        return donatesContainer;
    }

    updateDonates(updatedDonates){
        document.querySelector('.donates-container__donates').innerHTML = '';
        this.addDonatesOnHtml(updatedDonates, document.querySelector('.donates-container__donates'));
    }
}