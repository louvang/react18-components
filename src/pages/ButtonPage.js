import { GoBellFill, GoHeartFill, GoStarFill } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log('click!');
  };

  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick} className="mb-5">
          <GoBellFill /> Click me
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoHeartFill /> Buy Now
        </Button>
      </div>
      <div>
        <Button success>
          <GoStarFill /> Add to Cart
        </Button>
      </div>
      <div>
        <Button warning outline>
          Register
        </Button>
      </div>
      <div>
        <Button danger>Sign Up</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
