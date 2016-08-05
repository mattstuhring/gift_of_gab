'use strict';

exports.seed = function(knex) {
  return knex('posts').del()
    .then(() => {
      return knex('posts').insert([
        {
          id: 1,
          title: "Custom Triumph motorcycle is a tribute to Hunter S. Thompson",
          image_url: "https://usatsneakhype.files.wordpress.com/2016/07/uyc_largeimage_lightbox_lhs_side1.jpg?w=640&h=308",
          description: "This custom motorcycle was built by Death Machines of London.  It’s called the UYC and it was resurrected from the corpse of a 2007 Triumph Thruxton 900.  It’s a truly unique ride that utilizes materials like copper, brass, and wood.  The tribute to Hunter S. Thompson also includes a quote of his engraved on the fuel tank.",
          rating: 0,
          user_id: 1,
          topic_id: 1,
          created_at: new Date('2016-07-24 14:26:16 UTC'),
          updated_at: new Date('2016-07-24 14:26:16 UTC')
        },
      {
        id: 2,
        title: "Nike Air Mag",
        image_url: "http://iqbkkd2tcm3u6mnv1c41azk6.wpengine.netdna-cdn.com/files/2016/04/nike-air-mag-1.jpg",
        description: "Nike Air MAG is one of the most stories sneakers of all time.  The first glimpse that the public got of the Air Mag was in the 1989 blockbuster Back To The Future II when Marty McFly appeared on the silver screen putting on the shoes.",
        rating: 0,
        user_id: 1,
        topic_id: 2,
        created_at: new Date('2016-07-24 14:26:16 UTC'),
        updated_at: new Date('2016-07-24 14:26:16 UTC')
      },
      {
        id: 3,
        title: "The World Needs More Street Art",
        image_url: "http://usatsneakhype.files.wordpress.com/2013/12/the-world-needs-more-street-art-53.jpg?w=620&h=465",
        description: "The colors are awesome!",
        rating: 0,
        user_id: 1,
        topic_id: 3,
        created_at: new Date('2016-07-25 14:26:16 UTC'),
        updated_at: new Date('2016-07-25 14:26:16 UTC')
      },
      {
        id: 4,
        title: "Take a Look Inside of Victor Cruz's Closet",
        image_url: "https://usatsneakhype.files.wordpress.com/2015/09/victor-cruz-closet14.jpg?w=1000&h=542",
        description: "NY Giants wide receiver Victor Cruz has established himself as one of the most fashionable athletes in the NFL. In fact, he’s probably spent more time shopping than he has playing football over the last few seasons.",
        rating: 0,
        user_id: 1,
        topic_id: 4,
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 5,
        title: "Kendrick Lamar released a new album last night",
        image_url: "https://usatsneakhype.files.wordpress.com/2016/03/kendrick-lamar-2.jpg?w=1000&h=600&crop=1",
        description: "That’s right, Mr. Lamar dropped an album essentially out of nowhere last night.  While most would probably consider this an EP, it’s still awesome to see new music from the hip-hop all-star.  The album is called untitled unmastered. and features 8 new tracks from Kendrick.",
        rating: 0,
        user_id: 1,
        topic_id: 5,
        created_at: new Date('2016-07-27 14:26:16 UTC'),
        updated_at: new Date('2016-07-27 14:26:16 UTC')
      },
      {
        id: 6,
        title: "The HERO4 Session is the Smallest GoPro yet",
        image_url: "https://usatsneakhype.files.wordpress.com/2015/07/gopro_hero4_session_2.jpg?w=1000",
        description: "GoPro’s latest product is the smallest camera they have ever offered thus far.  The HERO4 Session packs 1080p video capabilities along with an 8 megapixel camera into quite a tiny package.  It also features rugged and waterproof attributes.  Price tag will run $400.",
        rating: 0,
        user_id: 1,
        topic_id: 6,
        created_at: new Date('2016-07-28 14:26:16 UTC'),
        updated_at: new Date('2016-07-28 14:26:16 UTC')
      },
      {
        id: 7,
        title: "Bourbon Bagel Burger has a shot of whiskey in the center of it",
        image_url: "https://usatsneakhype.files.wordpress.com/2016/07/bourbon-bagel-burger.jpg?w=640&h=640",
        description: "Mother of God.  This is already one beast of a burger, BUT….  They take it another step further with a shot of whiskey place in the center of it.  The Bourbon Bagel Burger can be found at a restaurant in Sydney, Australia called Chicken & Sons.  The burger is comprised of an angus patty, American cheese, jalapenos, pickles, bourbon barbeque sauce, bourbon-glazed bacon, and like I said….  A shot of bourbon whiskey in the center.",
        rating: 0,
        user_id: 1,
        topic_id: 7,
        created_at: new Date('2016-07-29 14:26:16 UTC'),
        updated_at: new Date('2016-07-29 14:26:16 UTC')
      },
      {
        id: 8,
        title: "Rodney Mullen releases first skateboarding video in 12 years",
        image_url: "http://image2.redbull.com/rbcom/010/2016-07-06/1331804571079_2/0010/1/800/533/2/rodney-mullen.png",
        description: "Rodney Mullen back.  And in 360-degree form…  Kind of.  It’s not really a 360º video, but it gives a 360º feel.  If you’re not familiar with Rodney Mullen it could be because he hasn’t released any major skateboarding footage in 12 years.",
        rating: 0,
        user_id: 1,
        topic_id: 8,
        created_at: new Date('2016-07-30 14:26:16 UTC'),
        updated_at: new Date('2016-07-30 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('posts_id_seq', (SELECT MAX(id) FROM posts));"
      );
    });
};
