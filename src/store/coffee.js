
const coffee = {
  state: {
    coffee: [
      {
        id: 0,
        image: "coffee-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        price: 10.93,
      },
      {
        id: 1,
        image: "coffee-2.jpg",
        name: "Presto Coffee Beans 1kg",
        price: 12.99,
      },
      {
        id: 2,
        image: "coffee-3.jpg",
        name: "AROMISTICO Coffee 1kg",
        price: 5.99,
      },
      {
        id: 3,
        image: "coffee-1.jpg",
        name: "Presto Coffee Beans 1kg",
        price: 27.99,
      },
      {
        id: 4,
        image: "coffee-2.jpg",
        name: "AROMISTICO Coffee 1kg",
        price: 33.99,
      },
      {
        id: 5,
        image: "coffee-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        price: 21.99,
      },
    ],
  },
  getters: {
    getCards(state) {
      return state.coffee
    },
    getProductById(state) {
      return (id) => {
        // Метод find перебирает каждый элемент массива
        // получая очередной card и вернет тот товар
        // чей id будет равен тому id который передаю в геттер 
        return state.coffee.find(card => card.id === +id)
      }
    }
  }
}

export default coffee