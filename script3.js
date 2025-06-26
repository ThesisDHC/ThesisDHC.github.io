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
            type: 'reel',
            username: 'sarcasmonly',
            avatar: 'media/Profilepic_sarcasmonly.jpg',
            mediaSrc: ['media/Reel1_WW3.mp4'],
            caption: 'Hold on guys, we got this😅',
            likes: '836,460',
            comments: [
                { user: 'piips_', text: 'And then getting asked: why u don\'t want to have kids?' },
                { user: 'nibhaille', text: 'Cannot even buy a house to enjoy this carnage in' }
            ]
        },
        {
            type: 'reel',
            username: 'arsenal and kaihavertz29',
            avatar: 'media/Profilepic_havertz.jpg',
            mediaSrc: 'media/Reel2_arsenal.mp4',
            caption: '🎙️ “Continuing to deliver!” A clinical Kai finish to get us level 👊.',
            likes: '187,071',
            comments: [
                { user: 'lougiebalouge07', text: 'King Kai 🔥🔥🔥' },
                { user: 'noufohere', text: 'What a block and assist from Saka🔥' }
            ]
    },
        {
            type: 'gallery',
            username: 'mentalhealthfacts',
            avatar: 'media/Profilepic_MH.jpg',
            mediaSrc: ['media/De-debunking1.jpg', 'media/De-debunking2.jpg', 'media/De-debunking3.jpg', 'media/De-debunking4.jpg', 'media/De-debunking5.jpg', 'media/De-debunking6.jpg', 'media/De-debunking7.jpg' ],
            caption: 'Always consult your therapist and physician. These institutions provide additional reliable information: the World Health Organization, the National Health Service UK, or the National Institutes of Health. #debunking #mentalhealthfacts #nomyths #nostigma',
            likes: '5,328',
            comments: [
                { user: 'juliexx', text: 'Love that this is nuanced and not one-sided!' },
                { user: 'marcello', text: 'You know it is reliable when they provide sources' }
            ]
        },
        {
            type: 'reel',
            username: 'fitgreenmind',
            avatar: 'media/Profilepic_fitgreenmind.jpg',
            mediaSrc: 'media/Reel3_tofu.mp4',
            caption: 'Bored of eating a plain block of tofu?!🤨 Well then you should try shredding your tofu and makes these SHREDDED TOFU TACOS!😋',
            likes: '53,400',
            comments: [
                { user: 'plantifullybased', text: 'Looks so delicious!' },
                { user: 'isabellxjean', text: '*puts down the half eaten plain block of Tofu*' }
            ]
    },
        {
            type: 'reel',
            username: '_quality_content_',
            avatar: 'media/Profilepic_qualitycontent.jpg',
            mediaSrc: ['media/Reel4_robot.mp4'],
            caption: 'Now I lost all of my use cases 😭🤣',
            likes: '747,927',
            comments: [
                { user: 'mitchmacmillan89', text: 'It needs a coffee in the other hand ☕️' },
                { user: 'sneek071', text: 'I don’t see any beers' }
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

        // Create innerHTML without the script
        postCard.innerHTML = `
        <div class="post-header">
            ${post.avatar === '' ?
                `<img src="media/profile_pic.jpg" alt="${post.username}" class="profile-picture">` :
                `<img src="${post.avatar}" alt="${post.username}" class="profile-picture">`
            }
            <span class="username">${post.username}</span>
        </div>
        ${post.type === 'post' ?
                `<img class="post-media" src="${post.mediaSrc}" alt="Post Image">` :
                post.type === 'reel' ?
                    `<video class="post-media-video" muted controls playsinline loop autoplay>
                    <source src="${post.mediaSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>` :
                    post.type === 'gallery' ?
                        `<div class="carousel-container">
                    <button class="nav-button prevBtn">&#10094;</button>
                    <img class="post-media carousel-image" src="${post.mediaSrc[0]}" alt="Carousel Image">
                    <button class="nav-button nextBtn">&#10095;</button>
                </div>` :
                        `<p>Unsupported post type: ${post.type}</p>`
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
        <div class="likes-count">Liked by ${post.likes}</div>
        <div class="post-caption">
            <span class="username">${post.username}</span> ${post.caption}
        </div>
        ${post.comments.length > 0 ? `<div class="post-comments">
            ${post.comments.map(comment => `<p><b>${comment.user}</b> ${comment.text}</p>`).join('')}
        </div>` : ''}
        <div class="post-time">View all comments</div>
        <hr>
    `;

        // Setup gallery JS logic separately
        if (post.type === 'gallery') {
            const images = post.mediaSrc;
            let currentIndex = 0;

            const carouselImage = postCard.querySelector(".carousel-image");
            const prevBtn = postCard.querySelector(".prevBtn");
            const nextBtn = postCard.querySelector(".nextBtn");

            const showImage = (index) => {
                carouselImage.src = images[index];
                // Hide prev button if on the first image, show otherwise
                if (index === 0) {
                    prevBtn.style.display = 'none';
                } else {
                    prevBtn.style.display = 'block';
                }
                // Hide next button if on the last image, show otherwise
                if (index === images.length - 1) {
                    nextBtn.style.display = 'none';
                } else {
                    nextBtn.style.display = 'block';
                }
            };

            // Initialize button visibility for the first image
            showImage(currentIndex);

            prevBtn.addEventListener("click", () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            });

            nextBtn.addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            });
        }

        return postCard;
    };

    // Assuming feedData and feedContainer are defined elsewhere
    // For example:
    // const feedData = [...]; 
    // const feedContainer = document.getElementById('feed-container'); 

    feedData.forEach(post => {
        const postElement = createPostElement(post);
        feedContainer.appendChild(postElement);
    });
});
