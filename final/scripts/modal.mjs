export const modal = document.getElementById('bookModal');
const closeModal = document.getElementById('closeModal');

export function modalHandling() {
    closeModal.addEventListener('click', () => {
        modal.close();
    });
}