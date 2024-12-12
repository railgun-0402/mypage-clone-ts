# mypage-clone-ts
マイページフォームの例をReact・TypeScriptで実現するプロジェクト。

## functions
・名前、住所、性別を入力できる

・Submitボタンを押下すると、DynamoDBに入力値が登録される

・入力項目はすべて必須とする

## environments

<img src="https://skillicons.dev/icons?i=typescript,react,redux" /> <br /><br />

## problem
- 状態管理もクソもないので、全画面レンダリングされてしまう悪い例
- useMemo等を使用すれば、最小限のレンダリングで対策可能

参考になりそうな記事：

https://qiita.com/Yametaro/items/621bfd8c894f8fd36539
