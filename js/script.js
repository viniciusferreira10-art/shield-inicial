//const é para declarar uma variável constante, ou seja, vai se manter o mesmo valor durante a execução do código
const formulario = document.querySelector("#formulario"); //querySelector é um método que seleciona o primeiro elemento que corresponde a um seletor CSS especificado
function lerFormulario() {
    return { //função que lê o formulário
        codinome: formulario.querySelector("#codinome").value,
        nome: formulario.querySelector("#nome").value,
        idade: formulario.querySelector("#idade").value,
        poder: formulario.querySelector("#poder").value,
        ingresso: dados.ingresso,
        email: dados.email.trim().toLowerCase(), //trim() remove espaços em branco no início e no final da string, toLowerCase() transforma a string em minúscula
    };
    function captalizar(texto) {
        const palavras = texto.trim().toLowerCase().split(" "); //trim() remove espaços em branco no início e no final da string, toLowerCase() transforma a string em minúscula, split(" ") divide a string em um array de palavras
        const resultado = [];
        for (let palavra of palavras) { //for...of é um loop que percorre os elementos de um array
            if (palavra !== "")

            resultado.push(palavra.charAt(0).toUpperCase() + palavra.slice(1)); //charAt(0) retorna o primeiro caractere da string, toUpperCase() transforma a string em maiúscula, slice(1) retorna a string a partir do índice 1
}}
}
function tratar(dados) {
    return{
        codinome: captalizar(dados.codinome),
        nome: captalizar(dados.nome),
        idade: paraNumero(dados.idade), //Number() transforma a string em número
        poder: paraNumero(dados.poder),
        ingresso: dados.ingresso,
        email: dados.email.trim().toLowerCase(), //trim() remove espaços em branco no início e no final da string, toLowerCase() transforma a string em minúscula
    }

}
function validar(recruta) {
    if (recruta.codinome === "") {
        throw new Error("O codinome é obrigatório"); //throw lança um erro, que pode ser capturado pelo catch
    }
    if (recruta.nome === "") {
        throw new Error("O nome é obrigatório"); //throw lança um erro, que pode ser capturado pelo catch
    }
    if (!Number.isInteger(recruta.idade) || recruta.idade < 16 || recruta.idade > 120) { //isInteger() verifica se o valor é um número inteiro
        throw new Error("A idade é obrigatória"); //throw lança um erro, que pode ser capturado pelo catch
    }
    if (recruta.poder === "") {
        throw new Error("O poder é obrigatório"); //throw lança um erro, que pode ser capturado pelo catch
    }
    if (recruta.email === "") {
        throw new Error("O email é obrigatório"); //throw lança um erro, que pode ser capturado pelo catch
    }
}
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); //previne o comportamento padrão do formulário, que é enviar os dados e recarregar a página
    console.log(lerFormulario()); //imprime no console o objeto retornado pela função lerFormulario
    try {
        const recruta = tratar(lerFormulario()); //chama a função tratar e passa o objeto retornado pela função lerFormulario
        validar(recruta); //chama a função validar e passa o objeto retornado pela função tratar
    } catch (erro) {

    }finally {

    }
})