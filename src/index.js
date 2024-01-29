import Handlers from "./modules/handlers";
import Dom from "./modules/dom";

const dom = new Dom();

Handlers.modalAddBtn();
Handlers.openModal();
Handlers.clickEvent();
dom.renderTodos();

