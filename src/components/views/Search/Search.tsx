import {
	Flex,
	Heading,
	Divider,
} from "@chakra-ui/react";

import useSearchController from './Search.controller';
import SearchForm from './SearchForm/SearchForm';

const Search = () => {
	const { onSearch, isLoading } = useSearchController();

	return (
		<Flex direction={'column'} flexGrow={1}>
			<Heading size='lg'>Search</Heading>
			
			<SearchForm onSearch={onSearch} isLoading={isLoading} />
			<Divider />
		</Flex>
	);
};

export default Search;