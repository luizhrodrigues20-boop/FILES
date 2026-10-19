
/*
  Atividade: Organização de arquivos da faculdade
  Objetivo: Filtrar arquivos por extensão, prefixo e nome.
*/

// Array com 12 nomes de arquivos
const arquivos = [
    "foto_turma.png",
    "foto_evento.jpg",
    "foto_formatura.png",
    "relatorio_2026.pdf",
    "trabalho_final.pdf",
    "resumo_aula.pdf",
    "apresentacao_seminario.pptx",
    "projeto_javascript.js",
    "codigo_exemplo.js",
    "planilha_notas.xlsx",
    "anotacoes.txt",
    "documento_estagio.docx"
];

// Filtra os arquivos que terminam com ".pdf"
// O endsWith() verifica a extensão e o filter() seleciona os arquivos correspondentes.
const arquivosPDF = arquivos.filter(arquivo => arquivo.endsWith(".pdf"));

console.log("Arquivos PDF:", arquivosPDF);

// Filtra os arquivos que começam com "foto"
// O startsWith() verifica o prefixo e o filter() cria uma nova lista.
const arquivosFoto = arquivos.filter(arquivo => arquivo.startsWith("foto"));

console.log("Arquivos que começam com 'foto':", arquivosFoto);

// Verifica se existe um arquivo com o nome exato na lista
// O includes() retorna true se o nome estiver no array e false caso contrário.
const existeArquivo = arquivos.includes("trabalho_final.pdf");

console.log("O arquivo trabalho_final.pdf existe?", existeArquivo);

// Verifica também um arquivo que não está na lista
const arquivoInexistente = arquivos.includes("trabalho_antigo.pdf");

console.log("O arquivo trabalho_antigo.pdf existe?", arquivoInexistente);