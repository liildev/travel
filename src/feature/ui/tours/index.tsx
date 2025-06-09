import { useTourPrices } from '@/feature/model/use-tour-prices';
import { Item } from './item';
import { Loader } from './loader';

export function Tours() {
	const { data, isLoading, isError, error } = useTourPrices();

	return (
		<div className='space-y-4 container'>
			{isLoading ? (
				[...Array(2)].map((_, i) => <Loader key={i} />)
			) : isError ? (
				<p className='text-red-500 text-center'>
					Ошибка загрузки:{' '}
					{error instanceof Error ? error.message : 'Unknown error'}
				</p>
			) : (
				data?.map((tour) => <Item key={tour.id} item={tour} />)
			)}
		</div>
	);
}
