import { Brand } from "./ui/brand"
import { FilterControls } from "./ui/filter"
import { Header } from "./ui/header"
import { Hotel } from "./ui/hotel";

export const Travel = () => {
  return (
		<>
			<Header />

			<main className='overflow-y-auto flex-grow'>
				<Brand />
				<FilterControls />

				<section className='space-y-4 container'>
					<Hotel />
					<Hotel />
				</section>
			</main>
		</>
	);
}
