const baseLink = "/imgs/reviews/"

const cards = [
    { image: `${baseLink}mohinga.jpg`, title: 'Mohinga', text: 'A fish and noodle soup that is often considered the national dish of Myanmar.', link: '#' },
    { image: `${baseLink}coconutnoodles.jpg`, title: 'Ohn no khao swè', text: 'A coconut milk-based chicken noodle soup that is a popular breakfast food in Myanmar.', link: '#' },
    { image: `${baseLink}tealeaf.jpg`, title: 'Laphet thoke', text: 'A salad made with pickled tea leaves, tomatoes, and a variety of nuts and seeds.', link: '#' },
    { image: `${baseLink}katkyaykite.jpg`, title: 'Kat Kyay Kite', text: 'Kat Kyay Kite is a popular Burmese street food featuring crispy fried noodles.', link: '#' },
    { image: `${baseLink}nangyi.jpg`, title: 'Nann Gyi Thote', text: 'A thick, hearty soup made with various meats, vegetables, and chickpea flour.', link: '#' },
    { image: `${baseLink}kyay-oh.jpg`, title: 'Kyay-Oh', text: 'A noodle soup typically served with pork, fish, or chicken and topped with various condiments.', link: '#' },
    { image: `${baseLink}sichet.jpg`, title: 'Si Chet', text: 'A famous Burmese dish consisting of rice noodles in a chicken broth topped with shredded chicken.', link: '#' },
    { image: `${baseLink}ci-chat.jpg`, title: 'Kyay-Oh Si Chet', text: 'A sweet, sticky rice dish made with peanuts, sesame seeds, and coconut flakes.', link: '#' },
  ];
  
  const cardContainer = document.querySelector('#card-container');
  
  cards.forEach(card => {
    const cardHtml = `
      <div class="card">
        <div class="row">
          <div class="col-md-6">
            <img src="${card.image}" style="width: 215px; height: 175px;" alt="...">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">${card.title}</h5>
              <p class="card-text">${card.text}</p>
              <a href="${card.link}" class="btn btn-primary">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    `;
    cardContainer.insertAdjacentHTML('beforeend', cardHtml);
  });