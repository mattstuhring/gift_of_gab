(function() {
  'use strict';

  const app = angular.module('giftGab');

  app.factory('topicsSvc', topicsSvc);
  app.factory('postsSvc', postsSvc);
  app.factory('auth', auth);
  app.factory('regSvc', regSvc);

  topicsSvc.$inject = ['$http'];
  postsSvc.$inject = ['$http'];
  auth.$inject = ['$http'];
  regSvc.$inject = ['$http'];

  function topicsSvc($http) {
    return {
      getTopics: () => {
        return $http.get('/api/topics')
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            throw err;
          });
      },
      postTopic: (topicName) => {
        return $http.post('/api/topics', { name: topicName })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
      }
    };
  }

  function postsSvc($http) {
    return {
      getPosts: () => {
        return $http.get('/api/posts')
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            throw err;
          });
      },
      addPost: (post) => {
        return $http.post('/api/posts', post)
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            throw err;
          });
      },
      upRating: (post) => {
        return $http.patch('/api/posts', post)
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            throw err;
          });
      },
      downRating: (post) => {
        return $http.patch('/api/posts', post)
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            throw err;
          });
      }
    };
  }

  function auth($http) {
    return {
      login: (username, password) => {
        return $http.post('/api/token', { username, password })
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            throw err;
          });
      },
      logout: () => {
        return $http.delete('/api/token')
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            throw err;
          });
      }
    };
  }

  function regSvc($http) {
    return {
      register: (firstName, lastName, username, password) => {
        return $http.post('/api/users', { firstName, lastName, username, password })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
      }
    }
  }
}());
