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
	export class QuizController {

		constructor(public $scope: QuizScope, public quizService: QuizService) {
			$scope.name = "";
			$scope.questionSet = [];
		}
	}

	angular.module("app.quiz").controller("QuizController",["$scope","QuizService",($scope: QuizScope,service: QuizService) => {
		service.getQuestions().then(data => {$scope.questionSet = data.data;});
	}]);
}
