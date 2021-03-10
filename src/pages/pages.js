import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './pages.css';

const pagesComp = ({ increment, count, decrement, reset }) => {
	const IsDisabled = () => {
		if (count <= 1) {
			return <Pagination.Prev disabled onClick={() => reset()} />;
		} else {
			return [
				<Pagination.Prev onClick={() => decrement()} />,
				<Pagination.Item key={'prev'}>{count - 1}</Pagination.Item>,
			];
		}
	};

	return (
		<Pagination className="paginator justify-content-center">
			<Pagination.First />
			{IsDisabled()}

			<Pagination.Item active key={'current'}>
				{count}
			</Pagination.Item>
			<Pagination.Item key={'next'}>{count + 1}</Pagination.Item>
			<Pagination.Next onClick={() => increment(count + 1)} />
			<Pagination.Last />
		</Pagination>
	);
};

export default pagesComp;
