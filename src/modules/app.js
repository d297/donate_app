import {DonateForm} from './donate-form';
import {DonateList} from './donate-list';
import * as extraFunctions from '../core/utils/index';

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
 ];

export default class App{
    #body;
    #donateForm;
    #donateList;
    constructor(){
        this.state = {
            donates: mockDonates,
            totalAmount: 0
        }
        this.#body = document.body;
        this.#donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
        this.#donateList = new DonateList(mockDonates);
    }

    run(){
        this.#body.append(this.#donateForm.render());
        this.#body.append(this.#donateList.render()); 
        this.state.totalAmount = extraFunctions.calculateSumOfNumbers(this.state.donates);
        this.#donateForm.updateTotalAmount(this.state.totalAmount);
        this.#donateList.updateDonates(this.state.donates);
    }

    createNewDonate(newDonate){
        this.state.donates.push(newDonate);
        this.state.totalAmount = Number(this.state.totalAmount) + Number(newDonate.amount);
        this.#donateList.updateDonates(this.state.donates);
        this.#donateForm.updateTotalAmount(this.state.totalAmount);
    }
}


