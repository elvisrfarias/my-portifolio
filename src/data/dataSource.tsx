import { IDataSource } from '@/components/types';

export const getDataSource = async () => {
    try {
        const response = await fetch(`https://api.github.com/users/elvisrfarias/repos`);

        if (response.ok) {
            const data: IDataSource[] = await response.json();

            return data;
        } else {
            console.error(`Error fetching data: ${response.status}`);

            return [];
        }

    } catch (error) {
        console.error('An error occurred while fetching data:', error);
        return [];
    }
};

