# History

## Aug 1

* どこかのかぼちゃお姉さまにやるって宣言しちゃった(0:06)。
* まずはやること決めた(1:00頃)。
* npm -g install typescript
* npm -g install grunt-cli
* README.md書き始めた。と思ったけど、これHISTORY.mdにしたほうがいいんちゃうの?っていうことで分離(1:33)
* [TypeScript Tutorial](http://www.typescriptlang.org/Tutorial)をまずやる。(22:55)
  * オブジェクト作る時の雛形?的な感じでinterface作っとくといろんなもの縛れて便利的な?
  * class書けるのはいいね!
  * tscでコンパイルしたJSみるとなんとなく意味はわかってきた。
  * Studentクラス作ってるあたりで??ってなったけど、あれ、interface(Person)で指定した情報しか使用しなくなるのね。
  * Studentクラスのコンストラクターで渡している引数、なんであれ型宣言してないんだろ?って思って宣言してみたらちゃんと縛られるのね。
    * 縛らなかったら縛らなかったでちゃんと動いた。
    * 型宣言した状態のコードをpushする。
  * constructorって書くのダルい…どこかの言語みたいにクラス名と同じfunction作ったらコンストラクターになる。ってのもキモいけどさ…
    * ってfunction constructorじゃないんだ。constructorってだけ書くんだ。。。
  * [typescript-tutorial](typescript-tutorial)からどうぞ。
  * 明日からは日ごとにブランチ切ってちゃんとやろう。。。最後にまとめてマージする形で。

## Aug 2

* そういやWebStrom様があれこれ怒ってくれたので修正。firstnameはfirstNameだろ!とか、functionの引数はparamaterって名前にしろ。とか。
* npmが壊れたのでnode.jsごと再インストール…orz(2:30)
* `npm install -g grunt-cli bower yo generator-karma generator-angular`
* おきたら[これ](https://github.com/vvakame/angularjs-typescript)見る。もう3時だし寝る。
* ってyo使うと大変なことになりそうなのでyoは無しかな…(22:08)
* `http-server@0.8.0 should be installed with -g`って…w わからんでもないけどさw
  * `npm -g install http-server`した。
* Atomの右下にツッコみを入れてまくってる。2 deprecationsってあったんだけど、2つともemmetという。なんじゃそりゃ。
* まずAngularJSを思い出そうと思いました。まる。
* [AngularJSのチュートリアル(3回目な気がする…)](https://docs.angularjs.org/tutorial/)をやる。
  * Tutorial1はスルー(Static HTMLの話だし{{2 + 1}}とか書けるって話なので)。2を見てる。
  * `<html ng-app="なんとか">`のなんとかのとこにはapp/js/controllers.jsの中で`var hogehoge = angular.module('なんとか',[]);`って書いたら動くってことかな。
    * ついでに`hogehoge.controller('コントローラー名', function($scope){ コントローラーの処理 });`みたいな感じで書いて
  html中に`<body ng-controller="コントローラー名">`に書けば中の処理が動く感じ?
    * ng-repeatはそのまんまなのでいいや。`<li ng-repeat="hogehoge in hogehoges">`の下に`{{hogehoge.property}}`的なのでアクセスできるってことだと思う。
    * こんなキーの入った連想配列に強制する!みたいなのないんかな?  
    `var phones: {name?: string, snippet?: string;}[] = `みたいにしたらnameとsnippet以外が入ってたアウト的な。interfaceでやれ。って話なんだろうけど。
    * あーでも`var phones: {name?: string, snippet?: number;}[] = `にしてsnippetに文字列入れたら怒られたからそういうところで縛れるのはいいな。

## Aug 3

なんかコード書いてる感がしない…(実際書いてない)

* Tutorial 3 - 8

今日は眠いのでこれまで。

## Aug 4

眠いのでこれまでとか↑に書いてあるけど、まだ寝てない(1:40)

* Tutorial 8 - 9

たしかこの次くらいにめんどくさいのがくるはず…今日はテンション上がらないのでこれでやめとく…


## Aug 5

↑テンション上がらない。あれは時間帯の問題だ(1:00)

* Tutorial 10 - 12
* 肥大化したHISTORY.mdを[AngularMemo.md](AngularMemo.md)と分離

## Aug 6

作りはじめる。

* と思ったけど、まずは環境構築…
* [https://github.com/vvakame/angularjs-typescript](https://github.com/vvakame/angularjs-typescript)のお世話になります。
  * setup.sh動かすとファンがまわりはじめる…
* とりあえずコントローラーとサービスを作る。っていってもサンプルの名前変えただけ。
  tslintにいろいろ怒られながらとりあえず怒られないように持っていった。
* あとはADD(アルコール駆動開発)でがんばります(既にお酒入ってます)

## Aug 7

どうやって作っていいか考えてたら頭痛くなってきた…とりあえず動かん(コードが)…

## Aug 8

unkなミスしかしてなかったorz

とりあえずトップページは出るようになったけどDIまわりがおかしいらしい。

## Aug 9

朝起きて、歯を磨いて、あっというま午後11時59分
(結論: 何もしてない。)

## Aug 10

一応なんかエラーは解消したが、サービスをDIできてない…

コントローラーのコンストラクターで値セットしてもng-repeatとかで表示されないのね…
コントローラーが動き出した状態で値をセットしないと表示できない。cloneko覚えた!

## Aug 11

サービスも動かせた!サービス自身の戻り値はPromiseであって、直接の値は返ってこない([]になる)わけね。

次は画面の遷移とかやる。(12:00)

なんかday11ブランチ作るの忘れてた?orz

## Aug 12

サービスその2(問題セット取ってくる)作った。画面に全部表示した。けど、これもうちょっとやらんないといけないことあるよね?

$routeParamsの型、anyじゃないと文句言われるんだけどー。に対する回答がもう感動した。
( [javascript - Angularjs + Typescript, How to use $routeParams with IRouteParamsService - Stack Overflow ](http://stackoverflow.com/questions/24315893/angularjs-typescript-how-to-use-routeparams-with-irouteparamsservice) )
