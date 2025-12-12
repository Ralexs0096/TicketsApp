import CardWrapper from '../../components/shared/CardWrapper';
import Header from './components/Header';
import Filters from './components/Filters';
import TicketsList from './components/TicketsList';

const Ticket = () => {
  return (
    <CardWrapper isCenter heightCard={900} widthCard={600}>
      <Header />
      <Filters />

      <TicketsList />
    </CardWrapper>
  );
};

export default Ticket;
