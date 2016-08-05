(function() {
  'use strict';

  $(".button-collapse").sideNav();

  const app = angular.module('giftGab');

  app.controller('TopicCtrl', TopicCtrl);
  app.controller('PostCtrl', PostCtrl);
  app.controller('AuthCtrl', AuthCtrl);

  TopicCtrl.$inject = ['$scope', '$http', 'topicsSvc'];
  PostCtrl.$inject = ['$http', 'postsSvc'];
  AuthCtrl.$inject = ['auth', '$location', '$cookies'];

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


  function PostCtrl($http, postsSvc) {
    this.postToAdd = {};
    this.posts = [];
    this.postForm = {
      topicId: ''
    };
    this.topicId = ''

    this.addPost = () => {
      console.log(this.postForm);
      console.log(this.topicId);

      // this.posts.push(
      //   {
      //     userId: this.userId,
      //     topicId: this.selectedTopicId,
      //     title: this.postToAdd.title,
      //     imageUrl: this.postToAdd.imageUrl,
      //     description: this.postToAdd.description,
      //     rating: 0
      //   });
      //   console.log(this.posts);
      //
      // this.postToAdd.title = '';
      // this.postToAdd.imageUrl = '';
      // this.postToAdd.description = '';
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
    }

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
