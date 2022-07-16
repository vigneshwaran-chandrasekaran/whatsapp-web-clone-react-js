import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import * as Pages from 'routes';

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	z-index: 100;
`;

export default function Router() {
	return (
		<BrowserRouter>
			<Container>
				<Routes>
					<Route path="/">
						<Route index element={<Pages.Home />} />
					</Route>
					<Route path="*" element={<p>No Match</p>} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
}
