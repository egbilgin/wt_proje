const API_KEY = 'AIzaSyAuCHzyRwPI_TYVvmcDVn9qZpn9dnPN3yo'; 
        const query = ' football'; 

        
        const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${API_KEY}`;

        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                const songList = document.getElementById('songList');
                data.items.forEach(item => {
                    const videoId = item.id.videoId;
                    const videoTitle = item.snippet.title;
                    const videoThumbnail = item.snippet.thumbnails.medium.url;

                    const songElement = document.createElement('div');
                    songElement.className = 'col-md-4 mb-4 song';
                    songElement.innerHTML = `
                        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                            <img src="${videoThumbnail}" alt="${videoTitle}" class="img-fluid">
                            <h3 class="mt-2">${videoTitle}</h3>
                        </a>
                    `;
                    songList.appendChild(songElement);
                });
            })
            .catch(error => console.error('Hata:', error));