(function() {
  'use strict';

  $(".button-collapse").sideNav();

  const app = angular.module('giftGab');

  app.controller('TopicCtrl', function($scope) {
    this.topicToAdd = '';
    this.selectedTopicId = '';
    this.topics = [
      {
        id: 1,
        name: 'Kicks'
      },
      {
        id: 2,
        name: 'Style'
      },
      {
        id: 3,
        name: 'Art'
      },
      {
        id: 4,
        name: 'Technology'
      },
      {
        id: 5,
        name: 'Dopeness'
      },
      {
        id: 6,
        name: 'Food and Drink'
      },
      {
        id: 7,
        name: 'Music'
      }
    ];

    this.addTopic = (topic) => {
      this.topics.push({ name: this.topicToAdd });
      this.topicToAdd = '';
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
  });


  app.controller('PostCtrl', function() {
    this.postToAdd = {};
    this.posts = [];

    this.addPost = (topicId) => {
      this.posts.push(
        {
          topicId: topicId,
          title: this.postToAdd.title,
          image: this.postToAdd.image,
          gab: this.postToAdd.gab
        }
      );

      console.log(this.posts);
      this.postToAdd.title = '';
      this.postToAdd.topicId = '';
      this.postToAdd.image = '';
      this.postToAdd.gab = '';
    };
  });
}());
