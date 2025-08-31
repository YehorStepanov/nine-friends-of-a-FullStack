import { renderArtistModal } from './artist-modal-render-function';
import refs from '../refs';
import { debouncedClamp } from './artist-modal-helpers';

const modalRefs = refs.artistModalElems;
let scrollY = 0;

// Artist About Button Click Handler
//! ============================================================================
export const handleAboutArtistBtnClick = e => {
  const targetEl = e.target.closest('.js-artist-more-btn');
  if (!targetEl) return;

  renderArtistModal(targetEl.dataset.artistsId);
};

// Modal Handlers
//! ============================================================================
export function openArtistModal() {
  scrollY = window.scrollY;

  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';
  document.body.classList.add('scroll-lock');

  modalRefs.artistModalEl.classList.add('artist-modal--is-open');

  document.addEventListener('keydown', handleEscKeydown);
  window.addEventListener('resize', debouncedClamp);
  modalRefs.artistModalEl.addEventListener('click', handleArtistBackdropClick);
  modalRefs.closeArtistModalBtnEl.addEventListener('click', closeArtistModal);

  modalRefs.artistModalBodyEl.scrollTop = 0;
}

export function closeArtistModal() {
  modalRefs.artistModalEl.classList.remove('artist-modal--is-open');

  document.body.classList.remove('scroll-lock');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollY);

  modalRefs.artistModalInnerEl.innerHTML = '';

  document.removeEventListener('keydown', handleEscKeydown);
  window.removeEventListener('resize', debouncedClamp);
  modalRefs.artistModalEl.removeEventListener(
    'click',
    handleArtistBackdropClick
  );
  modalRefs.closeArtistModalBtnEl.removeEventListener(
    'click',
    closeArtistModal
  );
}

// ESC Key Handler
//! ============================================================================
function handleEscKeydown(e) {
  if (e.key === 'Escape') {
    closeArtistModal();
  }
}

// Backdrop Click Handler
//! ============================================================================
export function handleArtistBackdropClick(e) {
  if (e.target === modalRefs.artistModalEl) {
    closeArtistModal();
  }
}
