import { Routes, Route, Navigate } from "react-router-dom";
import {
	ChakraProvider,
	Flex,
	theme,
} from "@chakra-ui/react";

import Header from './components/global/Header';
import Search from './components/views/Search';
import Collections from './components/views/Collections'

export const App = () => (
	<ChakraProvider theme={theme}>
		<Header />
		<Flex py={{ base: 2 }} px={{ base: 4 }}>
			<Routes>
				<Route path="/" element={<Navigate replace to="/search" />} />
				<Route path="/search" element={<Search />} />
				<Route path="/collections" element={<Collections />} />
			</Routes>
		</Flex>
	</ChakraProvider>
);
