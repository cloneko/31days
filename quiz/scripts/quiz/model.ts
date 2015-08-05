/**
 * モデルのモジュール。
 */
namespace app.quiz {
	"use strict";

	export class Quiz {
		test:string;

		/**
		 * @constructor
		 * @param data JSONObjectまたはJSON文字列
		 */
			constructor(data:any) {
			if (angular.isString(data)) {
				data = angular.fromJson(data);
			}
			this.test = data.test;
		}
	}
}
