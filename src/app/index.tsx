import { TanstackProvider } from './providers';
import { Travel } from '@/feature';

export const App = () => (
	<TanstackProvider>
		<Travel />
	</TanstackProvider>
);
