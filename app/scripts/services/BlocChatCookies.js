(function() {
  function BlocChatCookies($cookies, $uibModal) {


    var currentUser = $cookies.get('chatProjectCurrentUser');

    if (!currentUser || currentUser === '') {
      var modalInstance = $uibModal.open({
        animation : 'true',
        templateUrl : '/templates/setUserModal.html',
        controller : 'SetUserModalCtrl',
        controllerAs : 'userModal'
      });
      modalInstance.result.then(function (userName){
        currentUser = userName;
        if (!currentUser || currentUser === '') {
          location.reload();
        };
        $cookies.put('chatProjectCurrentUser',currentUser);
      });
    };
  }

  angular
    .module('chatProject')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
