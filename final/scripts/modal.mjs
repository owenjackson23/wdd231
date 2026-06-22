export const modal = document.getElementById('book-modal');
const closeModal = document.getElementById('book-vacation');

export function modalHandling() {
    closeModal.addEventListener('click', () => {
        modal.close();
    });
}