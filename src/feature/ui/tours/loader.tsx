import { Skeleton } from '@/shared/ui/skeleton';

export function Loader() {
	return (
		<div className='bg-card rounded-md overflow-hidden'>
			<div className='relative'>
				<Skeleton className='h-48 w-full object-cover rounded-md' />

				<div className='absolute left-3 top-3 flex items-center gap-1 rounded-sm bg-white px-3 py-2'>
					<Skeleton className='size-4 rounded-sm' />
					<Skeleton className='h-3 w-4' />
				</div>

				<div className='absolute right-3 top-3'>
					<Skeleton className='size-8 rounded-sm bg-white' />
				</div>
			</div>

			<div className='p-3 space-y-3'>
				<Skeleton className='h-5 w-3/4' />
				<div className='flex items-center gap-1'>
					<Skeleton className='size-4' />
					<Skeleton className='h-4 w-24' />
				</div>

				<div className='flex items-center gap-2'>
					{Array.from({ length: 6 }).map((_, idx) => (
						<span key={idx} className='flex items-center gap-2'>
							<Skeleton className='size-6' />
							{idx < 5 && <Skeleton className='h-4 w-2' />}
						</span>
					))}
				</div>
				<Skeleton className='h-4 w-full' />
				<Skeleton className='h-4 w-2/3' />
			</div>

			<div className='flex gap-2 px-3 overflow-x-auto scrollbar-hide'>
				{Array.from({ length: 3 }).map((_, idx) => (
					<Skeleton
						key={idx}
						className='shrink-0 h-8 w-40 rounded-full bg-gray-100'
					/>
				))}
			</div>

			<div className='px-3 mt-4'>
				<hr className='border-t border-dashed border-primary' />
			</div>

			<div className='flex items-end justify-between p-3'>
				<div className='space-y-1'>
					<Skeleton className='h-4 w-24' />
					<Skeleton className='h-4 w-16' />
				</div>
				<div className='text-right'>
					<Skeleton className='h-6 w-28' />
				</div>
			</div>
		</div>
	);
}
