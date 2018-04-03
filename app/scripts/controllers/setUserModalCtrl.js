(function() {
  function SetUserModalCtrl($uibModalInstance) {
    this.userName = '';

    this.setUsername = function() {
      $uibModalInstance.close(this.userName);

    };
  }

  angular
  .module('chatProject')
  .controller('SetUserModalCtrl',['$uibModalInstance', SetUserModalCtrl])
})();
