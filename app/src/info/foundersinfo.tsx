import React from "react";
type EboardInfo = {
  name: string,
  position: string,
  bio: string,
  pic: string,
  smallpic: string
};

const originalEboard: EboardInfo[] = [
  {
    name: "emily sun (class of '24)",
    position: "founder/former president",
    bio: "Hi! I’m Emily. I’m concentrating in Neuroscience and Education and I’m from Vancouver, Canada. I started Snail Mail @ Brown to spread the love of letter-writing, bullet journalling, and stationery on Brown’s campus! I love writing long letters to my friends, journaling, and scrapbooking my memories with the Snail Mail community! You can find me reading on the main green and going on spontaneous trips on a sunny day or going on runs by the east bay bike path!",
    pic: "/images/eboard/emily_sun.jpg",
    smallpic: "/images/eboard/emily_sun.jpg",
  },
  {
    name: "julie yeo (class of '24)",
    position: "co-founder/former vice president",
    bio: "Hi, my name is Julie and I’m a senior concentrating in Immunobiology. I’m from Rockville, MD and have always loved journaling, crafting, and connecting with people through writing! I hope that Snail Mail will give Brown students a chance to slow down, destress, and form meaningful connections with each other. Outside of Snail Mail, you can find me skating around the ice rink or culturing my cells in lab :)",
    pic: "/images/eboard/julie_yeo.jpeg",
    smallpic: "/images/eboard/julie_yeo.jpeg",
  },
  {
    name: "jess wan (class of '24)",
    position: "website development chair/former art director",
    bio: "Hi, I’m Jess! I’m an alum from RI and concentrated in CS. I love art, aesthetics, and cute things, so I was honored when Emily asked me to draw the first graphics for Snail Mail :) It’s so heartwarming to see the Snail Mail community continue to lovingly grow one sticker at a time!",
    pic: "/images/eboard/jess_wan.jpg",
    smallpic: "/images/eboard/jess_wan.jpg",
  },
];

export { originalEboard };
