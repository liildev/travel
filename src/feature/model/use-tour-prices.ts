import { useQuery } from '@tanstack/react-query';
import { fetchTourPrices } from '../api';

export const useTourPrices = () => {
	return useQuery({
		queryKey: ['tour-prices'],
		queryFn: fetchTourPrices,
		select: (res) => res.data
	});
};
