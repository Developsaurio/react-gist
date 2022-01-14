/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import SwitchButton from './SwitchButton';

describe('SwitchButton Component', () => {
    test('renders an input and a button', () => {
        const { getByRole } = render(<SwitchButton />)
        // const props = container.get('active')

        getByRole('div')
    })
});