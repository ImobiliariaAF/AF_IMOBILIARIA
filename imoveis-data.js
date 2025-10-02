// ====================================================================
// === DADOS DE TESTE (Bloco temporário - Mantenha este bloco) ===
// Ele garante que a página não quebre se o arquivo de dados externo falhar.
// Se você tem um arquivo "imoveis-data.js", certifique-se que ele define
// uma variável global 'imoveis' ou use o window.imoveis abaixo.
// ====================================================================
const imoveis = [
    {
        id: 1, 
        codigoImovel: 'LOTE-1', 
        title: 'Lote - 360m²', 
        type: 'Lote', 
        description: '360m² para construir AGORA. Potencial máximo, investimento CERTO.',
        fullDescription: 'Oportunidade única: Lote de 360 m². Metragem padrão (12x30m), garantindo excelente aproveitamento do terreno para construção. Documentação regularizada e pronto para construir.',
        price: 470000,
        areaTotal: 360, 
        image: 'https://via.placeholder.com/600x400?text=Lote+360m+Principal', 
        quartos: 0,
        banheiros: 0,
        vagas: 0,
        galeria: [
            'https://via.placeholder.com/200x150?text=Lote+Vista+1',
            'https://via.placeholder.com/200x150?text=Lote+Vista+2'
        ]
    },
    {
        id: 2, 
        codigoImovel: 'CASA-456', 
        title: 'Casa Luxuosa com 3 Quartos e Piscina', 
        type: 'Casa', 
        description: '3 quartos, 2 suítes. O conforto e o luxo que sua família merece.',
        fullDescription: 'Residência de alto padrão com acabamentos em porcelanato, área gourmet completa e piscina com borda infinita. O imóvel ideal para quem busca exclusividade e lazer.',
        price: 1500000,
        areaTotal: 280, 
        image: 'https://via.placeholder.com/600x400?text=Casa+Principal', 
        quartos: 3,
        banheiros: 4,
        vagas: 2,
        galeria: [
            'https://via.placeholder.com/200x150?text=Piscina',
            'https://via.placeholder.com/200x150?text=Sala',
            'https://via.placeholder.com/200x150?text=Suite'
        ]
    }
];
// Esta linha torna a lista de imóveis acessível globalmente, fundamental para o find()
window.imoveis = imoveis; 
// ====================================================================


// --- FUNÇÕES DE UTILIDADE ---

function applyPhoneMask(value) {
    value = value.replace(/\D/g, "");
    if (value.length > 0) {
        value = "(" + value;
    }
    if (value.length > 3) {
        value = value.substring(0, 3) + ") " + value.substring(3);
    }
    if (value.length > 10) {
        value = value.substring(0, 10) + "-" + value.substring(10, 15);
    }
    return value;
}

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    toast.textContent = message;
    toast.classList.remove('opacity-0', 'pointer-events-none');
    toast.classList.add('opacity-100');

    setTimeout(() => {
        toast.classList.remove('opacity-100

