let cards = document.getElementsByClassName('card_footer');
let images = [
    'https://fthmb.tqn.com/jbF_Mehw1A8HlCnAkmrmiVDhBUA=/400x250/filters:no_upscale()/savasanajpg-5705610a5f8e9c32618cdb90',
    'http://beherenowyoga108.com/wp-content/uploads/2014/03/108-Words-Cloud.jpg',
    'https://images.r.cruisecritic.com/features/2016/06/bottoms-up-hero.jpg',
    'https://www.success.com/sites/default/files/main/blogposts/waystotapintoyourcreativeself.jpg',
    'http://pioneerhumanservices.org/sites/default/files/facts-and-myths.jpg',
    'https://yogatime.tv/blog/wp-content/uploads/2015/09/YogaposesAnxiety.jpg'
];

for(let i = 0; i < cards.length; i++){
    cards[i].style.background = `url('${images[i]}')`;
    cards[i].style.backgroundSize = 'cover';
}