(function() {
  'use strict';

  $(".button-collapse").sideNav();

  const server = '/';

  const app = angular.module('giftGab');

  app.controller('TopicCtrl', TopicCtrl);
  app.controller('PostCtrl', PostCtrl);
  app.controller('AuthCtrl', AuthCtrl);

  TopicCtrl.$inject = ['$scope', '$http', 'topicsSvc'];
  PostCtrl.$inject = ['$http', 'postsSvc'];
  AuthCtrl.$inject = ['auth', '$location', '$cookies'];

  function TopicCtrl($scope, $http, topicsSvc) {
    this.topicToAdd = '';
    this.selectedTopicId = '';
    this.topics = [];

    this.addTopic = () => {
      topicsSvc.postTopic(this.topicToAdd)
        .then((topic) => {
          this.topics.push(topic);
          this.topicToAdd = '';
        })
        .catch((err) => {
          throw err;
        });
    };

    this.removeTopic = (top) => {
      const i = this.topics.indexOf(top);
      this.topics.splice(i, 1);
    };

    this.getTopicName = (id) => {
      for (let i = 0; i < this.topics.length; i++) {
        if (this.topics[i].id ===  id) {
          return this.topics[i].name;
        }
      }

      return '';
    };

    $scope.$watch('topic.topics.length', () => {
      $scope.$$postDigest(() => {
        $('select').material_select();
        $('select').on('change', (e) => {
          this.selectedTopicId = Number.parseInt($(e.target).val());
        })
      })
    });

    const activate = () => {
      topicsSvc.getTopics()
        .then((topicsList) => {
          this.topics = topicsList;
        })
        .catch((err) => {
          throw err;
        });
    };

    activate();
  }


  function PostCtrl($http, postsSvc) {
    this.postToAdd = {};
    this.posts = [];

    this.addPost = (topicId) => {
      this.posts.push(
        {
          topicId: topicId,
          title: this.postToAdd.title,
          imageUrl: this.postToAdd.imageUrl,
          description: this.postToAdd.description
        }
      );

      console.log(this.posts);
      this.postToAdd.title = '';
      this.postToAdd.topicId = '';
      this.postToAdd.imageUrl = '';
      this.postToAdd.description = '';
    };

    const activate = () => {
      postsSvc.getPosts()
        .then((postsList) => {
          this.posts = postsList;
        })
        .catch((err) => {
          throw err;
        });
    };

    activate();
  }

  function AuthCtrl(auth, $location, $cookies) {
    this.email = '';
    this.password = '';

    this.isLoggedIn = () => {
      return $cookies.get('loggedIn');
    }

    this.login = () => {
      auth.login(this.email, this.password)
        .then((user) => {
          $location.path('/');
        })
        .catch((err) => {
          alert('Login Failed');
        });
    };

    this.logout = () => {
      auth.logout();
    };
  }
}());
