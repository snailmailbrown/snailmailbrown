import React from "react";
type GalleryInfo = {
  pic: string,
  title: string,
  caption: string
};

const gallery: GalleryInfo[] = [
  {
    pic: "/images/snailmail/eboard_social_2.jpeg",
    title: "End of Year Social 2023",
    caption:
      "Our lovely e-board at our end of year social! With so many events over the school year came soooooo many stickers. Too many. Actually, that’s a lie. You can never have too many stickers. However, with finals rounding the corner, we got our Snails together for a fun night of tote bag painting, boba, and sticker giveaways! Our final event of the year was filled with laughter, creativity, socializing between snails, and a couple of freebies for our Snail Mail community <3.",
  },
  {
    pic: "/images/snailmail/welcome_meeting.jpg",
    title: "Welcome Meeting",
    caption:
      "As tradition goes, writing a letter to your future self is a great way to start off the academic year. What’ll change? What’ll stay the same? Did you end up dropping that class? All questions answered by the end of the year when our e-board members mail the letters back to you! Get to know our plans for the year and meet the e-board at our first meeting of the semester!",
  },
  {
    pic: "/images/snailmail/letter_tyfs.jpg",
    title: "Write a Letter to Your Future Self",
    caption:
      "Ever wondered what your future self might need to hear? In this cozy, reflective event, our wonderful snails wrote heartfelt notes to be delivered to themselves later. With journaling prompts and creative supplies, everyone crafted a letter filled with goals, dreams, or just a little self-love. It’s the perfect way to slow down (like a snail!) and connect with yourself across time.",
  },
  {
    pic: "/images/snailmail/letter_home.jpg",
    title: "Write a Letter Home",
    caption:
      "We can all get a little homesick sometimes. This heartwarming event let our wonderful snails write letters to their loved ones at home. Whether it was a life update or exciting news, they were all able to connect with their homes.",
  },
  {
    pic: "/images/snailmail/march_pws.jpg",
    title: "March Plan with Us",
    caption:
      "Spring is the season of new beginnings! The snails came together to plan out their goals and ideas from the spring season. We had adorable spring-themed stickers as well as some tea for the perfect relaxing vibes.",
  },
  {
    pic: "/images/snailmail/memory_box.jpg",
    title: "End of Year Social 2024",
    caption:
      "These two adorable snails joined us for our spring end of year social in 2024 where we created memory boxes and scrapbooked. The arrangement of floral stickers on one snail’s memory box and another’s journal is so pretty! We love to see your creative creations!",
  },
  {
    pic: "/images/snailmail/social_2.jpg",
    title: "Memory Shadowboxes",
    caption:
      "To celebrate the end of the year, we had a larger spring social held in Leung Gallery to capture the memories everyone made. We provided shadow boxes, polaroids, and stickers to let everyone decorate! ",
  },
  {
    pic: "/images/snailmail/spring_social_2.jpg",
    title: "Paper Flowers",
    caption:
      "What does spring remind you of? Good weather, sunny days, and…FLOWERS! To commemorate our spring semester, we made 3D paper tulip bouquets 🌷",
  },
  {
    pic: "/images/snailmail/spring_social_1.png",
    title: "Spring Event 2024",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    pic: "/images/snailmail/polaroid_night.jpg",
    title: "Polaroid Night",
    caption:
      "Polaroids are always a timeless keepsake, a little something to remember the moment by. Using an Instax camera, snails took polaroids to spice up their scrapbooks, journals, and walls!",
  },
  {
    pic: "/images/snailmail/notion.jpg",
    title: "Notion Workshop",
    caption:
      "Literally what is Notion? Like actually? Thankfully, some of our e-board members had a clue! Our Notion workshop taught students how to create an account, implement its many features, and make cute and personalized task centers to help with their productivity, time management, and more! We’re starting a revolution of staying organized while being creative and aesthetic.",
  },
  {
    pic: "/images/snailmail/activity_fair.jpg",
    title: "Activities Fair",
    caption:
      "What better way to promote Snail Mail than with a human-size inflatable snail? At the beginning of the school year, one lucky snail mailer got to wear our mascot at the annual club fair, attracting the attention of many students—new and old!",
  },
  {
    pic: "/images/snailmail/social_3.png",
    title: "Tote Bag Painting",
    caption:
      "With so many events over the school year came soooooo many stickers. Too many. Actually, that’s a lie. You can never have too many stickers. However, with finals rounding the corner, we got our Snails together for a fun night of tote bag painting, boba, and sticker giveaways! Our final event of the year was filled with laughter, creativity, socializing between snails, and a couple of freebies for our Snail Mail community <3.",
  },
  {
    pic: "/images/snailmail/study_lofi.png",
    title: "Lofi Study with Us",
    caption:
      "A Lofi study session was the perfect way for all the snails to prepare for their midterms. With chill music and some good company, our snails were extra productive!",
  },
  {
    pic: "/images/snailmail/snail_santa.jpg",
    title: "Christmas Card Making",
    caption:
      "Ho ho ho! Happy holidays to all the snails from the Snail Mail e-board! Filled with holiday joy, snail santa came around to Brown looking to fulfill wishes for those who wrote letters. With many Christmas stickers, wax stamps, and jolly holiday cards, students chilled to festive music while writing all about what they want for Christmas. And those who were lucky enough to catch snail santa’s eye received a special gift in the new year!! Let’s hope that snail santa makes his return…",
  },
  {
    pic: "/images/snailmail/eboard_halloween_2.jpg",
    title: "Halloween with Snail & Mail",
    caption:
      "Our lovely and beautiful founders Emily Sun and Julie Yeo are dressed as Snail (Emily) and Mail (Julie) for Halloween in 2023, their graduating year at Brown (we miss you already). Aren't they the most adorable duo ever?",
  },
  {
    pic: "/images/snailmail/studio_ghibli.jpg",
    title: "Studio Ghibli Wellness Event",
    caption:
      "Our Studio Ghibli-themed fall wellness event was so much fun! We decorated our own pencil boxes with stickers, made super cute soot sprite pom-pom keychains, and enjoyed a relaxing movie with tea and face masks.",
  },
  {
    pic: "/images/snailmail/social_4.png",
    title: "End of Year Social 2023",
    caption:
      "With so many events over the school year came soooooo many stickers. Too many. Actually, that’s a lie. You can never have too many stickers. However, with finals rounding the corner, we got our Snails together for a fun night of tote bag painting, boba, and sticker giveaways! Our final event of the year was filled with laughter, creativity, socializing between snails, and a couple of freebies for our Snail Mail community <3.",
  },
];

export { gallery };
