/**
 * Created by yonashiro on 2015/08/13.
 */
namespace app.quiz {
	"use strict";

	export class QuizDirective implements ng.IDirective {

		restrict: string = "E";
		template: string = "quizディレクティブからだよ!";
		transclude: any = false;
		replace: boolean = false;
		scope: any = false;
		link(scope: ng.IScope, elem: any, attrs: ng.IAttributes, ctrl: any) {
			console.log(scope);
		}
	}
	angular.module("app.quiz").directive("quizAnswer", () => new app.quiz.QuizDirective());

}
