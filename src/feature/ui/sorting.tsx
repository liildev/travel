import { useState, type PropsWithChildren } from 'react';
import { Button } from '@/shared/ui/button';
import {
	Drawer,
	DrawerContent,
	DrawerFooter,
	DrawerTitle,
	DrawerTrigger,
} from '@/shared/ui/drawer';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import { Label } from '@/shared/ui/label';
import { ArrowUpDown } from 'lucide-react';

type SortOption = 'recommended' | 'cheapest' | 'expensive' | 'price-rating';

export function Sorting({ children }: PropsWithChildren) {
	const [selectedSort, setSelectedSort] = useState<SortOption>('cheapest');

	const sortOptions = [
		{ value: 'recommended', label: 'Рекомендуемые' },
		{ value: 'cheapest', label: 'Самые дешевые' },
		{ value: 'expensive', label: 'Сначала дорогие' },
		{
			value: 'price-rating',
			label: 'Низкая цена и высокий рейтинг',
		},
	];

	const handleApply = () => {
		console.log('Applying sort:', selectedSort);
	};

	return (
		<Drawer>
			<DrawerTrigger>{children}</DrawerTrigger>
			<DrawerContent>
				<div className='mx-auto w-16 h-2 bg-primary rounded-full mb-6' />

				<div className='container py-0'>
					<DrawerTitle className='text-left text-xl font-semibold text-gray-900 mb-3'>
						Сортировка
					</DrawerTitle>

					<RadioGroup
						value={selectedSort}
						onValueChange={(value) => setSelectedSort(value as SortOption)}
						className='space-y-0'
					>
						{sortOptions.map((option) => (
							<div
								key={option.value}
								className='flex items-center space-x-3 py-4 bg-card rounded-2xl px-5'
							>
								<ArrowUpDown className='size-5 text-primary' />
								<Label
									htmlFor={option.value}
									className='flex-1 text-base font-normal text-gray-900 cursor-pointer'
								>
									{option.label}
								</Label>
								<RadioGroupItem value={option.value} id={option.value} />
							</div>
						))}
					</RadioGroup>
				</div>
				<DrawerFooter className='container'>
					<Button onClick={handleApply} className='w-full' size='lg'>
						Применить
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
