// Importando imagens de fundo 
import backgroundGiz from './assets/backgrounds/Giz.png';
import backgroundAtendenteComPlanilha from './assets/backgrounds/Atendente com planilha.png';
import backgroundAtendenteSegurandoRedset from './assets/backgrounds/Atendente segurando redset.png';
import backgroundAtendneteEmFrenteAJanela from './assets/backgrounds/Atendnete em frente a janela.png';
import backgroundEmpresariosSeCumprimentando from './assets/backgrounds/Empresarios se cumprimentando.png';
import backgroundMicrofones from './assets/backgrounds/Microfones.png';


// Função para criar temas
const createTheme = (description, image) => ({ description, image });

// Lista de plano de fundo
const themes = [
    createTheme('Parede com Giz', backgroundGiz),
    createTheme('Atendente com planilha', backgroundAtendenteComPlanilha),
    createTheme('Atendente segurando redset', backgroundAtendenteSegurandoRedset),
    createTheme('Atendente em frente a janela', backgroundAtendneteEmFrenteAJanela),
    createTheme('Empresários se cumprimentando', backgroundEmpresariosSeCumprimentando),
    createTheme('Microfones', backgroundMicrofones),
];

export default themes;