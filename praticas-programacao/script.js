const btn = document.getElementById("btn"); // variável que armazena o id do <button>
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  btn.classList.toggle("dark-mode");

  text.textContent = "Tema: Modo Claro";
  if (document.body.classList.contains("dark-mode"))
    return (text.textContent = "Tema: Modo Escuro");
});
