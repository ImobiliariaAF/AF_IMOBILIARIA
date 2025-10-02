// imoveis-data.js

const imoveis = [
    {
        id: 1, 
        codigoImovel: '1', 
        title: 'Lote - 360m²', 
        // 🚨 CRÍTICO: O filtro do seu HTML espera o valor 'terreno'.
        type: 'terreno', 
        description: '360m² para construir AGORA. Potencial máximo, investimento CERTO.',
        fullDescription: 'Uma oportunidade imperdível para quem busca espaço e as dimensões ideais para construir. Este lote possui 360 metros quadrados, oferecendo uma tela em branco para você dar vida ao seu projeto residencial ou de investimento.',
        price: 470000,
        areaTotal: 360, 
        image: 'https://drive.google.com/file/d/14cBK_MU3hqEfS-cBQGOasFkidXtPMWU8/view?usp=sharing', 
        // 🚨 CRÍTICO: Devem ser definidos como NÚMEROS (zero)
        quartos: 0,        
        banheiros: 0,      
        vagas: 0,          
        galeria: [https://drive.google.com/file/d/14cBK_MU3hqEfS-cBQGOasFkidXtPMWU8/view?usp=sharing]
    },
    // ... outros imóveis ...
];

window.imoveis = imoveis;


