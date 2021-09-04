/**
 * class Card
 */
export class Card {
    constructor(title, index) {
        this.title = title;
        this.cardEl = document.createElement('div');
        this.cardTitle = document.createElement('p');
        this.cardContent = document.createElement('p');
        this.cardContent.id = `${index}-cont`;
        this.cardTitle.classList.add('title');
        this.cardEl.classList.add('card');
        this.cardTitle.innerText = `${index + 1}. ${this.title}`;
        this.cardEl.appendChild(this.cardTitle);
        this.cardEl.appendChild(this.cardContent);
    }

    /**
     *
     * @param {HTMLElement} container
     * append child card into container
     */
    render(container) {
        container.appendChild(this.cardEl);
    }

    /**
     *
     * @param {string} content
     * append content as innerText into Card content
     */
    addContent(content) {
        this.cardContent.innerText = content;
    }

    addClass(className) {
        this.cardContent.classList.add(className);
    }
}
