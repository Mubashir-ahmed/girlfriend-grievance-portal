function toggleCustomInput() {
    const select = document.getElementById('priority');
    const customInput = document.getElementById('custom-input');
    customInput.style.display = select.value === 'other' ? 'block' : 'none';
}