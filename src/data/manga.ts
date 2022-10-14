interface Manga {
    _id: string,
    slug: string,
    title: string,
    description?: string,
    status: string,
    year: number | null,
    img: string,
}

const manga: Manga[] = [
    {
        "_id": "5d279916-fef8-446a-b05a-4cd6285eab9a",
        "slug": "8-list",
        "title": "8 Tales of the ZQN",
        "description": "An anthology manga containing 8 short stories based around the theme \"ZQN\" (From \"I Am a Hero\")",
        "status": "completed",
        "year": 2016,
        "img": "https://mangadex.org/covers/5d279916-fef8-446a-b05a-4cd6285eab9a/93cea195-1dd6-4d84-8a89-6721cd102e98.jpg"
    },
    {
        "_id": "cb8e4a16-f65d-4ca1-9fd5-322bebce081a",
        "slug": "diary-of-embellished",
        "title": "A Diary of Embellished Patches",
        "description": "A collection of four short stories that are basically exaggerated versions of mundane events in the author's life.",
        "status": "completed",
        "year": 2012,
        "img": "https://mangadex.org/covers/cb8e4a16-f65d-4ca1-9fd5-322bebce081a/9ee13035-db39-468c-b4f4-b6bee772489b.jpg"
    },
    {
        "_id": "41833997-4ce8-4154-808b-7b1602569e80",
        "slug": "black-paradox",
        "title": "Black Paradox",
        "description": "A manga about people trying to kill themselves, but weird stuff happens instead.",
        "status": "completed",
        "year": null,
        "img": "https://mangadex.org/covers/41833997-4ce8-4154-808b-7b1602569e80/883c7ab3-e561-4e95-9ee1-a96317de0a11.jpg"
    },
    {
        "_id": "404375e8-0e39-416c-909e-6a38549b96dc",
        "slug": "deserter",
        "title": "Deserter: Junji Ito Story Collection Volume 5",
        "status": "completed",
        "year": 2011,
        "img": "https://mangadex.org/covers/404375e8-0e39-416c-909e-6a38549b96dc/aba67ba6-a64c-4f46-b45b-57a4860eed6b.png"
    },
    {
        "_id": "ca131ef8-e35d-4afc-9b8e-8aac806895f3",
        "slug": "dissolving-series",
        "title": "Dissolving Series",
        "description": "Follow through a notorious tale of the demonic siblings, Azeri Yuma and Chizumi.  \n  \nCollection includes:  \nChapter 1 - Dissolving Classroom   \nChapter 2 - Worshipping Beauty (Dissolving Beauty  \nChapter 3 - Dissolving Apartment  \nChapter 4 - Chizumi’s Dissolving Love  \nChapter 5 - The Demon's Conference  \nChapter 6 - Meet Again  \nChapter 7 - Children of the Earth",
        "status": "completed",
        "year": 2013,
        "img": "https://mangadex.org/covers/ca131ef8-e35d-4afc-9b8e-8aac806895f3/dda70d64-8311-42b5-be02-3c694789ad7e.jpg"
    },
    {
        "_id": "e993775d-c4dc-4186-a5e9-0e1100a04427",
        "slug": "ghost-heights",
        "title": "Ghost Heights Management Association",
        "description": "A oneshot that appeared in Comic Flapper 2015-02.",
        "status": "completed",
        "year": null,
        "img": "https://mangadex.org/covers/e993775d-c4dc-4186-a5e9-0e1100a04427/ec4e19ec-8a7a-4f63-aacc-3755257719a9.jpg"
    },
    {
        "_id": "d831ed75-10fd-4af4-b23f-e732bc759036",
        "slug": "gyo",
        "title": "GYO",
        "description": "Something is rotten in Okinawa…the floating stench of death hangs over the island..What is it? A strange, legged fish appears on the scene…so begins Tadashi and Kaori's spiral into the horror (and stench) of the sea.",
        "status": "completed",
        "year": 2001,
        "img": "https://mangadex.org/covers/d831ed75-10fd-4af4-b23f-e732bc759036/5193ff9a-003f-484b-b271-1954b089aba7.jpg"
    },
    {
        "_id": "74753c8f-70de-4f52-b7f0-67eccdbd0a2f",
        "slug": "hellstar-remina",
        "title": "Hellstar Remina",
        "description": "This is a horror/sci-fi story about a giant planet consuming creature from another dimension that a scientist discovers and mistakenly identifies as a planet. Being given the honor to name it as its discoverer, the professor chooses to name it after his only daughter, Remina, but when Hellstar Remina is headed on a direct collision course with Earth the world goes nuts and all the people in the city start a witch hunt to kill Remina, thinking she is somehow to blame.",
        "status": "completed",
        "year": 2005,
        "img": "https://mangadex.org/covers/74753c8f-70de-4f52-b7f0-67eccdbd0a2f/2ebbf6a6-43d0-47f8-962a-db63336846b4.jpg"
    },
    {
        "_id": "81c5f816-e03a-45a4-b0ae-127b2b757f0d",
        "slug": "horror-anthology",
        "title": "Horror Anthology Comic: Blindside",
        "description": "An anthology of horror one-shots by various artists.",
        "status": "completed",
        "year": 2016,
        "img": "https://mangadex.org/covers/81c5f816-e03a-45a4-b0ae-127b2b757f0d/c2629373-ab7b-4625-aade-5ec7ce382e2d.png"
    },
    {
        "_id": "5e9e50a7-39cc-447c-a5b3-a459bebd7f62",
        "slug": "human-chair",
        "title": "Human Chair",
        "description": "A woman enters a furniture store in search of a chair, but the proprietor is all too eager to reveal its past…   \n  \nThis oneshot was adapted from a short story of the same name that was written by Edogawa Ranpo.",
        "status": "completed",
        "year": 2007,
        "img": "https://mangadex.org/covers/5e9e50a7-39cc-447c-a5b3-a459bebd7f62/733f306f-ae22-44f4-9514-0436528f050e.png"
    },
    {
        "_id": "3f7b7736-84c5-4f38-bf73-7266021f355a",
        "slug": "manga-collection",
        "title": "Itou Junji Kyoufu Manga Collection",
        "description": "The first two volumes contain thematically linked but self-contained stories concerning Tomie - a beautiful young woman with the power to seduce and dominate any male, from small boys to elderly men. Later, the series leaves these characters behind and focuses on stand-alone gothic horror pieces.\n\n\n---\n\n**Table of Contents:**\n1. **Tomie**\nTomie\nPhotograph\nKiss\nMansion\nRevenge\nThe Basin of the Waterfall\n\n2. **Tomie - Part 2**\nTomie Part 2\nBasement\nPainter\nMurder\nHair\nOrphan Girl\n\n3. **Flesh Colored Horror**\nLong Hair in the Attic\nPermission/Forgiveness\nThe Bee Hive\nDying Young\nHeadless Statues\nFlesh Coloured Horror\n  \n4. **The Face Burglar**\nThe Face Burglar\nScarecrows\nFalling\nRed String\nMy Dear Ancestors\nThe Hanging Balloons\n\n5. **Souichi's Diary of Delights**\nFun Summer Vacation\nFun Winter Vacation\nSouichi's Diary of Delights\nSouichi's Home Tutor\nMannequin Teacher\nSouichi's Birthday\n\n6. **Souichi's Diary of Curses**\nSouichi's Selfish Curse\nThe Silent Room\nThe Coffin\nRumours\nFashion Model\n\n7. **Slug Girl**\nSlug Girl\nOut of Its Element (Thing that Drifted Ashore)\nMold\nThe Chill\nRyokan\nThe Groaning Drain\nBiohouse\n\n8. **Blood-bubble Bushes**\nBlood-bubble Bushes\nUnbearable Labyrinth\nSword of the Re-animator\nThe Will\nThe Bridge\nThe Devil's Logic\nThe Conversation Room\n\n9. **Hallucinations**\nHallucinations\nBog of the Living Dead\nPenpals\nIntruder\nFurther Tales of Oshikiri\nFurther Tales of Oshikiri: The Walls\n\n10. **House of the Marionettes**\nIce Cream Bus\nGang House\nThe Smoking Club\nSecond-hand Record\nThe Sleeping Room (Den of the Sleep Demon)\nThe Gift Bearer\nHouse of the Marionettes\n\n11. **The Town Without Streets**\nThe Town Without Streets\nNear Miss!\nMaptown\nVillage of the Sirens\nThe Supernatural Transfer Student\n\n12. **The Bully**\nThe Bully\nHouse of the Deserter\nFather's Heart\nMemory\nThe Back Alley\nLove by the Book\nIn the Soil\n\n13. **The Circus is Here**\nThe Circus is Here\nGravetown\nThe Adjacent Window\nThe Bizarre Hikizuri Siblings - Second Daughter's Lover\nThe Bizarre Hikizuri Siblings- Seance\n\n14. **The Story of the Mysterious Tunnel**\nLong Dream\nThe Story of the Mysterious Tunnel\nThe Bronze Statue\nDrifting Spores\nBlood Sickness of the White Sands Village\n\n15. **Lovesick Dead**\nThe Beautiful Youth of the Intersections\nThe Anxious Woman\nShadows\nScreams in the Night\nSequel: The White-Clothed Beautiful Youth\n\n16. **Frankenstein**\nFrankenstein\nA Doll's Hellish Burial\nMemories of Real Shit",
        "status": "completed",
        "year": null,
        "img": "https://mangadex.org/covers/3f7b7736-84c5-4f38-bf73-7266021f355a/07eed868-6aef-4241-9095-72a58186ac6c.jpg"
    },
    {
        "_id": "39f9219f-1323-4cba-ba8a-2d2761908f64",
        "slug": "masterpiece-selection",
        "title": "Junji Ito Masterpiece Selection",
        "description": "A best-of story selection by the master of horror manga.  \n  \nThis volume includes nine of Junji Ito’s best short stories, as selected by the author himself and presented with accompanying notes and commentary. An arm peppered with tiny holes dangles from a sick girl’s window… After an idol hangs herself, balloons bearing faces appear in the sky, some even featuring your own face… An amateur film crew hires an extremely individualistic fashion model and faces a real bloody ending… An offering of nine fresh nightmares for the delectation of horror fans.",
        "status": "completed",
        "year": 2015,
        "img": "https://mangadex.org/covers/39f9219f-1323-4cba-ba8a-2d2761908f64/b613e1d8-76f9-4451-aed8-3d8f3f28c0f8.jpg"
    },
    {
        "_id": "b156b9a0-4bcf-49ac-97e2-7232addd134b",
        "slug": "abyss-of-horror",
        "title": "Junji Ito: A Study From the Abyss of Horror",
        "description": "A Junji Ito anthology of manga and articles.  \n  \nStories:\n**Yon & Mu no Yuurei Bukken** (よん&むーの幽霊物件)\n\n**The Return of the Hanging Balloons** (Kubitsuri Kikyuu Sairai, 首吊り気球・再来)\n\n**Layers of Fear** (Kyoufu no Juusou, 恐怖の重層)\nA one-shot about a strange curse visited on a family after an archaeological dig.\nOne-shot in celebration of 30 years of Itou Junji's career.\n\n**Demon's Voice** (Masei, 魔声)\nThis one-shot was a short extra in a guide book for a Sirens game. A mysterious siren out at sea drives fishermen to madness.",
        "status": "completed",
        "year": 2017,
        "img": "https://mangadex.org/covers/b156b9a0-4bcf-49ac-97e2-7232addd134b/710d7848-3f27-4c1b-9937-6ea345a34941.jpg"
    },
    {
        "_id": "53c628b3-d1f5-43aa-8df3-080034285cb4",
        "slug": "cat-diary",
        "title": "Junji Ito's Cat Diary: Yon & Mu",
        "description": "Horror manga author Mr. J moves into his new house with his fiancée, A-ko. Much to his chagrin, she brings two guests with her.",
        "status": "completed",
        "year": 2008,
        "img": "https://mangadex.org/covers/53c628b3-d1f5-43aa-8df3-080034285cb4/886b532b-388e-4b58-86c9-2fdc537c9706.jpg"
    },
    {
        "_id": "3192dc36-e317-4390-892f-dd31668d9736",
        "slug": "dog-diary",
        "title": "Junji Ito's Dog Diary",
        "description": "Chronicling the adventures of the mangaka and his dog.",
        "status": "completed",
        "year": null,
        "img": "https://mangadex.org/covers/3192dc36-e317-4390-892f-dd31668d9736/9a555c10-4d88-44a7-b4e1-091f01c1c2b4.jpg"
    },
    {
        "_id": "71b3fddd-a547-48d1-8fb6-8aac99b9ca2d",
        "slug": "kai-sasu",
        "title": "Kai, Sasu",
        "description": "",
        "status": "completed",
        "year": null,
        "img": "https://mangadex.org/covers/71b3fddd-a547-48d1-8fb6-8aac99b9ca2d/e62d4b12-7e7b-4c80-97af-1397600dc7f7.jpg"
    },
    {
        "_id": "580025a0-46ca-4c83-85a1-778dc54b9da3",
        "slug": "layers-of-fear",
        "title": "Layers of Fear",
        "description": "A one-shot about a strange curse visited on a family after an archaeological dig.\n\nOne-shot in celebration of 30 years of Itou Junji's career.",
        "status": "completed",
        "year": 2017,
        "img": "https://mangadex.org/covers/580025a0-46ca-4c83-85a1-778dc54b9da3/dc4ec8c4-f786-4c34-85b7-65168300d47b.jpg"
    },
    {
        "_id": "4a23f28e-9bb6-41f9-9037-3a3e9234ff75",
        "slug": "mimis-ghost-stories",
        "title": "Mimi’s Ghost Stories",
        "description": "1. The Woman Next Door  \n2. Sound of Grass  \n3. Graveman  \n4. The Seashore  \n5. Just the Two of Us  \n6. The Scarlet Circle",
        "status": "completed",
        "year": 2002,
        "img": "https://mangadex.org/covers/4a23f28e-9bb6-41f9-9037-3a3e9234ff75/8d64e7f9-47bb-482f-a8af-8d990dd3164e.jpg"
    },
    {
        "_id": "72c4a9d3-012c-4f00-a810-1e9a9ef84850",
        "slug": "mr-inagawa",
        "title": "Mr. Inagawa's Ghost Story Treasure Box",
        "description": "A collaboration between horror radio show host personality Inagawa Junji and horror mangaka Itou Junji. Published in the September 2007 issue of \"Real Horror Stories.",
        "status": "completed",
        "year": 2007,
        "img": "https://mangadex.org/covers/72c4a9d3-012c-4f00-a810-1e9a9ef84850/c09e26ae-5b2a-4fe6-ad0a-9d3f6b6da326.png"
    },
    {
        "_id": "9b7b2108-62a8-42bf-a421-09a14a522922",
        "slug": "new-voices",
        "title": "New Voices in the Dark",
        "description": "More horror stories from master Junji Ito.",
        "status": "completed",
        "year": null,
        "img": "https://mangadex.org/covers/9b7b2108-62a8-42bf-a421-09a14a522922/b1daaed3-324c-410b-bdda-ae4321990cd5.jpg"
    },
    {
        "_id": "48563de8-7669-4cd3-9dc0-7cbc945e8a8a",
        "slug": "no-longer-human",
        "title": "No Longer Human (ITO Junji)",
        "description": "Macabre manga master Junji Ito applys his singularly anxious touch to a manga adaptation based on No Longer Human (Ningen Shikkaku in the original Japanese), a classic of modern Japanese literature written by Osamu Dazai. The poignant and fascinating story of a young man who is caught between the breakup of the traditions of a northern Japanese aristocratic family and the impact of Western ideas. Portraying himself as a failure, the protagonist of Osamu Dazai's No Longer Human narrates a seemingly normal life even while he feels himself incapable of understanding human beings. Oba Yozo's attempts to reconcile himself to the world around him begin in early childhood, continue through high school, where he becomes a \"clown\" to mask his alienation, and eventually lead to a failed suicide attempt as an adult. Without sentimentality, he records the casual cruelties of life and its fleeting moments of human connection and tenderness.",
        "status": "completed",
        "year": 2017,
        "img": "https://mangadex.org/covers/48563de8-7669-4cd3-9dc0-7cbc945e8a8a/d860edae-be60-4cfc-a01f-50286fd1b6c9.jpg"
    },
    {
        "_id": "7275875a-7713-4895-969f-a5e15186ba67",
        "slug": "phantom-mansion",
        "title": "Phantom Mansion",
        "description": "",
        "status": "completed",
        "year": null,
        "img": "https://mangadex.org/covers/7275875a-7713-4895-969f-a5e15186ba67/6751b4bc-3b9c-4794-86ca-b4a0ec888f5b.jpg"
    },
    {
        "_id": "37c8394a-f3aa-43d9-acc1-21615681cec8",
        "slug": "rasputin-the-patriot",
        "title": "Rasputin the Patriot",
        "description": "The Kafkaesque autobiography of a diplomat who compares himself to Grigori Rasputin\nand what happens after he gets caught up in a political purge during the early 2000s.  \nA legal thriller with a dash of geopolitics.   \n  \nBased on \"Kokka no Wana (Trap of the State)\", the autobiography of ex-diplomat and political writer Sato Masaru.",
        "status": "completed",
        "year": 2010,
        "img": "https://mangadex.org/covers/37c8394a-f3aa-43d9-acc1-21615681cec8/193a3cf1-4ef2-403f-b5d8-526b2eaefc36.jpg"
    },
    {
        "_id": "df8763cd-322a-465f-b730-e55b93d1fda8",
        "slug": "ribs-woman",
        "title": "Ribs Woman",
        "description": "Yuki is so ashamed of her figure that she refuses to go swimming, either at school or on the beach. She believes her ribs look strange, and hears that she can have plastic surgery to alter the appearance of her ribcage. Yuki goes to a nearby clinic that performs the procedure, but is told that she must pass a mental health assessment before she can have the surgery.",
        "status": "completed",
        "year": null,
        "img": "https://mangadex.org/covers/df8763cd-322a-465f-b730-e55b93d1fda8/a5abb687-3e6c-4543-b9fe-f1690e7cfaa1.jpg"
    },
    {
        "_id": "40d2c692-2eeb-4e0e-b79f-5112bd37fb8a",
        "slug": "souichi-possessed",
        "title": "Souichi Possessed",
        "description": "A short Souichi and Tomie crossover.",
        "status": "completed",
        "year": null,
        "img": "https://mangadex.org/covers/40d2c692-2eeb-4e0e-b79f-5112bd37fb8a/2d1cbfd8-d45c-49ac-bd69-e5b03e10d1ab.jpg"
    },
    {
        "_id": "984b53d5-bd03-474a-aa41-ffae063e058a",
        "slug": "enigma-of-amigara",
        "title": "The Enigma of Amigara Fault",
        "description": "Following an earthquake in an unnamed prefecture of Japan, a fault is discovered on Amigara Mountain, very close to the epicenter of the quake. On the slopes of the mountain, two hikers meet; a man named Owaki and a woman named Yoshida. The former assumes that they are both here to see the fault, which has captured the attention of the global press. Following the sound of voices to the fault, the two of them marvel at the strange sight before them: countless human-shaped holes in a rock face exposed by the earthquake.",
        "status": "completed",
        "year": null,
        "img": "https://mangadex.org/covers/984b53d5-bd03-474a-aa41-ffae063e058a/b399d43f-fe0c-47a6-885b-8bd7ccbdc05c.png"
    },
    {
        "_id": "b4400753-0504-4f3b-97e3-f4883c8c027c",
        "slug": "the-lighthouse",
        "title": "The Lighthouse",
        "description": "6 page partial adaptation of The Lighthouse movie included in the booklet given out during the Japanese screening of the movie.",
        "status": "completed",
        "year": 2021,
        "img": "https://mangadex.org/covers/b4400753-0504-4f3b-97e3-f4883c8c027c/bebe0273-1254-4130-bbe9-c97aaeb4cf00.png"
    },
    {
        "_id": "8456d1a6-11af-4f8a-a8cb-c87133e48201",
        "slug": "liminal-zone",
        "title": "The Liminal Zone",
        "description": "The story centres on the oddities that appear in the distortions within everyday life.",
        "status": "ongoing",
        "year": 2021,
        "img": "https://mangadex.org/covers/8456d1a6-11af-4f8a-a8cb-c87133e48201/86ad1564-1d4e-4b7c-a021-7aae258e2106.png"
    },
    {
        "_id": "2f286329-f95b-4238-9fcf-cc4c321e58af",
        "slug": "shard-of-evil",
        "title": "The Shard of Evil",
        "description": "The prince of horror manga, Junji Itou, has released a new horror collection after 8 years of writing. It includes 7 stand-alone stories that are featured in「Nemuki+」and an additional story, Whispering Woman that was published in「シンカン」. This is one book that cannot be missed!  \n  \nCollection includes:  \nFuton  \nHaunted Wood Mansion  \nTomio: Red Turtleneck  \nLingering Farewell  \nDissection Girl  \nBlack Bird  \nNanakuse Kyokumi  \nWhispering Woman",
        "status": "completed",
        "year": 2013,
        "img": "https://mangadex.org/covers/2f286329-f95b-4238-9fcf-cc4c321e58af/1f9bb0e9-235b-4729-aa6a-e90f02be16d5.jpg"
    },
    {
        "_id": "349ed7c7-b3dd-4627-803e-e816fc416cb9",
        "slug": "summer-time",
        "title": "The Summer Time Graduation Trip",
        "description": "This is the bonus manga chapter from Kihara Hirokatsu light novel Kai, Sasu.  \n  \nPlot summary: Two friends on their vacation decide to take a bath…",
        "status": "completed",
        "year": null,
        "img": "https://mangadex.org/covers/349ed7c7-b3dd-4627-803e-e816fc416cb9/123156b1-39a2-45aa-8886-ed1407669665.jpg"
    },
    {
        "_id": "6fcc7e27-f51c-4b28-9acd-7f5b808769d7",
        "slug": "the-summit",
        "title": "The Summit of the Gods - Precipice of the Unknown",
        "description": "Part of the 1 volume anthology based on ghost stories in the mountains, Yama Kaidan.",
        "status": "completed",
        "year": 2018,
        "img": "https://mangadex.org/covers/6fcc7e27-f51c-4b28-9acd-7f5b808769d7/459cd21e-bf20-47f7-9228-0dd2abb5ba6a.png"
    },
    {
        "_id": "9ad2d9a1-8e01-48f6-b979-a03b1050a2bd",
        "slug": "tomie",
        "title": "Tomie",
        "description": "Every male who encounters Tomie becomes obsessed with her and eventually kills and dismembers her. But Tomie is not human, and is always reborn…  \n  \nNotes:  \n|| Note: There is a third volume of Tomie called \"Tomie: Again\" which was included in the new japanese reissued two- volume version of the Junji Ito Horror Comic Collection (伊藤潤二 恐怖博物館). These new stories are not included in the original ComicsOne editions of Tomie, but are available in Dark Horse's Museum of Terror volume 2.  \n  \nNote 2: Besides Junji Ito's Horror Comic Collection (Also called Museum of Terror), in 2000 Tomie was also published in a compilatory tankoubon called \"Tomie, The Complete of Tomie\" -「富江」 （全）THE COMPLETE OF TOMIE-. Regardless of the title, this volume does not include \"Tomie Again\" within its pages.  \n  \nNote 3: Some people also consider \"Tomie no kyoufu gaka\" [ シリーズ富江の 恐怖 画家] as part of the Tomie franchise. Tomie no kyoufu gaka was the first Tomie's compilatory tankoubon that was ever released (It was published in 1996) and features five stand-alone stories (Gaka, Ansatsu, Mouhatsu, Youjo and Takitsubo) that were published a year later in Junji Ito's Horror Comic Collection.||",
        "status": "completed",
        "year": 1987,
        "img": "https://mangadex.org/covers/9ad2d9a1-8e01-48f6-b979-a03b1050a2bd/7557e573-b89d-4efd-b704-855feb0cec4c.jpg"
    },
    {
        "_id": "40f36d48-0dfd-41e0-96c4-70000a7e5512",
        "slug": "tomie-takeover",
        "title": "Tomie: Takeover",
        "description": "A new Tomie story, originally included with the Kanzenban release of the Junji Ito Collection.",
        "status": "completed",
        "year": null,
        "img": "https://mangadex.org/covers/40f36d48-0dfd-41e0-96c4-70000a7e5512/76f43c29-7793-425a-a2af-3475222902f7.jpg"
    },
    {
        "_id": "f74bda04-6923-4c35-a2b7-eea5a7f8cb4a",
        "slug": "succubus",
        "title": "Travelogue of the Succubus",
        "description": "A young woman comes across a remote village that has an unusual form of worship.  \r\n  \r\nThe newest series from acclaimed horror mangaka Junji Ito.",
        "status": "completed",
        "year": null,
        "img": "https://mangadex.org/covers/f74bda04-6923-4c35-a2b7-eea5a7f8cb4a/be518459-3301-4381-ab37-d57cd96ae48e.jpg"
    },
    {
        "_id": "53906ed4-8c67-46f8-8738-d41bfd44ecab",
        "slug": "umezu-sensei",
        "title": "Umezu-sensei and I",
        "description": "A oneshot that appeared in Monthly Spirits　2014年　11月号 to celebrate Ito and Kazuo being in an interview together.",
        "status": "completed",
        "year": 2014,
        "img": "https://mangadex.org/covers/53906ed4-8c67-46f8-8738-d41bfd44ecab/ee3e89c0-d732-42b3-95db-95515a96adba.jpg"
    },
    {
        "_id": "f4cfbb1c-766e-49db-ae80-1a5db3cbcc1b",
        "slug": "uzumaki",
        "title": "Uzumaki",
        "description": "(from ebookjapan):\n\nOn her way to the station to pick up Shuichi Saito, a high school student from a neighboring town, she finds Shuichi's father sitting in an alley, staring at a wall. \n\nHe seemed oblivious to Kirie's greeting and continued to stare at the snail shell stuck to the wall... \n\nAn out-of-this-world horror depicted by Junji Ito, the genius of new-sensation horror!\n\n[Official English](https://www.viz.com/read/manga/junji-ito/product/3382)",
        "status": "completed",
        "year": 1998,
        "img": "https://mangadex.org/covers/f4cfbb1c-766e-49db-ae80-1a5db3cbcc1b/1860e1d1-b5af-41ea-bd95-a068ca403dda.png"
    },
    {
        "_id": "fedc5bf9-50fd-48c4-bfab-df6bb4abb937",
        "slug": "venus-in-the-blind",
        "title": "Venus in The Blind Spot",
        "description": "This volume includes ten of Junji Ito’s short stories, as selected exclusively from the Shōgakukan publisher catalog and presented and accompanied with a gallery of six color illustrations.  \n  \nStories:  \n  \n1: ''Okuman botchi (Army of One)''  \n2: ''Ningen isu''  \n3: ''Mōten no bīnasu''  \n4: ''Name onna (The Licking Woman)''  \n5: 'Umezu sensei to watashi (Umezz Kazuo and Me)''  \n6: ''Konoyo no hoka no koi''  \n7: ''Miira reta Kirita kyōju''  \n8: ''Amigaradansō no kai (The Enigma of the Amigara Fault)''  \n9: ''Daikokubashira hiwa (The Sad Tale of the Principal Post)''  \n10: ''Wasuregatami (Memento)'' (New one-shot)  \n  \nPin-up:  \n  \n1: ''Kirie''  \n2: ''Ningen shikkaku no onna-tachi''  \n  \nGallery:  \n  \n1: ''Frankenstein in Innsmouth''  \n2: ''Ningen shikkaku''  \n3: ''Uzumaki''  \n4: ''Ningen shikkaku",
        "status": "completed",
        "year": null,
        "img": "https://mangadex.org/covers/fedc5bf9-50fd-48c4-bfab-df6bb4abb937/ab66341e-bf9b-4830-8828-736c69dc4faf.jpg"
    },
    {
        "_id": "5669aa80-8d5a-4ccf-8427-94a2bea05f60",
        "slug": "voices-in-the-dark",
        "title": "Voices in the Dark",
        "description": "Voices in the Dark is a collection of horror shorts from Junji Ito, published in 2003. The stories themselves were previously published in bimonthly serials in magazines from Asahi Sonorama.",
        "status": "completed",
        "year": 2002,
        "img": "https://mangadex.org/covers/5669aa80-8d5a-4ccf-8427-94a2bea05f60/21f55ea5-e4f4-4101-aff4-83c82fc39160.jpg"
    }
]

export default manga;
export type { Manga };
