/**
 * Created by cloneko on 2015/08/06.
 */
namespace app.quiz {
	"use strict";

	export interface QuizScope extends ng.IScope {
		questionSet: any[];
	}



	export class QuizController {
		constructor(public $scope: QuizScope, public quizService: QuizService) {

		}

		update() {
			this.quizService.test();
		}
	}

	angular.module("app.quiz").controller("QuizController", QuizController);
	angular.module("app.quiz").controller("QuestionSet",["ngResource"]);

}
