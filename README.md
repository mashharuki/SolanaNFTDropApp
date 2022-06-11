# SolanaNFTDropApp
Solana上でNFTをMINTするアプリを開発するためのリポジトリです。

## metaplexについて
   Mac OS M1チップ搭載端末で試したところ下記コマンドを打たないとインストールがうまくいかなかったのでメモ  
   `brew install pkg-config cairo pango libpng jpeg giflib librsvg`  

   上記コマンドを打って次のコマンドを打つ。  
   `yarn install --cwd ~/metaplex/js/`  

   `ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts --version`  
   このコマンドを打って「0.0.2」と表示されればOK!

## NFTをアップロードする際に打ち込むコマンド(例) 個人の環境によってパスは異なる。
   `ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts upload -e devnet -k ~/.config/solana/devnet.json -cp config.json ./assets`  

   `solana config get`で確認すること！   

   うまくいくと下記のような結果がコンソールに出力される。  
   ```cmd
   Beginning the upload for 3 (img+json) pairs
   started at: 1654844348604
   initializing candy machine
   initialized config for a candy machine with publickey: CmBHphdxxnK9SdiLGuLxjLqjA2VxmN9GkzMn2nJSpmNa
   Uploading Size 3 { mediaExt: '.png', index: '0' }
   Processing asset: 0
   Processing asset: 1
   Processing asset: 2
   Writing indices 0-2
   Done. Successful = true.
   ended at: 2022-06-10T06:59:56.171Z. time taken: 00:00:47
   ```
     
   Solana ExplorerのURL
   <a href="https://explorer.solana.com/address/CmBHphdxxnK9SdiLGuLxjLqjA2VxmN9GkzMn2nJSpmNa?cluster=devnet">https://explorer.solana.com/address/CmBHphdxxnK9SdiLGuLxjLqjA2VxmN9GkzMn2nJSpmNa?cluster=devnet</a>

### Metaplexを使用してNFTの内容を変更する場合
   1. MetaplexCLI の Candy Machine コマンドによって生成された .cache フォルダーを削除する

   2. NFT ファイルを好きなように変更する

   3. CLI から Metaplex の upload コマンドを実行して、NFT をアップロードし、新しい Candy Machine を作成する

   4. CLI から Metaplex の verify コマンドを実行し、NFT がアップロードされ、Candy Machine が構成されていることを確認する

   5. .env ファイルを新しいアドレスで更新する

### MacOS M1チップ搭載の場合 
  `brew install pkg-config cairo pango libpng jpeg giflib librsvg`
  