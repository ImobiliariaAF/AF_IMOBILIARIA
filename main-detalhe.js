// main-detalhe.js

// --- FUNÇÕES DE UTILIDADE ---

function applyPhoneMask(value) {
    value = value.replace(/\D/g, "");
    if (value.length > 0) {
        value = "(" + value;
    }
    if (value.length > 3) {
        value = value.substring(0, 3) + ") " + value.substring(3);
    }
    // Suporta 8 ou 9 dígitos (9999-9999 ou 99999-9999)
    if (value.length > 10) {
        value = value.substring(0, 10) + "-" + value.substring(10, 15);
    }
    return value;
}

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.remove('opacity-0', 'pointer-events-none');
    toast.classList.add('opacity-100');

    setTimeout(() => {
        toast.classList.remove('opacity-100');
        toast.classList.add('opacity-0', 'pointer-events-none');
    }, 3000);
}

// --- FUNÇÃO PARA TROCAR A IMAGEM PRINCIPAL ---
// ❌ REMOVIDA A EXPORTAÇÃO GLOBAL E A CHAMADA DESTA FUNÇÃO PELA GALERIA
// (Mantida aqui apenas se o código principal a chamar em outro lugar, mas inativa para a galeria)
function changeMainImage(imageUrl) {
    // Esta função NÃO É MAIS USADA PELO CLIQUE NAS MINIATURAS DA GALERIA.
    // O clique agora chama openModal() diretamente.
    const mainImgElement = document.getElementById('main-image-element');
    if (mainImgElement) {
        mainImgElement.src = imageUrl;
        mainImgElement.onclick = () => openModal(imageUrl);
    }
}
// window.changeMainImage = changeMainImage; // NÃO TORNAMOS MAIS ACESSÍVEL GLOBALMENTE SE NÃO FOR USAR

// --- LÓGICA DO LIGHTBOX (Modal de Imagem) ---
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModalBtn = document.getElementById('close-modal-btn');

function openModal(imageUrl) {
    if (!modal || !modalImage) return;
    modalImage.src = imageUrl;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

window.openModal = openModal; // Torna a função acessível no onclick do HTML

function closeModal() {
    if (!modal) return;
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
}

if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (modal) {
    modal.addEventListener('click', (e) => {
        // Se clicar no fundo escuro (o próprio modal div), fecha
        if (e.target.id === 'image-modal') {
            closeModal();
        }
    });
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('opacity-100')) {
        closeModal();
    }
});


