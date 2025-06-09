import {
	Heart,
	Star,
	Plane,
	Building,
	Bus,
	UtensilsCrossed,
	Waves,
	Headphones,
	MapPin,
} from 'lucide-react';
import { Button } from '@/shared/ui/button';
import type { Tour } from '@/feature/model/types';

const transportIcons = [
	Plane,
	Building,
	Bus,
	UtensilsCrossed,
	Waves,
	Headphones,
];

export function Item({ item }: { item: Tour }) {
	const hotel = item.hotel;

	return (
		<article className='bg-card rounded-md overflow-hidden max-w-[700px] mx-auto'>
			<header className='relative'>
				<img
					src={`https://travel-api.bpm-tripusk.uz/storage/${hotel.main_photo}`}
					alt={hotel.name}
					className='h-48 w-full object-cover rounded-md'
				/>

				<div className='absolute left-3 top-3 flex items-center gap-1 rounded-sm bg-white px-3 py-2'>
					<Star className='size-4 fill-yellow-400 text-yellow-400' />
					<span className='text-xs font-medium'>{hotel.star}</span>
				</div>

				<Button
					variant='ghost'
					size='icon'
					className='absolute right-3 top-3 size-8 rounded-sm bg-white'
				>
					<Heart className='size-5 text-primary' />
				</Button>
			</header>

			<div className='p-3 space-y-3'>
				<h2 className='text-lg font-medium text-gray-900'>{hotel.name}</h2>

				<address className='flex items-center gap-1 not-italic text-sm text-gray-700'>
					<MapPin className='size-4 text-primary shrink-0' />
					{hotel.detail?.location?.address_string || 'Локация не указана'}
				</address>

				<div className='flex items-center gap-2'>
					{transportIcons.map((Icon, idx) => (
						<span key={idx} className='flex items-center gap-2'>
							<Icon className='size-6 text-primary' />
							{idx < transportIcons.length - 1 && (
								<span className='text-sm'>+</span>
							)}
						</span>
					))}
				</div>

				<p className='text-sm leading-6 text-gray-700'>
					{hotel.short_description ||
						hotel.gptDetails?.short_description ||
						'Описание отсутствует.'}
				</p>
			</div>

			{hotel.detail?.ranking?.display_string && (
				<div className='flex gap-2 px-3 overflow-x-auto scrollbar-hide'>
					<span className='shrink-0 rounded-full bg-gray-100 px-4 py-3 text-xs text-gray-600'>
						{hotel.detail.ranking.display_string}
					</span>
				</div>
			)}

			<div className='px-3 mt-4'>
				<hr className='border-t border-dashed border-primary' />
			</div>

			<footer className='flex items-end justify-between p-3 text-sm text-gray-600'>
				<div>
					<div>
						За {item.adult} {item.adult === 1 ? 'туриста' : 'туристов'}
					</div>
					<div>{item.nights} ночей</div>
				</div>
				<div className='text-right'>
					<strong className='text-lg font-semibold text-primary'>
						от {Number(item.converted_price_number).toLocaleString('ru-RU')} сум
					</strong>
				</div>
			</footer>
		</article>
	);
}
