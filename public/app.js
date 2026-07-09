const uploadBox = document.querySelector(".upload-box");
const fileInput = document.querySelector('input[type="file"]');

uploadBox.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        uploadBox.innerHTML = `
            <div class="upload-icon">✅</div>
            <h3>${fileInput.files[0].name}</h3>
            <span>Redo att skickas</span>
        `;
    }
});
