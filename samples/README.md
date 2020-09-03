# Samples in node-red-contrib-hyconet

This is the brief instruction of sample of node-red-contrib-hyconet.


## Node-RED on docker

If you run Node-RED on docker, add in your Node-RED user directory - typically ~/.node-red.
See, reference below.

- node-red-docker: https://nodered.jp/docs/getting-started/docker

This section instructs the way of boot Node-RED by docker.
Change the directory to ./node-red-contrib-hyconet/samples, and type docker command below.


以下は環境が限定されているNode-REDのdockerコンテナを利用した場合のインストールでは、user_dirでのインストールが必要です。(user_dir=/data, node-red-home=~/node-red)
詳細はNode-REDdockerのリファレンス
dockerを使ったNode-REDの起動方法について説明する。
node-red-contrib-hyconetのディレクトリに移動し、以下のコマンドを実行する。

```bash
$ docker-compose up
```

if Node-RED application does not launch, type below.

もし起動しない場合は以下を実行する。

```bash
$ docker-compose run nodered node-red
```

you can see Node-RED dashboard to access the URL below by default on the webbrowser.
以下URLをwebブラウザで開くと、Node-RED dashboardが見えます。

`http://<node-red host or localhost>:1880/`


# License

See [LICENSE.txt](./LICENSE.txt).

本ソフトウェアのライセンスについては[LICENSE.txt](./LICENSE.txt)を参照.