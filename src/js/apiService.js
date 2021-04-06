const API_KEY = '20764916-f72ac860731c159c811384133';
const BASE_URL = 'https://pixabay.com/api';





export default {
     page: 1,
    searchQuery: '',
    
  
  fetchCards(searchQuery) {
 const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${API_KEY}`;
     return fetch(url)
   
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      })
      .catch(error => console.log(error));
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  }
}


// const API_KEY = '20764916-f72ac860731c159c811384133';

// export default {
//     page: 1,
//     perPage: 12,
//   searchRequest: '',

//   fetchCards(request) {
//     const baseUrl = `https://pixabay.com/api/`;
//     const params = `?image_type=photo&orientation=horizontal&q=${request}&page=${this.page}&per_page=${this.perPage}&key=${API_KEY}`;
//     return fetch(baseUrl + params)
//       .then(responce => responce.json())
//       .then(data => data.hits)
//       .catch(error => error);
//   },
//   pageUpdate() {
//     return (this.page += 1);
//   },
//   pageClear() {
//     return (refs.gallery.innerHTML = '');
//   },
//   get request() {
//     return this.searchRequest;
//   },
//   set request(value) {
//     this.searchRequest = value;
//   },
// };