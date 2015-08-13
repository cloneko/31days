/**
 * Created by yonashiro on 2015/08/13.
 */
namespace app.quiz {
	"use strict";

	export class QuizDirective implements ng.IDirective {

		restrict: string = "E";
		templateUrl: string = "scripts/quiz/view/answer/hoge.html";
		scope: any = false;
		link(scope: ng.IScope, elem: any, attrs: ng.IAttributes, ctrl: any) {
			console.log(scope);
		}

	}
	angular.module("app.quiz").directive("quiz", () => new app.quiz.QuizDirective());

}
