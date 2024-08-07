/**
 * @description Show modal function
 */
function showModal() {
  const modal = document.querySelector('#modal');
  const body = document.querySelector('body');
  body.classList.add('overflow-hidden');
  modal.classList.add('modal--active');
}

/**
 * @description Hide modal function
 */
function hideModal() {
  const modal = document.querySelector('#modal');
  if (modal.classList.contains('modal--active')) {
    const body = document.querySelector('body');
    body.classList.remove('overflow-hidden');
    modal.classList.remove('modal--active');
  }
}

/**
 * @description Esc listener
 * @param event
 */
const escEventListener = (event) => {
  if (event.key === 'Escape') {
    hideModal();
  }
};

addEventListener('keydown', escEventListener);

/**
 * @description Input focus
 * @type {NodeListOf<Element>}
 */
const inputsModal = document.querySelectorAll('.modal__input');
inputsModal.forEach((input) => {
  input.addEventListener('focus', () => {
    input.classList.add('modal__input--active');
  });
  input.addEventListener('blur', () => {
    input.classList.remove('modal__input--active');
    if (input.value !== '') {
      input.classList.add('modal__input--filled');
    } else {
      input.classList.remove('modal__input--filled');
    }
  });
});

/**
 * @description Input mask
 * @type {Element}
 */
const element = document.getElementById('phone');
const maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: false,
};
const mask = new IMask(element, maskOptions);

/**
 * @description Serialize form
 * @param event
 * @param formNode
 */
function serializeForm(event, formNode) {
  event.preventDefault();
  const { elements } = formNode;

  Array.from(elements).forEach((element) => {
    const { name, value } = element;
    if (name !== '' && value !== '') {
      console.log({ name, value });
    }
  });
}

/**
 * @description Full screen
 */
function playVideo() {
  let elem = document.getElementsByTagName('video')[0];
  let videoInner = document.querySelector('.video');
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else {
    alert('Full screen not supported');
    return;
  }
  videoInner.classList.add('video--active');
  elem.play();
}

/**
 * @description Close video
 */
function closeVideo() {
  let elem = document.getElementsByTagName('video')[0];
  let videoInner = document.querySelector('.video');
  videoInner.classList.remove('video--active');
  elem.pause();
}

var Scrollbar = window.Scrollbar;
Scrollbar.init(document.querySelector('#my-scrollbar'));
