import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

interface Food {
  id: number;
  name: string;
  description: string;
}

function App() {
  const [food, setFood] = useState<Food[]>([]);

  useEffect(() => {
    const getAllFoods = async () => {
      axios.get('http://localhost:3000/api/food/',{
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then((response) => {
          setFood(response.data);
        })
        .catch((err) => {
          console.log(err);  
        });
    };
    getAllFoods();
  }, []);

  return (
    <>
      <div>
        <p>Comidas</p>
        {food.map((foodItem) => (
          <div key={foodItem.id}>
            <h1>{foodItem.name}</h1>
            <p>{foodItem.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
