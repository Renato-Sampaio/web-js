/**
 * Arquivo responsável por formatar as máscaras de input
 */

/**
 * mascara CPF
 */
function masc_cpf(objeto) {

	var retorno = "";
	var padrao = /\D/g;
	var numero;

	numero = objeto.value.replace(padrao, "");

	parte1 = numero.substr(0, 3);
	if (parte1.length > 0) {
		retorno = parte1;
	}

	parte2 = numero.substr(3, 3);
	if (parte2.length > 0) {
		retorno += "." + parte2;
	}

	parte3 = numero.substr(6, 3);
	if (parte3.length > 0) {
		retorno += "." + parte3;
	}

	parte4 = numero.substr(9, 2);
	if (parte4.length > 0) {
		retorno += "-" + parte4;
	}

	objeto.value = retorno;

}
/**
 * mascara RG
 */

function masc_rg(objeto) {

	var retorno = "";
	var padrao = /\D/g;
	var padrao2 = /\W/g;
	var numero;
	var numeroLetraX;

	numero = objeto.value.replace(padrao, "");
	numeroLetraX = objeto.value.replace(padrao2, "");

	parte1 = numero.substr(0, 2);
	if (parte1.length > 0) {
		retorno = parte1;
	}

	parte2 = numero.substr(2, 3);
	if (parte2.length > 0) {
		retorno += "." + parte2;
	}

	parte3 = numero.substr(5, 3);
	if (parte3.length > 0) {
		retorno += "." + parte3;
	}

	parte4 = numero.substr(8, 1);
	if (parte4.length > 0) {
		retorno += "-" + parte4;
	} else {
		parte4 = numeroLetraX.substr(8, 1)
		if (parte4 == "X" || parte4 == "x") {
			retorno += "-" + parte4;
		}

	}
	objeto.value = retorno;
}


/**
 * mascara CEP
 */
function masc_cep(objeto) {

	var retorno = "";
	var padrao = /\D/g;
	var numero;

	numero = objeto.value.replace(padrao, "");

	parte1 = numero.substr(0, 5);
	if (parte1.length > 0) {
		retorno = parte1;
	}

	parte2 = numero.substr(5, 3);
	if (parte2.length > 0) {
		retorno += "-" + parte2;
	}


	objeto.value = retorno;

}

/**
 * mascara Celular
 */

function masc_cel(objeto) {

	var retorno = "";
	var padrao = /\D/g;
	var numero;

	numero = objeto.value.replace(padrao, "");

	parte1 = numero.substr(0, 2);
	if (parte1.length > 0) {
		retorno = "(" + parte1 + ")";
	}

	parte2 = numero.substr(2, 5);
	if (parte2.length > 0) {
		retorno += " " + parte2;
	}
	parte3 = numero.substr(7, 4);
	if (parte3.length > 0) {
		retorno += "-" + parte3;
	}


	objeto.value = retorno;

}

/**
 * mascara Telefone
 */
function masc_telefone(objeto) {

	var retorno = "";
	var padrao = /\D/g;
	var numero;

	numero = objeto.value.replace(padrao, "");

	parte1 = numero.substr(0, 2);
	if (parte1.length > 0) {
		retorno = "(" + parte1 + ")";
	}

	parte2 = numero.substr(2, 4);
	if (parte2.length > 0) {
		retorno += " " + parte2;
	}
	parte3 = numero.substr(6, 4);
	if (parte3.length > 0) {
		retorno += "-" + parte3;
	}


	objeto.value = retorno;

}

/**
 * mascara Inscrição Estadual
 */
function masc_ie(objeto) {

	var retorno = "";
	var padrao = /\D/g;
	var numero;

	numero = objeto.value.replace(padrao, "");

	parte1 = numero.substr(0, 3);
	if (parte1.length > 0) {
		retorno = parte1;
	}

	parte2 = numero.substr(3, 3);
	if (parte2.length > 0) {
		retorno += "." + parte2;
	}

	parte3 = numero.substr(6, 3);
	if (parte3.length > 0) {
		retorno += "." + parte3;
	}

	parte4 = numero.substr(9, 3);
	if (parte4.length > 0) {
		retorno += "." + parte4;
	}

	objeto.value = retorno;

}

/**
 * mascara CNPJ
 */
function masc_cnpj(objeto) {

	var retorno = "";
	var padrao = /\D/g;
	var numero;

	numero = objeto.value.replace(padrao, "");

	parte1 = numero.substr(0, 2);
	if (parte1.length > 0) {
		retorno = parte1;
	}

	parte2 = numero.substr(2, 3);
	if (parte2.length > 0) {
		retorno += "." + parte2;
	}

	parte3 = numero.substr(5, 3);
	if (parte3.length > 0) {
		retorno += "." + parte3;
	}

	parte4 = numero.substr(8, 4);
	if (parte4.length > 0) {
		retorno += "/" + parte4;
	}

	parte5 = numero.substr(12, 2);
	if (parte5.length > 0) {
		retorno += "-" + parte5;

	}

	objeto.value = retorno;

}
/**
 * mascara DATA
 */
function masc_data(objeto) {

	var retorno = "";
	var padrao = /\D/g;
	var numero;

	numero = objeto.value.replace(padrao, "");

	parte1 = numero.substr(0, 2);
	if (parte1.length > 0) {
		retorno = parte1;
	}

	parte2 = numero.substr(2, 2);
	if (parte2.length > 0) {
		retorno += "/" + parte2;
	}

	parte3 = numero.substr(4, 4);
	if (parte3.length > 0) {
		retorno += "/" + parte3;
	}

	objeto.value = retorno;
}


