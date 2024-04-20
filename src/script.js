// Função para abrir um arquivo PDF
function abrirPDF() {
    // Cria um input para selecionar o arquivo
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/pdf';

    // Adiciona um evento de alteração para lidar com o arquivo selecionado
    input.addEventListener('change', function () {
        const file = input.files[0];
        if (file) {
            // Cria um FileReader para ler o arquivo
            const reader = new FileReader();
            reader.onload = function (event) {
                // Cria um elemento <embed> para exibir o PDF
                const embed = document.createElement('embed');
                embed.src = event.target.result;
                embed.width = '100%';
                embed.height = '600px';
                embed.type = 'application/pdf';

                // Adiciona o elemento ao contêiner de PDF
                const pdfContainer = document.getElementById('pdfContainer');
                pdfContainer.innerHTML = '';
                pdfContainer.appendChild(embed);

                // Lê o conteúdo do PDF em voz alta
                lerPDF(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Simula um clique no input de arquivo
    input.click();
}

// Função para ler o conteúdo de um PDF em voz alta
function lerPDF(pdfData) {
    // Converte os dados do PDF para uma URL de objeto
    const pdfURL = URL.createObjectURL(pdfData);
    // Cria um novo objeto SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance();
    // Define a URL do PDF como texto a ser lido
    utterance.text = pdfURL;
    // Fala o texto
    window.speechSynthesis.speak(utterance);
}
