// imoveis-data.js

// Importante: Todos os campos numéricos (quartos, banheiros, vagas, areaTotal, price) 
// devem ser definidos como números (Number) para o filtro funcionar corretamente.

const imoveis = [
    {
        id: 1, 
        codigoImovel: 'LOTE-001', 
        title: 'Lote Exclusivo - Condomínio GreenField', 
        type: 'terreno', 
        address: 'Rua das Palmeiras, 100 - GreenField',
        description: '360m² para construir AGORA. Potencial máximo, investimento CERTO.',
        fullDescription: 'Uma oportunidade imperdível para quem busca espaço e as dimensões ideais para construir. Este lote possui 360 metros quadrados, em uma área plana, pronto para você dar vida ao seu projeto residencial ou de investimento. Próximo à área de lazer.',
        price: 470000,
        areaTotal: 360, 
        quartos: 0, 
        banheiros: 0, 
        vagas: 0, 
        image: 'https://drive.google.com/uc?export=view&id=14cBK_MU3hqEfS-cBQGOasFkidXtPMWU8',
        galeria: ['https://drive.google.com/uc?export=view&id=14cBK_MU3hqEfS-cBQGOasFkidXtPMWU8']
    },
];

// Define a variável global que é usada pelo script em imoveis.html
window.imoveis = imoveis;



