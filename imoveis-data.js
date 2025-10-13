// imoveis-data.js

// Importante: Todos os campos numéricos (quartos, banheiros, vagas, areaTotal, price, suites)
// devem ser definidos como números (Number) para o filtro funcionar corretamente.

const imoveis = [
    {
        id: 1,
        codigoImovel: 'LOTE-001',
        title: 'Lote Exclusivo - 360m²',
        type: 'terreno',
        address: '-',
        description: '360m² para construir AGORA. Potencial máximo, investimento CERTO.',
        fullDescription: 'Uma oportunidade imperdível para quem busca espaço e as dimensões ideais para construir. Este lote possui 360 metros quadrados, em uma área plana, pronto para você dar vida ao seu projeto residencial ou de investimento.',
        price: 470000,
        areaTotal: 360,
        quartos: 0,
        banheiros: 0,
        vagas: 0,
        suites: 0, // Adicionado para consistência
        image: 'https://drive.google.com/uc?id=14cBK_MU3hqEfS-cBQGOasFkidXtPMWU8',
        galeria: ['https://drive.google.com/uc?id=14cBK_MU3hqEfS-cBQGOasFkidXtPMWU8']
    },
    {
        id: 2,
        codigoImovel: 'Casa no Bairro Industrial',
        title: 'Casa no Bairro Industrial',
        type: 'casa',
        address: 'Bairro Industrial',
        description: 'Moderna e Imponente! Casa duplex com arquitetura aberta, muita luz e amplitude. Um espaço sofisticado e arejado para viver com conforto',
        fullDescription: 'Casa de dois andares em meio lote, projetada para o seu conforto. Possui 2 quartos, incluindo 1 suíte, e 2 banheiros no total. Aproveite a varanda ampla para lazer e descanso. Localização estratégica e muito espaço!',
        price: 470000,
        areaTotal: 180, // CORRIGIDO: Agora é Number (180)
        quartos: 2,
        suites: 1,
        banheiros: 2,
        vagas: 2,
        image: 'https://drive.google.com/file/d/1-nRG9cZvn369KZ0RRfkXnv1KyPbXStHS/view?usp=sharing',
        galeria: ['https://drive.google.com/file/d/1-nRG9cZvn369KZ0RRfkXnv1KyPbXStHS/view?usp=sharing','https://drive.google.com/file/d/1UUlDGjpLECi4IC-mNdKx-FMu_ammeAMw/view?usp=sharing','https://drive.google.com/file/d/13DeU4aN2-yD7E4icAmBiBx7nvZ-JNFYP/view?usp=sharing','https://drive.google.com/file/d/1rJtN_7yzSVOPKZkrEoP_nnMurm5I0bA1/view?usp=sharing','https://drive.google.com/file/d/1985o7uejb-gPS_0fxzoqmKTVx85pICGg/view?usp=sharing','https://drive.google.com/file/d/1DKy7ncjLLIxNvOBcQmfca1-I_Mh4Ri-b/view?usp=sharing','https://drive.google.com/file/d/1PKP802-cRLnM4JEBjb-UsQAj67ixdxH-/view?usp=sharing','https://drive.google.com/file/d/1WOgyhLGg3GnIwEySbtrBDWJgiLjzNFfR/view?usp=sharing','https://drive.google.com/file/d/1vrZeU6OeYOEALdMaf-0Cz4IlKlaOBw1l/view?usp=sharing','https://drive.google.com/file/d/1nCIc_a1AwkNVA5oiUvgeh0nJIzBqTnrX/view?usp=sharing']
    },
];

// Define a variável global que é usada pelo script em imoveis.html
window.imoveis = imoveis;














