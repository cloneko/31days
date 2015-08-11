namespace app.quiz {
	"use strict";

	export class QuizService {

		constructor(public $http: ng.IHttpService) {
		}

		getQuestions(): ng.IHttpPromise<any> {
			return this.$http.get("/jsons/questions.json");
		}


	}

	angular.module("app.quiz").service("QuizService", QuizService);


}
