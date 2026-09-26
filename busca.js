function buscar_perguntas(palavra_chave, funcao_busca) {

  if (palavra_chave == undefined || palavra_chave.trim() == '') {
    return [];
  }

  return funcao_busca(palavra_chave);
}

exports.buscar_perguntas = buscar_perguntas;
