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
    createTheme('Atendente analisando gráficos', backgroundGiz),
    createTheme('Atendente analisando gráficos', backgroundAtendenteComPlanilha),
    createTheme('Atendente analisando gráficos', backgroundAtendenteSegurandoRedset),
    createTheme('Atendente analisando gráficos', backgroundAtendneteEmFrenteAJanela),
    createTheme('Atendente analisando gráficos', backgroundEmpresariosSeCumprimentando),
    createTheme('Atendente analisando gráficos', backgroundMicrofones),
];

export default themes;