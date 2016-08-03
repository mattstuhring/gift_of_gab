(function() {
  'use strict';

  const server = '';

  const app = angular.module('giftGab');

  app.factory('topicsSvc', topicsSvc);
  app.factory('postsSvc', postsSvc);

  topicsSvc.$inject = ['$http'];
  postsSvc.$inject = ['$http'];

  function topicsSvc($http) {
    return {
      getTopics: () => {
        return $http.get(`${server}/topics`)
          .then((topics) => {
            return topics.data;
          })
          .catch((err) => {
            throw err;
          });
      },
      postTopic: (topic) => {
        return $http.post(`${server}/${topic}`, {
          name: topic
        })
        .then((topic) => {
          return topic.data;
        })
        .catch((err) => {
          throw err;
        });
      }
    }
  }

  function postsSvc($http) {
    return {
      getPosts: () => {
        return $http.get(`${server}/posts`)
          .then((posts) => {
            return posts.data;
          })
          .catch((err) => {
            throw err;
          });
      },
      postPosts: (post) => {
        return $http.post(`${server}/${post}`), {
          topicId: post.topicId,
          title: post.title,
          imageUrl: post.imageUrl,
          gab: post.gab
        }
        .then((post) => {
          return post.data;
        })
        .catch((err) => {
          throw err;
        });
      }
    }
  }


}());
