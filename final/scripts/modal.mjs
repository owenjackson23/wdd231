export const modal = document.getElementById('confirm-modal');
const openModal = document.querySelector('.open-modal');
const confirm = document.getElementById('confirm-modal');
const closeModal = document.getElementById('close-modal');

export function modalHandling() {
    openModal.addEventListener('click', () => {
        modal.showModal();
    });

    closeModal.addEventListener('click', () => {
        modal.close();
    });
    confirm.addEventListener('click', () => {
        modal.close();
    });
}