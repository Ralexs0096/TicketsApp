import { createFileRoute } from '@tanstack/react-router';
import Ticket from '../../modules/tickets/Ticket';

export const Route = createFileRoute('/_authenticated/')({
  component: Ticket,
});
