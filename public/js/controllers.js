(function() {
  'use strict';

  const app = angular.module('giftGab');

  app.controller('TopicCtrl', function() {
    this.topicToAdd = '';
    this.topics = [];

    this.addTopic = () => {
      this.topics.push({ name: this.topicToAdd });
      console.log(this.topicToAdd);
      this.topicToAdd = '';


    };
  });
}());
