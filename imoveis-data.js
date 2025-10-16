// imoveis-data.js

// Importante: Todos os campos numéricos (quartos, banheiros, vagas, areaTotal, price, suites)
// devem ser definidos como números (Number) para o filtro funcionar corretamente.

const imoveis = [
    {
        id: 1,
        codigoImovel: 'LOTE-001',
        title: 'Lote Exclusivo - 360m² no Centro',
        type: 'terreno',
        address: 'Centro, Loteamento Novo',
        description: '360m² para construir AGORA. Potencial máximo, investimento CERTO.',
        fullDescription: 'Uma oportunidade imperdível para quem busca espaço e as dimensões ideais para construir. Este lote possui 360 metros quadrados, em uma área plana, pronto para você dar vida ao seu projeto residencial ou de investimento.',
        price: 470000,
        areaTotal: 360,
        quartos: 0,
        banheiros: 0,
        vagas: 0,
        suites: 0,

        // 🟢 ADICIONADO: Marcado como destaque para aparecer na página inicial
        isFeatured: true, 
        
        // Caminho Relativo (Assumindo que esta imagem está no seu repositório GitHub)
        image: 'Imagens/Lote - Rua Camilo/IMG-20251002-WA0038.jpg',
        galeria: ['Imagens/Lote - Rua Camilo/IMG-20251002-WA0038.jpg']
    },
    {
        id: 2,
        codigoImovel: 'CASA-002',
        title: 'Casa Duplex no Bairro Industrial',
        type: 'casa',
        address: 'Bairro Industrial',
        description: 'Moderna e Imponente! Casa duplex com arquitetura aberta, muita luz e amplitude.',
        fullDescription: 'Casa de dois andares em meio lote, projetada para o seu conforto. Possui 2 quartos, incluindo 1 suíte, e 2 banheiros no total. Aproveite a varanda ampla para lazer e descanso. Localização estratégica e muito espaço!',
        price: 450000,
        areaTotal: 180, 
        quartos: 2,
        suites: 1,
        banheiros: 2,
        vagas: 2,

        // 🟢 ADICIONADO: Marcado como destaque para aparecer na página inicial
        isFeatured: true, 

        // Mantido o link do Google Drive no formato de visualização direta
        image: 'Imagens/Casa - bairro industrial/IMG-20251009-WA0006.jpg', // Usando a primeira imagem como principal
        
        galeria: [
            'Imagens/Casa - bairro industrial/IMG-20251009-WA0006.jpg',
            'Imagens/Casa - bairro industrial/IMG-20251009-WA0008.jpg',
            'Imagens/Casa - bairro industrial/IMG-20251009-WA0009.jpg',
            'Imagens/Casa - bairro industrial/IMG-20251009-WA0010.jpg',
            'Imagens/Casa - bairro industrial/IMG-20251009-WA0011.jpg',
            'Imagens/Casa - bairro industrial/IMG-20251009-WA0012.jpg',
            'Imagens/Casa - bairro industrial/IMG-20251009-WA0013.jpg',
            'Imagens/Casa - bairro industrial/IMG-20251009-WA0014.jpg',
            'Imagens/Casa - bairro industrial/IMG-20251009-WA0015.jpg',
            'Imagens/Casa - bairro industrial/IMG-20251009-WA0016.jpg',
            'Imagens/Casa - bairro industrial/IMG-20251009-WA0018.jpg',
            'Imagens/Casa - bairro industrial/IMG-20251009-WA0019.jpg',
            'Imagens/Casa - bairro industrial/IMG-20251009-WA0020.jpg'
        ]
    },
    // Adicione mais imóveis aqui, lembrando de usar isFeatured: true ou false
];
// A remoção da linha 'window.imoveis = imoveis;' está feita, pois o script já a carrega.

















