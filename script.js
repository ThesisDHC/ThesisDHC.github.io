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
            caption: 'Bringing a little beauty into the everyday.✨ These small details truly make a house feel like a home.
                What's your favorite corner in your space?💖
                #HomeDecor #AestheticVibes #InteriorDesign #CozyHome #DecorInspo #LivingSpace',
            likes: 9,483,
            comments: [
                { user: 'alia.xtr', text: 'Love the aesthetics!' },
                { user: 'lucas_104', text: 'So pretty!' }
            ]
        },
        {
            type: 'reel',
            username: 'Fake F1',
            avatar: 'media/avatar2.jpg',
            mediaSrc: 'media/Reel2_Funny_dogs.mp4',
            caption: 'Das ist der zweite Post, und zwar ein Reel',
            likes: 345,
            comments: [
            ]
        },
        {
            type: 'reel',
            username: 'Fake F1',
            avatar: 'media/avatar2.jpg',
            mediaSrc: 'media/Reel2_Funny_dogs.mp4',
            caption: 'Das ist der zweite Post, und zwar ein Reel',
            likes: 345,
            comments: [
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
