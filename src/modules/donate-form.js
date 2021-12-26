import {Settings as NewCurrency} from '../core/constants/settings';

export class DonateForm{
    #form;
    #html;

    constructor(totalAmount, createNewDonate){
        this.totalAmount = totalAmount;
        this.createNewDonate = createNewDonate;
        this.#form = 'form';
        this.#html = `

                <h1 id="total-amount">28$</h1>
                <label class="donate-form__input-label"> 
                    <span id="currency">Введите сумму в ${NewCurrency.currency}</span>
                    <input class="donate-form__donate-input" name="amount" type="number" max="100" min="1" required="">
                </label>
                <button class="donate-form__submit-button" type="submit"> 
                    Задонатить 
                </button> 

        `;
    }

    render(){
        let form = document.createElement(this.#form);
        form.classList.add('donate-form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.createNewDonate({amount: document.querySelector('input[name=amount]').value, date: new Date()}); 
            document.querySelector('input[name=amount]').value = '';
        });
        form.innerHTML = this.#html;
        return form;
    }

    updateTotalAmount(newAmount){
        document.querySelector('h1#total-amount').innerHTML = `+${newAmount}${NewCurrency.currency}`;
    }
}

