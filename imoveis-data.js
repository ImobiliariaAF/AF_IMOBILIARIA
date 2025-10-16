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
        image: 'https://drive.google.com/uc?export=view&id=1-nRG9cZvn369KZ0RRfkXnv1KyPbXStHS',
        
        // GALERIA mantida com os links do Google Drive
        galeria: [
            'https://drive.google.com/uc?export=view&id=1-nRG9cZvn369KZ0RRfkXnv1KyPbXStHS',
            'https://drive.google.com/uc?export=view&id=1UUlDGjpLECi4IC-mNdKx-FMu_ammeAMw',
            'https://drive.google.com/uc?export=view&id=13DeU4aN2-yD7E4icAmBiBx7nvZ-JNFYP',
            'https://drive.google.com/uc?export=view&id=1rJtN_7yzSVOPKZkrEoP_nnMurm5I0bA1',
            'https://drive.google.com/uc?export=view&id=1985o7uejb-gPS_0fxzoqmKTVx85pICGg',
            'https://drive.google.com/uc?export=view&id=1DKy7ncjLLIxNvOBcQmfca1-I_Mh4Ri-b',
            'https://drive.google.com/uc?export=view&id=1PKP802-cRLnM4JEBjb-UsQAj67ixdxH-',
            'https://drive.google.com/uc?export=view&id=1WOgyhLGg3GnIwEySbtrBDWJgiLjzNFfR',
            'https://drive.google.com/uc?export=view&id=1vrZeU6OeYOEALdMaf-0Cz4IlKlaOBw1l',
            'https://drive.google.com/uc?export=view&id=1nCIc_a1AwkNVA5oiUvgeh0nJIzBqTnrX'
        ]
    },
    // Adicione mais imóveis aqui, lembrando de usar isFeatured: true ou false
];
// A remoção da linha 'window.imoveis = imoveis;' está feita, pois o script já a carrega.
















