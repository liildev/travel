export interface Root {
	status: boolean;
	data: Tour[];
	tour_data: TourData;
	filters: Filters;
}

export interface Tour {
	id: string;
	hotel_key: number;
	adult: number;
	child: number;
	nights: number;
	price: string;
	price_old: string;
	state_id: number;
	town_from_id: number;
	town_name: string;
	check_in: string;
	check_out: string;
	tour_key: number;
	converted_price_number: number;
	converted_price_old: string;
	room: string;
	meal: string;
	hotel: Hotel;
}

export interface Hotel {
	hotel_key: number;
	name: string;
	main_photo: string;
	town_key: number;
	state_key: number;
	star_key: number;
	star: string;
	star_alt: string;
	hotel_url: string;
	order_number: number;
	widget: string | null;
	top_hotel_status: boolean;
	top_hotel_order: number;
	tour_operator_id: number;
	short_description: string;
	detail: Detail;
	photos: Photo[];
	nearbyItems: NearbyItem[];
	gptDetails: GptDetails;
	tags: string | null[];
}

export interface Detail {
	id: number;
	hotel_key: number;
	name: string;
	location: Location;
	ratings: Ratings;
	ranking: Ranking;
	style: string | null;
	awards: string | null[];
}

export interface Location {
	latitude: string;
	longitude: string;
	street1: string;
	street2: string;
	city: string;
	state: string;
	country: string;
	postalcode: string;
	address_string: string;
	geo_location_id: string;
	geo_location_name: string;
}

export interface Ratings {
	overall: string;
	rating_image: string;
	num_reviews: number;
	details: Details;
}

export interface Details {
	rating_1: number;
	rating_2: number;
	rating_3: number;
	rating_4: number;
	rating_5: number;
	count: number;
}

export interface Ranking {
	position: string;
	out_of: string;
	display_string: string;
}

export interface Photo {
	id: number;
	hotel_key: number;
	full_path: string;
}

export interface NearbyItem {
	item_index: number;
	title: string;
	description: string;
	distance: string;
}

export interface GptDetails {
	short_description: string;
}

export interface TourData {
	id: number;
	type: string;
	image: string;
	partner: string;
	name_alt: string;
	status: boolean;
	name_uz: string;
	name_ru: string;
	name_en: string;
	name: string;
	widget: string | null;
	visa_text: string | null;
	description: string;
	image_original: string;
	image_medium: string | null;
	image_thumbnail: string | null;
}

export interface Filters {
	price_range: PriceRange;
	star_keys: string[];
}

export interface PriceRange {
	min: number;
	max: number;
}
