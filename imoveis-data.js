// --- DADOS DE TESTE (Se você não tem o imoveis-data.js, use este bloco temporariamente) ---
// Remova este bloco se você tiver o imoveis-data.js e o carrega antes.
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
        image: 'https://drive.google.com/file/d/14cBK_MU3hqEfS-cBQGOasFkidXtPMWU8/view?usp=sharing', 
        quartos: 0,
        banheiros: 0,
        vagas: 0,
        galeria: [
            'https://drive.google.com/file/d/14cBK_MU3hqEfS-cBQGOasFkidXtPMWU8/view?usp=sharing'
        ]
    }
];
window.imoveis = imoveis; // Torna o objeto acessível globalmente
// -----------------------------------------------------------------------------------


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
        toast.classList.remove('opacity-100');
        toast.classList.add('opacity-0', 'pointer-events-none');
    }, 3000);
}

// --- LÓGICA PRINCIPAL AJUSTADA ---

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const imovelId = urlParams.get('id');

    // Lógica do menu mobile (mantida)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    if (imovelId) {
        // Busca o imóvel pelo ID no objeto global 'imoveis'
        const imovel = window.imoveis ? window.imoveis.find(i => i.id === parseInt(imovelId)) : null;

        if (imovel) {
            // 1. CARREGA DADOS BÁSICOS
            document.getElementById('imovel-titulo-pagina').textContent = imovel.title;
            document.getElementById('imovel-titulo').textContent = imovel.title;
            document.getElementById('imovel-subtitulo').textContent = imovel.description;
            
            // Carrega o Código (usando 'codigoImovel' ou 'id' se não existir)
            document.getElementById('imovel-codigo').textContent = imovel.codigoImovel || imovel.id; 
            
            document.getElementById('imovel-preco').textContent = `R$ ${imovel.price.toLocaleString('pt-BR')}`;
            document.getElementById('imovel-descricao').textContent = imovel.fullDescription;


            // 2. LÓGICA DE EXIBIÇÃO/OCULTAÇÃO DE CARACTERÍSTICAS
            
            // Obtém a referência aos <li>s para manipulação da visibilidade
            const quartosLi = document.getElementById('imovel-quartos').closest('li');
            const banheirosLi = document.getElementById('imovel-banheiros').closest('li');
            const vagasLi = document.getElementById('imovel-vagas').closest('li');
            const areaLi = document.getElementById('li-area-total'); // Novo elemento

            // Oculta/Exibe Quartos
            document.getElementById('imovel-quartos').textContent = imovel.quartos;
            quartosLi.style.display = imovel.quartos > 0 ? 'flex' : 'none';

            // Oculta/Exibe Banheiros
            document.getElementById('imovel-banheiros').textContent = imovel.banheiros;
            banheirosLi.style.display = imovel.banheiros > 0 ? 'flex' : 'none';

            // Oculta/Exibe Vagas
            document.getElementById('imovel-vagas').textContent = imovel.vagas;
            vagasLi.style.display = imovel.vagas > 0 ? 'flex' : 'none';

            // Exibe Área Total (Sempre para Lotes/Imóveis com área definida)
            if (imovel.areaTotal) {
                document.getElementById('imovel-area-total').textContent = `${imovel.areaTotal} m²`;
                areaLi.style.display = 'flex';
            } else {
                areaLi.style.display = 'none';
            }

            // 3. CARREGA IMAGENS
            const imagemPrincipalContainer = document.getElementById('imovel-imagem-principal');
            imagemPrincipalContainer.innerHTML = `<img src="${imovel.image}" alt="${imovel.title}" class="w-full h-full object-cover rounded-lg cursor-pointer" onclick="openModal('${imovel.image}')">`;

            // Carrega Galeria
            const galeriaContainer = document.getElementById('imovel-galeria');
            galeriaContainer.innerHTML = '';
            imovel.galeria.forEach(imagemUrl => {
                const imgHtml = `<img src="${imagemUrl}" alt="Imagem do Imóvel" class="w-full h-24 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity" onclick="openModal('${imagemUrl}')">`;
                galeriaContainer.innerHTML += imgHtml;
            });

            // Aplica Máscara de Telefone
            const telefoneInput = document.getElementById('telefone');
            telefoneInput.addEventListener('input', function (e) {
                e.target.value = applyPhoneMask(e.target.value);
            });

        } else {
            // Imóvel não encontrado
            showToast('Imóvel não encontrado. Redirecionando...');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        }
    } else {
        // ID ausente
        window.location.href = 'index.html';
    }
});

// Função para copiar o código do imóvel (AGORA USA O ID 'imovel-codigo')
function copiarCodigo() {
    const codigo = document.getElementById('imovel-codigo').textContent;
    navigator.clipboard.writeText(codigo).then(() => {
        showToast('Código do imóvel copiado!');
    }).catch(err => {
        console.error('Erro ao copiar o código:', err);
    });
}

// --- LÓGICA DO LIGHTBOX ---
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModalBtn = document.getElementById('close-modal-btn');

function openModal(imageUrl) {
    modalImage.src = imageUrl;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target.id === 'image-modal') {
        closeModal();
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('opacity-100')) {
        closeModal();
    }
});

// --- LÓGICA DO FORMULÁRIO RETRÁTIL ---
const formularioHeader = document.getElementById('formulario-header');
const formularioContent = document.getElementById('formulario-content');
const arrowIcon = document.getElementById('arrow-icon');
        
formularioHeader.addEventListener('click', () => {
    const isExpanded = formularioContent.style.maxHeight;

    if (isExpanded && isExpanded !== '0px') {
        formularioContent.style.maxHeight = '0px';
        arrowIcon.classList.remove('rotate-180');
        formularioHeader.setAttribute('aria-expanded', 'false');
    } else {
        formularioContent.style.maxHeight = formularioContent.scrollHeight + "px";
        arrowIcon.classList.add('rotate-180');
        formularioHeader.setAttribute('aria-expanded', 'true');
    }
});

const form = document.getElementById('formulario-contato');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome-completo').value;
    const telefone = document.getElementById('telefone').value;
    const mensagemAdicional = document.getElementById('mensagem').value;
    // Pega o código do novo ID
    const imovelCodigo = document.getElementById('imovel-codigo').textContent; 
    const imovelTitulo = document.getElementById('imovel-titulo').textContent;
    const numeroWhatsApp = '5531999990005'; 

    let textoWhatsApp = `Olá, meu nome é *${nome}*.`;
            
    if (telefone.trim() !== '') {
        textoWhatsApp += ` Meu telefone é ${telefone}.`;
    }

    textoWhatsApp += ` Tenho interesse no imóvel de código *${imovelCodigo} - ${imovelTitulo}*.`;
            
    if (mensagemAdicional.trim() !== '') {
        textoWhatsApp += `\n\n${mensagemAdicional}`;
    }

    const mensagemCodificada = encodeURIComponent(textoWhatsApp);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
            
    window.open(urlWhatsApp, '_blank');
});

