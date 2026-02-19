// Inputları seçiyoruz
const nameInput = document.getElementById("nameInput");
const roleInput = document.getElementById("roleInput");
const bioInput = document.getElementById("bioInput");

// Karttaki alanları seçiyoruz
const namePreview = document.getElementById("namePreview");
const rolePreview = document.getElementById("rolePreview");
const bioPreview = document.getElementById("bioPreview");

// Name yazınca değişsin
nameInput.addEventListener("input", function () {
  namePreview.textContent = nameInput.value;
});

// Role yazınca değişsin
roleInput.addEventListener("input", function () {
  rolePreview.textContent = roleInput.value;
});

// Bio yazınca değişsin
bioInput.addEventListener("input", function () {
  bioPreview.textContent = bioInput.value;
});
