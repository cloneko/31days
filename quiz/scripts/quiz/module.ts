// app.quiz モジュールのどこよりも早く実行されねばならない(コンパイル後実行順がモジュール内で一番早くならねばならない)ため独立したファイルとせざるをえない。
namespace app.quiz {
	"use strict";

	angular.module("app.hello", [], ()=> false);
}
