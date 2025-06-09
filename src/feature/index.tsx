import { Brand } from './ui/brand';
import { FilterControls } from './ui/filter';
import { Header } from './ui/header';
import { Tours } from './ui/tours';

export const Travel = () => {
	return (
		<>
			<Header />

			<main className='overflow-y-auto flex-grow'>
				<Brand />
				<FilterControls />

				<Tours />
			</main>
		</>
	);
};
