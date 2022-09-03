import * as _ from 'lodash';
function componente()
{
	const elemento = document.createElement('div');
	//lodash
	elemento.innerHTML = _.join(['Hola', 'webpack'], ' ');
	return elemento;
}
document.body.appendChild(componente());
