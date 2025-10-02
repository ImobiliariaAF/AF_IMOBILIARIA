// imoveis-data.js

const imoveis = [
    {
        id: 1, 
        codigoImovel: 'LOTE-1', 
        title: 'Lote - 360m²', 
        // 🚨 CRÍTICO: O filtro do seu HTML espera o valor 'terreno'.
        type: 'terreno', 
        description: '360m² para construir AGORA. Potencial máximo, investimento CERTO.',
        fullDescription: 'Descrição completa do lote...',
        price: 470000,
        areaTotal: 360, 
        image: 'url_da_imagem_principal_do_lote', 
        // 🚨 CRÍTICO: Devem ser definidos como NÚMEROS (zero)
        quartos: 0,        
        banheiros: 0,      
        vagas: 0,          
        galeria: []
    },
    // ... outros imóveis ...
];

window.imoveis = imoveis;
