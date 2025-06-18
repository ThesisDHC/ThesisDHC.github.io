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
            username: 'the.home.edit',
            avatar: '', 
            mediaSrc: 'media/Post1_HomeDecor.jpg',  
            caption: 'Bringing a little beauty into the everyday.✨ These small details truly make a house feel like a home. <br>' +
                'What\'s your favorite corner in your space?💖 <br>' +
                '#HomeDecor #AestheticVibes #InteriorDesign #CozyHome #DecorInspo #LivingSpace',
            likes: 9.483,
            comments: [
                { user: 'alia.xtr', text: 'Love the aesthetics!' },
                { user: 'lucas_104', text: 'So pretty!' }
            ]
        },
        {
            type: 'reel',
            username: 'dwnews',
            avatar: 'media/avatar2.jpg',
            mediaSrc: 'media/Reel14_NewsGraz.mp4',
            caption: 'Austrian have gathered to honor the ten people killed and several others injured in a school shooting in the city of Graz.' + 
                    'Police say that while they now know the gunman planned the attack in detail, they still don’t know why he did it.',
            likes: '4.638',
            comments: [
            ]
        },
        {
            type: 'reel',
            username: 'alenawinternaturalhealth',
            avatar: 'media/avatar2.jpg',
            mediaSrc: 'media/Reel7_MHHealDepression.mp4',
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
            avatar: 'media/avatar2.jpg',
            mediaSrc: 'media/Reel2_FunnyDogs.mp4',
            caption: 'Ah, finally found the comy napping spot! I Follow @barked for more funny dogs! #barked #dog #doggo #AmericanPitbullTerrier #9gag',
            likes: '246k',
            comments: [
                { user: 'big_geezy_wee', text: 'That\'s nuts 🥜' },
                { user: 'teachermisery', text: 'This is the kind of real life brilliance that AI could never conjure up' }
            ]
        },       
        {
            type: 'post',
            username: 'lifewithbooks',
            avatar: 'media/avatar2.jpg',
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
            username: 'scottvisits',
            avatar: 'media/avatar2.jpg',
            mediaSrc: 'media/Reel1_Travel.mp4',
            caption: 'The cheapest, best, and most underrated countries in Europe! You might be shocked by no. 1 is one of my favorite 🙌 Follow for more of my travels <br>' +
                    '#travel #traveleurope # europetravel #europe #travelgram #albania #slovenia #malta',
            likes: '104k',
            comments: [
                { user: 'luvoceanz', text: 'Totally agree with number 1. I have been to more than 50 countries and tell everyone Slovenia is truly a hidden gem and a jewel of Europe.' },
                { user: 'mrdemosho', text: 'Where do you recommend in Slovenia please' }
            ]
        },   
        {
            type: 'reel',
            username: 'allthingsneena',
            avatar: 'media/avatar2.jpg',
            mediaSrc: 'media/Reel8_MHGutSupplements.mp4',
            caption: 'This is vulnerable for me to admit. Being a psychologist who in good nature couldn’t keep recommending neuropharmaceuticals put me at a tough place. But I wanted the best for my clients, for my friends and for my own family.' +
                    'But now I can recommend a regiment that has over 100 clinical trial results where there was a <br>' +
                    '💜 60% DECREASE IN IRRITABILITY SCORES <br>' +
                    '💜 49% REDUCTION IN OVERALL DISTRESS <br>' +
                    '💜 70% INCREASE IN GOOD BACTERIA <br>' +
                    '💜 211% INCREASE IN POSITIVE MOOD <br>' +
                    '💜 105% DECREASE IN NEGATIVE MOOD <br>' +
                    'It reduces stress by lowering cortisol exposure and improves GABA neutrotransmission.* <br>' +
                    'It enhances calmness by decreasing feelings of anxiousness and improves cognitive function.* <br>' +
                    'And improves mood by decreasing neuroinflammation and increasing serotoning.* <br>' +
                    'Drop HAPPY  to get the info right to your inbox💞 because everyone deserves a chance to be happy 🙌. <br>' +
                   '#mentalhealthadvocate #mentlhealthmatters #mentalhealthprofessional #sleepsupport # holisticmentalhealth # holisticwellness',
            likes: '104k',
            comments: [
                { user: 'luvoceanz', text: 'Totally agree with number 1. I have been to more than 50 countries and tell everyone Slovenia is truly a hidden gem and a jewel of Europe.' },
                { user: 'mrdemosho', text: 'Where do you recommend in Slovenia please' }
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
                `<video src="${post.mediaSrc}" class="post-media video" controls loop muted playsinline></video>`
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