// --- LÓGICA PRINCIPAL: CARREGAMENTO DO IMÓVEL ---

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const imovelId = urlParams.get('id');

    // Lógica do menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            mobileMenuButton.setAttribute('aria-expanded', !isHidden);
        });
    }

    if (imovelId) {
        const imovel = window.imoveis ? 
                         window.imoveis.find(i => String(i.id) === imovelId || String(i.codigoImovel) === imovelId) 
                         : null;

        if (imovel) {
            // 1. CARREGA DADOS BÁSICOS
            document.title = imovel.title + ' - AF Imobiliária';
            document.getElementById('imovel-titulo').textContent = imovel.title;
            document.getElementById('imovel-subtitulo').textContent = imovel.description;
            
            document.getElementById('imovel-codigo').textContent = imovel.codigoImovel || imovel.id; 
            
            // Formata o preço
            document.getElementById('imovel-preco').textContent = `R$ ${imovel.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            document.getElementById('imovel-descricao').innerHTML = String(imovel.fullDescription || imovel.description).replace(/\n/g, '<br>');

            // 2. LÓGICA DE VISIBILIDADE DE CARACTERÍSTICAS (mantida igual, está correta)
            
            const quartosLi = document.getElementById('imovel-quartos').closest('li');
            const banheirosLi = document.getElementById('imovel-banheiros').closest('li');
            const vagasLi = document.getElementById('imovel-vagas').closest('li');
            const areaLi = document.getElementById('li-area-total'); 

            document.getElementById('imovel-quartos').textContent = imovel.quartos || 0;
            const isNotTerreno = (String(imovel.type).toLowerCase() !== 'terreno' && String(imovel.type).toLowerCase() !== 'lote');
            quartosLi.style.display = (imovel.quartos && imovel.quartos > 0) || (isNotTerreno && imovel.quartos === 0) ? 'flex' : 'none';

            document.getElementById('imovel-banheiros').textContent = imovel.banheiros || 0;
            banheirosLi.style.display = (imovel.banheiros && imovel.banheiros > 0) || (isNotTerreno && imovel.banheiros === 0) ? 'flex' : 'none';

            document.getElementById('imovel-vagas').textContent = imovel.vagas || 0;
            vagasLi.style.display = (imovel.vagas && imovel.vagas > 0) || (isNotTerreno && imovel.vagas === 0) ? 'flex' : 'none';

            if (imovel.areaTotal && imovel.areaTotal > 0) {
                document.getElementById('imovel-area-total').textContent = `${imovel.areaTotal} m²`;
                areaLi.style.display = 'flex';
            } else {
                areaLi.style.display = 'none';
            }

            // 3. CARREGA IMAGENS 
            
            const imagemPrincipalContainer = document.getElementById('imovel-imagem-principal');
            
            // 💡 Imagem Principal: Fica FIXA e abre o Modal dela mesma.
            imagemPrincipalContainer.innerHTML = `<img id="main-image-element" src="${imovel.image}" alt="${imovel.title}" class="w-full h-full object-cover rounded-lg cursor-pointer" onclick="openModal('${imovel.image}')">`;

            // Carrega Galeria (Miniaturas)
            const galeriaContainer = document.getElementById('imovel-galeria');
            galeriaContainer.innerHTML = '';

            let allImages = (imovel.galeria || []);
            // Garantir que a imagem principal esteja na lista da galeria, se não estiver
            if (!allImages.includes(imovel.image)) {
                allImages.unshift(imovel.image);
            }
            
            // 🔑 LÓGICA CORRIGIDA: Miniatura chama openModal() diretamente
            allImages.forEach(imagemUrl => {
                const imgHtml = `
                    <img src="${imagemUrl}" 
                         alt="Imagem da Galeria" 
                         class="w-full h-24 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity" 
                         onclick="openModal('${imagemUrl}')"> 
                `; // 👈 AGORA ABRE O MODAL DIRETAMENTE
                galeriaContainer.innerHTML += imgHtml;
            });
            
            // 4. PREPARA O FORMULÁRIO (mantido igual, está correta)
            
            const telefoneInput = document.getElementById('telefone');
            if (telefoneInput) {
                telefoneInput.addEventListener('input', function (e) {
                    e.target.value = applyPhoneMask(e.target.value);
                });
            }
            
            const formTitle = document.getElementById('form-title-code');
            if (formTitle) {
                formTitle.textContent = `#${imovel.codigoImovel || imovel.id}`;
            }

        } else {
            // Imóvel não encontrado (Redirecionamento)
            console.error("ERRO: Imóvel com ID/Código:", imovelId, "não foi encontrado.");
            showToast('Imóvel não encontrado. Redirecionando...');
            setTimeout(() => {
                window.location.href = 'imoveis.html';
            }, 1500);
        }
    } else {
        // ID ausente (Redirecionamento)
        window.location.href = 'imoveis.html';
    }
});

// Função para copiar o código do imóvel
function copiarCodigo() {
    const codigo = document.getElementById('imovel-codigo').textContent;
    navigator.clipboard.writeText(codigo).then(() => {
        showToast('Código do imóvel copiado!');
    }).catch(err => {
        console.error('Erro ao copiar o código:', err);
        showToast('Falha ao copiar. Tente manualmente.');
    });
}
window.copiarCodigo = copiarCodigo; // Torna a função acessível no HTML


// --- LÓGICA DO FORMULÁRIO RETRÁTIL (mantida igual, está correta) ---
const formularioHeader = document.getElementById('formulario-header');
const formularioContent = document.getElementById('formulario-content');
const arrowIcon = document.getElementById('arrow-icon');
        
if (formularioHeader && formularioContent) {
    formularioHeader.addEventListener('click', () => {
        const isExpanded = formularioHeader.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            formularioContent.style.maxHeight = '0px';
            arrowIcon.classList.remove('rotate-180');
            formularioHeader.setAttribute('aria-expanded', 'false');
        } else {
            formularioContent.style.maxHeight = formularioContent.scrollHeight + "px";
            arrowIcon.classList.add('rotate-180');
            formularioHeader.setAttribute('aria-expanded', 'true');
        }
    });
}


const form = document.getElementById('formulario-contato');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome-completo').value;
        const telefone = document.getElementById('telefone').value;
        const mensagemAdicional = document.getElementById('mensagem').value;
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
        showToast('Redirecionando para o WhatsApp...');
    });
}
