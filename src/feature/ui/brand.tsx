export function Brand() {
	return (
		<div className='container'>
			<div className='p-3 bg-card rounded-md space-y-2'>
				<div className='flex items-center gap-3'>
					<img src='/logo.png' alt='Logo' className='max-w-25 max-h-20' />

					<div className='h-7 w-px bg-primary' />
					<span className='text-sm font-medium'>
						Тур предоставляется надежным туроператором
					</span>
				</div>

				<hr className='text-gray-200' />

				<p className='text-center font-semibold'>
					Мы подобрали для вас только лучшие отели
				</p>
			</div>
		</div>
	);
}
