import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import SetSelect from './SetSelect';
import useSearchFormController, { ISearchFormProps } from './SearchForm.controller';

const SearchForm = (props: ISearchFormProps) => {
    const {
        onSubmit,
        isLoading,
        errors,
        register,
        restoreFieldData,
        reset,
    } = useSearchFormController(props);

    return (
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

						<Stack direction='row'>
							<FormControl isInvalid={errors.set}>
								<FormLabel htmlFor='set'>Set</FormLabel>
								<SetSelect
									id='set'
									register={register}
									onLoadSets={restoreFieldData}
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

						<Stack direction='row' py={2}>
							<Button colorScheme='blue' isLoading={isLoading} type='submit'>Search</Button>
							<Button colorScheme='red' onClick={() => { reset(); }}>Reset Fields</Button>
						</Stack>

					</Stack>
				</form>
        </Box>
    )
};

export default SearchForm;