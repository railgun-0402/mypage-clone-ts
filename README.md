# mypage-clone-ts
- マイページフォームをReact・TypeScriptで記載
- 一部のUI変更で、ページ全体がレンダリングされる悪い例

## functions
- React Developer Toolsでレンダリングの箇所を確認可能
  - https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ja

## environments

<img src="https://skillicons.dev/icons?i=typescript,react,redux" /> <br /><br />

## problem
- 状態管理もクソもないので、全画面レンダリングされてしまう悪い例
- useMemo等を使用すれば、最小限のレンダリングで対策可能

参考になりそうな記事：

https://qiita.com/Yametaro/items/621bfd8c894f8fd36539
