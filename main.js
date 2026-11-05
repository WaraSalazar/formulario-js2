//1º PASSO - CAPTURA O FORMULARIO NO HTML

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(event) {

    event.preventDefault()

    // CAMTURAR OS VALURES DIGITADOS PELO USUÁRIO

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const cargo = document.getElementById("cargo").value
    const mensagen = document.getElementById("mensagen").value

    if(telefone.trim() === "" ){
        alert("Digite seu nome")
        return
    }

    const textoWhatsapp = `
    Olá! Gostaria realizar a minha devuloção o meu Reubolso
    Nome:${nome}
    E-mail:${email}
    Telefone:${telefone}
    Cargo:${cargo}
    Observações:${mensagen}
    `
    const mensagenCodificada = encodeURIComponent(textoWhatsapp)

    //NUMERO WHATSAPP

    const numeroWhatsapp = "5511992171649"

    //MOSTRA O LINK WHATSAPP

    const link = "https://wa.me/" + numeroWhatsapp + "?text=" + mensagenCodificada

    window.location.href = link
})