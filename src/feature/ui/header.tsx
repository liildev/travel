import { ArrowLeft, Edit3 } from 'lucide-react';
import { Button } from '@/shared/ui/button';

export function Header() {
	return (
		<header className='bg-card container z-50 shadow-sm rounded-b-2xl h-20 flex items-center gap-2 justify-between'>
			<Button variant='secondary' className='h-full'>
				<ArrowLeft className='size-5' />
			</Button>

			<div className='text-center bg-background size-full rounded-md'>
				<h1 className='text-base font-medium'>Москва - Ташкент</h1>
				<p className='text-sm text-gray-600'>28-31 августа, 2 взрослых</p>
			</div>

			<Button variant='secondary' className='h-full'>
				<Edit3 className='size-5' />
			</Button>
		</header>
	);
}
