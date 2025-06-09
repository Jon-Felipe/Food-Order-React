import useHttp from '../hooks/useHttp';

// components
import MealItem from './MealItem';
import Error from './Error';

const requestConfig = {};

function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p className='center'>Fetching meals...</p>;
  }

  if (error) {
    return <Error title='Failed to fetch meals' message={error} />;
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
