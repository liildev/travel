import { api } from '@/shared/api';
import type { Root } from '../model/types';

export const fetchTourPrices = async (): Promise<Root> => {
	const response = await api.get<Root>(`/tour-prices-content2`, {
		params: {
			town_from_inc: 1853,
			tour_operator_id: 4,
			state_id: 9,
			checkin: '20250712',
			nights: 7,
			towns: [427],
			adult: 1,
			childs: 0,
			tour_somo_id: 427,
			page: 1,
			lang: 'uz',
		},
	});

	return response.data;
};
