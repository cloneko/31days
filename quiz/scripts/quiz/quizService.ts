namespace app.quiz {
	"use strict";

	export class QuizService {

		constructor(public $http: ng.IHttpService) {

		}

		getQuestions(): ng.IHttpPromise<any> {
			return this.$http.get("/jsons/questions.json");
		}

		getQuestion(path: string): ng.IHttpPromise<any> {
			return this.$http.get("/jsons/" + path + ".json");
		}

	}

	angular.module("app.quiz").service("QuizService", QuizService);


}
