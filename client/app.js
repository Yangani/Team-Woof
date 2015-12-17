var cityQuestApp = angular.module('cityQuestApp',[
                         'ngRoute',
                         'cityQuest.services',
                         'cityQuest.city',
                         'cityQuest.questList',
                         'cityQuest.questView',
                         'cityQuest.createQuest']);

cityQuestApp.config(['$routeProvider',
                    routeDefinition]);

cityQuestApp.run(function($rootScope){});

function routeDefinition($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'client/city/city.html',
    controller: 'cityCtrl'
  })
  .when('/questList', {
    templateUrl: 'client/questList/questList.html',
    controller: 'questListCtrl'
  })
  .when('/questView', {
    templateUrl: 'client/questView/questView.html',
    controller: 'questViewCtrl'
  })
  .when('/createQuest', {
    templateUrl: 'client/createQuest/createQuest.html',
    controller: 'createQuestCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}
