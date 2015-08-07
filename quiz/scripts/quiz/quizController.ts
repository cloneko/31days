/**
 * Created by cloneko on 2015/08/06.
 */
namespace app.quiz {
	"use strict";

	export interface QuizScope extends ng.IScope {
		questionSet: any[];
	}

	export interface TestScope extends ng.IScope {
		name: string;
		temp: string;
	}

	export class QuizController {
		constructor(public $scope: TestScope, public quizService: QuizService) {
			$scope.name = "サーバと通信中";
			$scope.temp = "仮";
		}

		update() {
			this.quizService.test();
		}
	}

	angular.module("app.quiz").controller("QuizController", QuizController);
}
