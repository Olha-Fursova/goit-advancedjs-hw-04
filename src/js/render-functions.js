export function renderGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-div">
            <h3 class="params">Likes</h3> 
            <p>${likes}</p>
          </div>
          <div class="info-div">
            <h3 class="params">Views</h3> 
            <p>${views}</p>
          </div>
          <div class="info-div">
            <h3 class="params">Comments</h3> 
            <p>${comments}</p>
          </div>
          <div class="info-div">
            <h3 class="params">Downloads</h3> 
            <p>${downloads}</p>
          </div>
        </div>
      </li>`
    )
    .join('');
}
