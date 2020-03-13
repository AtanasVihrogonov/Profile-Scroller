// Create data
const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    job: 'SEO',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jon Smith',
    age: 26,
    gender: 'female',
    job: 'Designer',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'william Johnson',
    age: 38,
    gender: 'male',
    job: 'Software Developer',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
  {
    name: 'Kelly Rackson',
    age: 34,
    gender: 'female',
    job: 'HR',
    location: 'New York NY',
    image: 'https://randomuser.me/api/portraits/women/83.jpg'
  }
];

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ?
      { value: profiles[nextIndex++], done: false } :
      { done: true }
    }
  };
}