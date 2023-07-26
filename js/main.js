document.addEventListener('DOMContentLoaded', function () {
    const inputName = document.getElementById('name');
    const enviarButton = document.getElementById('enviar');
    const inputMyName = document.getElementById('myName');
    const inputCidade = document.getElementById('cidade');
    const inputPais = document.getElementById('pais');
    const inputMessage = document.getElementById('message');
    const copyButton = document.getElementById('copyButton');
    const copyStatus = document.getElementById('copyStatus');

    enviarButton.addEventListener('click', function () {
        const studentName = inputName.value;
        const myName = inputMyName.value;
        const cidade = inputCidade.value;
        const pais = inputPais.value;

        if (studentName.trim() !== '') {
            const mensagem = `Olá, ${studentName}. Meu nome é ${myName}, de ${cidade}, ${pais}, e sou Peer Mentor na BYU-Pathway Worldwide. Já faz um ou dois semestres desde que você frequentou e estou entrando em contato para saber mais sobre seus planos no futuro quando se trata de estudo. As inscrições já estão abertas. Você está interessado em voltar neste Fall Semester ou em um futuro próximo?`;
            inputMessage.value = mensagem;
        } else {
            inputMessage.value = 'Por favor, insira o nome do aluno antes de enviar.';
        }
    });

    copyButton.addEventListener('click', function () {
        inputMessage.select();
        document.execCommand('copy');

        // Exibir o status de cópia por 3 segundos e depois esconder novamente
        copyStatus.style.display = 'block';
        setTimeout(function () {
            copyStatus.style.display = 'none';
        }, 3000);
    });
});
