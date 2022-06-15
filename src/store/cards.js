
import { v4 as uuidv4 } from "uuid";

const cards = {
  state: {
    coffee: [
      {
        id: uuidv4(),
        image: "coffee-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        price: 10.93,
      },
      {
        id: uuidv4(),
        image: "coffee-2.jpg",
        name: "Presto Coffee Beans 1kg",
        price: 12.99,
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        name: "AROMISTICO Coffee 1kg",
        price: 5.99,
      },
      {
        id: uuidv4(),
        image: "coffee-1.jpg",
        name: "Presto Coffee Beans 1kg",
        price: 27.99,
      },
      {
        id: uuidv4(),
        image: "coffee-2.jpg",
        name: "AROMISTICO Coffee 1kg",
        price: 33.99,
      },
      {
        id: uuidv4(),
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
        return state.coffee.find((card) => card.id === +id)
      }
    }
  }
}

export default cards