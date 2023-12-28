# Atividade 2

### Configurar os data sources do Grafana
Vamos executar uma aplicação Java com a observabilidade configurada, essa aplicação foi implantada numa imagem docker.
O coletor já está configurado para receber as métricas, logs e traces da aplicação e enviar para o Loki, Prometheus e Tempo.
Será utilizado o docker compose para executar os componentes da solução.

#### Passo 1
Abrir um linha de comando e ir até a pasta app, e executar o comando docker

```bash
docker-compose up -d
```

![dockercomposeup](images/dockercomposeup.png)

**Observação 1** - A primeira execução pode demorar, se as imagens não foram baixadas anteriormente.

**Observação 2** - Quando todos os conteineres estiverem no estado "Started", esperar uns 2 minutos até que o script SQL seja executado para criar a base de dados de exemplo.

#### Passo 2
Executar o request a API de teste para confirmar que a aplicação está respondendo, para isso abrir o arquivo request.http da pasta app com o VSCode.

Para executar o request clicar no texto "Send Request".

Esse request pode ser executado no Postman se preferirem.

![request](images/requesthttp.png)

A resposta deverá trazer um registro como na imagem.

![response](images/requesthttpresponse.png)

Se o request não funcionar, existe a possibilidade de verificar no Docker Desktop se a aplicação está sendo executada de modo correto.

![dockerdesktop](images/dockerdesktop.png)

#### Passo 3

Agora iremos acessar o Grafana e realizar a configuração dos data sources para o Loki, Prometheus e Tempo.

Clicar no link abaixo para acessar o Grafana:

- [Grafana local](http://localhost:3000)

Será apresentado a tela inicial do Grafana.

![Grafana home](images/grafanahome.png)

Como o Grafana está configurado com a acesso anônimo no docker compose, não será necessário logar com nenhum usuário.

![grafana config](images/grafanaconfig.png)

#### Passo 4

Agora vamos configurar o data source do Loki para podermos visualizar os logs dentro do Grafana.

Para configurar o data source do Loki, clicar na opção "Configuration" do menu lateral.

![grafana configuration menu](images/grafanaconfigmenu.png)

Na aba "Data sources", clicar no botão "Add data source".

![grafana add data source](images/datasourceconfigmenu.png)

Selecionar o item "Loki" na lista de opções.

![loki option](images/lokioption.png)

Informar a url do Loki no campo URL, o valor a ser digitado no campo é "http://loki:3100".

![loki data source config](images/lokidatasourceconfig.png)

**Observação 3** - Para facilitar a demonstração, o Loki, Prometheus e o Tempo foram configurados sem controle de acesso, em produção esses itens devem estar configurados com a segurança habilitada, com isso será necessário configurar a autenticação.

Para salvar o data source, clicar no botão "Save & test" no rodapé da página.

![loki data source](images/lokidatasourcesave.png)

Após salvar o data source vamos explorar o log, para isso, clicar no botão "Explore".

![loki data source explore](images/lokidatasourceexplore.png)

Selecionar o item "service_name" no campo "label" e o valor "AppJava", e clicar em "Run Query".

![loki label filter](images/lokiexplorelabelfilter.png)

Serão apresentados os registros do log armazenados no Loki.

![loki query result](images/lokiqueryresult.png)

#### Passo 5

Logar criar o datasource do Prometheus


#### Passo 6

Logar criar o datasource do Tempo

#### Passo 7

Explorar o log.

#### Passo 8

Explorar os traces.

#### Passo 9

Explorar as métricas.

Próxima atividade: [Atividade 03](03-atividade.md)


