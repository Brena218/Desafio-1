

 Criando e Usando Contexto

Este desafio consiste em aplicar a funcionalidade de temas neste aplicativo exemplo. Essa funcionalidade de temas deve ser implementada usando contexto do React.

Seu objetivo principal é garantir que o botão **Mudar Tema** no componente **Header** acione a funcionalidade **toggleTheme** exposta através de contexto. 

O valor do contexto deve ser **dinâmico** e gerenciar o conteúdo dentro do componente de contexto (ThemeContextProvider). O tema aplicado deve ser gerenciado a partir da passagem de um valor que pode ser 'light' ou 'dark' e mudar a visualização geral do aplicativo **baseado no valor da variável theme exposta no contexto**.

O contexto também deve export o método **toggleTheme** que mude a propriedade da variável **theme** ('light' <-> 'dark').

O componente Header precisa acessar o contexto para chamar o método toggleTheme, o componente Page vai acessar o contexto e aplicar a classeCSS de acordo com o valor da variável theme. ```<div id="app">.```
Ao final, o aplicativo deve iniciar com o tema light e cada vez que o usuário clicar no botão Mudar Tema, deve mudar para dark e continuar mudando de acordo com os clicks.
