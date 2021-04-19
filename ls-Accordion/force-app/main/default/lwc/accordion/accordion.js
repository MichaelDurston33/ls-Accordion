/**
 * @who      : Lightful <rhodes@lightful.com>
 * @when     : 19 April 2021
 * @what     : Reusable Accordion component with grid in header
 */

import { LightningElement, api } from 'lwc';

export default class Accordion extends LightningElement {


    @api title;

    @api subtitleOneLabel;
    @api subtitleOneValue; 
             
    @api subtitleTwoLabel;
    @api subtitleTwoValue;

    @api forceOpen;             //Will always be open, will not render down icon.
    @api defaultOpen;           //Can be closed, but defaults to open.

    closed = true;


    /**
    * @description  : Sets closed or open state on connected callback.
    */
   connectedCallback() {

        this.closed = this.defaultOpen || this.forceOpen ? false : true

   }

    /**
    * @description  : Opens/closes the accordian.
    */
    toggle(e) {

        //If the user pressed enter or clicked, toggle.
        if(e.which == 13 || e.which == 1) {

            //If the component is set to force Open, 'closed' will be set to false no matter what.
            this.closed = this.forceOpen ? false : !this.closed;

        }

    }

    /**
    * @description  : Controls which way the arrow is facing based on closing / opening.
    */
    get utilityIcon() {

        return this.closed ? 'utility:chevrondown' : 'utility:chevronup'

    }

    /**
    * @description  : Changes colour of dropdown on open/closed
    */
    get utilityIconColour() {

        return this.closed ? 'ls-dropdown-closed-brand' : 'ls-dropdown-open-neutral';

    }


    /**
    * @description  : Alerts the toplevel div that the accordian is closed or open.
    *                 This is important so parent components can apply different stylings
    *                 To the entire accordion based on closed / open state.
    */
    get containerStyle() {

        return ` ls-accordian  ${this.closed ? ' ls-accordian__container__closed ' : ' ls-accordian__container__open '} `; 

    }

    /**
    * @description  : Changes colour and background colour depending on state.
    */
    get headerStyle() {

        //Will add a 'ls-accordian__(closed/open) depending on state.
        //Will set the cursor: pointer if the accordian is interactable.
        return ` ls-accordian__header slds-grid slds-wrap  ${this.closed ? ' ls-accordian__closed ' : ' ls-accordian__open '}  ${this.forceOpen ? '' : 'cursor-pointer' }`; 

    }

}