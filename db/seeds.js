const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/wdi-ldn-project-1';
mongoose.connect(dbURI);


const User = require('../models/user');
const City = require('../models/city');
const Post = require('../models/post');
// const Post = require('../models/post');

User.collection.drop();
City.collection.drop();
Post.collection.drop();
// Post.collection.drop();

User
  .create([{
    username: 'alexandriako',
    email: 'alexandriako@yahoo.com',
    password: '123',
    passwordConfirmation: '123'
  }])
  .then((users) => {
    console.log(`${users.length} users created!`);

    return City
      .create([{
        name: 'San Francisco',
        state: 'California',
        image: '/assets/images/sf.jpg',
        showImage: '/assets/images/sf1.jpg',
        dressCode: 'Smart-Casual',
        categoryId: 'shortsleeve-tops sneakers',
        lat: '37.7749',
        lng: '122.4194'
      },
      {
        name: 'New York',
        state: 'New York',
        image: '/assets/images/new-york.jpg',
        showImage: '/assets/images/new-york1.jpg',
        dressCode: 'Business',
        categoryId: 'womens-suits blazers',
        lat: '40.7128',
        lng: '74.0059'
      },
      {
        name: 'Boston',
        state: 'Massachussets',
        image: '/assets/images/boston.jpg',
        showImage: '/assets/images/boston1.jpg',
        dressCode: 'Smart-Casual',
        categoryId: 'cashmere-sweaters button-front-tops cardigan-sweaters',
        lat: '42.3601',
        lng: '71.0589'
      },
      {
        name: 'Honolulu',
        state: 'Hawaii',
        image: '/assets/images/honolulu.jpg',
        showImage: '/assets/images/honolulu1.jpg',
        dressCode: 'Casual',
        categoryId: 'swimsuits sandals sunglasses',
        lat: '21.3069',
        lng: '157.8583'
      },
      {
        name: 'Miami',
        state: 'Florida',
        image: '/assets/images/miami.jpg',
        showImage: '/assets/images/miami1.jpg',
        dressCode: 'Casual',
        categoryId: 'halter-tops mini-skirts',
        lat: '25.7617',
        lng: '80.1918'
      },
      {
        name: 'Los Angeles',
        state: 'California',
        image: '/assets/images/la.jpg',
        showImage: '/assets/images/la1.jpg',
        dressCode: 'Smart-Casual',
        categoryId: 'denim-jackets camisoles day-dresses',
        lat: '34.0522',
        lng: '118.2437'
      },
      {
        name: 'Paris',
        state: 'France',
        image: '/assets/images/paris.jpg',
        showImage: '/assets/images/paris1.jpg',
        dressCode: 'Formal',
        categoryId: 'cocktail-dresses leather-jackets',
        lat: '48.8566',
        lng: '2.3522'
      },
      {
        name: 'London',
        state: 'England',
        image: '/assets/images/london.jpg',
        showImage: '/assets/images/london1.jpg',
        dressCode: 'Formal',
        categoryId: 'evening-dresses evening-shoes coats',
        lat: '51.5074',
        lng: '0.1278'
      },
      {
        name: 'Berlin',
        state: 'Germany',
        image: '/assets/images/berlin.jpg',
        showImage: '/assets/images/berlin1.jpg',
        dressCode: 'Casual',
        categoryId: 'casual-jackets sweaters',
        lat: '52.5200',
        lng: '13.4050'
      }]);


    // return Post
    //   .create([{
    //     image: '#',
    //     venue: '#',
    //     occassion: '#',
    //     description: '#'
    //   }]);
  })
      .then((cities) => {
        console.log(`${cities.length} cities created!`);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        mongoose.connection.close();
      });
