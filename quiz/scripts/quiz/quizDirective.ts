/**
 * Created by yonashiro on 2015/08/13.
 */
namespace app.quiz {
	"use strict";

	export class QuizDirective implements ng.IDirective {

		restrict: string = "E";
		template: string = "hogehoge";
		transclude: any = false;
		replace: boolean = false;
		scope: any = false;
		link(scope: Question, elem: any, attrs: ng.IAttributes, ctrl: any) {
			console.log(scope.q);
		}
	}
	angular.module("app.quiz").directive("quizAnswer", () => new app.quiz.QuizDirective());

}
