import React from "react";
type EboardInfo = {
  name: string,
  position: string,
  bio: string,
  pic: string,
  smallpic: string
};

const eboardMembers: EboardInfo[] = [
  {
    name: "anna le",
    position: "president/co-website development",
    bio: "Hi! My name is Anna, and I'm from good ol’ Georgia (sweet tea has my heart <3). I'm concentrating in computer science and have always loved scrapbooking and documenting memories. I am so grateful to have found this Snail Mail family, and I hope other students find joy and comfort in our community, too. You can find me browsing on Etsy for cute stickers, crocheting, or in the CIT coding. I also love reading, boba, and good eats :D I’m excited to see what's in store for Snail Mail’s future!",
    pic: "/images/eboard/anna_le.jpg",
    smallpic: "/images/eboard/anna_le.jpg",
  },
  {
    name: "tuyetanh le",
    position: "vice president",
    bio: "Hi, my name is Tuyetanh and I’m concentrating in Chemistry and getting a Data Fluency Certificate. I used to bullet journal (shoutout to AmandaRachLee) but it would literally take me hours…. So now, I write letters, scrapbooking, and practice calligraphy. I have an embarrassingly large collection of stationery with sticker sheets being my favorite to collect (washi tape is a close second). After attending every meeting my freshman fall, I fell in love with the cozy, close-knit community Snail Mail had <3 Aside from stationery, I also love rock climbing, baking, and painting!",
    pic: "/images/eboard/tuyetanh_le.png",
    smallpic: "/images/eboard/tuyetanh_le.png",
  },
  {
    name: "alicia xu",
    position: "finance chair",
    bio: "Hi! My name is Alicia, and I’m from Mississippi, but I was born in Canada! I don’t know exactly what I’m concentrating in yet (maybe biochem), but I definitely want to go into dentistry. I’ve always loved junk journaling, scrapbooking, and collecting washi tapes. Outside of Snail Mail related activities, I love painting, badminton, archery, and reading!",
    pic: "/images/eboard/alicia_xu.jpg",
    smallpic: "/images/eboard/alicia_xu.jpg",
  },
  {
    name: "michelle jun",
    position: "finance chair",
    bio: "Hello! My name is Michelle and I am from Memphis, TN. I am planning on concentrating in APMA, but am also very interested in English. My fellow snail mailers have truly made me come out of my snail shell. Outside of snail mail, I love crafting, reading, listening to music, and building legos!",
    pic: "/images/eboard/michelle_jun.jpeg",
    smallpic: "/images/eboard/michelle_jun.jpeg",
  },
  {
    name: "kendra eastep",
    position: "art director",
    bio: "Hi! My name is Kendra, and I was born and raised in New York City. I’m not exactly sure what I want to concentrate in (it definitely won’t be STEM…), but I’m interested in English and Art History!  Likewise, in my freetime I enjoy drawing and reading contemporary fiction. I also love to make jewelry, drink Thai iced tea, and watch video essays on niche topics. On top of that, my love language is gift-giving, so I always allot time to make and send letters to my long distance friends and family. I can’t wait to create more art for Snail Mail and spend another year with everybody! <3",
    pic: "/images/eboard/kendra_eastep.JPG",
    smallpic: "/images/eboard/kendra_eastep.JPG",
  },
  {
    name: "srishti sankaran",
    position: "social media chair",
    bio: "Hi, my name is Srishti. I’m planning to concentrate in biochem, and I’m from Seattle, Washington. I am a huge stationery collector/hoarder, and you can always find me watching JetPens and AmandaRachLee videos. I am so grateful to have found a family of fellow journaling and stationery enthusiasts within Snail Mail, and I am excited to see our club grow even more! When I’m not at Snail Mail, I love baking, playing board games, and trying new cuisines!",
    pic: "/images/eboard/srishti_sankaran.png",
    smallpic: "/images/eboard/srishti_sankaran.png",
  },
  {
    name: "kiara ibanez",
    position: "social media chair",
    bio: "Hello! My name is Kiara, currently a sophomore concentrating in cognitive neuroscience. I’m from Miami, Florida but my family is from Peru (meaning I LOVE seafood). I spend my time reading fantasy novels or crocheting plushies to give to my friends. I have a really large stationary collection at home, and the markers feel too nice to use sometimes (it’s an issue). Super excited for another year with the Snail Mail family!",
    pic: "/images/eboard/kiara_ibanez.jpg",
    smallpic:  "/images/eboard/kiara_ibanez.jpg",
  },
  {
    name: "miranda gonzales",
    position: "communications chair",
    bio: "Hi snails! My name is Miranda, a senior concentrating in neuroscience and East Asian studies! I’m originally from Texas but am now living in Rhode Island. I absolutely love to read, bake, play cozy video games, grab boba with friends, and shop (I am currently trying my best to not spend all my money on kpop merch). My favorite stationary item would definitely be stickers - I’m great at collecting them but terrible at actually using them. I love the Snail Mail community and am so excited for all of our wonderful events!",
    pic: "/images/eboard/miranda_gonzales.jpg",
    smallpic: "/images/eboard/miranda_gonzales.jpg",
  },
  {
    name: "wen yang",
    position: "communications chair",
    bio: "Hii! My name is Wen and I’m from a casual suburb in Florida. I’m currently concentrating in biology. I love making cards, writing letters, hoarding stickers, and crafting. I also love to make and share origami, it is my favorite little gift to give. Besides Snail Mail, I like to play tennis (very rusty), paint, crochet, spend time with friends, and wrestle alligators in my backyard. Hope to see everyone at Snail Mail!",
    pic: "/images/eboard/wen_yang.png",
    smallpic: "/images/eboard/wen_yang.png",
  },
  {
    name: "emily jin",
    position: "outreach chair",
    bio: "Hello!! My name is Emily and I'm from North Jersey (nj best state woo!). I don't know what I'll be concentrating in just yet, but we’ll cross that bridge when the time comes. I've always loved writing/receiving letters and collecting pretty stationery sets ever since I was young. When I'm not being a snail, I enjoy eating anything spicy or strawberry related, baking, house hunting on zillow, and consuming media of all forms (I need to get off the internet…). I can't wait to reach out to all of yall in this school year and I hope to spread Snail Mail’s love to the wider community as well!",
    pic: "/images/eboard/emily_jin.JPG",
    smallpic: "/images/eboard/emily_jin.JPG",
  },
  {
    name: "tina siu",
    position: "freshman rep",
    bio: "Hello! My name is Tina and I’m from New York City. I’m planning to concentrate in Biochem or Cell Bio, but am also interested in taking classes in history and art. My hobbies include singing, making art, cooking, and decorating with stationery. I love collecting cute things– anything from stickers, to Lego animals, to Smiskis, to Jellycats, to pins…the list goes on :) A fun fact about me is that I play at least one NYT game everyday. I’m glad to have found the Snail Mail family, and hope to make more amazing memories with everyone <33",
    pic: "/images/eboard/tina_siu.png",
    smallpic: "/images/eboard/tina_siu.png",
  },
  {
    name: "marisol alvarado resendiz",
    position: "freshman rep",
    bio: "Hi snails! My name is Marisol Alvarado, and I am from Alabama. I am concentrating in Environmental Science and Studies, and I am a part of the class of 2028. I used to bullet journal a lot throughout middle school, but I started doing more scrapbooking and junk journaling in high school, and I occasionally still switch things up :) I love to shop, make jewelry, watch films, and plan cute hangouts with friends!",
    pic: "/images/eboard/marisol_alvarado.png",
    smallpic: "/images/eboard/marisol_alvarado.png",
  },
];

export { eboardMembers };
