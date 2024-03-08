
import { useGlobalContext } from './context/productcontext';

const About = () => {
  const {myName} = useGlobalContext();

  return (
    <div>{myName}</div>
  )
}

export default About;