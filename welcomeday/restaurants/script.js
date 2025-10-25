const container = document.getElementById('reviewsContainer');
const template = document.getElementById('reviewTemplate');
template.removeAttribute('id');
for (let i = 0; i < 2; i++) {
    const clone = template.cloneNode(true);
    container.appendChild(clone);
}