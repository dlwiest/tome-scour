import {
	Flex,
	Box,
	Stack,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Divider,
} from "@chakra-ui/react";

import useSearchController from "./controller";

const Search = () => {
	const { onSubmit, errors, register, isSubmitting, query } = useSearchController();

	console.log(query);

	return (
		<Flex direction={'column'} flexGrow={1}>
			<Heading>Search</Heading>
			<Box py={{ base: 4 }} px={{ base: 4 }} w={['100%', '100%', 600]}>
				<form onSubmit={onSubmit}>
					<Stack spacing={4}>
						<Box>
							<FormControl isInvalid={errors.name}>
								<FormLabel htmlFor='name'>Card Name</FormLabel>
								<Input
									id='name'
									placeholder='Name'
									{...register('name')}
								/>
							</FormControl>
						</Box>

						<Stack direction={'row'}>
							<FormControl isInvalid={errors.set}>
								<FormLabel htmlFor='set'>Set</FormLabel>
								<Input
									id='set'
									placeholder='Set'
									{...register('set')}
								/>
							</FormControl>

							<FormControl isInvalid={errors.type}>
								<FormLabel htmlFor='type'>Type</FormLabel>
								<Input
									id='type'
									placeholder='Type'
									{...register('type')}
								/>
							</FormControl>
						</Stack>

						<FormControl>
							<Button mt={4} colorScheme={'blue'} isLoading={isSubmitting} type='submit'>Search</Button>
						</FormControl>
					</Stack>
				</form>
			</Box>

			<Divider />
			{query.isSuccess &&
				<Box>
					{query.data.data.data.length}
				</Box>
			}
		</Flex>
	);
};

export default Search;