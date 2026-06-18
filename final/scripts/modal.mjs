export const modal = document.getElementById('modalTest');
const closeModal = document.getElementById('closeModal');

export function modalHandling() {
    closeModal.addEventListener('click', () => {
        modal.close();
    });
}