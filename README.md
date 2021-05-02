# 環境構築

- clasp をグローバルインストールし、npm をローカルインストールする

```
$ npm i -g @google/clasp
$ npm i
$ npm run build
```

# Google Apps Script の設定をオン

- 以下 URL にアクセスし設定をオンにする
  - https://script.google.com/home/usersettings

# clasp ログインとデプロイ

```
$ clasp login    # Googleの認証を行う
$ clasp create --rootDir dist    # standaloneを選択
$ clasp push    # deploy
$ npm run build:prod    # build & deploy
```
