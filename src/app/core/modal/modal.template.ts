export const modalTemplate = `
  <section class="modal js--modal">
    <div class="modal__container js--modal-container slide">
      <div class="modal__wrap js--modal-wrap">
        <div class="modal__heading">
          <span class="modal__heading--close js--modal-close">
            <i class="fa fa-times"></i>
          </span>
        </div>
        <div class="modal__body">
          <div class="modal__body--image-container js--modal-image-container">
            <img class="modal__body--image js--modal-image">
          </div>
          <h3 class="modal__body--title js--modal-title"></h3>
          <p class="modal__body--description js--modal-description"></p>
        </div>
        <div class="modal__footer">
          <button class="modal__footer--button-go" type="button" disabled="disabled" title="Em breve">
            Ir para a matéria
          </button>
        </div>
      </div>
    </div>
  </section>
`;
