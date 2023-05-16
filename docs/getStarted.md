# Getting Started

`node`と`nodenv`に関してはインストールしている場合には不要

<br>

# 初回のみ

**`node`のインストール**

```zsh
node -v
```

もしバージョンが表示されない場合には [Node.js の公式サイト](https://nodejs.org/dist/v18.16.0/node-v18.16.0.pkg) からインストール

**`nodenv`のインストール**

```zsh
brew install nodenv
echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(nodenv init -)"' >> ~/.zshrc
nodenv rehash
nodenv install 18.16.0
```

**パッケージのインストール**

```zsh
npm i
```

<br>

# 起動

**インストール**

```zsh
npm ci
```

**ローカルでの起動**

```zsh
npm run dev
```
