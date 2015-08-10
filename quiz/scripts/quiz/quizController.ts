/**
 * Created by cloneko on 2015/08/06.
 */
namespace app.quiz {
	"use strict";

	export interface QuizScope extends ng.IScope {
		name: string;
		temp: string;
		questionSet: any[];
	}

	export interface TestScope extends ng.IScope {
		name: string;
		temp: string;
		list: Array<any>;
	}


	export class QuizController {
		constructor(public $scope: QuizScope, public quizService: QuizService) {
		//constructor(public $scope: TestScope) {
			$scope.name = "";
			$scope.temp = "";
			$scope.questionSet = [];
		}

		update() {
			//quizService.test();
		}
	}

	angular.module("app.quiz").controller("QuizController",["$scope",function ($scope: QuizScope){
		$scope.name = "サーバと通信中";
		$scope.temp = "仮";
		$scope.questionSet = [{"name": "SampleTest1"},{"name": "SampleTest2"}];
	}]);
}
