(function() {
  'use strict';

  const app = angular.module('giftGab');

  app.controller('TopicCtrl', function() {
    this.topicToAdd = '';
    this.topics = [];

    this.addTopic = (topic) => {
      this.topics.push({ name: this.topicToAdd });
      this.topicToAdd = '';
    };

    this.removeTopic = (top) => {
      const i = this.topics.indexOf(top);
      this.topics.splice(i, 1);
    };
  });


  app.controller('PostCtrl', function() {
    this.postToAdd = '';
    this.posts = [];

    this.addPost = () => {
      this.items.push({ name: this.posts });
    };
  });
}());
