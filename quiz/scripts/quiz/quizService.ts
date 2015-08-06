namespace app.quiz {
	"use strict";

	export class QuizService {

		constructor(public $http: ng.IHttpService) {
		}

		test(): ng.IHttpPromise<any> {
			return this.$http.get("");
		}
	}

	angular.module("app.quiz").service("QuizService", QuizService);
}
