const uploadBox = document.querySelector(".upload-box");
const fileInput = document.querySelector('input[type="file"]');

uploadBox.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", async () => {

    if (fileInput.files.length === 0) return;

    const file = fileInput.files[0];

    uploadBox.innerHTML = `
        <div class="upload-icon">⏳</div>
        <h3>Läser PDF...</h3>
        <span>Vänta några sekunder</span>
    `;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/tolka", {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    const text = result.content?.[0]?.text || "Inget svar från Claude";

    uploadBox.innerHTML = `
        <div class="upload-icon">✅</div>
        <h3>Klar!</h3>
        <span>${text}</span>
    `;

});
