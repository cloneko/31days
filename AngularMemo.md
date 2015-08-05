AngularJSチュートリアルメモ
====================================

[HISTORY.md](HISTORY.md)に書いてたけど、あきらかにHISTORYじゃなくなってるので移動。

## Aug 2

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


## Aug 4


### Tutorial 8(20:00)

お。おう。(ng-repeatのことか…)


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

## Aug 5


### EventHandler/Tutorial 10

コントローラー中に `$scope.メソッド` を作っておいて、
テンプレートで `ng-click="メソッド名(arg)"` を指定するわけね。

例のごとくコピペ

app/js/controllers.js

```javascript
var phonecatControllers = angular.module('phonecatControllers',[]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
      $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
```

テンプレート

```html
<img ng-src="{{mainImageUrl}}" class="phone">

ry

<ul class="phone-thumbs">
  <li ng-repeat="img in phone.images">
    <img ng-src="{{img}}" ng-click="setImage(img)">
  </li>
</ul>
```

うん。難しくない。

### Tutorial 11 サービス?

使う時はbowerでangular-resource使えるようにしとかんといけないらしい(services.jsでDIしてるし)。

サービスがよくわからん…
これはRESTfulなサービスから情報取ってくる時にはservices.jsに書いとけば楽チンよ?ってこと?

コピペ(app/js/services.js)

```javascript
var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
```

あとはcontrollers.jsから呼び出す時にはservices.jsに登録したサービス名でDIしたら
サービス名.get(param)で呼びだせるぜやったー。ってことなのかな?

あ、その前にapp.jsにもDIしとかないと。

app/js/app.js

```javascript
angular.module('phonecatApp', ['ngRoute', 'phonecatControllers','phonecatFilters', 'phonecatServices']).
```

app/js/controllers.js

```javascript
var phonecatControllers = angular.module('phonecatControllers', []);

...

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
  $scope.phones = Phone.query();
  $scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}]);
```

はて、Phone.query()とPhone.get(param)はいいんだけど、Phone.get() is どこ?

あー何も値していしない(デフォルト値:phones)だったらphones/phones.json取ってくるようになってるわけね…
(ていうかgetって$http.getってことなのね…)

ややこしや。

1:30超えそうなので深夜の部はこの辺で止めとこ。

### Tutorial 12 / Animation

bower.jsonでangular-animateとjquery入れとかなあかん。

```html
<!-- for CSS Transitions and/or Keyframe Animations -->
<link rel="stylesheet" href="css/animations.css">
<!-- jQuery is used for JavaScript animations (include this before angular.js) -->
<script src="bower_components/jquery/dist/jquery.js"></script>
<!-- required module to enable animation support in AngularJS -->
<script src="bower_components/angular-animate/angular-animate.js"></script>
<!-- for JavaScript Animations -->
<script src="js/animations.js"></script>
```

は入れといてね。

animations.jsでアニメーションを実装する…らしい。

今のところスルーしておこう。。。

無くても作りたいものは作れる…必要になったら戻ろう…

ここからはアレを作るミッションに入るぞー
