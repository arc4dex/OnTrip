# Capstone-M3

## Squad

> - Letícia de Araújo - PO
> - Bruno Passos - TL
> - André Volcov - SM
> - Durval Moroz - QA
> - Pedro Bernardes - QA
> - David Bassouto - QA

## Padrões de Projeto

## 📚 Branches

Vamos usar o padrão de develop/feat/fix para todas as branchs que forem criadas. Desse modo, pode-se ter ideia de sua funcionalidade. Portanto, usem nomes descritivos e curtos.

### Descrição das branches

`main` - É a branch principal do projeto, onde o nossa aplicação estará rodando.

`develop` - É a branch principal do desenvolvedor, onde serão jogadas as features.

`feat/<featName>` - Aqui teremos as funcionalidades que cada dev for desenvolver. Tente sempre manter um nome curto e descritivo, exemplo: `feat/singup`. Essa branch é temporária e, quando for feito o merge, ela será apagada.

`fix/<fixName>` - Serve para consertar algum bug em produção (na branch main). Raramente vamos usar, e também é temporária.

> ### Considerações
>
> - SEMPRE FAÇA UM `git pull origin develop` ANTES DE COMMITAR E DAR PUSH.
> - Ao terminar uma feature, **NUNCA FAÇA MERGE** nas branches principais. No lugar disso, abra um Pull Request da sua branch para a `develop` pelo GitHub.
> - Sempre que for trabalhar na mesma branch feature que outra pessoa, use o comando `git pull` antes de commitar e dar push para sincronizar as alterações mais recentes e evitar conflitos.
> - (IMPORTANTE) Sempre que for começar uma feature nova, certifique-se de que está criando a branch a partir da `develop`.
> - Nomes das branchs usam camelCase, então ao invés de `feat/mynewfeat`, use `feat/myNewFeat`.

## 📦 Commits

Todos os commits também devem seguir um padrão para melhorar a legibilidade e o histórico de versão do código. Esse padrão deve ser colocado na mensagem do commit.

Ao descrever a mensagem, você tem liberdade para descrever o que foi feito, mas lembre-se de manter algo não muito longo.

### Descrição das mensagens

`feat: <feat description>` - Aqui você diz que está colocando algo novo na sua funcionalidade. Sempre em inglês.

`fix: <fix description>` - Aqui você diz o que consertou na sua funcionalidade, seja um bug ou erro de escrita. Sempre em inglês.

### Exemplos

Na branch `feat/modelApi`:

```powershell
git commit -m "feat: change routes GET on API"
git commit -m "fix: fixing endpoint with unavailable link"
```

## Lembrete

Todos os nomes de váriaveis, funções, branchs, commits e etc... sempre deverão ser criados em inglês. Isso vai servir para manter um padrão no código.

---

## 🚧 Outros padrões em breve
