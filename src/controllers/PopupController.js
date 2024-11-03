class PopupController {
    constructor() {
        this.model = new MessageModel();
        this.messageElement = document.getElementById('message');
        this.updateButton = document.getElementById('updateButton');

        this.init();
    }

    init() {
        this.updateView();
        this.updateButton.addEventListener('click', () => this.handleUpdateClick());
    }

    updateView() {
        this.messageElement.textContent = this.model.message;
    }

    handleUpdateClick() {
        this.model.updateMessage();
        this.updateView();
    }
}

document.addEventListener('DOMContentLoaded', () => new PopupController());