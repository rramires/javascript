// Todo arquivo .js é um módulo isolado que roda no Node
// para que outros módulos acessem tem que exportar
// Maneiras de fazer isso:

this.ola = 'Olá, estou no módulo A'

exports.bemVindo = 'Bem vindo ao node! - Módulo A'

// maneira tradicional do Node
module.exports.ateLogo = 'Até mais pepessoalll! = Módulo A'