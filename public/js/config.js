"use strict";

(function() {
	angular
		.module("FinalProject")
		.config(function($routeProvider) {
			$routeProvider
				.when("/home", {
					templateUrl: "html/home.view.html"
				})
				.when("/posts", {
					templateUrl: "html/posts.view.html"
				})
				.when("/profile", {
					templateUrl: "html/profile.view.html"
				})
				.when("/login", {
					templateUrl: "html/login.view.html"
				})
				.when("/register", {
					templateUrl: "html/register.view.html"
				})
				.otherwise({
					redirectTo: "/home"
				})
		})
})();