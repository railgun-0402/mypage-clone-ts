# mypage-clone-ts
マイページフォームの例をReact・TypeScriptで実現するプロジェクト。

## functions
・名前、住所、性別を入力できる

・Submitボタンを押下すると、DynamoDBに入力値が登録される

・入力項目はすべて必須とする

## environments
・React18

・TypeScript

・Node.js(v18)

・Jest

・API Gateway

・Lambda (バックエンド、API)

・DynamoDB　(ユーザデータ管理)

・CloudWatch (APIのログ参照用)

## TODO
### UT
・データ登録(フロントエンド,バックエンド)

・github-actionsで自動テスト

### task
・データ取得＆一覧化

・データの削除

### deploy
・AWS EC2 or Amplify

・デプロイも自動化したい
