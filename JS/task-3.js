const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');

const imagesList = images.map(({ url, alt }) => {
  const imgItem = document.createElement('li');
  imgItem.classList.add('image-item');
  imgItem.insertAdjacentHTML(
    'afterbegin',
    `<img src="${url}" alt="${alt}"></img>`,
  );
  // Second variant
  // const img = document.createElement('img');
  // img.src = url;
  // img.alt = alt;
  // imgItem.insertAdjacentElement('afterbegin', img);

  return imgItem;
});

galleryRef.append(...imagesList);