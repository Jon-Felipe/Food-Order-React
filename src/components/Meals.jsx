import useHttp from '../hooks/useHttp';

// components
import MealItem from './MealItem';

const requestConfig = {};

function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }

  return (
    <ul id='meals'>
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default Meals;
