const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

// 1. Sayfa yüklendiğinde LocalStorage'dan verileri çek ve form alanlarını doldur
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
    try {
        const parsedData = JSON.parse(savedData);
        // Form elemanlarına değerleri ata (boşlukları temizleyerek)
        form.elements.email.value = parsedData.email?.trim() || "";
        form.elements.message.value = parsedData.message?.trim() || "";
    } catch (error) {
        console.error("JSON Parse Error: ", error);
    }
}

// 2. Event Delegation kullanarak input olayını dinle
form.addEventListener('input', (event) => {
    // Sadece email ve message inputlarını takip et
    const { name, value } = event.target;

    if (name === "email" || name === "message") {
        // Mevcut state'i al veya boş obje oluştur
        const currentState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

        // Değişen alanı güncelle (kenar boşluklarını silerek kaydet)
        currentState[name] = value.trim();

        // LocalStorage'a kaydet
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
    }
});

// 3. Form gönderildiğinde yapılacak işlemler
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    // Mentorun beklediği kontrol: Alanlar boş mu?
    if (email === "" || message === "") {
        return alert("All form fields must be filled in");
    }

    // Konsola yazdırılacak veri objesi
    const formData = { email, message };
    console.log("Form Data Submitted:", formData);

    // Temizlik: Hafızayı sil ve formu sıfırla
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});