document.addEventListener('DOMContentLoaded', () => {
    const feedContainer = document.getElementById('feed-container');

    // Fülle diese Liste mit neuen Einträgen um weitere Posts zu erstellen
    // type: 'post' oder 'reel'
    // avatar: Das Profilbild des Posts - wenn du das als '' lässt, gibt es ein Standard Bild
    // mediaSrc: Post oder Bild
    // likes: Wie viele Likes
    // comment: Hier kannst du Kommentare einfügen (wenn erwünscht)
    const feedData = [
        {
            type: 'post',
            username: 'healthydiary',
            avatar: 'media/Profilepic2_BuddhaBowl.jpg',
            mediaSrc: 'media/Post2_BuddhaBowl.jpg',
            caption: 'Fueling up with this delicious and vibrant Buddha Bowl! 🥗 So easy to customize with whatever you have in the fridge or what you are craving. Recipe is linked in my bio as always – save this for your next meal prep! <br>' +
                    'What is your favorite healthy go-to? <br>' +
                    '<a href="#">#Healthyeating</a> <a href="#">#Recipeshare</a> <a href="#">#Mealprep</a> <a href="#">#Foodie</a> <a href="#">#Cleaneating</a> <a href="#">#Nutritious</a>',
            likes: '48.204',
            comments: [
                { user: 'nanarose', text: 'This looks absolutely delicious😋.' },
                { user: 'antoncitorito', text: 'Thank you for all these amazing recipes!' }
                
            ]
    },   
    {
            type: 'reel',
            username: 'dwnews',
            avatar: 'media/Profilepic9_NewsGraz.jpg',
            mediaSrc: 'media/Reel9_NewsGraz.mp4',
            caption: 'Austrian have gathered to honor the ten people killed and several others injured in a school shooting in the city of Graz.' + 
                    'Police say that while they now know the gunman planned the attack in detail, they still don’t know why he did it.',
            likes: '4.648',
            comments: [
            ]
    },
    {
            type: 'reel',
            username: 'alenawinternaturalhealth',
            avatar: 'media/Profilepic6_MHHealDepression.jpg',
            mediaSrc: 'media/Reel6_MHHealDepression.mp4',
            caption: 'I always recommend a holistic approach when it comes to supporting mental health 💛 <br>' +
                    'If the thought of making change feels overwhelming, start gradually. Choose one small area to begin with. Maybe it’s getting outside for 5 minutes a day, or making one nourishing meal. Build momentum, get the ball rolling, and then add in further strategies to support yourself as you feel able to 🤗 <br>' +
                    'And please note: if you’re really struggling, seeking help is essential. These recommendations are not designed to replace professional support. They can (and should) be used alongside any other treatments you’re already doing (although not all supplements are safe with medications, so always work with an experienced naturopath or herbalist for guidance on taking supplements/herbs with medications. You also likely won’t need everything listed here, these are just some examples) 🌿💊',
            likes: '1.374',
            comments: [
                { user: 'mirmaidg', text: 'That meal at the end looked so yummy, what was in that?' },
                { user: 'margot_utrecht', text: 'Every doctor should start with these before even thinking about medication!' }
            ]
        },       
        {
            type: 'reel',
            username: '9gag',
            avatar: 'media/Profilepic_Funny.jpg',
            mediaSrc: 'media/Reel2_FunnyDogs.mp4',
            caption: 'Ah, finally found the comy napping spot! I Follow @barked for more funny dogs! <a href="#">#barked</a># <a href="#">#dog</a> <a href="#">#doggo</a> <a href="#">#AmericanPitbullTerrier</a> <a href="#">#9gag</a>',
            likes: '248k',
            comments: [
                { user: 'big_geezy_wee', text: 'That\'s nuts 🥜' },
                { user: 'teachermisery', text: 'This is the kind of real life brilliance that AI could never conjure up' }
            ]
        },       
        {
            type: 'post',
            username: 'lifewithbooks',
            avatar: 'media/Profilepic3_Books.jpg',
            mediaSrc: 'media/Post3_book.jpg',
            caption: 'To all my book girlies out there: anyone else still obsessing over the way Onyx Storm ended??🤯😭 This has got to be the worst book hangover ever! Any suggestions on how to get over it? And I don’t think daydreaming about our shadow daddy is an appropriate answer here...😂 <br>' +
                    '#ReadingTime #Bookstagram #LiteraryEscape #NewReads #Culture #Bookboyfriend',
            likes: '78.612k',
            comments: [
                { user: 'romantasygirl', text: 'OMG I am stilly crying!!!' },
                { user: 'claire_xoxo', text: 'Rebecca better bring him back in the next one😭' }
            ]
        }, 
        {
            type: 'reel',
            username: 'allthingsneena',
            avatar: 'media/Profilepic7_MHGutSupplements.jpg',
            mediaSrc: 'media/Reel7_MHGutSupplements.mp4',
            caption: 'This is vulnerable for me to admit. Being a psychologist who in good nature couldn’t keep recommending neuropharmaceuticals put me at a tough place. But I wanted the best for my clients, for my friends and for my own family. <br>' + 
                    'But now I can recommend a regiment that has over 100 clinical trial results where there was a <br>' +
                    '💜 60% DECREASE IN IRRITABILITY SCORES <br>' +
                    '💜 49% REDUCTION IN OVERALL DISTRESS <br>' +
                    '💜 70% INCREASE IN GOOD BACTERIA <br>' +
                    '💜 211% INCREASE IN POSITIVE MOOD  <br>' +
                    '💜 105% DECREASE IN NEGATIVE MOOD <br>' +
                    'It reduces stress by lowering cortisol exposure and improves GABA neutrotransmission.* <br>' +
                    'It enhances calmness by decreasing feelings of anxiousness and improves cognitive function.* <br>' + 
                    'And improves mood by decreasing neuroinflammation and increasing serotoning.* <br>' +
                    'Drop HAPPY  to get the info right to your inbox💞 because everyone deserves a chance to be happy 🙌.<br>' +
                   '#mentalhealthadvocate #mentlhealthmatters #mentalhealthprofessional #sleepsupport # holisticmentalhealth # holisticwellness',
            likes: '104k',
            comments: [
                { user: 'luvoceanz', text: 'Totally agree with number 1. I have been to more than 50 countries and tell everyone Slovenia is truly a hidden gem and a jewel of Europe.' },
                { user: 'mrdemosho', text: 'Where do you recommend in Slovenia please' }
            ]
    },  
    {
            type: 'post',
            username: 'the.home.edit',
            avatar: 'media/Profilepic1_HomeDecor.jpg', 
            mediaSrc: 'media/Post1_HomeDecor.jpg',  
            caption: 'Bringing a little beauty into the everyday.✨ These small details truly make a house feel like a home.<br>' +
                'What\'s your favorite corner in your space?💖<br>' +
                '#HomeDecor #AestheticVibes #InteriorDesign #CozyHome #DecorInspo #LivingSpace',
            likes: '9.483',
            comments: [
                { user: 'alia.xtr', text: 'Love the aesthetics!' },
                { user: 'lucas_104', text: 'So pretty!' }
            ]
        },   
        {
            type: 'reel',
            username: 'scottvisits',
            avatar: 'media/Profilepic1_Travel.jpg',
            mediaSrc: 'media/Reel1_Travel.mp4',
            caption: 'The cheapest, best, and most underrated countries in Europe! You might be shocked by no. 1 is one of my favorite 🙌 Follow for more of my travels<br>' +
                    '#travel #traveleurope # europetravel #europe #travelgram #albania #slovenia #malta',
            likes: '123k',
            comments: [
                { user: 'luvoceanz', text: 'Totally agree with number 1. I have been to more than 50 countries and tell everyone Slovenia is truly a hidden gem and a jewel of Europe.' },
                { user: 'mrdemosho', text: 'Where do you recommend in Slovenia please' }
            ]
        },
        {
            type: 'reel',
            username: 'therebirthingjourney',
            avatar: 'media/Profilepic8_MHYogaDepression.jpg',
            mediaSrc: 'media/Reel8_MHYogaDepression.mp4',
            caption: 'Depressed???<br>' +
                    'It’s a state of mind only and you can change it. Do some dynamic practice and depression will not come to you.<br>' +
                    'Join me in upcoming Himalayan kriya yoga program.<br>' +
                    'Link in bio.<br>' +
                    '#depression #kalimudra #anxiety #depressionawareness #curedepression #mentalhealthawareness #mentalhealth #menttalhealthsupport #meditation #kriyayoga #himalayankriyayoga',
            likes: '63.153',
            comments: [
                { user: 'sreya_teja365', text: 'Me seeing his pain in it😢' },
                { user: 'reyaceridwen', text: 'The comments are of epic scale. Just reading the comments no one can be depressed.' }
            ]
    }, 
    {
            type: 'reel',
            username: '9gag and richmngani24',
            avatar: 'media/Profilepic_Funny.jpg',
            mediaSrc: 'media/Reel3_FunnyBed.mp4',
            caption: 'When you are wasting a Saturday at home, rotting in bed, and it starts raining outside.<br>' +
                    '#fyp #reels #viral #southafrica #foryou #explore',
            likes: '160k',
            comments: [
                { user: 'marmiko_deceita', text: 'The rain confirms that I am right where I am supposed to be😂' },
                { user: 'doramustabitha', text: 'Mother nature saing "Get comfy baby, we going to binge todayyy"👏😂😂😂' }
            ]
    },   
    {
            type: 'reel',
            username: 'themadfitapp and grapefitt',
            avatar: 'media/Profilepic5_Fitness.jpg',
            mediaSrc: 'media/Reel5_Fitness.mp4',
            caption: 'Who is Liney calling out🫣<br>' +
                    'Send this to someone who needs to take a hint and do Liney\'s newest Quiet Cardio workout👇',
            likes: '636',
            comments: [
                { user: 'grapefitt', text: 'My apartment bilding should be thankful I live on the ground floor😂' },
                { user: 'cheyyc_', text: 'good to know this is a universal experience all have😂' }
            ]
    },  
    {
            type: 'post',
            username: 'easymentalhealth',
            avatar: 'media/Profilepic4_MH.jpg',
            mediaSrc: 'media/Post4_MH.jpg',
            caption: 'There’s more to the story of mental health than taking pills that make you feel less like yourself. 🌿 Let\'s explore the many paths to healing, from nourishing our bodies to nurturing our minds and spirits instead of medication. A walk each day or changing your outlook on life will make such a difference! 💆🏻‍♀️💜What does your journey look like?<br>' +
                    '#Mentalwellnessjourney #Holistichealth #Emotionalwellbeing #Beyondthepill',
            likes: '22.870',
            comments: [
                { user: 'hannaahh', text: 'Finally someone adressing how detrimental pills are!' },
                { user: 'kyle_got_it', text: 'This is such a gamechanger' }
            ]
    },   
    {
            type: 'reel',
            username: 'nytimes',
            avatar: 'media/Reel10_NewsLAProtests.jpg',
            mediaSrc: 'media/Reel10_NewsGaza.mp4',
            caption: ' The Israeli military said it was “aware of reports regarding a number of injured individuals from IDF fire,” after the Gaza Ministry of Health said that more than 50 Palestinians were killed near an aid distribution site in Khan Younis on Tuesday and blamed Israel for the deaths.',
            likes: '28.4k',
            comments: [
                { user: 'gnl2006', text: 'Literal genocide caught on video, and people will still defend Israel.' },
            ]
    },   
    {
            type: 'reel',
            username: '9gag',
            avatar: 'media/Profilepic_Funny.jpg',
            mediaSrc: 'media/Reel4_FunnyCow.mp4',
            caption: 'living in the moment🌿',
            likes: '213.936',
            comments: [
                { user: 'damn_itskaren', text: 'Me after I eat a salad' },
                { user: 'vickychilwal', text: 'What an elegant lady she is... 🤣' }
            ]
    }
        
        //,
        //{
        //    type: 'reel', // 'reel' oder 'post'
        //    username: 'Username',
        //    avatar: 'media/avatar.jpg',
        //    mediaSrc: 'media/media.mp4', // Pfad zu deinem Reel oder Post
        //    caption: 'Caption Text',
        //    likes: 345,
        //    comments: [
        //    ]
        //}
        //
        
        // Füge hier weitere Post-Objekte hinzu!
    ];

    // Funktion zum Erstellen eines Post-Elements
    function createPostElement(post) {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');

        postCard.innerHTML = `
            <div class="post-header">
                ${post.avatar=== '' ? 
                `<img src="media/profile_pic.jpg" alt="${post.username}" class="profile-picture">` :
                `<img src="${post.avatar}" alt="${post.username}" class="profile-picture">`
                }
                <span class="username">${post.username}</span>
            </div>
            ${post.type === 'post' ? 
                `<img src="${post.mediaSrc}" alt="Post Image" class="post-media">` :
                `<video src="${post.mediaSrc}" class="post-media video" autoplay controls loop muted playsinline></video>`
            }
            <div class="post-actions">
                <div class="left-icons">
                    <img src="media/icon_heart.png" alt="Like">
                    <img src="media/icon_comment.png" alt="Comment">
                    <img src="media/icon_share.png" alt="Share">
                </div>
                <div class="right-icons">
                    <img src="media/icon_save.png" alt="Save">
                </div>
            </div>
            <div class="likes-count">Liked by ${post.likes} </div>
            <div class="post-caption">
                <span class="username">${post.username}</span> ${post.caption}
            </div>
            ${post.comments.length > 0 ? `<div class="post-comments">
                ${post.comments.map(comment => `<p><b>${comment.user}</b> ${comment.text}</p>`).join('')}
            </div>` : ''}
            <div class="post-time">View all comments</div>
            
            <hr>
        `;
        return postCard;
    }

    feedData.forEach(post => {
        const postElement = createPostElement(post);
        feedContainer.appendChild(postElement);
    });
});
