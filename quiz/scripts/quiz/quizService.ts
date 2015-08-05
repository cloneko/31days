namespace app.quiz {
	"use strict";

	export class quizService {

		constructor(public $http: ng.IHttpService) {
		}

		test(): ng.IHttpPromise<any> {
			return this.$http.get("");
		}
	}

	angular.module("app.quiz").service("quizService", SampleService);
}
