import { Filter, ArrowUpDown, Map } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Sorting } from './sorting';

export function FilterControls() {
	return (
		<div className='flex gap-3 sm:items-center sm:justify-center overflow-x-auto scrollbar-hide w-full container py-0'>
			<Button variant='outline' size='lg'>
				<Filter className='text-primary' />
				Фильтры
			</Button>

			<Sorting>
				<Button variant='outline' size='lg'>
					<ArrowUpDown className='text-primary' />
					Сортировка
				</Button>
			</Sorting>

			<Button size='lg'>
				<Map />
				Карта
			</Button>
		</div>
	);
}
