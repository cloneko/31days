/**
 * Created by cloneko on 2015/08/06.
 */
namespace app.quiz {
	"use strict";

	export interface QuizScope extends ng.IScope {
		name: string;
		temp: string;
		questionSet: QuestionSet[];
	}
	export interface QuestionSet extends ng.IScope {
		name: string;
		path: string;
	}

	export interface Question {
		q: string;
		a: string[];
		answers: number;
	}
	export interface Questions extends ng.IScope {
		name: string;
		questions: Question[];
	}

	export class QuizController {
		constructor(public $scope: QuizScope, public quizService: QuizService) {
			$scope.name = "";
			$scope.questionSet = [];
		}
	}

	export class QuestionsController {
		constructor(public $scope: Questions, public quizService: QuizService) {


		}
	}

	angular.module("app.quiz").controller("QuizController",["$scope","QuizService",($scope: QuizScope,service: QuizService) => {
		service.getQuestions().then(data => {$scope.questionSet = data.data;});
	}]);

	angular.module("app.quiz").controller("QuestionsController",
		["$scope","$routeParams","QuizService",($scope: Questions,$routeParams: any,service: QuizService) => {
			service.getQuestion($routeParams.path).then(data => {
				$scope.name = data.data.name;
				$scope.questions = data.data.questions;
			});
		}]
	);
}
