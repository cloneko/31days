///<reference path="../../typings/angularjs/angular.d.ts"/>
/**
 * Created by yonashiro on 2015/08/13.
 */
namespace app.quiz {
	"use strict";

	export class QuizDirective implements ng.IDirective {

		restrict:string = "E";
		//template: string = "hogehoge";
		transclude:any = false;
		replace:boolean = false;
		scope:any = false;
		//$compile: ng.ICompileProvider;
		link(scope:Question, elem:any, attrs:ng.IAttributes, ctrl:any) {
			//console.log(scope.q.answers);
			switch (scope.q.answers) {
				case 0:
					elem.append('<answer-text>');
					break;
				case 1:
					elem.append("<answer-radio>");
					break;
				default :
					elem.append("<answer-check>");
					break;
			}
		}
	}
	export class QuizAnswerTextDirective implements ng.IDirective {
		restrict:string = "E";
		scope:any = false;
		transclude:any = false;
		template: string = "./scripts/quiz/view/answer/text.html";
		link(scope:Question, elem:any, attrs:ng.IAttributes, ctrl:any) {
			console.log(scope.q.answers);
		}
	}
	export class QuizAnswerCheckDirective implements ng.IDirective {
		restrict:string = "E";
		scope:any = false;
		transclude:any = false;
		template:string = "./scripts/quiz/view/answer/check.html";
		link(scope:Question, elem:any, attrs:ng.IAttributes, ctrl:any) {
			console.log(scope.q.answers);
		}
	}
	export class QuizAnswerRadioDirective implements ng.IDirective {
		restrict:string = "E";
		scope:any = false;
		transclude:any = false;
		template:string = "./scripts/quiz/view/answer/radio.html";
		link(scope:Question, elem:any, attrs:ng.IAttributes, ctrl:any) {
			console.log(scope.q.answers);
		}
	}

	angular.module("app.quiz").directive("answerText", () => new app.quiz.QuizAnswerTextDirective());
	angular.module("app.quiz").directive("answerRadio", () => new app.quiz.QuizAnswerRadioDirective());
	angular.module("app.quiz").directive("answerCheck", () => new app.quiz.QuizAnswerCheckDirective());
	angular.module("app.quiz").directive("quizAnswer", () => new app.quiz.QuizDirective());
}
