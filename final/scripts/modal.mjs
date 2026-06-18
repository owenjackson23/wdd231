const modal = document.getElementById('modalTest');
const closeModal = document.getElementById('closeModal');

export function modalHandling() {
    modal.showModal();

    closeModal.addEventListener('click', () => {
        modal.closest();
    });
}