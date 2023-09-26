class Video {
    title;
    chanelName;
    thumbnailUrl;
    isVerified;
    isAd;
    description;
    timePost;
    videoLength;
    chanelProfilePictureUrl;
    adTextButton;

    constructor(title, chanelName, thumbnailUrl, isVerified, isAd, description, timePost, videoLength, chanelProfilePictureUrl, adTextButton) {
        this.title = title || '';
        this.chanelName = chanelName || '';
        this.thumbnailUrl = thumbnailUrl || '';
        this.isVerified = isVerified || false;
        this.isAd = isAd || false
        this.description = description || '';
        this.timePost = timePost || '';
        this.videoLength = videoLength || 0;
        this.chanelProfilePictureUrl = chanelProfilePictureUrl || '';
        this.adTextButton = adTextButton || '';
    }
}

function secondsToTime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "0:00";
    }

    const hours = Math.floor(seconds / 3600);
    const minuts = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    if (hours > 0) {
        return `${hours}:${minuts < 10 ? '0' : ''}${minuts}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    }
    return `${minuts}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
}

function addComponent(videoObject) {
    const videoContentItem = document.createElement("div")
    videoContentItem.setAttribute("class", "video-content-item")
    // Adiciona thumbnail ao video

    let thumbnail = document.createElement("div")
    thumbnail.setAttribute("id", "thumbnail")
    let thumbnailImg = document.createElement("img")
    thumbnailImg.setAttribute("src", videoObject.thumbnailUrl)
    thumbnail.appendChild(thumbnailImg)

    if (videoObject.videoLength != null) {
        let videoLength = document.createElement("div")
        videoLength.setAttribute("class", "video-length")
        videoLength.innerText = secondsToTime(videoObject.videoLength)
        thumbnail.appendChild(videoLength)
    }
    videoContentItem.appendChild(thumbnail)

    // Adiciona titulo e informações ao video

    const videoContentInfo = document.createElement("div")
    videoContentInfo.setAttribute("class", "video-content-info")

    if (videoObject.chanelProfilePictureUrl != "") {
        let chanelProfilePicture = document.createElement("div")
        chanelProfilePicture.setAttribute("class", "creator-profile-picture")

        let chanelProfilePictureImg = document.createElement("img")
        chanelProfilePictureImg.setAttribute("src", videoObject.chanelProfilePictureUrl)
        chanelProfilePicture.appendChild(chanelProfilePictureImg)

        videoContentInfo.appendChild(chanelProfilePicture)
    }


    // Adiciona um barra para informações do video

    let videoInformation = document.createElement("div")
    videoInformation.setAttribute("class", "video-information")

    let videoTitle = document.createElement("div")
    videoTitle.setAttribute("class", "video-title")
    let text4 = document.createElement("h4")
    text4.setAttribute("class", "text")
    text4.innerText = videoObject.title

    videoTitle.appendChild(text4)
    videoInformation.appendChild(videoTitle)


    let extraInfo = document.createElement("div")
    extraInfo.setAttribute("class", "extra-info")

    let firstRow = document.createElement("div")
    firstRow.setAttribute("class", "first-row")
    let firstText5 = document.createElement("h5")
    firstText5.setAttribute("class", "text row")


    let secondRow = document.createElement("div")
    secondRow.setAttribute("class", "second-row")
    let secondText5 = document.createElement("h5")
    secondText5.setAttribute("class", "text row")


    if (videoObject.isAd) {
        if (videoObject.description != "") {
            let weakDiv = document.createElement("div")
            weakDiv.setAttribute("class", "weak")
            weakDiv.innerText = videoObject.description
            firstText5.appendChild(weakDiv)
            firstRow.appendChild(firstText5)


            let adChanelAfter = document.createElement("div")
            adChanelAfter.setAttribute("class", "ad-chanel-after")
            adChanelAfter.innerText = "Anúncio"
            secondText5.appendChild(adChanelAfter)

            let weakTextDiv = document.createElement("div")
            weakTextDiv.setAttribute("class", "weak")
            weakTextDiv.innerText = videoObject.chanelName
            secondText5.appendChild(weakTextDiv)
            secondRow.appendChild(secondText5)


            extraInfo.appendChild(firstRow)
            extraInfo.appendChild(secondRow)
        } else {
            let adChanelAfter = document.createElement("div")
            adChanelAfter.setAttribute("class", "ad-chanel-after")
            adChanelAfter.innerText = "Anúncio"

            let weakDiv = document.createElement("div")
            weakDiv.setAttribute("class", "weak")
            weakDiv.innerText = videoObject.chanelName

            firstText5.appendChild(adChanelAfter)
            firstText5.appendChild(weakDiv)
            firstRow.appendChild(firstText5)

            extraInfo.appendChild(firstRow)
            secondRow.remove()
        }
    } else {
        let weakDiv = document.createElement("div")
        weakDiv.setAttribute("class", "weak")
        weakDiv.innerText = videoObject.chanelName
        firstText5.appendChild(weakDiv)

        if (videoObject.isVerified) {
            let verifiedImg = document.createElement("img")
            verifiedImg.setAttribute("class", "imgVerified")
            verifiedImg.setAttribute("src", "./images/verified.png")

            firstText5.appendChild(verifiedImg)
        }
        firstRow.appendChild(firstText5)

        let viewCounts = document.createElement("div")
        viewCounts.setAttribute("class", "weak view-count")
        viewCounts.innerText = videoObject.description

        let timePost = document.createElement("div")
        timePost.setAttribute("class", "weak")
        timePost.innerText = videoObject.timePost

        secondText5.appendChild(viewCounts)
        secondText5.appendChild(timePost)

        secondRow.appendChild(secondText5)

        extraInfo.appendChild(firstRow)
        extraInfo.appendChild(secondRow)
    }
    videoInformation.appendChild(extraInfo)

    videoContentInfo.appendChild(videoInformation)

    let videoOption = document.createElement("div")
    videoOption.setAttribute("class", "video-option")

    let imgOption = document.createElement("img")
    imgOption.setAttribute("src", "./images/options.png")

    videoOption.appendChild(imgOption)


    videoContentItem.appendChild(videoContentInfo)
    videoContentInfo.appendChild(videoOption)

    if (videoObject.isAd) {
        let adWatchButton = document.createElement("div")
        adWatchButton.setAttribute("class", "ad-watch-button")

        let textH5 = document.createElement("h5")
        textH5.setAttribute("class", "text")
        textH5.innerText = videoObject.adTextButton

        let goToIcon = document.createElement("img")
        goToIcon.setAttribute("src", "./images/goToIcon.png")

        adWatchButton.appendChild(textH5)
        adWatchButton.appendChild(goToIcon)

        videoContentItem.appendChild(adWatchButton)
    }


    document.getElementById("main-content-viewer").appendChild(videoContentItem)
}

