import Navbar from '../components/navbar';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import nextRouter from 'next/router';

describe('Navbar tests', () => {
    beforeAll(() => {
        nextRouter.useRouter = jest.fn();
        nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));
    });

    test('Ensure Name is visible', () => {
        render(<Navbar/>);
        expect(screen.getByTestId('name')).toBeInTheDocument();
        expect(screen.getByText('Michael')).toBeInTheDocument();
    });
});