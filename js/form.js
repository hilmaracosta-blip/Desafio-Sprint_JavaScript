
//class contato

class contato {
    
}

function Post(form) {
    const formData = new FormData(form);
    const dados = Object.fromEntries(formData.entries());
    
    console.log("Dados do Formulário:", dados);
    alert("Mensagem enviada com sucesso, " + dados.nome + "!");
    form.reset();
}

window.onload = function() {
    const btn = document.getElementById("enviarBtn");
    if (btn) {
        btn.onmouseover = () => {
            btn.style.transform = "scale(1.1)";
            btn.style.backgroundColor = "#003478";
            btn.style.transition = "0.3s";
        };
        btn.onmouseout = () => {
            btn.style.transform = "scale(1.0)";
            btn.style.backgroundColor = "";
        };
    }
};