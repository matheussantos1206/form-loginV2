# login.V2

# ``HTML LOGIN``

![capa de início](/img/Captura%20de%20tela%202024-04-25%20105944.png)

# 🖥️
> &lt;h1&gt;Login&lt;/h1&gt;: Título principal da página de login.
 &lt;form method="post" action=""&gt;: Formulário HTML com método de envio POST e ação vazia, o que significa que será submetido para a mesma página.
 &lt;label>: Rótulo para os campos de entrada.
 &lt;input type="email" id="email" name="email"&gt;: Campo de entrada para o endereço de e-mail do usuário. O tipo de entrada é configurado como "email" para fornecer validação de formato de e-mail.
 &lt;input type="password" id="senha"&gt;: Campo de entrada para a senha do usuário. O tipo de entrada é configurado como "password" para ocultar os caracteres digitados.
 &lt;button type="button" onclick="validalogin()"&gt;Acessar&lt;/button&gt;: Botão de submissão do formulário, que chama a função JavaScript validalogin() quando clicado.
 &lt;nav id="cadastro"&gt;&lt;/nav&gt;: Elemento de navegação (não completamente apropriado para o contexto, pode ser melhor substituído por uma div), onde normalmente é esperado que apareça algum conteúdo de cadastro.
 &lt;nav id="Esqueci minha senha"&gt;&lt;/nav&gt;: Elemento de navegação (também pode ser melhor substituído por uma div), onde normalmente é esperado que apareça algum conteúdo de recuperação de senha.
 &lt;a href="cadastre-se.html"&gt;Cadastre-se&lt;/a&gt;: Link para a página de cadastro.
 &lt;a href="redefinir.html"&gt;Esqueci minha senha</a>: Link para a página de redefinição de senha.
 &lt;script src='login.js'&gt;&lt;/script&gt;: Inclui o arquivo JavaScript login.js que contém o código responsável por validar o login.

 # ``HTML CADASTRE-SE``

![capa do cadastre_se](/img/Captura%20de%20tela%202024-04-25%20110037.png)

# 📚
 > &lt;form method="post" action=""&gt;: Formulário HTML com método de envio POST e ação vazia, o que significa  que será submetido para a mesma página. 
 &lt;label&gt;: Rótulo para os campos de entrada.
 &lt;input type="text" id="fullname"&gt;: Campo de entrada para o nome completo do usuário.
 &lt;input type="text" id="phone"&lg;: Campo de entrada para o número de telefone do usuário.
 &lt;input type="email" id="email" name="email"&gt;: Campo de entrada para o endereço de e-mail do usuário. O tipo de entrada é configurado como "email" para fornecer validação de formato de e-mail.
 &lt;input type="password" id="password"&gt;: Campo de entrada para a senha do usuário. O tipo de entrada é configurado como "password" para ocultar os caracteres digitados.
 &lt;button&gt;Cadastrar-se&lt;/button&gt;: Botão de submissão do formulário para cadastrar o usuário.

 # ``HTML REDEFINIR SENHA``

![capa do redefinir senha](/img/Captura%20de%20tela%202024-04-25%20110126.png)

 # 🔑

 >&lt;form method="post" action=""&gt;: Formulário HTML com método de envio POST e ação vazia, o que significa que será submetido para a mesma página.
 &lt;label&gt;: Rótulo para os campos de entrada.
 &lt;input type="email" id="confirm_email" name="confirm_email"&gt;: Campo de entrada para confirmar o endereço de e-mail do usuário. O tipo de entrada é configurado como "email" para fornecer validação de formato de e-mail.
 &lt;button>Próximo&lt;/button&gt;: Botão de submissão do formulário para avançar para a próxima etapa do processo.

# ``Parte em js (javascript)``

# 💾
>function validalogin(): Define uma função chamada validalogin.
 document.getElementById("email").value: Obtém o valor do campo de entrada de e-mail com o ID "email".
 document.getElementById("senha").value: Obtém o valor do campo de entrada de senha com o ID "senha".
 if(!email || !senha): Verifica se o campo de e-mail ou o campo de senha estão vazios usando o operador de negação (!). Se algum deles estiver vazio, exibe um alerta indicando que ambos os campos são obrigatórios.
 else: Se ambos os campos estiverem preenchidos, exibe um alerta indicando que o acesso foi liberado.

# ``Parte em css`` 

# 💽
>html: Define a altura do elemento HTML como 100%.
 body: Define o corpo do documento com posição relativa, margem de 86px, preenchimento de 0 e um plano de fundo de gradiente linear.
 form: Estiliza o formulário com fundo branco, margens automáticas para alinhar ao centro, largura de 38% e borda arredondada.
 button: Estiliza botões com fundo azul, borda arredondada, largura de 120px, altura de 50px e sem borda.
 input: Estiliza campos de entrada com largura de 350px, altura de 40px e borda arredondada.
 textarea: Estiliza áreas de texto com largura de 350px, altura de 90px e borda arredondada.
 h1: Estiliza títulos de nível 1 com texto branco, largura de 50%, borda arredondada e alinhamento central.
 div: Define um preenchimento interno de 60px para elementos de divisão.
 p: Estiliza parágrafos com tamanho de fonte de 20px, fonte Arial, cor azul e negrito.
 span: Estiliza spans com tamanho de fonte de 15px, fonte Arial e cor azul.
 a: Estiliza links com fonte Arial e cor azul.

## ``Resultado``
 ![resultado](/img/resultado.gif)


