# SolanaNFTDropApp
Solana上でNFTをMINTするアプリを開発するためのリポジトリです。

## metaplexについて
   Mac OS M1チップ搭載端末で試したところ下記コマンドを打たないとインストールがうまくいかなかったのでメモ  
   `brew install pkg-config cairo pango libpng jpeg giflib librsvg`  

   上記コマンドを打って次のコマンドを打つ。  
   `yarn install --cwd ~/metaplex/js/`  

   `ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts --version`  
   このコマンドを打って「0.0.2」と表示されればOK!