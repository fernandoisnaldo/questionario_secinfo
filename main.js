function jogar(){
	document.getElementById("resultado").innerHTML = (Math.floor(crypto.getRandomValues(new Uint32Array(1))[0]/2**32 * document.getElementById('dado').value + 1));
}
