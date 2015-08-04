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

### Tutorial2の奴まだやってる。
`var phones: {name?: string, snippet?: string;}[] = `の「?」は省略可能っていう意味なのね。?抜けばやりたいことはできる。ってことか。

* できた。
* 結局interfaceでできたし、interfaceでやったほうが、はやかったっていうオチ。そりゃそうだ。

### Tutorial3はじめた。(1:00頃)

`<body ng-controller="ほげほげ">`ってやってると`<head></head>`の中には影響しないからタイトルとかイジりたければhtmlにng-controller書いてあげる必要がある。ってことだよね。

* 当然のことながらhtmlに書いたらbodyの奴消さないとね。
* 不用意にbody以外のところ触られたくなかったらbodyに書けってことかな?もしかしてdivの中とかでもできる?
  * できた。そりゃそうか。
* filterは`ng-repleat hoge in hoges |filter:ng-modelで指定されたモデル名`って書けば動くのか。簡単すぎわろた。
    * 当然のことながら`<input ng-model="ほげほげ">`って書いとかないと駄目なんだけど。
    * `<input type="radio" ng-model="ほげほげ" value="ほげほげ">`でもできるかな?
      * あたりまえのようにできた。
  * Tutorial3でテストコード書いてるけどこれTypeScriptで書いても大丈夫かな?
    * って別にTSで書く内容じゃないな…
  * なんかWebStrom様が謎の挙動をするんだけどこれどういうことだろ…
    * {{query}}って書いたら勝手に{{que}}に置換するんだけど…
    * 再起動したらしなくなった。なんだこれ。
  * このフィルターの機能、問題セット検索に使えるな。

###  Tutorial4

`orderBy:ng-model`もしくは`orderBy:コントローラーの中のプロパティ`って書くと並べ替えしてくれるかな。

* 多分ここで言いたいのはcontrollerの中で指定していてもいいし、ng-modelで指定してもいい。ってことなんだろう…ということにしておく。
  * それが2way data bindingってことかな?
  * orderBy:で指定するプロパティ or ng-modelの前に"-"をつけるとソートが逆転する。って。
  * え?そんだけ?

### Tutorial5
$scopeとか$httpって$から始まる奴ってAngularJSの何かなんだ…

* 最近PHPばっかり書いてたから気にしてなかった。
* jQueryかな?

#### DI

Injection汁

```javascript
module.controller('コントローラー名', [依存したいの1, 依存したいの2, ... , 依存したいのn,function(依存したいの1, 依存したいの2, ... , 依存したいのn) {
  // 処理
}]);
```

 出たよコールバック関数

```javascript
$http.get(url).success(fucntion(data){
  // dataもにょもにょ
});
```

* この辺から`npm start`必須っぽいすな…(httpリクエスト使うために)
* `| json`で生のjson見れるのね。
* 今回の作ろうとしている奴はjsonでデータ持ってるからDIで$http注入するの確定なわけね。
* DIってよくわかってなかったけど、ちょっとはわかった。

### Tutorial6(こっから22:50)

imgのsrcの代わりにng-src使えって話ね。あと、↓のルーティング用のリンク貼る時は
```html
<a href="#/なんとか/かんとか">ほげほげ</a>
```
にするのね。

### Tutorial7

ルーティング。と、コントローラー2つ同時使用。

oh...
```html
<body>
  <div ng-view></div>
</body>
```
まぁ、そりゃそうだよね…

ルーティングの必要のあるコントローラーには **$routeParams** をDIしなきゃ駄目。

```javascript
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);
```

`$routeParams`のphoneIdって何ぞ?っ灯ったけど、↓の/phones/:phoneIdのソレか。


app.jsもイジる必要あり。第二引数でngRouteとコントローラーをの入った配列を指定している。

```javascript
var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers'
]);
```

ほんでもってルーティングの設定もapp.jsに書かなきゃ?ルーティングの設定には
templateUrlとcontrollerを書く。

```javascript
phonecatApp.config(['$routeProvider',
  function($routeProvider) {
        $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
}]);
```

というわけでまずはapp.jsにルーティングの設定ちゃんと書いてからcontrollers.jsをイジらないと
いけないわけですね。で、`<div ng-view>`が書き換えられるわけか…

今日は眠いのでこれまで。

## Aug 4

眠いのでこれまでとか↑に書いてあるけど、まだ寝てない(1:40)

### Tutorial 8(20:00)

お。おう。(ng-repeatのことか…)

おうちかえってテンション高かったらTutorial9見る。

### Tutorial 9(23:20)

フィルター自作できるんだね…必要になったら参照できるようにしておく(多分すぐには使わないと思う)

#### フィルター自作(Tutorialコピペ)

まずは[ビルドインのフィルター](https://docs.angularjs.org/api/ng/filter)チェックしてから。

app/js/filters.js

```javascript
angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
```

app/js/app.js

```javascript
angular.module('phonecatApp', ['ngRoute','phonecatControllers','phonecatFilters']);
```

テンプレートで

```
{{ expression | checkmark }}
```

当然のことながらhtmlで

```html
<script src="js/filters.js"></script>
```

しとかないと使えない。

たしかこの次くらいにめんどくさいのがくるはず…今日はテンション上がらないのでこれでやめとく…
