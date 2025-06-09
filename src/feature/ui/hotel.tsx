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

const transportIcons = [
	Plane,
	Building,
	Bus,
	UtensilsCrossed,
	Waves,
	Headphones,
];

const tags = [
	'№ 1 из 70 отелей в Gann Dau',
	'Очаровательный',
	'Очаровательный',
];

export function Hotel() {
	return (
		<article className='bg-card rounded-b-md overflow-hidden max-w-[700px] mx-auto'>
			<header className='relative'>
				<img
					src='https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/04/four-seasons-maui-at-wailea-hawaii-usa.jpg?fit=970%2C545&ssl=1'
					alt='Titanic Beach SPA & Aqua Park Resort'
					className='h-48 w-full object-cover rounded-md'
				/>

				<div className='absolute left-3 top-3 flex items-center gap-1 rounded-sm bg-white px-3 py-2'>
					<Star className='size-4 fill-yellow-400 text-yellow-400' />
					<span className='text-xs font-medium'>5</span>
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
				<h2 className='text-lg font-medium text-gray-900'>
					Titanic Beach SPA & Aqua Park Resort 5*
				</h2>

				<address className='flex items-center gap-1 not-italic text-sm text-gray-700'>
					<MapPin className='size-4 text-primary' />
					ОАЭ, Дубай Марина
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
					Элитный отель с изысканными номерами, элегантным рестораном, открытым
					бассейном и баром.
				</p>
			</div>

			<div className='flex gap-2 px-3 overflow-x-auto scrollbar-hide'>
				{tags.map((tag, idx) => (
					<span
						key={idx}
						className='shrink-0 rounded-full bg-gray-100 px-4 py-3 text-xs text-gray-600'
					>
						{tag}
					</span>
				))}
			</div>
			<div className='px-3 mt-4'>
				<hr className='border-t border-dashed border-primary' />
			</div>

			<footer className='flex items-end justify-between p-3 text-sm text-gray-600'>
				<div>
					<div>За 2х туристов</div>
					<div>7 ночей</div>
				</div>
				<div className='text-right'>
					<strong className='text-lg font-semibold text-primary'>
						от 12 000 000 сум
					</strong>
				</div>
			</footer>
		</article>
	);
}
