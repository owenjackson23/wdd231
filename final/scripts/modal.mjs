export const modal = document.getElementById('confirm-modal');
const closeModal = document.getElementById('close-modal');

export function modalHandling() {
    closeModal.addEventListener('click', () => {
        modal.close();
    });
}