function formatVisualizacoes(visualizacoes) {
    if (visualizacoes < 1000) {
        return visualizacoes + " visualizações";
    } else if (visualizacoes < 1000000) {
        const valorFormatado = (visualizacoes / 1000).toFixed(0);
        return valorFormatado + " mil visualizações";
    } else {
        const valorFormatado = (visualizacoes / 1000000).toFixed(0);
        return valorFormatado + " milhões de visualizações";
    }
}

const videos = [];

for (let i = 0; i < 35; i++) {
    const title = `Vídeo ${i + 1}`;
    const channelName = `Canal ${i + 1}`;
    const thumbnailUrl = `https://picsum.photos/500/300?random=${i}`;
    const isVerified = Math.random() > 0.5;
    const isAd = Math.random() > 0.8;
    let description = `Descrição do vídeo ${i + 1}`;
    const timePost = new Date(Date.now() - Math.floor(Math.random() * 1000000));
    const videoLength = Math.floor(Math.random() * 1000);
    const channelProfilePictureUrl = `https://picsum.photos/200/200?random=${i}`;
    const adTextButton = `Anuncie`;

    if (isAd) {
        description = '';
    } else {
        const views = Math.floor(Math.random() * 4000000);
        description = formatVisualizacoes(views);
    }

    const now = new Date();
    const diff = now - timePost;
    const years = Math.floor(diff / (31556926 * 1000));
    const months = Math.floor(diff / (2629743.83 * 1000));
    const days = Math.floor(diff / (86400 * 1000));
    const hours = Math.floor(diff / (3600 * 1000));
    const minutes = Math.floor(diff / (60 * 1000));

    // Define o valor do campo timePost
    const formattedTimePost = `há ${years > 0 ? `${years} anos` :
        months > 0 ? `${months} meses` :
            days > 0 ? `${days} dias` :
                hours > 0 ? `${hours} horas` :
                    minutes > 0 ? `${minutes} minutos` :
                        'agora'
        }`;

    const video = new Video(title, channelName, thumbnailUrl, isVerified, isAd, description, formattedTimePost, videoLength, channelProfilePictureUrl, adTextButton);
    videos.push(video);
}

for (let i in videos) {
    addComponent(videos[i])
}