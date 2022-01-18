import {
	Flex,
	Box,
	Stack,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	FormErrorMessage,
} from "@chakra-ui/react";

import useSearchController from "./controller";

const Search = () => {
	const { onSubmit, errors, register, isSubmitting, query } = useSearchController();

	console.log(query);

	return (
		<Flex direction={'column'}>
			<Heading>Search</Heading>
			<Box py={{ base: 4 }} px={{ base: 4 }}>
				<form onSubmit={onSubmit}>
					<Stack spacing={0}>
						<FormControl isInvalid={errors.name}>
							<FormLabel htmlFor='name'>Card Name</FormLabel>
							<Input
								id='name'
								placeholder='Name'
								isInvalid={errors.name}
								{...register('name', {
									required: 'A card name is required',
								})}
							/>
							<FormErrorMessage>
								{errors.name && errors.name.message}
							</FormErrorMessage>
						</FormControl>

						<FormControl>
							<Button mt={4} colorScheme={'blue'} isLoading={isSubmitting} type='submit'>Search</Button>
						</FormControl>
					</Stack>
				</form>
			</Box>

				{query.isSuccess &&
					<Box>
						<span>{query.data.data.data.length} results</span>
					</Box>
				}
		</Flex>
	);
};

export default Search;