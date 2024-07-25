import Card from '../card/card.component.jsx';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>

  //  происходит отображение значений в нашем случае по ключу name
);

export default CardList;
