import { useEffect, useState } from 'react';

function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const res = await fetch('http://localhost:3000/meals');
      if (!res.ok) {
      }

      const meals = await res.json();
      setMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id='meals'>
      {meals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}

export default Meals;
