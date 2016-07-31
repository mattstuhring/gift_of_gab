(function() {
  'use strict';

  const app = angular.module('giftGab');

  app.controller('TopicCtrl', function() {
    this.topicToAdd = '';
    this.topics = [];

    this.addTopic = () => {
      this.topics.push({ name: this.topicToAdd });
      this.topicToAdd = '';
    };

    this.removeTopic = (topic) => {
      this.topics.pop({ name: this.topicToAdd });
      this.topicToAdd = '';
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
