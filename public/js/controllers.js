(function() {
  'use strict';

  $('select').material_select();
  $(".button-collapse").sideNav();

  const app = angular.module('giftGab');

  app.controller('TopicCtrl', TopicCtrl);
  app.controller('PostCtrl', PostCtrl);
  app.controller('AuthCtrl', AuthCtrl);
  app.controller('RegCtrl', RegCtrl);

  TopicCtrl.$inject = ['$scope', '$http', 'topicsSvc'];
  PostCtrl.$inject = ['$scope', '$http', 'postsSvc', '$cookies'];
  AuthCtrl.$inject = ['auth', '$location', '$cookies'];
  RegCtrl.$inject = ['$scope', '$http', '$location', 'regSvc'];

  function TopicCtrl($scope, $http, topicsSvc) {
    this.topicToAdd = '';
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

    this.filterById = (id) => {
      console.log(id);
      this.filterName = id;
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

// POST controller

  function PostCtrl($scope, $http, postsSvc, $cookies) {
    this.postForm = {};
    this.postToAdd = {};
    this.posts = [];
    this.topics = [];
    this.topicToAdd = {};

    this.addPost = () => {
console.log(this.postForm);
      postsSvc.postPost(this.postForm)
        .then((post) => {
          this.posts.push(post);
          this.postToAdd = '';
        })
        .catch((err) => {
          throw err;
        });
    };

    this.addPostTopic = (topic) => {
      this.topicToAdd = {
        id: topic.id,
        name: topic.name
      };

      this.postForm.topicId = this.topicToAdd.id;
      this.postForm.topic = this.topicToAdd.name;
    };

    this.upRating = (post) => {
      post.rating += 1;
      postsSvc.upRating(post)
        .then((val) => {
          this.post = val;
        })
        .catch((err) => {
          throw err;
        });
    };

    this.downRating = (post) => {
      post.rating -= 1;
      postsSvc.upRating(post)
        .then((val) => {
          this.post = val;
        })
        .catch((err) => {
          throw err;
        });
    };

    $scope.$watch('topic.topics.length', () => {
      $scope.$$postDigest(() => {
        $('select').material_select();
      })
    });

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
    this.username = '';
    this.password = '';

    this.isLoggedIn = () => {
      return $cookies.get('loggedIn');
    }

    this.login = () => {
      auth.login(this.username, this.password)
        .then((user) => {
          Materialize.toast('Login successful!', 3000, 'rounded');
          $location.path('/');
        })
        .catch((err) => {
          Materialize.toast('Login failed!!!', 3000, 'rounded');
        });
    };

    this.logout = () => {
      auth.logout();
    };
  }

  function RegCtrl($scope, $http, $location, regSvc) {
    this.showReg = '';
    this.regForm = {};

    this.addUser = () => {
      regSvc.regUser(this.regForm)
        .then((user) => {
          Materialize.toast('Registration successful!', 3000, 'rounded');
          this.showReg = false;
          $location.path('/');
        })
        .catch((err) => {
          Materialize.toast('Registration failed!!!', 3000, 'rounded');
        });
    };
  }
}());
